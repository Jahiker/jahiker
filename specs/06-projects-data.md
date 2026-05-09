# Projects Data Files — EN + ES + Image Migration

**Status:** Implemented | **Version:** 1.2 | **Date:** 2026-05-09 | **Author:** jr-iterate-spec
**Roadmap:** #1.2 — E1 · Data layer
**Depends on:** specs/01-types-tailwind-global.md (Implemented ✅)

---

## 1. Executive Summary

Create the typed projects data files for EN and ES locales with the curated portfolio projects. Images are migrated from `public/screenshots/` to `src/images/projects/` so Astro can optimize them at build time. Both locale files share the same image imports but have locale-specific descriptions.

> 🔄 Updated in v1.2: list grows from 7 → 8 projects with the addition of `jr-toolkit` pinned as the first entry, and the previously-curated 7 projects appear in reversed order (newest curated → oldest).

---

## 2. Context and Motivation

Project cards are the centerpiece of the portfolio. All project copy and metadata must be in typed data files so the Projects section component can render them without any hardcoded strings. Moving images to `src/` enables Astro's built-in `<Image />` optimization (WebP conversion, lazy loading, width/height attributes to prevent CLS).

`jr-toolkit` is the author's own Spec-Driven Development npm package for Claude (the toolkit currently in use to manage these specs). It is pinned first to highlight it as the most representative current work.

---

## 3. Goals

- [ ] Copy the 7 project screenshots from `public/screenshots/` to `src/images/projects/`
- [ ] Create `src/data/en/projects.ts` with EN descriptions for all 8 projects
- [ ] Create `src/data/es/projects.ts` with ES descriptions for all 8 projects
- [ ] Both files typed as `Project[]` from `src/data/types.ts`
- [ ] Each project includes: name, description, tags, image (imported), siteUrl, sourceCodeUrl, year
- [ ] `jr-toolkit` is the first entry; the original 7 projects follow in reversed order

---

## 4. Out of Scope

- The Projects section component that renders this data (spec 14)
- Pagination or filtering logic
- Project detail pages (spec p2-04)
- Making `Project.image` optional in the type (deferred — uses placeholder reuse for jr-toolkit instead, see FR-04)

---

## 5. Functional Requirements

### FR-01: Image Migration

Copy project screenshots to `src/images/projects/` so Vite can process them as static assets with Astro image optimization.

**Acceptance Criteria:**
- [ ] AC-01: The following files exist in `src/images/projects/`: `pugstagram.jpg`, `pokedex.png`, `platzi-conf-merch.png`, `cashflow.png`, `editor-vue.png`, `fly-booking.png`, `weather-react.png`
- [ ] AC-02: Original files in `public/screenshots/` are left untouched (non-destructive copy)

### FR-02: EN Projects File
> 🔄 Modified in v1.2: list now contains 8 projects with `jr-toolkit` first and the 7 original projects in reversed order

**Acceptance Criteria:**
- [ ] AC-01: File exports a named constant `projects` typed as `Project[]`
- [ ] AC-02: Contains exactly 8 projects in this order:
  1. `jr-toolkit`
  2. Weather App
  3. Fly Booking
  4. Vue Image Editor
  5. Cashflow App
  6. Platzi Conf Merch
  7. Pokédex
  8. Pugstagram
- [ ] AC-03: Each project has `name`, `description` (EN, 1–2 sentences), `tags` (lowercase strings), `image` (imported from `src/images/projects/`), `siteUrl`, `sourceCodeUrl` (string or null), `year`
- [ ] AC-04: Tags are lowercase, concise technology names (e.g. `"react"`, `"vue"`, `"typescript"`)
- [ ] AC-05: File includes traceability comment `// spec: specs/06-projects-data.md`
- [ ] AC-06: `jr-toolkit` entry has:
  - `name: 'jr-toolkit'`
  - `description: 'Spec-Driven Development toolkit for Claude. From raw idea to verified code — a complete structured workflow for AI-assisted development. Define specs first, implement second, verify third.'`
  - `tags: ['claude', 'ai', 'npm', 'cli']`
  - `siteUrl: 'https://www.npmjs.com/package/@jahiker/claude-toolkit'`
  - `sourceCodeUrl: 'https://www.npmjs.com/package/@jahiker/claude-toolkit'`
  - `year: 2026`
  - `image`: see FR-04

### FR-03: ES Projects File
> 🔄 Modified in v1.2: list now contains 8 projects with `jr-toolkit` first and the 7 original projects in reversed order

**Acceptance Criteria:**
- [ ] AC-01: File exports a named constant `projects` typed as `Project[]`
- [ ] AC-02: Same 8 projects in the same order as EN (see FR-02 AC-02), same image imports, same tags, same siteUrl/sourceCodeUrl/year
- [ ] AC-03: `description` field is translated to Spanish for each project
- [ ] AC-04: File includes traceability comment `// spec: specs/06-projects-data.md`
- [ ] AC-05: `jr-toolkit` entry uses the ES description: `'Toolkit de Desarrollo Dirigido por Specs para Claude. De idea cruda a código verificado — un flujo estructurado completo para desarrollo asistido por IA. Define specs primero, implementa después, verifica al final.'`

