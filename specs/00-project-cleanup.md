# Project Cleanup & Directory Restructure

**Status:** Verified | **Version:** 1.2 | **Date:** 2026-05-01 | **Author:** jr-build-spec
**Related specs:** None (this is the foundation — all other specs depend on it)

---

## 1. Executive Summary

The current Astro project has a flat component structure inherited from the Astromax reference template, contains placeholder content files that must be deleted, and is missing the directory layout defined in the architecture. This spec reorganizes `src/` into the canonical structure (`global/`, `sections/`, `ui/`, `data/`, `images/`), removes Astromax artifacts, and updates all imports. No component logic or visual output changes — the site must render identically before and after.

---

## 2. Context and Motivation

The Astro project was bootstrapped from the Astromax template. Several files are leftovers that don't belong in the portfolio:
- `src/components/TextCards.astro` — contains fake Astromax testimonials with made-up names ("Emily Reynolds", "Lindsay Chen"). Must be deleted before real content is written.
- `src/index.astro` (root-level inside `src/`) — conflicts with `src/pages/index.astro` and must be deleted.
- All components are flat in `src/components/` — the architecture requires subdirectories (`global/`, `sections/`, `ui/`) for maintainability as more components are added.
- `src/data/`, `src/images/` directories don't exist yet — all downstream specs need them.
- `astro.config.mjs` has no `site` URL set — required for sitemap and canonical URLs.

---

## 3. Goals

- [x] Delete all Astromax placeholder content files
- [x] Reorganize `src/components/` into `global/`, `sections/`, `ui/` subdirectories
- [x] Create `src/data/en/` and `src/data/es/` directories (empty, with `.gitkeep`)
- [x] Create `src/images/projects/` directory (empty, with `.gitkeep`)
- [x] Update all import paths affected by moved files
- [x] Set `site` URL in `astro.config.mjs`
- [x] Project builds successfully (`npm run build`) with no errors after cleanup
- [x] `src/pages/index.astro` renders the same output as before

---

## 4. Out of Scope

- No changes to component logic, markup, or styles
- No changes to `tailwind.config.mjs` or `global.css` (covered in spec `01-types-tailwind-global.md`)
- No new data files (covered in specs `05–08`)
- No new UI components (covered in later section specs)
- No TypeScript type definitions (covered in spec `01-types-tailwind-global.md`)
- No changes to fonts or `Layout.astro` head meta (covered in spec `02-astro-i18n-layout.md`)

---

## 5. Functional Requirements

### FR-01: Delete Astromax placeholder files

**Description:** Remove files that contain fake content from the Astromax template and have no place in the portfolio.

**Files to delete:**
- `src/components/TextCards.astro` — fake testimonials (Emily Reynolds, Lindsay Chen, etc.)
- `src/index.astro` — root-level Astro file that conflicts with `src/pages/index.astro`

**Acceptance Criteria:**
- AC-01: `src/components/TextCards.astro` does not exist after cleanup
- AC-02: `src/index.astro` does not exist after cleanup
- AC-03: No other file imports `TextCards.astro` (verify before deleting)
- AC-04: `npm run build` completes without errors after deletion

---

### FR-02: Reorganize components into subdirectories

**Description:** Move existing components to their canonical locations as defined in the architecture. No logic changes — only file moves and import updates.

**Moves:**

| From | To | Reason |
|---|---|---|
| `src/components/Header.astro` | `src/components/global/Header.astro` | Global shell component |
| `src/components/Footer.astro` | `src/components/global/Footer.astro` | Global shell component |
| `src/components/Hero.astro` | `src/components/sections/Hero.astro` | Page section |
| `src/components/Work.astro` | `src/components/sections/Work.astro` | Page section (renamed Projects in spec 14) |
| `src/components/Banner.astro` | `src/components/ui/Banner.astro` | Reusable marquee UI element |

**Acceptance Criteria:**
- AC-05: All 5 files exist at their new paths
- AC-06: No file remains at the old flat paths in `src/components/`
- AC-07: All import statements referencing moved files are updated
- AC-08: `npm run build` completes without errors

---

### FR-03: Create required empty directories

**Description:** Create the directory placeholders that downstream specs will populate. Git doesn't track empty directories — use `.gitkeep` files.

**Directories to create:**

| Directory | Purpose |
|---|---|
| `src/components/ui/` | Already created by FR-02 (Banner.astro) |
| `src/data/en/` | EN TypeScript data files (specs 05–08) |
| `src/data/es/` | ES TypeScript data files (specs 05–08) |
| `src/images/projects/` | Project screenshot images (spec 06) |

**Acceptance Criteria:**
- AC-09: `src/data/en/` exists (contains `.gitkeep`)
- AC-10: `src/data/es/` exists (contains `.gitkeep`)
- AC-11: `src/images/projects/` exists (contains `.gitkeep`)

---

### FR-04: Update `astro.config.mjs` with site URL

**Description:** Set the `site` property to the GitHub Pages URL. Required for sitemap generation and canonical link tags.

**Acceptance Criteria:**
- AC-12: `astro.config.mjs` contains `site: 'https://jahiker.github.io'`
- AC-13: `astro.config.mjs` contains `base: '/jahiker'` — deploys to `https://jahiker.github.io/jahiker/` (same URL as current React portfolio)
- AC-14: `npm run build` generates `dist/sitemap-index.xml`

---

