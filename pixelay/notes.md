# Pixelay — Fidelity Notes

Overlays comparing the live build to the Figma home page (`Website v0.0`, Desktop frame).

| File | What it shows |
| --- | --- |
| `pixelay-desktop.png` | 1:1 blended overlay (50%) of the Figma hero frame over the live desktop hero. |
| `pixelay-mobile.png` | Full-page mobile render (responsive layout). |
| `comparison-fullpage.png` | Full-page side-by-side: Figma design vs live build, all sections. |

## Visible differences

- **Fonts** — Rebuilt with the exact Figma families via Google Fonts (DM Sans, Inter, Sora, Montserrat). Webfont rendering (hinting/kerning) differs slightly from Figma's internal renderer, so individual lines can shift ~1–3px.
- **No mobile frame in Figma** — the file only contains a 1920px desktop frame, so the mobile layout is a responsive interpretation (single-column stacking, hamburger nav, hidden hero decorations). The mobile capture is the live phone layout, not a pixel-matched mobile artboard.
- **Assets** — the logo, floating hero documents, price tag, section icons, and the dashboard background texture were exported directly from Figma (PNG/SVG/JPG) for exact fidelity. The hero blueprint grid and section gradients are recreated in CSS.

Overall, sections align tile-for-tile with the design (see `comparison-fullpage.png`); the main remaining variance is the hero block sitting a few px off vertically.
