# Hero Section

**Status:** Implemented | **Version:** 1.1 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.7 — E3 · Sections
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/05-content-data.md (Implemented ✅)

---

## Summary

Hero section with gradient-grid background, large display name, tagline, and CTA button. All copy sourced from locale content data. Includes secondary GitHub/LinkedIn links and the existing Banner marquee.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/sections/Hero.astro` | MODIFY | Full rewrite — locale-aware content, display name, tagline, CTA, Banner |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Partial — hardcoded text + Banner | jr-exe-spec (spec 00) |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — locale-aware hero with greeting, name, tagline, CTA, social links |