### FR-05: Update import paths in all affected files

**Description:** After moving components, all files that import them must be updated. No logic changes.

**Files that need import updates:**

| File | Imports to update |
|---|---|
| `src/layouts/Layout.astro` | `Header`, `Footer` → new `global/` paths |
| `src/pages/index.astro` | `Hero`, `Work` → new `sections/` paths |
| `src/components/sections/Hero.astro` | `Banner` → new `ui/` path |

**Acceptance Criteria:**
- AC-15: `src/layouts/Layout.astro` imports Header from `../components/global/Header.astro`
- AC-16: `src/layouts/Layout.astro` imports Footer from `../components/global/Footer.astro`
- AC-17: `src/pages/index.astro` imports Hero from `../components/sections/Hero.astro`
- AC-18: `src/pages/index.astro` imports Work from `../components/sections/Work.astro`
- AC-19: `src/components/sections/Hero.astro` imports Banner from `../ui/Banner.astro`

---

## 6. Non-Functional Requirements

- **Zero visual regression:** The page must render identically before and after this spec. No style, layout, or content changes.
- **Build time:** `npm run build` must complete without TypeScript or Astro errors.
- **No dead imports:** After cleanup, no file should import a path that doesn't exist.

---

## 7. Technical Design

### Architecture

This spec is pure filesystem surgery — no new logic, no new components. It establishes the directory contract that all downstream specs depend on. The Astro build system resolves imports statically at build time, so every moved file requires its importers to be updated.

### Involved Components

| Component | Role | Required Changes |
|---|---|---|
| `src/layouts/Layout.astro` | Base HTML shell | Update Header + Footer import paths |
| `src/pages/index.astro` | EN home page | Update Hero + Work import paths |
| `src/components/sections/Hero.astro` | Hero section (moved) | Update Banner import path |
| `src/components/global/Header.astro` | Header (moved) | No logic changes |
| `src/components/global/Footer.astro` | Footer (moved) | No logic changes |
| `src/components/sections/Work.astro` | Work section (moved) | No logic changes |
| `src/components/ui/Banner.astro` | Marquee banner (moved) | No logic changes |
| `astro.config.mjs` | Astro configuration | Add `site` URL |

### Data Flow

No changes to data flow. This spec only affects the filesystem layout and import resolution.

### Database Considerations

No DB changes.

### APIs / Integrations

No API changes. The `@astrojs/sitemap` integration already installed will generate the sitemap once `site` is set in `astro.config.mjs` (AC-14).

---

## 8. Edge Cases and Error Handling

| Case | Expected Behavior |
|---|---|
| `TextCards.astro` is referenced somewhere unexpected | Search all `.astro` files for `TextCards` import before deleting — abort if found, update importer first |
| `src/index.astro` is referenced in pages or routes | Astro's file-based routing would expose it as a route conflicting with `pages/index.astro` — just delete it; no importer should reference it |
| Internal links breaking due to `base: '/jahiker'` | Astro automatically prepends the base to all internal `href` and `src` values when using `base` — use relative paths or Astro's `import.meta.env.BASE_URL` if needed |

---

## 9. Dependencies

| Type | Dependency |
|---|---|
| Specs to run first | None — this is the first spec |
| Internal | All other specs depend on this one completing successfully |
| External | None |
| Blockers | None |

---

## 10. Pending Questions

None — all decisions confirmed.

---

## 11. Additional Notes

- `src/styles/global.css` stays in place — no move needed.
- `src/env.d.ts` stays in place — Astro type declarations.
- The `astromax/` directory at the project root is never touched — reference only.
- After this spec, the `src/components/` directory should contain only subdirectories (`global/`, `sections/`, `ui/`) and no loose `.astro` files.
- `dist/` is currently committed to the repo — this is expected for the old gh-pages workflow. The new GitHub Actions workflow (spec `04`) will handle this differently.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/TextCards.astro` | DELETED | Astromax fake testimonials removed |
| `src/components/sections/Hero.astro` | MOVED + MODIFIED | Moved from flat `components/`; removed TextCards import/usage; updated Banner import path |
| `src/components/global/Header.astro` | MOVED | From `components/Header.astro` |
| `src/components/global/Footer.astro` | MOVED | From `components/Footer.astro` |
| `src/components/sections/Work.astro` | MOVED | From `components/Work.astro` |
| `src/components/ui/Banner.astro` | MOVED | From `components/Banner.astro` |
| `src/layouts/Layout.astro` | MODIFIED | Updated Header + Footer import paths to `global/` |
| `src/pages/index.astro` | MODIFIED | Updated Hero + Work import paths to `sections/` |
| `astro.config.mjs` | MODIFIED | Added `site` + `base` for GitHub Pages |
| `tsconfig.json` | MODIFIED | Added `exclude: ["astromax"]` to prevent TS errors from reference template |
| `src/data/en/.gitkeep` | CREATED | Empty dir placeholder |
| `src/data/es/.gitkeep` | CREATED | Empty dir placeholder |
| `src/images/projects/.gitkeep` | CREATED | Empty dir placeholder |

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Created | jr-build-spec |
| 1.1 | 2026-05-01 | Implemented | jr-exe-spec — directory restructure, artifact deletion, astro.config site/base, tsconfig exclude astromax |
| 1.2 | 2026-05-01 | Verified | jr-verify-spec — Coverage: 100% · Gaps: 0 |
