# TechniDox — Landing Page

A pixel-faithful rebuild of the TechniDox home page from Figma, built with **Nuxt 3 + Vue 3 + TailwindCSS**.

🔗 **Live:** https://venseed.vercel.app

🎨 **Design:** [Figma — Website v0.0](https://www.figma.com/design/OHeO2r3Qp4kDJP36kjpAgC/Website-v0.0?node-id=57-1761)

![Figma vs build](pixelay/comparison-fullpage.png)

## Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3, SSR)
- [TailwindCSS](https://tailwindcss.com/) via `@nuxtjs/tailwindcss`
- Google Fonts: DM Sans, Inter, Sora, Montserrat (the four families used in the design)
- No UI/component library — every section is hand-built

## Getting started

```bash
npm install      # install deps
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run preview  # preview the build locally
```

Requires Node 18+.

## Structure

```
components/
  SiteHeader.vue        # logo, nav, mobile menu toggle (interactive)
  HeroSection.vue       # headline, CTAs, floating doc decorations
  BrandStrip.vue
  AiNativeSection.vue   # 3 feature cards
  CommunitySection.vue  # feature list + process-flow card
  EnterpriseSection.vue # dark ROI dashboard
  ComparisonSection.vue # feature comparison table
  PricingCta.vue        # price-tag CTA
  TeamsSection.vue      # 2x2 use-case cards
  SiteFooter.vue        # CTA card + link columns
  SectionHeading.vue    # shared eyebrow/title/subtitle
pages/index.vue         # assembles the 9 sections
assets/css/main.css     # tokens, container + grid helpers
tailwind.config.js      # exact colors / fonts from Figma
public/                 # logo, hero illustrations, price tag, icons (exported from Figma)
pixelay/                # overlays + fidelity notes
```

## Design fidelity

The layout follows the Figma values directly: a **1680px content column** inside **120px gutters** (1920px frame), **120px** section padding, and the section colours/typography pulled straight from the file (`#42389E` indigo, `#F9A71E` accent, DM Sans / Inter, etc.).

Pixelay overlays and a full-page side-by-side live in [`/pixelay`](pixelay/), with [`notes.md`](pixelay/notes.md) listing the visible differences.

## Responsiveness

Built mobile-first up to the 1920px design. Columns collapse to a single stack on small screens, the nav becomes a toggle menu, and the hero's decorative documents hide below the desktop breakpoint.

## Interactivity

- **Mobile menu toggle** — hamburger opens/closes an animated nav panel (`SiteHeader.vue`).
- Hover states on buttons, nav links, and footer links.

## Tradeoffs & with more time

- **No mobile Figma frame** — the file only ships a desktop frame, so the mobile layout is my own responsive interpretation rather than a matched artboard.
- **Static content** — copy is hardcoded in components. With more time I'd move it into a small content layer / CMS for the Twig-style use case mentioned in the brief.
- **Icons as exported assets** — section glyphs are SVGs exported from Figma. A longer pass would consolidate them into a single sprite or an icon component.
- **Scroll animations** — the Figma components include enter-animation variants; I built the final (visible) state only and skipped the scroll-reveal motion to stay in scope.
- The enterprise dashboard background image was approximated with a CSS gradient rather than re-exporting the raster texture.
