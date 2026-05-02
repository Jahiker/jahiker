# Header — Nav + Lang Switcher + A11y Toggle Button

**Status:** Implemented | **Version:** 1.2 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.5 — E2 · Global UI
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/03-accessibility-mode.md (Implemented ✅), specs/05-content-data.md (Implemented ✅)

---

## Summary

Full Header with sticky layout, locale-aware nav links from content data, EN/ES lang switcher, GitHub/LinkedIn actions, a11y toggle with accessibility icon, circular avatar next to logo, and a collapsible mobile menu.

---

## Functional Requirements

### FR-01: Logo area with avatar
> 🔄 Modified in v1.2: added circular avatar image next to name

- Logo shows a small circular avatar (`public/images/avatar.jpeg`) followed by "JAHIKER ROJAS →"
- Avatar is 28×28px, `rounded-full`, `object-cover`, with a thin `primary` ring

### FR-02: Nav links
- Locale-aware anchor links from `content.nav`
- Active locale highlighted in `primary` color

### FR-03: Lang switcher
- EN / ES links using `getRelativeLocaleUrl`
- Active locale highlighted in `primary`

### FR-04: A11y toggle icon
> 🔄 Modified in v1.2: icon replaced — was a sun/starburst (theme toggle), now a person/accessibility symbol (universal a11y icon)

- Button uses a person-with-arms-spread SVG icon (universal accessibility symbol)
- Synced across desktop and mobile instances

### FR-05: Mobile menu
- Hamburger toggle with open/close icon swap
- Closes automatically on anchor link click

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/global/Header.astro` | MODIFY | Full rewrite — nav, lang switcher, mobile menu, a11y toggle |

---

## Delta v1.2

### What changes from v1.1:
- Logo area: adds circular `<img>` for `avatar.jpeg` (28px, `rounded-full`, `ring-1 ring-primary`)
- A11y toggle icon: replaced sun SVG with person/accessibility SVG in both desktop and mobile buttons

### What does NOT change:
- Nav links, lang switcher, GitHub/LinkedIn buttons
- Mobile menu behavior and script logic
- A11y toggle JS functionality

### Regression risk: Low — visual-only changes to two isolated elements

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Partial — a11y toggle only | jr-exe-spec (spec 03) |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — nav links, lang switcher, responsive mobile menu |
| 1.2 | 2026-05-02 | Iterated | jr-iterate-spec — avatar in logo area, accessibility icon on a11y toggle |
