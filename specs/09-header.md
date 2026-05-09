# Header — Nav + Lang Switcher + A11y Toggle Button

**Status:** Verified | **Version:** 1.3 | **Date:** 2026-05-09 | **Author:** jr-iterate-spec
**Roadmap:** #1.5 — E2 · Global UI
**Depends on:** specs/02-astro-i18n-layout.md (Verified ✅), specs/03-accessibility-mode.md (Verified ✅), specs/05-content-data.md (Verified ✅)

---

## Summary

Full Header with sticky layout, locale-aware nav links from content data, EN/ES lang switcher, GitHub/LinkedIn actions, a11y toggle, `JKR.` SVG logo, and a collapsible mobile menu.

> 🔄 Updated in v1.3: aligns spec with current implementation after `feat: update logo` (commit 13f571d): logo is now a `JKR.` SVG (no avatar, no full name); a11y toggle uses Heroicons `AdjustmentsHorizontalIcon` (no person-icon); FR-02 ambiguous "active locale" bullet removed.

---

## Functional Requirements

### FR-01: Logo area — `JKR.` SVG
> 🔄 Modified in v1.3: full rewrite — replaces the v1.2 avatar+name design with the current `JKR.` SVG-only logo (changed in commit 13f571d)

**AC-01.1** Logo is rendered as an inline `<svg>` containing the text `JKR.` — no `<img>` element, no avatar, no "JAHIKER ROJAS" text.

**AC-01.2** Font used inside the SVG `<text>` is `Basement, sans-serif` at `font-weight: 700`, `font-size: 80`.

