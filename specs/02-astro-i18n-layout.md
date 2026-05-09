# Astro i18n Config + Layout.astro + A11y Init Script

**Status:** Verified | **Version:** 1.3 | **Date:** 2026-05-09 | **Author:** jr-iterate-spec
**Roadmap:** #0.3 — E0 · Foundation
**Depends on:** specs/00-project-cleanup.md (Verified ✅), specs/01-types-tailwind-global.md (Verified ✅)

---

## Summary

Configures Astro's built-in i18n routing (`/` EN, `/es/` ES) with `prefixDefaultLocale: false`. Updates `Layout.astro` with `lang` and `description` props, a11y localStorage init script (prevents flash on reload), and correct BASE_URL favicon path. Creates the Spanish page at `src/pages/es/index.astro`.

> 🔄 Updated in v1.2: FR-01 scope expanded from "favicon only" to "every asset URL composed from `import.meta.env.BASE_URL`". Fixes 3 pre-existing broken URLs (resume CV in Hero, hreflang ES, OG image) that shared the same incorrect concatenation pattern surfaced by the favicon hotfix.
> 🔄 Updated in v1.3: introduces the multi-spec traceability convention (FR-02). Foundation files (Layout.astro, pages/index.astro, pages/es/index.astro, Header.astro) are touched by multiple specs; their `// spec:` headers now list all contributing specs to prevent ownership confusion during future verifications.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `astro.config.mjs` | (existing) | Added in v1.0 — `i18n` block: `defaultLocale: 'en'`, `locales: ['en', 'es']`, `prefixDefaultLocale: false`. Already follows multi-spec convention (`// spec: specs/00-project-cleanup.md, specs/02-astro-i18n-layout.md`) — used as the reference example for FR-02 |
| `src/layouts/Layout.astro` | MODIFY | v1.3 — update `// spec:` header to list `02, 03, 17, 18` (was: only `18`) |
| `src/components/global/Header.astro` | MODIFY | v1.3 — update `// spec:` header to list `03, 09` (was: only `09`) |
| `src/pages/index.astro` | MODIFY | v1.3 — update `// spec:` header to list `02, 17` (was: only `17`) |
| `src/pages/es/index.astro` | MODIFY | v1.3 — update `// spec:` header to list `02, 17` (was: only `17`) |
| `src/components/sections/Hero.astro` | (existing) | Modified in v1.2 — already has multi-purpose `// spec:` comment near the URL-composition line; v1.3 only addresses the file-level header convention which here is owned by spec 11 |

---

## Functional Requirements

### FR-01 — Correct asset URLs via BASE_URL
> ✨ New in v1.1
> 🔧 Hotfix 2026-05-09: original v1.1 wording assumed `BASE_URL` had a trailing slash (false in Astro 4.15.8). Corrected. See `specs/fixes/favicon-double-slash-regression.md`.
> 🔄 Modified in v1.2: scope generalized from "favicon" to **all asset URLs composed from `BASE_URL`** in any component; new ACs cover the 3 additional broken URLs surfaced during the hotfix (resume CV, hreflang ES, OG image).

**AC-01.1** The favicon `<link rel="icon">` in `Layout.astro` MUST resolve to `/<base>/favicon.svg` (e.g. `/jahiker/favicon.svg`) in the built HTML.

**AC-01.2** In Astro 4.15.8 with `base: '/jahiker'`, `import.meta.env.BASE_URL` resolves to **`/jahiker` (no trailing slash)**. Any string interpolation MUST therefore insert an **explicit `/`** between `${base}` and the appended path. Pattern: `${base}/<asset>`. Pattern `${base}<asset>` (no `/`) produces concatenated paths like `/jahikerasset` and is forbidden.

**AC-01.3** This convention applies to **every** asset URL composed from `BASE_URL` in any component — not only the favicon. Verified via `npm run build` + inspection of `dist/index.html` and `dist/es/index.html` (the built HTML is the source of truth).

**AC-01.4** *(added in hotfix 2026-05-09)* Build-time regression check for favicon: `dist/index.html` MUST contain exactly `href="/jahiker/favicon.svg"` for the favicon link.

