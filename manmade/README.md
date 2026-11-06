# Farhan Taufik Syaban — Portfolio

Personal portfolio website built with Next.js (Pages Router) and Tailwind CSS.

## Features

- Responsive layout for mobile and desktop
- Light / dark mode toggle
- Latest public GitHub repositories, refreshed daily
- Contact form via [FormSubmit](https://formsubmit.co)

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React Rough Notation](https://roughnotation.com) for the hero highlights

## How it works

The site is a static export (`next build` → `out/`) served by nginx. There is no
Node.js process in production.

- **Deploy:** every push to `main` runs `.github/workflows/deploy.yml`, which builds
  on GitHub Actions and rsyncs `out/` to the VPS. The server never builds.
- **Latest Code:** repos are baked in at build time. On the server, a daily cron job
  runs `scripts/update-repos.sh`, which rewrites `repos.json` in the web root, and the
  page loads it in the browser. It needs only `curl` and `jq`.
- **nginx:** `deploy/nginx/static-portfolio.conf` has the server block, including the
  security headers.

### Server setup (once)

```bash
sudo apt install -y jq rsync
sudo mkdir -p /var/www/static-portfolio && sudo chown "$USER" /var/www/static-portfolio

# nginx: copy deploy/nginx/static-portfolio.conf to /etc/nginx/sites-available/,
# set server_name and root, enable it, then: sudo nginx -t && sudo systemctl reload nginx

# cron: refresh repos.json daily at 03:00 (and once now)
./scripts/update-repos.sh /var/www/static-portfolio
( crontab -l 2>/dev/null; echo '0 3 * * * /path/to/update-repos.sh /var/www/static-portfolio >/dev/null 2>&1' ) | crontab -
```

### GitHub repository settings

| Name | Kind | Value |
| --- | --- | --- |
| `VPS_HOST` | secret | Server hostname or IP |
| `VPS_USER` | secret | SSH user that owns the web root |
| `VPS_WEB_ROOT` | secret | e.g. `/var/www/static-portfolio` |
| `VPS_SSH_KEY` | secret | Private key of a deploy-only key pair |
| `VPS_KNOWN_HOSTS` | secret | Output of `ssh-keyscan <host>` |
| `VPS_PORT` | secret | Optional, defaults to 22 |
| `SITE_URL` | variable | e.g. `https://example.com` |

## Getting Started

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev     # local development
npm run build   # static export to out/
```

| Variable | Purpose |
| --- | --- |
| `GITHUB_AUTH_TOKEN` | Optional GitHub token to avoid the unauthenticated API rate limit. |
| `NEXT_PUBLIC_SITE_URL` | Deployed origin, used for `canonical` and `og:url` meta tags. |

Personal content (projects, experience, links) lives in `constants/data.js`.

## Credits

Layout originally based on the open-source portfolio template by
[Manu Arora](https://manuarora.in/).
