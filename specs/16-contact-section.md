# Contact / CTA Section

**Status:** Verified | **Version:** 1.1 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.12 — E3 · Sections
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/05-content-data.md (Implemented ✅)

---

## Summary

Full-width CTA contact section with large heading, email as primary `text-primary` link, and LinkedIn/GitHub as secondary outline pill buttons. Subheading localised. `gradient-grid` background for visual impact.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/sections/Contact.astro` | CREATE | Contact CTA — heading, email link, LinkedIn + GitHub buttons |
| `src/pages/index.astro` | MODIFY | Added `<Contact />` |
| `src/pages/es/index.astro` | MODIFY | Added `<Contact />` |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — heading, email CTA primary, LinkedIn/GitHub secondary, gradient-grid |
| 1.1 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (8/8) · Gaps: 0 · CTA con micro-interaction en email arrow |
