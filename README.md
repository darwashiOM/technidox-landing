# TechniDox — Landing Site

A pixel-faithful rebuild of the TechniDox design from Figma, built with **Nuxt 3 + Vue 3 + TailwindCSS**.

🔗 **Live:** https://darwashiom.github.io/technidox-landing/

🎨 **Design:** [Figma — Website v0.0](https://www.figma.com/design/OHeO2r3Qp4kDJP36kjpAgC/Website-v0.0?node-id=57-1761)

![Figma vs build](pixelay/comparison-fullpage.png)

## Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3, SSR) — Nuxt `3.21`, Vue `3.5`
- [TailwindCSS](https://tailwindcss.com/) (`3.4`) via `@nuxtjs/tailwindcss` (`6`)
- Google Fonts: DM Sans, Inter, Sora, Montserrat (the four families used in the design)
- No UI/component library — every section is hand-built

## Getting started

```bash
npm install      # install deps
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run preview  # preview the build locally
```

Node 18+ recommended (Nuxt 3 baseline).

## Deployment

The site is hosted as a **static build on GitHub Pages** at https://darwashiom.github.io/technidox-landing/, served from the `gh-pages` branch. There's no CI yet, so redeploys are manual:

```bash
# 1. Generate a static build under the subpath GitHub Pages serves from
NUXT_APP_BASE_URL=/technidox-landing/ npx nuxt generate   # → .output/public

# 2. Add a .nojekyll file so the _nuxt/ dir isn't ignored by Jekyll
touch .output/public/.nojekyll

# 3. Force-push the contents of .output/public to the gh-pages branch
```

GitHub Pages then serves that branch at path `/`. The `NUXT_APP_BASE_URL` env var makes Nuxt resolve the bundle, route links, and static `<img>` assets under the `/technidox-landing/` subpath; dynamic `:src` bindings and inline `url()` backgrounds go through the `$asset()` helper (`plugins/asset.js`) so they resolve under the subpath too.

## Pages

The home page was the assignment scope; I also built the other three frames from the Figma file as real routes:

- `/` — **Home**: hero, brand strip, AI-Native engine, community flow, enterprise ROI dashboard, comparison table, pricing CTA, team use-cases, footer
- `/about` — **About**: header, TechniDox overview + the process-flow card, footer
- `/docs` — **Docs**: documentation guides, AI-powered features, and an interactive Quick Start carousel
- `/pricing` — **Pricing**: tiered plans + comparison table

## Interactivity

- **Mobile menu** — hamburger toggles an animated nav panel.
- **Lead-capture modal** — "Book a Demo", "Get Started", and "Join Enterprise Waitlist" open a shared modal; submitting shows a confirmation (no backend — it's a demo).
- **Quick Start carousel** — prev/next + pagination dots on the Docs page.
- **Scroll reveal** — sections fade/slide in as they enter the viewport (IntersectionObserver, respects `prefers-reduced-motion`).
- **Swinging price tag** — the pricing CTA tag gently swings like it's hanging from its string.

## Structure

```
components/        # one component per section + shared SectionHeading, ProcessFlowCard, DemoModal
pages/             # index, about, docs, pricing (file-based routing)
composables/       # useDemoModal (shared modal state)
plugins/           # reveal.js (v-reveal scroll directive), asset.js ($asset baseURL helper)
assets/css/        # tokens, container + grid helpers, reveal + price-swing animations
tailwind.config.js # exact colors / fonts pulled from Figma
public/            # logo, favicons, hero illustrations, price tag, dashboard texture, icons
pixelay/           # overlays + fidelity notes
```

## Design fidelity

Built to the Figma values: a **1680px content column** inside **120px gutters** (1920px frame), **120px** section padding, and colours/typography pulled straight from the file (`#42389E` indigo, `#F9A71E` accent, DM Sans / Inter / Sora / Montserrat). Icons and the dashboard background texture are exported assets; the blueprint grid and gradients are CSS.

Pixelay overlays and a full-page side-by-side live in [`/pixelay`](pixelay/), with [`notes.md`](pixelay/notes.md) listing the visible differences.

## Responsiveness

Mobile-first up to the 1920px design. Columns collapse to a single stack on phones, the nav becomes a toggle menu, the comparison table scrolls horizontally inside its card, and the hero's decorative documents hide below the desktop breakpoint. Gutters scale down with the breakpoint (120px on the `2xl` desktop target, then 80 → 64 → 32 → 20px on smaller screens), so content keeps comfortable margins at every width and lands on the Figma 1680px column on a full 1920px frame. Verified at a 390px phone viewport with no horizontal overflow.

## Tradeoffs & what I'd do with more time

- **Build a CMS.** Right now all copy, pricing, and card content is hardcoded in the components. With more time I would move it behind a CMS (or a content layer) so marketing could edit the site without touching code — this also fits the "Twig + CMS" direction mentioned in the brief.
- **Automate the deploy.** The GitHub Pages redeploy is currently a manual generate → `.nojekyll` → force-push flow; I'd wrap it in an `npm run deploy` script or a GitHub Action.
- **No mobile Figma frame** — the file only ships a desktop frame, so the mobile layout is my own responsive interpretation rather than a matched artboard.
- **Icons as individual assets** — section glyphs are exported SVGs; I'd consolidate them into a single sprite or icon component.
- **Backend wiring** — the demo/waitlist forms are front-end only; they'd connect to a CRM/email service in production.
