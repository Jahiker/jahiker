# Fix: Code Review Findings (theming, locale, carousel, OG cards)

**Status:** Resolved | **Date:** 2026-11-14 | **OpenSpec change:** `openspec/changes/fix-code-review-findings/`
**Related specs:** `03-accessibility-mode`, `09-header`, `10-footer`, `11-hero-section`, `14-projects-section`, `15-experience-section`, `16-contact-section`, `p2-01-dark-light-mode`, `p2-02-og-images`

---

## Original description

A code review of commit `07f6d42` reported unreadable text in contrast modes, project cards without a background, English strings on `/es/`, a carousel without touch support, and OG images that downloaded their font at build time and ignored the ExtraBold title weight. Findings were confirmed against `npm run build` before fixing.

## Root causes

| Area | Cause |
|---|---|
| Contrast modes | a11y mode and `prefers-contrast: more` forced colours on fixed element lists, written before the light theme existed |
| Card background | `bg-dark-mid` / `hover:bg-gray` have no token in `@theme`, so Tailwind v4 generated no CSS (GAP-01, left open by p2-01) |
| Lime on hover | `#d5ff40` on `#f9f9f9` is ~1.1:1; the FR-08 text-shadow cannot reach SVG icons |
| OG font | no `fonts` option, so astro-og-canvas fetched Noto Sans 400 from fontsource and had no 800 file |
| Carousel | Glide mounted without `Swipe` (and without `Anchors`, which stops a drag from opening the card link) |

## Applied solution

- Contrast modes redefine the semantic tokens. a11y mode keeps black/white in any theme; `prefers-contrast: more` keeps the visitor's theme at maximum contrast.
- New tokens: `--color-bg-hover` (card hover) and `--color-primary-ink` (lime in dark, `#4d6600` in light) for `hover:` / `group-hover:` accents.
- Basement `@font-face` declared at weight 700 (matches `.font-display`).
- Header/Footer labels and the copyright line localized; logo links to the current locale's home.
- OG endpoints share `src/pages/og/_card.ts`, which loads Noto Sans 400/800 from `src/fonts/og/` (SIL OFL).
- `twitter:card` → `summary_large_image`; added `og:image:width|height|type|alt` and `twitter:image:alt`.

## Spec amendments

| Spec | Criterion | Amendment |
|---|---|---|
| `p2-02` | AC-01.1 | `canvaskit-wasm` stays a direct dependency, pinned to `^0.40.0` (the range astro-og-canvas requires). Removing it breaks the SSR build (`__dirname is not defined`); the old `^0.41.1` installed a second, unused copy |
| `p2-02` | Out of scope | `summary_large_image` and local fonts are now in scope: the `summary` square crop cut the title, and the ExtraBold weight needs a font file |
| `p2-02` | AC-03.5 | `Layout.astro` gains image meta tags and `lang: 'en' \| 'es'` |
| `14` | AC-01.7 | Card surfaces use `bg-bg-elevated` → `bg-bg-hover` |
| `03` | `prefers-contrast` | Keeps the visitor's theme at maximum contrast instead of forcing a black page |

## Verification

- `npm run build` exits 0; no remote font download in the log; `dist/og/{en,es}.png` ~28 KB, title in ExtraBold.
- Contrast audit (Playwright, all text nodes): 0 failures below 4.5:1 in `prefers-contrast: more` (dark and light) and in a11y mode (from dark and light).
- `/es/`: no English UI strings in the HTML; logo lands on `/jahiker/es/`.
- 390 px viewport: dragging the carousel advances one card and does not open the link; a plain click still opens it.
