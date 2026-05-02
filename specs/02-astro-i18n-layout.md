# Astro i18n Config + Layout.astro + A11y Init Script

**Status:** Implemented | **Version:** 1.0 | **Date:** 2026-05-01 | **Author:** jr-exe-spec
**Roadmap:** #0.3 — E0 · Foundation
**Depends on:** specs/00-project-cleanup.md (Verified ✅), specs/01-types-tailwind-global.md (Implemented ✅)

---

## Summary

Configures Astro's built-in i18n routing (`/` EN, `/es/` ES) with `prefixDefaultLocale: false`. Updates `Layout.astro` with `lang` and `description` props, a11y localStorage init script (prevents flash on reload), and correct BASE_URL favicon path. Creates the Spanish page at `src/pages/es/index.astro`.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `astro.config.mjs` | MODIFIED | Added `i18n` block: `defaultLocale: 'en'`, `locales: ['en', 'es']`, `prefixDefaultLocale: false` |
| `src/layouts/Layout.astro` | MODIFIED | Added `lang` + `description` props; dynamic `<html lang>`, a11y inline init script, BASE_URL favicon |
| `src/pages/index.astro` | MODIFIED | Passes `lang="en"` + `description` to Layout |
| `src/pages/es/index.astro` | CREATED | Spanish page — same sections, `lang="es"`, Spanish title + description |

---

## Key decisions

- **`prefixDefaultLocale: false`** — English at `/jahiker/` (no `/en/` prefix), Spanish at `/jahiker/es/`. Cleaner URLs for the primary audience.
- **A11y init script uses `try/catch`** — `localStorage` access can throw in privacy mode; silent fail is correct behavior.
- **ES page shares EN components for now** — will receive real ES data when specs 05–08 are implemented.
- **`description` defaults** in Layout to the EN tagline — each page overrides it explicitly.

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Implemented | jr-exe-spec — i18n config, Layout lang/desc/a11y, ES page created |
