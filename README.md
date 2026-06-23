# Douglas Rodrigues — Portfolio

Personal portfolio of **Douglas Rodrigues**, Backend Developer & Tech Lead.

A fast, light, single-page site: a soft "engineer's paper" light theme, an
electric-blue → cyan signal gradient, scroll-reveal animations, and a hero
backed by a live network-of-nodes canvas. Mobile-first and accessible.

## Tech stack

- **[Vite](https://vite.dev/)** — build tooling & dev server
- **React 18 + TypeScript** — strict, fully typed
- **[Tailwind CSS v4](https://tailwindcss.com/)** — CSS-first config via design tokens
- **[Motion](https://motion.dev/)** — scroll and entrance animations
- **[Fontsource](https://fontsource.org/)** — self-hosted Space Grotesk + IBM Plex Sans/Mono

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build locally
npm run typecheck  # type-check only
```

Requires Node 20+ (see `.nvmrc`).

## Editing content

All copy and links live in a single typed file: **`src/data/profile.ts`**.
Components only read from it — nothing is hardcoded in the markup.

- **Add a project**: push an object onto `projects` (shape: `Project`). The grid
  renders it automatically; until then a tasteful empty state is shown.
- **Add your CV**: drop a PDF in `public/` and set `resumeUrl` in the profile to
  reveal a "Download CV" button in the contact section.
- **Social links, stack, experience, education**: all in the same file.

## Design tokens

Colors and fonts are defined once as CSS custom properties in
`src/index.css` (the `@theme` block) and consumed through Tailwind utilities
(`bg-ground`, `text-ink`, `text-accent`, `font-display`, …). Change them there
to re-skin the whole site.

## Deploying to Cloudflare Pages

This is a static site — Cloudflare Pages serves it directly.

1. Push this repository to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Add your custom domain under **Custom domains** once the first deploy is live.

`public/_headers` sets long-lived caching for the hashed asset files.

## To do before launch

- Add a real `public/og.png` (1200×630) for link previews — referenced in `index.html`.
- Update the canonical/OG URLs in `index.html` to the final domain.
- Fill in `projects` in `src/data/profile.ts`.
