# OG Image Generation (Astro OG)

**Status:** Verified | **Version:** 1.0 | **Date:** 2026-05-10 | **Author:** jr-build-spec
**Roadmap:** #2.2 — E5 · Extensions
**Related specs:** specs/18-seo-sitemap-qa.md (Verified — owns existing `<meta property="og:image">` wiring; this spec replaces the static avatar URL with a generated PNG per locale), specs/02-astro-i18n-layout.md (Verified — defines the `lang` prop on Layout.astro consumed here), specs/p2-05-tailwind-v4.md (Verified — Tailwind v4 dependency aligned with current build pipeline)
**Depends on:** MVP complete (Phase 1 specs 00–18)

---

## 1. Executive Summary

Generate locale-specific Open Graph images at build time using `astro-og-canvas`, producing `dist/og/en.png` and `dist/og/es.png`. `Layout.astro` is updated so the existing `og:image` and `twitter:image` meta tags resolve to the localized PNG instead of the current static `avatar.jpeg`. Output: when the site URL is shared on social platforms, it shows a branded card with the developer's name and role in the visitor's language.

---

## 2. Context and Motivation

Today [Layout.astro:26](src/layouts/Layout.astro#L26) hardcodes `og:image` to `/images/avatar.jpeg` — a portrait JPEG never designed for the 1200×630 Open Graph slot, identical for EN and ES, and visually weak when the site is shared on LinkedIn / X / Slack / WhatsApp. This spec ships a minimal, on-brand text card per locale so the link preview reflects the same professional polish as the site itself.

**Affected users:**
- Visitors discovering the portfolio through shared links on social/professional networks
- The owner (Jahiker) — improves first-impression conversion when sharing the URL in DMs, applications, and posts

**Business impact:** Higher click-through on shared links; consistent branding across share surfaces; localization parity with the existing EN/ES site structure.

---

## 3. Goals

- [ ] Generate 2 static PNGs at build time: `dist/og/en.png` and `dist/og/es.png`
- [ ] Each image renders text only: localized name + localized role title (no avatar, no logo, no brand-color accents in v1.0)
- [ ] Dimensions match the OG/Twitter recommended ratio (1200×630)
- [ ] [Layout.astro](src/layouts/Layout.astro) emits the locale-correct `og:image` and `twitter:image` URL based on the existing `lang` prop
- [ ] Generation happens during `npm run build` with no runtime/server dependency — fully compatible with GitHub Pages static hosting
- [ ] `astro check` and `npm run build` continue to pass with 0 errors

---

## 4. Out of Scope

- Per-route OG images (project pages, blog posts) — deferred to specs `p2-03-blog-section` and `p2-04-project-detail-pages` which will add their own OG entries
- Avatar/photo embedding inside the OG image
- Brand-color background, JKR logo, or any non-text visual element
- Twitter `summary_large_image` card upgrade (current `summary` card is preserved; revisit if owner wants the larger preview)
- Dynamic OG endpoint (e.g. `/og.png?title=...`) — static build output is sufficient for two routes
- Localized fonts beyond what `astro-og-canvas` ships with by default
- Adding an OG image preview to the README

---

## 5. Functional Requirements

### FR-01 — Install and configure `astro-og-canvas`

**Description:** Add `astro-og-canvas` and its `canvaskit-wasm` peer dependency to `package.json` and verify they install cleanly under the existing Astro 4.15.8 + Tailwind v4 build.

- **AC-01.1** `package.json` lists `astro-og-canvas` and `canvaskit-wasm` under `dependencies` (not `devDependencies`, since the build step needs them at deploy time).
- **AC-01.2** `npm install` completes with no peer-dependency warnings beyond the project's existing baseline.
- **AC-01.3** `astro check` exits with 0 errors.
- **AC-01.4** `npm run build` exits with 0 errors and produces a `dist/` directory.

### FR-02 — OG image endpoints (one file per locale)

**Description:** Create two Astro endpoint files that export the generated PNG. Using two explicit endpoints (rather than `OGImageRoute` over a `pages` map) keeps the surface small for the current 2-route scope and avoids coupling to a future multi-route refactor.

- **AC-02.1** A file exists at `src/pages/og/en.png.ts` exporting a `GET` handler that returns a 1200×630 PNG with text "Jahiker Rojas" (line 1) and "Fullstack Web Developer" (line 2).
- **AC-02.2** A file exists at `src/pages/og/es.png.ts` exporting a `GET` handler that returns a 1200×630 PNG with text "Jahiker Rojas" (line 1) and "Desarrollador Web Fullstack" (line 2).
- **AC-02.3** Each endpoint file starts with a `// spec: specs/p2-02-og-images.md` traceability comment per project convention.
- **AC-02.4** Both endpoints use the same visual treatment — identical font, weight, sizes, alignment, padding, and background — so the only difference between the two outputs is the localized role string.
- **AC-02.5** Background is solid `#101010` (`dark` token from PROJECT conventions). Foreground text is `#e7e7d8` (the `bg` token in light mode, used here for high contrast on dark — same value already referenced for `theme-color` light in Layout.astro). Palette confirmed by owner during exec on 2026-05-10.
- **AC-02.6** Generated PNGs land at `dist/og/en.png` and `dist/og/es.png` after `npm run build`, both file sizes under 200 KB each.

### FR-03 — Layout.astro emits locale-correct OG image URL

**Description:** Replace the single static `ogImage` constant in [Layout.astro:26](src/layouts/Layout.astro#L26) with a value derived from the `lang` prop, so the rendered HTML for each locale points to the matching PNG.

- **AC-03.1** `Layout.astro` computes `ogImage` as `${siteOrigin}${base}/og/${lang}.png` (using the same `siteOrigin` and `base` variables already declared at lines 19–20).
- **AC-03.2** When `lang='en'` (default), the rendered `<meta property="og:image">` and `<meta name="twitter:image">` both resolve to `https://jahiker.github.io/jahiker/og/en.png`.
- **AC-03.3** When `lang='es'`, both meta tags resolve to `https://jahiker.github.io/jahiker/og/es.png`.
- **AC-03.4** The `// spec:` header at [Layout.astro:2](src/layouts/Layout.astro#L2) is updated to include `specs/p2-02-og-images.md` in numeric/phase order, preserving the multi-spec traceability convention established by spec 02 v1.3.
- **AC-03.5** No other Layout.astro line is touched: hreflang, canonical, JS inline script, favicon, theme-color, and the existing description default all remain byte-identical.

### FR-04 — Build verification

**Description:** Confirm the generated PNGs are accessible at the expected URL paths after build, and that the served HTML carries the correct localized OG meta.

- **AC-04.1** After `npm run build`, file `dist/og/en.png` exists and file `dist/og/es.png` exists.
- **AC-04.2** After `npm run build`, `dist/index.html` contains `og/en.png` in both `og:image` and `twitter:image` meta tags (the EN home page is served at `/`).
- **AC-04.3** After `npm run build`, `dist/es/index.html` contains `og/es.png` in both `og:image` and `twitter:image` meta tags.
- **AC-04.4** Running `npm run preview` and opening each PNG URL (`http://localhost:4321/jahiker/og/en.png` and `…/og/es.png`) returns HTTP 200 with `Content-Type: image/png` and a viewable image matching the visual treatment from FR-02.

---

## 6. Non-Functional Requirements

| Concern | Requirement |
|---|---|
| **Performance (build)** | Build-time generation must add no more than ~5s to `npm run build` on a clean install. `canvaskit-wasm` initialization happens once and is reused for both endpoints. |
| **Performance (runtime)** | Zero — PNGs are static assets served by GitHub Pages CDN. |
| **Asset size** | Each PNG ≤ 200 KB. |
| **Compatibility** | Works on Astro 4.15.8, Node ≥ 18, GitHub Pages static deploy. No SSR, no edge runtime. |
| **Security** | No user input reaches the generator; text strings are hardcoded constants in source. |
| **Accessibility** | OG images are decorative for crawlers — no a11y constraints apply. The site itself remains a11y-compliant per spec 03. |
| **i18n parity** | Adding a future locale must require only one new `src/pages/og/<lang>.png.ts` file plus a string addition. No structural change to Layout.astro. |

---

## 7. Technical Design

### Architecture

This spec slots into the existing Astro 4 SSG pipeline. `astro-og-canvas` runs during `astro build`, hitting each `*.png.ts` endpoint once and writing the resulting PNG to `dist/`. The output is a static asset served by GitHub Pages exactly like any other file in `public/`. No server, no edge function, no client-side JS.

```
                     ┌─ src/pages/og/en.png.ts ──┐
                     │  (calls astro-og-canvas)   │
                     │                            │
npm run build ──────►├─ src/pages/og/es.png.ts ──┼──► dist/og/{en,es}.png
                     │  (calls astro-og-canvas)   │
                     └────────────────────────────┘
                                                          │
                       Layout.astro (per-locale URL)  ────┘
                                │
                                ▼
                       dist/index.html (EN) → og:image=/og/en.png
                       dist/es/index.html  → og:image=/og/es.png
```

### Involved Components

| Component | Role | Required changes |
|---|---|---|
| `package.json` | Dependency manifest | Add `astro-og-canvas` and `canvaskit-wasm` to `dependencies` |
| `src/pages/og/en.png.ts` | OG endpoint for EN | NEW — generates the EN PNG |
| `src/pages/og/es.png.ts` | OG endpoint for ES | NEW — generates the ES PNG |
| `src/layouts/Layout.astro` | Site shell that emits OG meta | MODIFY — make `ogImage` locale-aware (line 26); update `// spec:` header (line 2) |
| `astro.config.mjs` | Build config | NO CHANGE — `astro-og-canvas` is page-level; no integration registration required |
| `tsconfig.json` | TS compiler | NO CHANGE — endpoint files are typed via Astro's `APIRoute` type |
| `dist/og/{en,es}.png` | Generated static assets | NEW — produced by build, never committed to source |

### Data Flow

```ts
// src/pages/og/en.png.ts (illustrative — final API per astro-og-canvas docs)
// spec: specs/p2-02-og-images.md
import { getImageResponse } from 'astro-og-canvas'
import type { APIRoute } from 'astro'

export const GET: APIRoute = () =>
  getImageResponse({
    title: 'Jahiker Rojas',
    description: 'Fullstack Web Developer',
    bgGradient: [[16, 16, 16]],          // #101010
    border: { color: [231, 231, 216], width: 0 }, // no border
    padding: 60,
    font: { title: { color: [231, 231, 216] }, description: { color: [231, 231, 216] } },
    format: 'PNG',
  })
```

`src/pages/og/es.png.ts` is byte-identical except for the `description` string (`'Desarrollador Web Fullstack'`).

`Layout.astro` change:

```diff
- const ogImage = `${siteOrigin}${base}/images/avatar.jpeg`
+ const ogImage = `${siteOrigin}${base}/og/${lang}.png`
```

And the spec header:

```diff
- // spec: specs/02-astro-i18n-layout.md, specs/03-accessibility-mode.md, specs/17-pages-assembly.md, specs/18-seo-sitemap-qa.md, specs/p2-01-dark-light-mode.md
+ // spec: specs/02-astro-i18n-layout.md, specs/03-accessibility-mode.md, specs/17-pages-assembly.md, specs/18-seo-sitemap-qa.md, specs/p2-01-dark-light-mode.md, specs/p2-02-og-images.md
```

### Database Considerations

No DB changes.

### APIs / Integrations

No external API integrations. `astro-og-canvas` is a build-time-only library with no network calls.

---

## 8. Edge Cases and Error Handling

| Case | Expected behavior |
|---|---|
| `canvaskit-wasm` fails to initialize at build time | `npm run build` fails with the error surfaced — do not silently fall back to the old avatar URL. The owner sees the failure and fixes it before deploy. |
| New locale added in the future without a matching `og/<lang>.png.ts` | Layout still emits `…/og/<lang>.png`; the URL 404s. Acceptable: caught immediately by the project's manual QA / share-link smoke test. (No automated check needed for v1.0.) |
| Crawler requests the OG image before deployment finishes | Same behavior as any other static asset on the site — irrelevant once GH Pages publish completes. |
| Owner runs `npm run dev` instead of build | Astro serves the endpoint dynamically (the `*.png.ts` file is treated as an API route), still returning a valid PNG. No special handling needed. |
| Localized text overflows the 1200×630 canvas | `astro-og-canvas` clips/wraps per its built-in layout. Strings chosen for v1.0 are short enough that this won't trigger; revisit if longer titles are added later. |
| Old avatar URL still cached by social scrapers | Out of scope — owner can use Facebook/LinkedIn debugger to refresh once after deploy. |

---

## 9. Dependencies

**Specs to run first:**
- All Phase 1 (specs 00–18) — MVP complete (already Verified or Implemented except 04, 05, 12, 13, 15, 16, 18 still Pending; this spec only requires the Layout.astro shell + i18n routing established by specs 02 and 17, both Verified).

**Internal dependencies (already in repo):**
- `Astro.site` and `import.meta.env.BASE_URL` semantics confirmed by spec 02 v1.2 — reused as-is.

**External dependencies:**
- `astro-og-canvas` (npm) — active, MIT, maintained by the Astro org.
- `canvaskit-wasm` — peer dependency of the above; ships the Skia/WASM renderer.

**Blockers:** None.

---

## 10. Additional Notes

- **Why not `OGImageRoute` with a pages map?** With only 2 routes, two explicit endpoint files are easier to read, easier to grep for `// spec:` traceability, and easier for `p2-03` / `p2-04` to extend later — those specs can either add more `*.png.ts` siblings or migrate to `OGImageRoute` then, when there's a real multi-route argument for it.
- **Why not commit the PNGs to `public/og/`?** That would short-circuit the regeneration loop: any future change to wording, font, or palette would require a manual re-export step. Keeping generation in the build pipeline means content changes propagate automatically.
- **Why not upgrade to `summary_large_image` Twitter card?** Out of scope — flagged for a future iteration if the owner wants the larger preview on X/Twitter shares. The 1200×630 PNGs already accommodate that upgrade with no regeneration needed.
- **README is frozen.** Per project hard rule, no README screenshot of the OG image is added.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `package.json` | MODIFY | Added `astro-og-canvas@0.7.2` (Astro 4-compatible; v0.8+ requires Astro 5) and `canvaskit-wasm` to `dependencies` |
| `package-lock.json` | MODIFY | Lockfile updated by `npm install` |
| `src/pages/og/en.png.ts` | CREATE | EN endpoint — generates 1200×630 PNG via `generateOpenGraphImage` (lower-level API; cleaner than `OGImageRoute` for two static endpoints) |
| `src/pages/og/es.png.ts` | CREATE | ES endpoint — same visual treatment, localized description "Desarrollador Web Fullstack" |
| `src/layouts/Layout.astro` | MODIFY | Line 2: append `specs/p2-02-og-images.md` to multi-spec header. Line 26: `ogImage` becomes locale-aware (`/og/${lang}.png` instead of static `/images/avatar.jpeg`) |
| `dist/og/en.png` | GENERATED | Build artifact — 1200×630, 27 KB |
| `dist/og/es.png` | GENERATED | Build artifact — 1200×630, 27 KB |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-10 | Created | jr-build-spec |
| 1.0 | 2026-05-10 | Implemented | jr-exe-spec — astro-og-canvas@0.7.2 pinned (Astro 4 compat); 2 endpoints + Layout locale-aware; build clean (0 errors), PNGs 27 KB each |
| 1.0 | 2026-05-10 | Verified | jr-verify-spec — Coverage: 100% (19/19) · Gaps: 0 · NFRs: 7/7 · Build 697 ms, PNGs 27/28 KB |
