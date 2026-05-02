# Experience Section + TimelineItem UI

**Status:** Implemented | **Version:** 1.1 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.11 — E3 · Sections
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/08-experience-data.md (Implemented ✅)

---

## Summary

Experience section with vertical timeline layout. Two-column grid on desktop (period left, content right) with a `primary` dot connector. Stack pills per item. Locale-aware data from `src/data/{locale}/experience.ts`.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/sections/Experience.astro` | CREATE | Timeline — period col + role/company/description/stack col |
| `src/pages/index.astro` | MODIFY | Added `<Experience />` |
| `src/pages/es/index.astro` | MODIFY | Added `<Experience />` |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — two-column timeline, primary dot, stack pills, locale-aware |
