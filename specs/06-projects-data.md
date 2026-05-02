# Projects Data Files — EN + ES + Image Migration

**Status:** Implemented | **Version:** 1.1 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.2 — E1 · Data layer
**Depends on:** specs/01-types-tailwind-global.md (Implemented ✅)

---

## 1. Executive Summary

Create the typed projects data files for EN and ES locales with the 7 curated portfolio projects. Images are migrated from `public/screenshots/` to `src/images/projects/` so Astro can optimize them at build time. Both locale files share the same image imports but have locale-specific descriptions.

---

## 2. Context and Motivation

Project cards are the centerpiece of the portfolio. All project copy and metadata must be in typed data files so the Projects section component can render them without any hardcoded strings. Moving images to `src/` enables Astro's built-in `<Image />` optimization (WebP conversion, lazy loading, width/height attributes to prevent CLS).

---

## 3. Goals

- [ ] Copy the 7 project screenshots from `public/screenshots/` to `src/images/projects/`
- [ ] Create `src/data/en/projects.ts` with EN descriptions for all 7 projects
- [ ] Create `src/data/es/projects.ts` with ES descriptions for all 7 projects
- [ ] Both files typed as `Project[]` from `src/data/types.ts`
- [ ] Each project includes: name, description, tags, image (imported), siteUrl, sourceCodeUrl, year

---

## 4. Out of Scope

- The Projects section component that renders this data (spec 14)
- Pagination or filtering logic
- Project detail pages (spec p2-04)

---

## 5. Functional Requirements

### FR-01: Image Migration

Copy project screenshots to `src/images/projects/` so Vite can process them as static assets with Astro image optimization.

**Acceptance Criteria:**
- [ ] AC-01: The following files exist in `src/images/projects/`: `pugstagram.jpg`, `pokedex.png`, `platzi-conf-merch.png`, `cashflow.png`, `editor-vue.png`, `fly-booking.png`, `weather-react.png`
- [ ] AC-02: Original files in `public/screenshots/` are left untouched (non-destructive copy)

### FR-02: EN Projects File

**Acceptance Criteria:**
- [ ] AC-01: File exports a named constant `projects` typed as `Project[]`
- [ ] AC-02: Contains exactly 7 projects in this order: Pugstagram, Pokédex, Platzi Conf Merch, Cashflow App, Vue Image Editor, Fly Booking, Weather App
- [ ] AC-03: Each project has `name`, `description` (EN, 1–2 sentences), `tags` (lowercase strings), `image` (imported from `src/images/projects/`), `siteUrl`, `sourceCodeUrl` (string or null), `year`
- [ ] AC-04: Tags are lowercase, concise technology names (e.g. `"react"`, `"vue"`, `"typescript"`)
- [ ] AC-05: File includes traceability comment `// spec: specs/06-projects-data.md`

### FR-03: ES Projects File

**Acceptance Criteria:**
- [ ] AC-01: File exports a named constant `projects` typed as `Project[]`
- [ ] AC-02: Same 7 projects in the same order as EN, same image imports, same tags, same siteUrl/sourceCodeUrl/year
- [ ] AC-03: `description` field is translated to Spanish for each project
- [ ] AC-04: File includes traceability comment `// spec: specs/06-projects-data.md`

---

## 6. Non-Functional Requirements

- **Type safety:** Both files must satisfy `Project[]` — TS compilation must pass
- **Image optimization:** Images in `src/images/projects/` are processed by Vite/Astro — do not put them in `public/`

---

## 7. Technical Design

**Involved Components:**

| Component | Role | Required Changes |
|---|---|---|
| `src/data/types.ts` | `Project` interface | None — already implemented |
| `public/screenshots/` | Source images | Read only (non-destructive) |
| `src/images/projects/` | Optimized image assets | COPY 7 files |
| `src/data/en/projects.ts` | EN projects data | CREATE |
| `src/data/es/projects.ts` | ES projects data | CREATE |

**Data Flow:**
```
src/images/projects/*.{png,jpg}
  → imported in src/data/en/projects.ts (as ImageMetadata via import)
  → same imports reused in src/data/es/projects.ts
  → consumed by Projects section component (spec 14)
```

**Database Considerations:** No DB changes.
**APIs / Integrations:** No API changes.

---

## 8. Edge Cases and Error Handling

| Case | Expected Behavior |
|---|---|
| Image file missing after copy | Build-time import error — caught immediately |
| `sourceCodeUrl: null` for private projects | Rendered as no link in component (spec 14 handles this) |

---

## 9. Dependencies

- **specs/01-types-tailwind-global.md** — Implemented ✅ (`Project` interface defined)
- No external packages needed

---

## 11. Additional Notes

- `siteUrl` values come from the live React portfolio at `https://jahiker.github.io/jahiker/`
- Where a live site is unavailable, use the GitHub repo URL as `siteUrl`
- `sourceCodeUrl: null` for projects whose source code is private

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/images/projects/pugstagram.jpg` | COPY | Project screenshot |
| `src/images/projects/pokedex.png` | COPY | Project screenshot |
| `src/images/projects/platzi-conf-merch.png` | COPY | Project screenshot |
| `src/images/projects/cashflow.png` | COPY | Project screenshot |
| `src/images/projects/editor-vue.png` | COPY | Project screenshot |
| `src/images/projects/fly-booking.png` | COPY | Project screenshot |
| `src/images/projects/weather-react.png` | COPY | Project screenshot |
| `src/data/en/projects.ts` | CREATE | EN projects data — 7 projects |
| `src/data/es/projects.ts` | CREATE | ES projects data — 7 projects |

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — 7 projects EN/ES + image migration from public/screenshots/ |
