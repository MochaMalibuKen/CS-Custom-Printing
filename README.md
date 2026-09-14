# C&S Custom Printing

Production-ready single-page marketing site for C&S Custom Printing in Batesburg-Leesville, South Carolina. Reconstructed from the client's approved public website.

## Stack

- Vite
- React
- JavaScript
- Plain CSS

## Local development

Requires a current Node.js LTS release.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production bundle to `dist/`. Deploy that directory to any static host and configure the custom domain as `www.cscustomprinting.com` at the hosting provider.

## Client assets

Original client imagery is intentionally not fabricated. Add the supplied files at these exact paths; the site will pick them up automatically:

```text
public/logo.png
public/portfolio/custom-ministry-apparel.jpg
public/portfolio/fraternity-apparel.jpg
public/portfolio/custom-clear-tote.png
public/portfolio/church-patch.png
public/portfolio/tumbler-20.png
public/portfolio/reunion-cruise.png
public/portfolio/homecoming.png
public/portfolio/gamecock-grandma.png
public/portfolio/joy-tumbler.png
```

Until those files arrive, branded placeholders keep the hero and portfolio layouts stable. No component changes are needed when the files are added.

## Useful commands

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build
- `npm run lint` — run the configured source-code linter

No environment variables, backend, database, authentication, or payment configuration is required.