### FR-04: jr-toolkit Image (Placeholder Reuse)
> ✨ New in v1.2

`jr-toolkit` does not have its own screenshot. Since the `Project.image` field is required by the type but no longer rendered by `ProjectCard.astro` (per spec 14 v2.x), the entry reuses an existing imported image as a placeholder.

**Acceptance Criteria:**
- [ ] AC-01: The `image` field of the `jr-toolkit` entry references one of the already-imported images in `src/data/{en,es}/projects.ts` (no new image file added to the repo)
- [ ] AC-02: The chosen placeholder image is consistent between `en` and `es` files
- [ ] AC-03: The data file includes a one-line comment next to the `image` field clarifying the placeholder is unused at render time, e.g. `// placeholder — image is required by Project type but not rendered (spec 14 v2.x)`

---

## 6. Non-Functional Requirements

- **Type safety:** Both files must satisfy `Project[]` — TS compilation must pass
- **Image optimization:** Images in `src/images/projects/` are processed by Vite/Astro — do not put them in `public/`

---

## 7. Technical Design

**Involved Components:**

| Component | Role | Required Changes |
|---|---|---|
| `src/data/types.ts` | `Project` interface | None — already implemented; `image` remains required |
| `public/screenshots/` | Source images | Read only (non-destructive) |
| `src/images/projects/` | Optimized image assets | COPY 7 files (already done in v1.1) |
| `src/data/en/projects.ts` | EN projects data | MODIFY — add jr-toolkit first, reverse the rest |
| `src/data/es/projects.ts` | ES projects data | MODIFY — add jr-toolkit first, reverse the rest |

**Data Flow:**
```
src/images/projects/*.{png,jpg}
  → imported in src/data/en/projects.ts (as ImageMetadata via import)
  → same imports reused in src/data/es/projects.ts
  → consumed by Projects section component (spec 14) — order is data-driven
```

**Database Considerations:** No DB changes.
**APIs / Integrations:** No API changes.

**Order strategy (v1.2):** The desired display order is encoded directly in the array. The renderer (spec 14) does not sort or reverse — it iterates as-is. Adding/removing/reordering entries is a data-only change.

---

## 8. Edge Cases and Error Handling

| Case | Expected Behavior |
|---|---|
| Image file missing after copy | Build-time import error — caught immediately |
| `sourceCodeUrl: null` for private projects | Rendered as no link in component (spec 14 handles this) |
| `jr-toolkit` image placeholder reused elsewhere | No issue — Astro deduplicates identical image imports |
| `sourceCodeUrl` points to npm (not GitHub) | Rendered as a plain href; `ProjectCard` does not assume the host (spec 14 v2.x) |

---

## 9. Dependencies

- **specs/01-types-tailwind-global.md** — Implemented ✅ (`Project` interface defined)
- No external packages needed

---

## 11. Additional Notes

- `siteUrl` values come from the live React portfolio at `https://jahiker.github.io/jahiker/`
- Where a live site is unavailable, use the GitHub repo URL as `siteUrl`
- For `jr-toolkit`, both `siteUrl` and `sourceCodeUrl` point to the npm package page
- `sourceCodeUrl: null` for projects whose source code is private

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/images/projects/pugstagram.jpg` | (existing) | From v1.1 |
| `src/images/projects/pokedex.png` | (existing) | From v1.1 |
| `src/images/projects/platzi-conf-merch.png` | (existing) | From v1.1 |
| `src/images/projects/cashflow.png` | (existing) | From v1.1 |
| `src/images/projects/editor-vue.png` | (existing) | From v1.1 |
| `src/images/projects/fly-booking.png` | (existing) | From v1.1 |
| `src/images/projects/weather-react.png` | (existing) | From v1.1 |
| `src/data/en/projects.ts` | MODIFY | Add jr-toolkit first; reverse the original 7 |
| `src/data/es/projects.ts` | MODIFY | Add jr-toolkit first; reverse the original 7 |

---

## Delta v1.2

### What changes from v1.1:
- Project list grows from 7 → 8: `jr-toolkit` is added as the **first** entry
- The original 7 projects appear in **reversed** order (Weather App → Pugstagram)
- New FR-04 documents the placeholder-reuse pattern for `jr-toolkit.image`
- Both `src/data/{en,es}/projects.ts` move from CREATE to MODIFY in Affected Files

### What does NOT change:
- `Project` type (image still required, no schema change)
- The 7 image files in `src/images/projects/`
- The 7 original projects' fields (name, description, tags, image, urls, year)
- Spec 14 contract (renderer is data-order-driven)

### Regression risk:
- `src/data/en/projects.ts` and `src/data/es/projects.ts` — content + ordering changes; verify TS compiles, all 8 entries render, jr-toolkit appears first, slider step count adapts (spec 14 already supports N projects)
- Low overall — purely additive + reordering, no type/contract changes

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — 7 projects EN/ES + image migration from public/screenshots/ |
| 1.2 | 2026-05-09 | Iterated | jr-iterate-spec — add jr-toolkit first; reverse the original 7; placeholder image reuse |
| 1.2 | 2026-05-09 | Implemented | jr-exe-spec — jr-toolkit pinned first + 7 originals reversed in EN/ES; `astro check` clean (0 errors) |
