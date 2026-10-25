# Farhan Taufik Syaban — Portfolio

Personal portfolio website built with Next.js (Pages Router) and Tailwind CSS.

## Features

- Responsive layout for mobile and desktop
- Light / dark mode toggle
- Latest public GitHub repositories fetched on the server
- Contact form via [FormSubmit](https://formsubmit.co)

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React Rough Notation](https://roughnotation.com) for the hero highlights

## Getting Started

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev
```

| Variable | Purpose |
| --- | --- |
| `GITHUB_AUTH_TOKEN` | Optional GitHub token to avoid the unauthenticated API rate limit. |
| `NEXT_PUBLIC_SITE_URL` | Deployed origin, used for `canonical` and `og:url` meta tags. |

Personal content (projects, experience, links) lives in `constants/data.js`.

## Credits

Layout originally based on the open-source portfolio template by
[Manu Arora](https://manuarora.in/).