**AC-01.3** The trailing `.` of `JKR.` is rendered in a separate `<tspan>` with `fill="#D5FF40"` (the `primary` token color), while the rest of `JKR` uses `currentColor` (inherits from the parent `<a>`'s `text-white`).

**AC-01.4** The SVG is sized via Tailwind class `h-7 w-auto` and lives inside an `<a href={enUrl}>` with `aria-label="Jahiker Rojas — home"`.

**AC-01.5** On hover the parent `<a>` switches `text-white → text-primary` via `hover:text-primary transition-colors duration-200`. The trailing `.` does not animate (it's hard-coded `#D5FF40`).

### FR-02: Nav links
> 🔄 Modified in v1.3: removed ambiguous "active locale highlighted in primary" bullet — nav links are anchor links (`#about`, `#skills`, etc.) and have no active-state highlight; the lang switcher (FR-03) is what indicates the active locale

- Locale-aware anchor links from `content.nav` (label + href pairs)
- Rendered as a horizontal `<nav>` on desktop and stacked inside the mobile menu
- Uses default text color `text-white/60` with `hover:text-white` — no per-link active state

### FR-03: Lang switcher
- EN / ES links using `getRelativeLocaleUrl('en'|'es', '/')`
- Active locale highlighted in `primary` (inactive locale uses `text-white/40 hover:text-white`)
- `aria-current="true"` is set on the active locale link

### FR-04: A11y toggle icon
> 🔄 Modified in v1.3: documents the actual icon — Heroicons `AdjustmentsHorizontalIcon` (sliders/tuner), not the person-with-arms-spread icon described in v1.2

**AC-04.1** Both desktop button (`#a11y-toggle`) and mobile button (`#a11y-toggle-mobile`) render the Heroicons `AdjustmentsHorizontalIcon` SVG — three horizontal lines with circular nodes, evoking accessibility/customization sliders.

**AC-04.2** SVG path: `M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75…` (the standard Heroicons outline `adjustments-horizontal` path).

**AC-04.3** Button has `aria-label="Toggle high contrast accessibility mode"` and `aria-pressed` synced via the toggle script (line 222-243).

**AC-04.4** Both desktop and mobile toggle buttons share the same click handler — clicking either flips `data-a11y` on `<html>`, persists to `localStorage.A11Y_V1`, and updates `aria-pressed` on both buttons via `syncToggles()`.

> Note: The original spec v1.2 wording referred to the WAI universal accessibility person-icon. The current implementation uses the AdjustmentsHorizontalIcon instead — a stylistic choice that prioritizes consistency with the rest of the icon set (Heroicons). If brand guidelines later require the universal a11y symbol, swap the SVG path inside both buttons.

### FR-05: Mobile menu
- Hamburger toggle (`#mobile-menu-toggle`) with open/close icon swap (`#icon-menu` ↔ `#icon-close`, via `classList.toggle('hidden')`)
- Toggling sets `aria-expanded` on the button and `aria-hidden` on the menu container
- Menu auto-closes on click of any internal anchor link (`a[href^="#"]`)

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/global/Header.astro` | (existing) | No code change in v1.3 — spec is being aligned to the existing implementation. Header already follows multi-spec convention (`// spec: specs/03-accessibility-mode.md, specs/09-header.md` — applied in spec 02 v1.3) |
| `public/images/avatar.jpeg` | (existing) | Still present in repo (used by spec 18 OG image at `${siteOrigin}${base}/images/avatar.jpeg`). NOT used by Header anymore |

---

## Delta v1.3

### What changes from v1.2:
- **FR-01 fully rewritten** to describe the current `JKR.` SVG logo (5 ACs added). Drops the v1.2 `<img>` avatar + "JAHIKER ROJAS →" text description that no longer matches the code (changed in commit `13f571d feat: update logo`)
- **FR-02 simplified** — removed the "active locale highlighted in primary" bullet (was ambiguous; nav links don't have a per-link active state, only the lang switcher does)
- **FR-04 fully rewritten** to describe the actual `AdjustmentsHorizontalIcon` (Heroicons) used in both desktop and mobile a11y toggle buttons (4 ACs). Drops the "person-with-arms-spread" wording from v1.2 that didn't match the implementation
- Status returns to Draft pending re-execution
- **0 lines of code changed** — this iteration is documentation-only

### What does NOT change:
- `src/components/global/Header.astro` — no code edits in v1.3
- FR-03 (lang switcher) — already correct
- FR-05 (mobile menu) — already correct
- A11y toggle JavaScript logic — unchanged
- Multi-spec header comment in `Header.astro:2` — already correct after spec 02 v1.3
- `public/images/avatar.jpeg` — file remains for OG image use (spec 18)

### Regression risk: None
- Documentation-only iteration: no code is touched
- Resolves all 3 GAPs surfaced by jr-verify-spec on 2026-05-09 by aligning the spec with the existing implementation rather than changing the code
- Future renderings of the logo or a11y icon do not change

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

> Historical note (2026-05-09): the v1.2 changes were superseded by commit `13f571d feat: update logo` and a parallel a11y icon swap. v1.3 aligns the spec with the current state.

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Partial — a11y toggle only | jr-exe-spec (spec 03) |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — nav links, lang switcher, responsive mobile menu |
| 1.2 | 2026-05-02 | Iterated | jr-iterate-spec — avatar in logo area, accessibility icon on a11y toggle |
| 1.2 | 2026-05-09 | Verified-Partial | jr-verify-spec — Coverage: 64% (7/11) · Gaps: 3 (FR-01 logo es solo `JKR.` SVG sin avatar tras commit 13f571d; FR-04 icon es AdjustmentsHorizontalIcon no person-icon; FR-02 wording ambiguo "active locale" en nav) — recomienda iteración v1.3 |
| 1.3 | 2026-05-09 | Iterated | jr-iterate-spec — align spec with current implementation: FR-01 rewritten for `JKR.` SVG logo, FR-04 rewritten for AdjustmentsHorizontalIcon, FR-02 ambiguous bullet removed; doc-only |
| 1.3 | 2026-05-09 | Implemented | jr-exe-spec — N/A: doc-only iteration, 0 code changes |
| 1.3 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (5 FRs alineados con código actual: FR-01 JKR. SVG ✅, FR-02 nav sin active state ✅, FR-03 lang switcher ✅, FR-04 AdjustmentsHorizontalIcon ✅, FR-05 mobile menu ✅) · Gaps: 0 |
