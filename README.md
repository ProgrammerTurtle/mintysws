# Mint — YSWS landing page (Astro)

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Before you deploy

- Swap the placeholder Airtable `src` in `src/pages/index.astro` (search for `appPLACEHOLDER`) for your real form's embed link, e.g. `https://airtable.com/embed/appXXXXXXXXXXXXXX/shrXXXXXXXXXXXXXX`.
- `public/altoids-tin.png` is your tin photo — swap it for a different file of the same name if you want to change the photo, or update the `src="/altoids-tin.png"` reference in `index.astro`.

## Deploy

`npm run build` outputs a static site to `dist/`, which you can deploy anywhere (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
