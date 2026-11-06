# farhantaufiks.com

Two portfolio sites for the same person, in one repo, built and deployed separately.

| Folder | Domain | Stack | Made by |
|---|---|---|---|
| [`web/`](web) | [farhantaufiks.com](https://farhantaufiks.com) | Astro 7, plain CSS, zero framework JS | Claude Code, from one prompt |
| [`manmade/`](manmade) | [manmade.farhantaufiks.com](https://manmade.farhantaufiks.com) | Next.js 16 static export, Tailwind 4 | Me, by hand (2021) |

`web/` introduces me as **Earth Science & Computer Science**: a geologist turned software
engineer. Claude Code chose the stack, the concept (topographic hero, career as a
stratigraphic column), the copy and the deploy setup. `manmade/` is the site I wrote myself
and still maintain, kept online for comparison.

## Build

Each folder is an independent npm project.

```bash
# web/ (needs Node >= 22.23.4)
cd web && npm ci && npm run build        # -> web/dist/

# manmade/ (needs Node >= 20.9)
cd manmade && npm ci && npm run build    # -> manmade/out/
```

## Deploy (manual, to the VPS)

nginx serves both as static files; see [`deploy/nginx/farhantaufiks.com.conf`](deploy/nginx/farhantaufiks.com.conf).

```bash
KEY=~/.ssh/<your-key>
HOST=<user>@<vps-host>

rsync -az --delete -e "ssh -i $KEY" web/dist/ $HOST:/var/www/farhantaufiks-web/
rsync -az --delete --exclude repos.json -e "ssh -i $KEY" manmade/out/ $HOST:/var/www/static-portofolio/
```

`manmade/` needs `NEXT_PUBLIC_SITE_URL=https://manmade.farhantaufiks.com` in `manmade/.env.local`
when building. Its `repos.json` is refreshed on the server by a daily cron
(`manmade/scripts/update-repos.sh`).

On Vercel, set the project's **Root Directory** to `manmade` (or add a second project for `web`).
