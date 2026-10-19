# Deploy kapplabs.com — same droplet as kannanware, separate container

This site runs in its own Docker container (`kapplabs-web`), fully independent from the
`s4hana-elevate-*`, `divine-will-web` and `keaas-global-web` containers (own image, own
restarts, no shared volumes). It's a static export, so the container is just `nginx:alpine`
serving pre-built files — no Node process running in production. It shares only two things
with the other sites on the droplet: the public IP, and the front-door nginx (inside
kannanware's `web` container) that owns ports 80/443 and routes by domain name.

What it serves:

| Path | Page |
|---|---|
| `/` | Kapplabs home |
| `/aram/` | ARAM ERP home (Products → Aram ERP) |
| `/trusts/`, `/temple/`, `/mms/` | ARAM ERP for Trusts, Temples, Mathas |
| `/kapplabs/…`, `/contact/`, `/privacy/`, … | Other Kapplabs pages |

## Automatic deployment on pushes to main

`.github/workflows/deploy-digitalocean.yml` builds the Docker image in GitHub Actions,
copies it over verified SSH, and runs `scripts/deploy-digitalocean.sh` on the Droplet.
It runs on pushes to `main`, or from **Actions → Deploy to DigitalOcean → Run workflow**
with `main` selected. The Droplet does not need GitHub credentials or a source checkout
for this deployment flow.

### One-time GitHub settings

In `pexkannanware/kapplabs-site`, open **Settings → Secrets and variables → Actions**.
Add these repository **secrets** (secrets from another repository are not inherited):

| Secret | Value |
|---|---|
| `DO_SSH_PRIVATE_KEY` | A dedicated deployment private key, with real newlines and both BEGIN/END lines. Do not include Markdown backticks or trailing backslashes. |
| `DO_SSH_KNOWN_HOSTS` | The verified `178.128.102.157 ssh-ed25519 …` host-key line supplied by the server administrator. |

Rotate the private key shared in chat before putting its replacement in GitHub. Add the
replacement public key to the deployment user's `~/.ssh/authorized_keys` on the Droplet,
verify access, then remove the old public key. Never commit a private key to this repo.

Optional repository **variables**:

| Variable | Default | Purpose |
|---|---|---|
| `DO_HOST` | `178.128.102.157` | Droplet hostname/IP; update known hosts if changed |
| `DO_USER` | `root` | SSH user with Docker and application-directory access |
| `DO_APP_DIR` | `/var/www/kapplabs` | Must match the existing `kapplabs-web` Compose working directory |
| `DO_PROXY_DIR` | `/var/www/s4hana-elevate/kannanwarerevamp` | Existing shared proxy's Compose directory |
| `DO_SITE_URL` | `https://kapplabs.com/` | Public URL checked after deployment |
| `NEXT_PUBLIC_APP_URL` | `https://mms.kapplabs.com` | ERP login destination, baked into the image |

Existing `DO_HOST` and `DO_USER` repository secrets are also supported and take precedence
over variables. Application and proxy paths must be absolute and contain only letters,
digits, underscores, hyphens and slashes.

### Droplet prerequisites

The Droplet needs Docker with Compose v2 supporting `up --wait`, Bash, `flock`, and curl.
The `shared_web` network, shared nginx proxy, DNS, and HTTPS route must already exist.
The setup sections below cover these if this site has not been hosted yet. This workflow
does not create DNS records, certificates or shared proxy configuration.

For an already running site, check the application directory before the first deployment:

```bash
docker inspect --format '{{index .Config.Labels "com.docker.compose.project.working_dir"}}' kapplabs-web
```

Set `DO_APP_DIR` to that output if it differs from the default. The deploy script refuses
to replace a container owned by a different Compose directory.

### What each deployment does

The runner detects the Droplet's CPU architecture, builds `kapplabs-web:<commit SHA>`, and
transfers the image and production Compose file into a private temporary release directory.
On the Droplet, deployments are serialized with an application lock. The script checks
the shared proxy configuration, saves the previous image and Compose file, loads the new
image, and starts only the `web` service in this application's Compose project.

`docker-compose.production.yml` includes an HTTP container health check. After the app is
healthy, the script tests and reloads the shared nginx proxy so it resolves the new container
IP, then checks the public HTTPS URL. Failure triggers a rollback to the previous image
and Compose file when available. A failed first deployment removes the new container.
Successful deployments record the SHA in `/var/www/kapplabs/.deployed-revision` and remove
the temporary release directory. Failure retains the release scripts/previous Compose file
for diagnosis but removes the transferred image archive. Old Docker images are retained
for recovery; no global image pruning runs on this shared Droplet.

Expect a brief interruption during container recreation and proxy reload. Review a failed
run's Actions logs and `docker logs kapplabs-web`; rollback errors are reported in the log.

Commit and push these files to `main` after setting the secrets. Later pushes deploy
automatically. Check **Actions → Deploy to DigitalOcean** for the result.

References: [GitHub checkout](https://github.com/actions/checkout),
[Docker Buildx setup](https://github.com/docker/setup-buildx-action),
[QEMU setup](https://github.com/docker/setup-qemu-action), and
[Compose startup options](https://docs.docker.com/reference/cli/docker/compose/up/).

## Initial Droplet setup (only if the site is not already hosted)

### 1) Copy the project to the droplet

The repo lives at https://github.com/pexkannanware/kapplabs-site (private) — clone it
directly on the droplet:

```bash
ssh your-user@droplet-ip
cd /var/www
git clone https://github.com/pexkannanware/kapplabs-site.git kapplabs
```

Because the repo is private, the droplet needs credentials to clone: either use the same
deploy key / token the other private repos on the droplet use, or run `gh auth login` there
once.

## 2) Shared Docker network

Reuses the same `shared_web` network divine-will already created. Skip this if it exists:

```bash
docker network create shared_web
```

kannanware's `web` service should already be attached to `shared_web` from the divine-will
setup. If not, see divine-will's `DEPLOY.md` §3.

## 3) Build and start the kapplabs container

```bash
cd /var/www/kapplabs
docker compose up -d --build
```

The "Customer Login" links point to `https://mms.kapplabs.com/login` by default. To change
that, set `NEXT_PUBLIC_APP_URL` before building (it's baked in at build time):

```bash
NEXT_PUBLIC_APP_URL=https://app.example.com docker compose up -d --build
```

It won't be reachable from the internet yet — no host port is published, no nginx route
exists for it yet. That's expected. To check the container itself from the droplet:

```bash
docker run --rm --network shared_web curlimages/curl -sI http://kapplabs-web/
```

## 4) DNS

In your DNS provider for `kapplabs.com`, add A records pointing at the same droplet IP
the other sites use:

- `A` record: `kapplabs.com` → droplet IP
- `A` record: `www.kapplabs.com` → droplet IP

Leave the existing `mms.kapplabs.com` record (the ERP app) alone.

Wait for propagation (`dig kapplabs.com`) before the next step.

## 5) Add an HTTP-only nginx route first (needed for the cert challenge)

Edit `/var/www/s4hana-elevate/kannanwarerevamp/nginx.conf` and append this new `server`
block (don't touch anything else in the file — in particular the `mms.kapplabs.com` block,
if there is one, stays as it is):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name kapplabs.com www.kapplabs.com;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
        try_files $uri =404;
    }

    location / {
        proxy_pass http://kapplabs-web:80;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Reload:

```bash
cd /var/www/s4hana-elevate/kannanwarerevamp
docker compose exec web nginx -t
docker compose exec web nginx -s reload
```

Check `http://kapplabs.com` loads the site over plain HTTP at this point.

## 6) Issue the SSL certificate

Reuses the same `certbot` sidecar and shared `letsencrypt`/`certbot-webroot` volumes
kannanware already has running — no new certbot setup needed.

```bash
cd /var/www/s4hana-elevate/kannanwarerevamp
docker compose exec certbot certbot certonly --webroot -w /var/www/certbot \
  -d kapplabs.com -d www.kapplabs.com
```

## 7) Switch the nginx block to HTTPS

Replace the `server` block you added in step 5 with these two blocks (redirect + real
HTTPS block):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name kapplabs.com www.kapplabs.com;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
        try_files $uri =404;
    }

    location / {
        return 301 https://kapplabs.com$request_uri;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name kapplabs.com www.kapplabs.com;

    ssl_certificate /etc/letsencrypt/live/kapplabs.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/kapplabs.com/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    location / {
        proxy_pass http://kapplabs-web:80;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Reload again:

```bash
docker compose exec web nginx -t
docker compose exec web nginx -s reload
```

Renewal is automatic — the existing `certbot` sidecar's 12h renew loop and `web`'s 12h nginx
reload (see kannanware's `DEPLOY_DIGITALOCEAN_DROPLET.md` §11) already cover any cert in the
shared `letsencrypt` volume, this one included. Nothing extra to configure.

## 8) Verify

```bash
curl -I https://kapplabs.com
curl -I https://kapplabs.com/aram/
curl -I https://kapplabs.com/trusts/
curl -I https://kannanware.com       # confirm kannanware still fine
curl -I https://thedivinewill.in     # confirm divine-will still fine
curl -I https://keaasglobal.com      # confirm keaasglobal still fine
```

## Manual updates (alternative to GitHub Actions)

When automatic deployment is enabled, push to `main` instead of running these commands.
The automated deployment installs a production Compose file with no build context; to
switch back to manual source builds, restore the source Compose file explicitly:

```bash
cd /var/www/kapplabs
git pull
git show HEAD:docker-compose.yml > docker-compose.yml
docker compose up -d --build
```

The other sites' containers are never touched by this flow.

## Notes on this app specifically

- `next.config.mjs` uses `output: "export"` + `trailingSlash: true`, so the build emits
  directories with `index.html` (e.g. `/aram/index.html`). `nginx.static.conf` in this repo
  handles that with `try_files $uri $uri/ $uri.html =404;` and serves `404.html` for missing
  pages — no changes needed there for new pages.
- `nginx.static.conf` sets `absolute_redirect off`, so the container's `/aram` → `/aram/`
  redirect stays relative and keeps visitors on `https`.
- Security headers (`X-Frame-Options`, `Referrer-Policy`, HSTS, …) are set in
  `nginx.static.conf`, because a static export can't set response headers itself.
- The image is about 120 MB of static files, mostly the scroll-animation frames under
  `public/temple/hero/` and `public/trusts/hero/`. Hashed files under `/_next/static/` are
  cached for a year.
