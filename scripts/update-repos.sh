#!/usr/bin/env sh
# Refresh repos.json in the site's web root with the latest GitHub repositories.
# Meant to run from cron on the server; needs only curl and jq.
#
#   update-repos.sh <web-root> [github-username]
#
# Optional: export GITHUB_AUTH_TOKEN to raise the GitHub API rate limit.
set -eu

WEB_ROOT="${1:?usage: update-repos.sh <web-root> [github-username]}"
GITHUB_USER="${2:-farhantaufiks}"
TARGET="$WEB_ROOT/repos.json"
TMP="$(mktemp "$WEB_ROOT/.repos.json.XXXXXX")"
trap 'rm -f "$TMP"' EXIT

AUTH_HEADER=""
if [ -n "${GITHUB_AUTH_TOKEN:-}" ]; then
  AUTH_HEADER="Authorization: Bearer $GITHUB_AUTH_TOKEN"
fi

curl -fsS --max-time 15 \
  -H "Accept: application/vnd.github+json" \
  ${AUTH_HEADER:+-H "$AUTH_HEADER"} \
  "https://api.github.com/users/$GITHUB_USER/repos?sort=updated&direction=desc&per_page=6" |
  jq -e 'if type == "array" and length > 0
         then map({id, name, description, html_url})
         else error("unexpected GitHub API response") end' >"$TMP"

# Atomic swap so nginx never serves a half-written file.
chmod 644 "$TMP"
mv "$TMP" "$TARGET"
trap - EXIT
