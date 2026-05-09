# Hero Section

**Status:** Implemented | **Version:** 1.2 | **Date:** 2026-05-09 | **Author:** jr-iterate-spec
**Roadmap:** #1.7 — E3 · Sections
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/03-accessibility-mode.md (Implemented ✅), specs/05-content-data.md (Implemented ✅)

---

## Summary

Hero section with gradient-grid background, large display name, tagline, and CTA button. All copy sourced from locale content data. Includes secondary GitHub/LinkedIn links and the existing Banner marquee.

> 🔄 Updated in v1.2: documents the a11y-mode contrast override for the primary CTA button.

---

## Functional Requirements

### FR-01 — A11y mode CTA contrast
> ✨ New in v1.2

The primary CTA button (`'See my work'` / `'Ver mi trabajo'`) renders with `bg-primary` (`#d5ff40`) and `text-black` at rest. In accessibility mode (`html[data-a11y="true"]`), the global a11y override at [src/styles/global.css](src/styles/global.css) forces `color: #ffffff` on all `<a>` elements, which produces low-contrast white text on the bright primary green background. This FR re-asserts black text for any button using the `bg-primary` token while a11y mode is active.

**AC-01.1** When `html[data-a11y="true"]` is set, every element carrying the `.bg-primary` class renders its text in `#000000` (CSS rule must use `!important` to defeat the existing a11y `<a>` color rule).

**AC-01.2** The override applies to `<a>`, `<button>`, and any other element using `.bg-primary` — it is class-based, not tag-based, so future primary-styled buttons inherit the correct contrast automatically.

**AC-01.3** Outside a11y mode the rule has no effect — the CTA continues to use the Tailwind `text-black bg-primary hover:bg-white` behavior already specified.

**AC-01.4** Hover state in a11y mode is unaffected by this rule (hover transitions are already disabled to ~0ms by the existing a11y rule in [src/styles/global.css](src/styles/global.css)).

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/sections/Hero.astro` | (existing) | No change in v1.2 — already passes `text-black bg-primary` in v1.1 |
| `src/styles/global.css` | MODIFY | Add a single rule: `html[data-a11y="true"] .bg-primary { color: #000000 !important; }` placed alongside the other `[data-a11y="true"]` overrides, with traceability comment `/* spec: specs/11-hero-section.md */` |

---

## Delta v1.2

### What changes from v1.1:
- New FR-01 declares the a11y-mode contrast contract for `.bg-primary` buttons (resolves the white-on-yellow-green readability issue)
- `src/styles/global.css` gets one new rule (governed by spec 03 but declared as a requirement here)

### What does NOT change:
- `Hero.astro` markup, classes, copy, locale logic
- Any other a11y rule in `global.css`
- Spec 03 contract — only adds a new override line in the same file

### Regression risk: Low — single CSS rule, scoped to `html[data-a11y="true"] .bg-primary`. Has no effect outside a11y mode and only changes text color (not layout, hover, or transitions). Affects every site-wide `.bg-primary` element in a11y mode (currently only the Hero CTA).

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Partial — hardcoded text + Banner | jr-exe-spec (spec 00) |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — locale-aware hero with greeting, name, tagline, CTA, social links |
| 1.2 | 2026-05-09 | Iterated | jr-iterate-spec — a11y mode forces black text on `.bg-primary` buttons (CTA readability) |
| 1.2 | 2026-05-09 | Implemented | jr-exe-spec — added `html[data-a11y="true"] .bg-primary { color: #000 !important }` to global.css; `astro check` clean |
