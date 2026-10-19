#!/usr/bin/env bash
# Invoked on the Droplet by .github/workflows/deploy-digitalocean.yml.
set -Eeuo pipefail

release_dir=$(cd "${1:?release directory required}" && pwd)
app_dir=${2:?application directory required}
proxy_dir=${3:?proxy compose directory required}
revision=${4:?commit SHA required}
site_url=${5:-https://kapplabs.com/}
[[ "$revision" =~ ^[a-f0-9]{40}$ ]]
[[ "$app_dir" = /* && "$proxy_dir" = /* ]]
[[ "$app_dir" != / && "$app_dir" != "$proxy_dir" ]]
[[ "$release_dir" != / && "$release_dir" != "$app_dir" && "$release_dir" != "$proxy_dir" ]]

mkdir -p "$app_dir"
app_dir=$(cd "$app_dir" && pwd -P)
proxy_dir=$(cd "$proxy_dir" && pwd -P)
[[ "$app_dir" != "$proxy_dir" && "$release_dir" != "$app_dir" && "$release_dir" != "$proxy_dir" ]]
exec 9>"$app_dir/.deploy.lock"
flock -w 600 9
trap 'rm -f "$release_dir/image.tar.gz"' EXIT

docker compose version
docker network inspect shared_web >/dev/null
docker compose --project-directory "$proxy_dir" exec -T web nginx -t

previous_image=$(docker inspect --format '{{.Image}}' kapplabs-web 2>/dev/null || true)
if [[ -n "$previous_image" ]]; then
  owner=$(docker inspect --format '{{index .Config.Labels "com.docker.compose.project.working_dir"}}' kapplabs-web)
  if [[ "$owner" != "$app_dir" ]]; then
    echo "Container belongs to $owner; set DO_APP_DIR to that directory." >&2
    exit 1
  fi
fi

docker load --input "$release_dir/image.tar.gz"
docker image inspect "kapplabs-web:$revision" >/dev/null
compose=(docker compose --project-directory "$app_dir" -f "$app_dir/docker-compose.yml")

reload_proxy() {
  docker compose --project-directory "$proxy_dir" exec -T web nginx -t
  docker compose --project-directory "$proxy_dir" exec -T web nginx -s reload
}

rollback() {
  trap - ERR
  # Keep recovering even if a diagnostic or recovery command fails.
  set +e
  echo "Deployment failed; restoring the previous image if available." >&2
  "${compose[@]}" logs --tail 50 web
  if [[ -f "$release_dir/previous-compose.yml" ]]; then
    cp "$release_dir/previous-compose.yml" "$app_dir/docker-compose.yml"
  fi
  if [[ -n "$previous_image" ]]; then
    docker tag "$previous_image" kapplabs-web:latest
    if "${compose[@]}" up -d --no-build --pull never --wait --wait-timeout 60 web; then
      reload_proxy
    else
      echo "Rollback failed; inspect kapplabs-web on the Droplet." >&2
    fi
  else
    "${compose[@]}" rm --stop --force web
  fi
  exit 1
}

if [[ -f "$app_dir/docker-compose.yml" ]]; then
  cp "$app_dir/docker-compose.yml" "$release_dir/previous-compose.yml"
fi
trap rollback ERR
cp "$release_dir/docker-compose.production.yml" "$app_dir/docker-compose.yml"
docker tag "kapplabs-web:$revision" kapplabs-web:latest
"${compose[@]}" up -d --no-build --pull never --wait --wait-timeout 60 web

# nginx resolves upstream names on reload; recreation may change the app's IP.
reload_proxy
curl --fail --silent --show-error --retry 5 --retry-delay 3 --retry-all-errors \
  --connect-timeout 10 --max-time 30 "$site_url" >/dev/null
printf '%s\n' "$revision" > "$app_dir/.deployed-revision"
trap - ERR
echo "Deployed $revision to $site_url"
rm -rf "$release_dir"
