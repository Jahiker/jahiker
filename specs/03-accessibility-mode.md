# Accessibility Mode (CSS vars + data-a11y + OS media queries)

**Status:** Implemented | **Version:** 1.0 | **Date:** 2026-05-01 | **Author:** jr-exe-spec
**Roadmap:** #0.4 — E0 · Foundation
**Depends on:** specs/01-types-tailwind-global.md (Implemented ✅), specs/02-astro-i18n-layout.md (Implemented ✅)

---

## Summary

Implements the accessibility mode: CSS overrides under `html[data-a11y="true"]` force maximum contrast (`#000000` bg / `#ffffff` text) and disable all animations. OS-level `prefers-reduced-motion` and `prefers-contrast` media queries are also handled in CSS. A toggle button in the Header activates/deactivates the mode and persists the choice in `localStorage`. The init script in `Layout.astro` (spec 02) restores the mode before first paint to prevent flash.

---

## How it works

```
User clicks toggle button
  → JS sets data-a11y="true" on <html>
  → CSS [html[data-a11y="true"]] overrides kick in instantly
  → localStorage.setItem('A11Y_V1', 'true')

Page reload
  → Layout.astro inline script reads localStorage
  → Sets data-a11y="true" on <html> before first paint
  → No flash of default styles
```

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/styles/global.css` | MODIFIED | Added a11y CSS blocks: `[data-a11y="true"]` overrides, `prefers-reduced-motion`, `prefers-contrast` |
| `src/components/global/Header.astro` | MODIFIED | Added a11y toggle button (aria-label, aria-pressed, sun/burst SVG icon) + toggle script |

---

## CSS approach

- **`animation-duration: 0.01ms`** instead of `animation: none` — preserves `animationend` JS callbacks while being visually instant
- **Element-level selectors** (`body`, `header`, `section`, etc.) for background overrides — more reliable than a single `*` override with Tailwind's utility classes
- **`prefers-contrast: more`** targets OS high-contrast mode (Windows/macOS accessibility settings)

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Implemented | jr-exe-spec — global.css a11y blocks + Header toggle button + script |