**AC-01.5** *(new in v1.2)* The resume CV URL composed in [src/components/sections/Hero.astro:10](src/components/sections/Hero.astro#L10) MUST resolve to `/jahiker/docs/JAHIKER-CV-2026.pdf` in the built HTML — never `/jahikerdocs/JAHIKER-CV-2026.pdf`.

**AC-01.6** *(new in v1.2)* The hreflang `<link rel="alternate">` URLs and the canonical EN URL in `Layout.astro` MUST resolve to fully-formed paths with a trailing slash on the base segment:
  - `enUrl` → `https://jahiker.github.io/jahiker/`
  - `esUrl` → `https://jahiker.github.io/jahiker/es/`

  Pattern: `${siteOrigin}${base}/` and `${siteOrigin}${base}/es/`. Concatenated forms (`${siteOrigin}${base}` and `${siteOrigin}${base}es/`) are forbidden — they produce `https://jahiker.github.io/jahikeres/` and similar broken paths.

**AC-01.7** *(new in v1.2)* The Open Graph image URL composed in `Layout.astro` MUST resolve to `https://jahiker.github.io/jahiker/images/avatar.jpeg` in the built HTML — never `https://jahiker.github.io/jahikerimages/avatar.jpeg`.

**AC-01.8** *(new in v1.2 · refined during execution)* **Comprehensive build-time regression check.** After `npm run build`, `dist/index.html` and `dist/es/index.html` MUST NOT match the anchored regex:
```
"/jahiker[a-z]|jahiker\.github\.io/jahiker[a-z]
```
This catches every variant of the BASE_URL concatenation bug:
- `"/jahiker[a-z]` — relative paths (anchored to the opening `"` of an attribute value, so it does NOT match unrelated occurrences like `/in/jahikerrojas` from a LinkedIn handle)
- `jahiker.github.io/jahiker[a-z]` — absolute URLs (anchored to the github.io host, catches `https://jahiker.github.io/jahikeres/` and similar)

Quick check command:
```bash
grep -oE '"/jahiker[a-z]|jahiker\.github\.io/jahiker[a-z]' dist/index.html dist/es/index.html
```
Empty output = pass.

> Note: an unanchored regex like `/jahiker[a-z]` produces false positives (e.g. the LinkedIn handle `jahikerrojas`). The anchored form above was validated during v1.2 execution.

**AC-01.9** *(new in v1.2 · documented during execution)* **Out of scope but noted:** the canonical EN URL is built from `Astro.url.href` ([src/layouts/Layout.astro:22](src/layouts/Layout.astro#L22)) and resolves to `https://jahiker.github.io/jahiker` (no trailing slash) for the EN home page, while ES correctly resolves to `https://jahiker.github.io/jahiker/es/`. This is **Astro's own URL composition** for the home page, not a `BASE_URL` issue, and is out of scope for this spec. Track separately if SEO consistency becomes a concern.

---

### FR-02 — Multi-spec traceability convention
> ✨ New in v1.3

Foundation files in this project are commonly touched by multiple specs over time (e.g. `Layout.astro` is created by spec 02 but extended by 03, 17, 18). When the file-level `// spec:` header lists only one spec, future verifications cannot tell which specs contributed to the file, leading to "ownership drift" findings repeated across audits. This FR establishes a uniform convention.

**AC-02.1** Any source file with `// spec:` traceability that is touched by **two or more specs** MUST list all contributing specs in a single header comment, comma-separated, in roadmap order. Reference example: [astro.config.mjs:9](astro.config.mjs#L9) — `// spec: specs/00-project-cleanup.md, specs/02-astro-i18n-layout.md`.

**AC-02.2** Specifically, the following files MUST have these multi-spec headers after this iteration:
  - [src/layouts/Layout.astro:2](src/layouts/Layout.astro#L2) → `// spec: specs/02-astro-i18n-layout.md, specs/03-accessibility-mode.md, specs/17-pages-assembly.md, specs/18-seo-sitemap-qa.md`
  - [src/components/global/Header.astro:2](src/components/global/Header.astro#L2) → `// spec: specs/03-accessibility-mode.md, specs/09-header.md`
  - [src/pages/index.astro:2](src/pages/index.astro#L2) → `// spec: specs/02-astro-i18n-layout.md, specs/17-pages-assembly.md`
  - [src/pages/es/index.astro:2](src/pages/es/index.astro#L2) → `// spec: specs/02-astro-i18n-layout.md, specs/17-pages-assembly.md`

**AC-02.3** Block-level (inline) `// spec:` or `// fix:` comments inside the body of a file (e.g. `Hero.astro:10`, `Layout.astro:22`, `Layout.astro:62`) are independent of the file-level header and remain governed by the spec/fix that introduced that specific block. They are NOT consolidated by this convention.

**AC-02.4** Spec order in the comma-separated list MUST follow numeric/roadmap order (lowest first). For new contributions in future iterations, append to the end if the new spec has a higher number, or insert in numeric order otherwise.

**AC-02.5** This convention applies to **all source files** in the project, not only the four enumerated in AC-02.2. When a future spec touches a file already governed by another spec, that spec's iteration is responsible for updating the multi-spec header per AC-02.1.

---

## Technical Design — BASE_URL composition

> ✨ New in v1.2

**Canonical pattern (✅):**
```ts
const base = import.meta.env.BASE_URL  // → "/jahiker" (no trailing slash)

// Single-asset paths in <link>, <a>, <img>, etc.
`${base}/favicon.svg`                       // → /jahiker/favicon.svg
`${base}/docs/JAHIKER-CV-2026.pdf`          // → /jahiker/docs/JAHIKER-CV-2026.pdf

// Absolute URLs for OG/canonical/hreflang
`${siteOrigin}${base}/`                     // → https://jahiker.github.io/jahiker/
`${siteOrigin}${base}/es/`                  // → https://jahiker.github.io/jahiker/es/
`${siteOrigin}${base}/images/avatar.jpeg`   // → https://jahiker.github.io/jahiker/images/avatar.jpeg
```

**Forbidden pattern (❌):**
```ts
`${base}favicon.svg`              // → /jahikerfavicon.svg
`${base}docs/...`                 // → /jahikerdocs/...
`${siteOrigin}${base}es/`         // → https://jahiker.github.io/jahikeres/
`${siteOrigin}${base}images/...`  // → https://jahiker.github.io/jahikerimages/...
```

**Why no Astro helper?** Astro doesn't ship a built-in URL builder for `BASE_URL`-prefixed paths in templates. The convention `${base}/<asset>` is a one-line, readable rule that any contributor can follow. AC-01.8's regex provides automated detection of violations.

---

## Technical Design — Multi-spec traceability

> ✨ New in v1.3

**Canonical header pattern (single-spec file):**
```ts
// spec: specs/14-projects-section.md
```

**Canonical header pattern (multi-spec file):**
```ts
// spec: specs/02-astro-i18n-layout.md, specs/03-accessibility-mode.md, specs/17-pages-assembly.md, specs/18-seo-sitemap-qa.md
```

**Inline block-level traceability (independent from header):**
```ts
// spec: specs/02-astro-i18n-layout.md (v1.2 FR-01) — explicit `/` after BASE_URL
const enUrl  = `${siteOrigin}${base}/`
```

**Verification command:**
```bash
# List all source files with their `// spec:` header
grep -rE '^//\s*spec:' src/ --include='*.astro' --include='*.ts' --include='*.tsx' --include='*.js' | head -30
```

---

## Key decisions

- **`prefixDefaultLocale: false`** — English at `/jahiker/` (no `/en/` prefix), Spanish at `/jahiker/es/`. Cleaner URLs for the primary audience.
- **A11y init script uses `try/catch`** — `localStorage` access can throw in privacy mode; silent fail is correct behavior.
- **ES page shares EN components for now** — will receive real ES data when specs 05–08 are implemented.
- **`description` defaults** in Layout to the EN tagline — each page overrides it explicitly.
- **`BASE_URL` does NOT include a trailing slash** in Astro 4.15.8 with `base: '/jahiker'` — always insert an explicit `/` between `${base}` and the appended path. *(corrected by hotfix 2026-05-09; broader fix in v1.2)*
- **Multi-spec headers are comma-separated, numeric order** — this iteration formalizes a pattern already used in `astro.config.mjs:9`. The convention scales: every future spec that touches a multi-spec file is expected to update the header, not replace it. *(v1.3)*

---

## Delta v1.3

### What changes from v1.2:
- New FR-02 establishes the multi-spec traceability convention (5 ACs)
- New "Technical Design — Multi-spec traceability" subsection with canonical patterns
- 4 file headers updated:
  - [src/layouts/Layout.astro:2](src/layouts/Layout.astro#L2) → list `02, 03, 17, 18`
  - [src/components/global/Header.astro:2](src/components/global/Header.astro#L2) → list `03, 09`
  - [src/pages/index.astro:2](src/pages/index.astro#L2) → list `02, 17`
  - [src/pages/es/index.astro:2](src/pages/es/index.astro#L2) → list `02, 17`
- Status returns to Draft pending re-execution

### What does NOT change:
- All FR-01 ACs and code (BASE_URL composition is settled in v1.2)
- All non-comment lines in any source file
- Inline `// spec:` or `// fix:` comments inside file bodies (e.g. Hero.astro:10, Layout.astro:22, Layout.astro:62) — these are block-level and remain unchanged per AC-02.3
- `Hero.astro:2` header (file is single-spec governed by 11; no multi-spec change needed)
- `astro.config.mjs:9` header — already conforms to the convention

### Regression risk: None
- 4 single-line comment edits, zero impact on runtime behavior, build output, or any rendered HTML
- Pure documentation hygiene
- AC-02.5 makes the convention forward-compatible — any future spec touching a multi-spec file is expected to maintain the header

---

## Delta v1.2

### What changes from v1.1:
- FR-01 scope expanded to **all** `BASE_URL`-composed asset paths (was favicon-only)
- New ACs: AC-01.5 (resume CV), AC-01.6 (hreflang/canonical), AC-01.7 (OG image), AC-01.8 (regex regression check)
- New "Technical Design — BASE_URL composition" subsection with canonical/forbidden patterns
- 4 line-level fixes:
  - [src/components/sections/Hero.astro:10](src/components/sections/Hero.astro#L10) — `${import.meta.env.BASE_URL}docs/...` → `${import.meta.env.BASE_URL}/docs/...`
  - [src/layouts/Layout.astro:23](src/layouts/Layout.astro#L23) — `${siteOrigin}${base}` → `${siteOrigin}${base}/`
  - [src/layouts/Layout.astro:24](src/layouts/Layout.astro#L24) — `${siteOrigin}${base}es/` → `${siteOrigin}${base}/es/`
  - [src/layouts/Layout.astro:25](src/layouts/Layout.astro#L25) — `${siteOrigin}${base}images/avatar.jpeg` → `${siteOrigin}${base}/images/avatar.jpeg`
- Status returns to Draft pending re-execution

### What does NOT change:
- i18n config in `astro.config.mjs`
- Layout props, a11y init script, A11Y init script, Twitter card structure (only the URL values inside change)
- `src/pages/index.astro` and `src/pages/es/index.astro`
- Favicon line — already correct after the hotfix
- A11y init script and any non-URL logic in `Layout.astro`

### Regression risk: Low
- 4 line-level URL fixes, each producing a strictly cleaner URL
- The fixes change broken paths (404) to working paths — no path that currently works can break
- AC-01.8 regex provides automated post-build verification
- Hero.astro change is isolated to the resume CV `<a download>` element; Layout.astro changes are inside `<head>` meta tags

---

## Delta v1.1

### What changes from v1.0:
- New FR-01 documents the canonical-URL hygiene rule for assets composed from `BASE_URL`
- `src/layouts/Layout.astro` line ~62: change `href={`${base}/favicon.svg`}` → `href={`${base}favicon.svg`}`
- Status returns to Draft pending re-execution

### What does NOT change:
- i18n config in `astro.config.mjs`
- Layout props, a11y init script, OG/Twitter/canonical/hreflang meta blocks
- `src/pages/index.astro` and `src/pages/es/index.astro`
- Other URL composers in `Layout.astro` already use `${base}` correctly (lines 23-25 build `enUrl`, `esUrl`, `ogImage` without an extra `/`)

### Regression risk: Low
- Single-line CSS-less change in `Layout.astro`
- The favicon already loads in browsers (which tolerate `//`), so this is a cosmetic / canonical-URL fix, not a functional bug
- No effect on routing, i18n, a11y, SEO meta, or any data flow

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Implemented | jr-exe-spec — i18n config, Layout lang/desc/a11y, ES page created |
| 1.0 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (7/7) · Gaps: 1 cosmético (favicon `${base}/favicon.svg` produce doble slash) |
| 1.1 | 2026-05-09 | Iterated | jr-iterate-spec — fix favicon URL: drop leading `/` after `${base}` (BASE_URL already trailing-slashed) |
| 1.1 | 2026-05-09 | Implemented | jr-exe-spec — Layout.astro:62 favicon href changed `${base}/favicon.svg` → `${base}favicon.svg`; `astro check` clean |
| 1.1 | 2026-05-09 | Hotfix | jr-fix-spec — reverted favicon to `${base}/favicon.svg`; corrected FR-01 ACs (BASE_URL has no trailing slash); see `specs/fixes/favicon-double-slash-regression.md` |
| 1.2 | 2026-05-09 | Iterated | jr-iterate-spec — extend FR-01 to all BASE_URL-composed assets; fix Hero resume CV + Layout hreflang/canonical/OG; add regex regression AC |
| 1.2 | 2026-05-09 | Implemented | jr-exe-spec — Hero.astro:10 + Layout.astro:23-25 fixed; AC-01.8 regex refined to anchored form (false positive eliminated); AC-01.9 added documenting canonical EN as Astro behavior (out of scope) |
| 1.2 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (8/8 verificables) · Gaps: 0 · AC-01.9 informativo confirmado · build regex AC-01.8 vacío |
| 1.3 | 2026-05-09 | Iterated | jr-iterate-spec — establish multi-spec traceability convention (FR-02); update headers of Layout, Header, pages/index, pages/es/index |
| 1.3 | 2026-05-09 | Implemented | jr-exe-spec — 4 file headers updated to multi-spec format; `astro check` clean; AC-02.2 verified literal-match |
| 1.3 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (13/13 verificables) · Gaps: 0 · AC-02.5 governance forward-compat · FR-01 regression check passed |
