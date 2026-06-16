# Pixelay — Fidelity Notes

Overlays comparing the live build to the Figma home page (`Website v0.0`, Desktop frame).

| File | What it shows |
| --- | --- |
| `pixelay-desktop.png` | 1:1 blended overlay (50%) of the Figma hero frame over the live desktop hero. |
| `pixelay-mobile.png` | Live mobile render (390px) beside the Figma reference. |
| `comparison-fullpage.png` | Full-page side-by-side: Figma design vs live build, all 9 sections. |

## Visible differences

- **Fonts** — Rebuilt with the exact Figma families via Google Fonts (DM Sans, Inter, Sora, Montserrat). Webfont rendering (hinting/kerning) differs slightly from Figma's internal renderer, so individual lines can vary ~1–3px in width.
- **Hero vertical rhythm** — The hero block sits ~10–15px higher than the Figma frame at the headline (the gap closes toward the buttons). Every other section aligns within a few pixels — see `comparison-fullpage.png`.
- **No mobile frame in Figma** — The design file only contains a 1920px desktop frame, so the mobile layout is a responsive interpretation (single-column stacking, hamburger nav, hidden decorative documents). The mobile overlay therefore compares the live mobile render against the desktop reference rather than a pixel-matched mobile artboard.
- **Assets** — Floating hero documents, the price tag, the logo, and all section icons were exported straight from Figma (PNG/SVG) for exact fidelity. The hero blueprint grid and the enterprise dashboard gradient were recreated in CSS.
