# Avash Dhungel — Engineering Portfolio & Notes Hub

Personal engineering portfolio, notes library and resource platform for **Avash Dhungel**
(Pulchowk Campus, Institute of Engineering, Nepal). Live at **avashdhungel.com.np**.

- **Stack:** React 19 + Vite 8 + plain JavaScript (`.jsx`) + Tailwind CSS v4 + react-router.
- **Content:** everything editable lives in `content/` as Markdown + JSON. No backend, no database.
- **Hosting:** GitHub Pages (free). Optional: Cloudflare Pages / Netlify / Vercel free tiers.

## Getting started

```bash
npm install
npm run dev     # local dev server with hot reload
npm run build   # production build into dist/
npm run preview # preview the production build locally
```

## Project layout

```
content/          ← EDIT THIS. All notes, projects, posts, site settings.
  site.json       name, tagline, nav, socials, YouTube handle, email
  journey.json    academic timeline events
  resources.json  categorized resource links
  videos.json     YouTube uploads (title + videoId)
  notes/<subject>/index.json + *.md
  projects/*.md   frontmatter: title, status, year, tech, excerpt
  blog/*.md       frontmatter: title, date, tags, excerpt
public/
  CNAME           avashdhungel.com.np (GitHub Pages custom domain)
  docs/           drop PDFs here, link them from subject index.json
  robots.txt, sitemap.xml, og-cover.png, favicon.svg
src/
  lib/content.js  content loaders (frontmatter parser + sorted lists)
  components/     layout, shared, home, notes, projects, journey
  pages/          one component per route
```

## Adding content (no code required)

- **New note:** add `content/notes/<subject>/<slug>.md` with a small frontmatter block:

  ```md
  ---
  title: Unit 1 — Introduction
  order: 1
  tags: [geology, rocks]
  ---
  Your markdown body…
  ```

- **New subject:** create `content/notes/<subject>/index.json` (copy the shape of an existing
  one) so it appears on `/notes`.
- **New project / post:** add a `.md` file to `content/projects/` or `content/blog/`.
- **New video:** add `{ "title": ..., "videoId": ..., "date": ... }` to `content/videos.json`
  and replace the `REPLACE_WITH_VIDEO_ID` placeholder with your real YouTube video IDs.
- **PDFs:** place the file in `public/docs/<subject>/` and reference it from the subject's
  `index.json` (`url` must start with `/docs/…`).

## Deploying to GitHub Pages (free)

1. Push this repo to GitHub (branch `main`).
2. In the repo **Settings → Pages**, under *Build and deployment* choose **“GitHub Actions”**.
3. Add the custom domain `avashdhungel.com.np` in **Settings → Pages → Custom domain**
   (this writes a `CNAME` into the repo — one already exists here).
4. Every push to `main` triggers `.github/workflows/deploy.yml` automatically.

### Pointing the .np domain at GitHub Pages

The `.np` registry is managed by Mercantile Communications (mercantile.com.np). In your DNS
manager, create:

| Type | Name       | Value                        |
| ---- | ---------- | ---------------------------- |
| A    | @          | 185.199.108.153              |
| A    | @          | 185.199.109.153              |
| A    | @          | 185.199.110.153              |
| A    | @          | 185.199.111.153              |
| CNAME | www      | avashdhungel.github.io       |

(If prompted, these are the four GitHub Pages IPs / Pages CNAME target.)

Then enable **HTTPS** in **Settings → Pages → Enforce HTTPS**. DNS may take a few hours
to propagate.

> Deploying under a sub-path (e.g. `username.github.io/repo`)? Set `base: '/repo/'`
> in `vite.config.js` and note that Pages overrides the apex `CNAME` behaviour.

## Editing this site later

- The design system (colors, fonts) lives in `src/styles/main.css` under `@theme`.
- Navigation, socials and footer copy come from `content/site.json`.
- Keep the site static for as long as it serves you. If you ever need accounts,
  user submissions or a phone-editable CMS, `content/` is already structured to migrate
  to Astro/Next or a headless CMS untouched.