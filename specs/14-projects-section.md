# Projects Section + ProjectCard UI + Glide.js Slider

**Status:** Implemented | **Version:** 1.1 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.10 — E3 · Sections
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/06-projects-data.md (Implemented ✅)

---

## Summary

Projects section with Glide.js slider (3→2→1 perView responsive), locale-aware data, styled prev/next controls in heading bar, and a ProjectCard UI component with grayscale image hover, tags, and action links.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/ui/ProjectCard.astro` | CREATE | Card — image (grayscale hover), name, year, description, tags, links |
| `src/components/sections/Work.astro` | MODIFY | Full rewrite — Glide.js slider with real project data, locale-aware |
| `src/pages/index.astro` | MODIFY | Import alias Work → Projects |
| `src/pages/es/index.astro` | MODIFY | Import alias Work → Projects |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Partial — dummy Glide.js placeholder | jr-exe-spec (spec 00) |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — full slider with ProjectCard, real data, responsive breakpoints |
