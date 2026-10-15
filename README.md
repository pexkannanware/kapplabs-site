# Marketing site (separated)

ARAM ERP and Kapplabs marketing pages, split out of the Temple ERP app so they can
be hosted on their own domain. No backend, database or login lives here.

## Routes

| Path | Page |
|---|---|
| `/`, `/kapplabs` | Kapplabs home ("Aram ERP" links go to `/aram`) |
| `/aram` | ARAM ERP home (links to Trusts, Temples and Mathas) |
| `/trusts` | ARAM ERP for Trusts |
| `/temple` | ARAM ERP for Temples |
| `/mms` | ARAM ERP for Mathas |
| `/kapplabs/office-of-the-cfo-ai-agents` | CFO AI Agents product page |
| `/platform-thesis`, `/why-now`, `/model`, `/edge`, `/launch` | Story pages |
| `/contact`, `/security`, `/privacy`, `/terms` | Company / legal pages |

`kaipages/` holds earlier KAi page designs that no route renders; kept for reference.

## Configuration

One setting: `NEXT_PUBLIC_APP_URL` -- the ERP app's public URL (default
`https://mms.kapplabs.com`). "Customer Login" links point to `<NEXT_PUBLIC_APP_URL>/login`.
It is baked in at build time, so rebuild after changing it.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

`npm run build` writes a static export to `out/`. In production it runs as the
`kapplabs-web` container (`nginx:alpine` serving `out/`) on the shared droplet, behind
kannanware's front-door nginx — see [DEPLOY.md](DEPLOY.md).

To try the production container locally:

```bash
docker build -t kapplabs-web .
docker run --rm -p 8080:80 kapplabs-web   # http://localhost:8080
```
