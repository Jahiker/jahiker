# Fix: Favicon Regression After v1.1 BASE_URL Change

**Status:** Resolved | **Date:** 2026-05-09 | **Affected files:** `src/layouts/Layout.astro` (1 line)
**Related spec:** `specs/02-astro-i18n-layout.md` (v1.1 hotfix)

---

## Original description

After implementing `specs/02-astro-i18n-layout.md` v1.1, the favicon stopped rendering in the browser. The v1.1 change replaced `${base}/favicon.svg` with `${base}favicon.svg` in `src/layouts/Layout.astro:62` under the assumption that `import.meta.env.BASE_URL` already includes a trailing slash.

## Root cause

In **Astro 4.15.8** with `base: '/jahiker'` configured in `astro.config.mjs`, `import.meta.env.BASE_URL` resolves to **`/jahiker` (no trailing slash)**. The v1.1 assumption was incorrect.

Effect on built output:

| Variant | Built URL | Status |
|---|---|---|
| v1.0 — `${base}/favicon.svg` | `/jahiker/favicon.svg` | ✅ Correct |
| v1.1 — `${base}favicon.svg`  | `/jahikerfavicon.svg`  | ❌ Broken (404) |

This was confirmed by inspecting `dist/index.html` after `npm run build`.

## Applied solution

Reverted line 62 to the v1.0 pattern with traceability comment:

```diff
- <link rel="icon" type="image/svg+xml" href={`${base}favicon.svg`} />
+ <link rel="icon" type="image/svg+xml" href={`${base}/favicon.svg`} />
```

Also corrected `specs/02-astro-i18n-layout.md` FR-01 ACs, which contained the same incorrect assumption.

## Modified files

| File | Change |
|---|---|
| `src/layouts/Layout.astro:62` | Restored `${base}/favicon.svg` (with explicit `/`) |
| `specs/02-astro-i18n-layout.md` | FR-01 ACs rewritten to reflect actual `BASE_URL` behavior; hotfix history row added |

## Regression verification

- ✅ `npm run build` succeeds with 0 errors
- ✅ Built `dist/index.html` shows `href="/jahiker/favicon.svg"` (single slash)
- ✅ Other URL composers in `Layout.astro` and `Hero.astro` are untouched — their pre-existing bugs (see follow-up below) remain at the same state as before this hotfix

## Follow-up — pre-existing broken URLs (NOT fixed in this hotfix)

Investigation surfaced **3 additional URLs** that have been broken since spec 02 v1.0 — they share the same incorrect `${base}<asset>` pattern (without explicit `/`) and produce concatenated paths in the built HTML:

| Location | Built URL | Impact |
|---|---|---|
| `src/components/sections/Hero.astro:10` (resume CV) | `/jahikerdocs/JAHIKER-CV-2026.pdf` | Resume download 404 |
| `src/layouts/Layout.astro:24` (hreflang ES) | `https://jahiker.github.io/jahikeres/` | SEO i18n broken |
| `src/layouts/Layout.astro:25` (OG image) | `https://jahiker.github.io/jahikerimages/avatar.jpeg` | OG/Twitter card image 404 in shares |

These were intentionally left out of scope per the user's chosen hotfix scope. Suggested next action: open a separate fix or iterate spec 02 → v1.2 to apply the same `${base}/<asset>` correction to all three locations and add a regression AC covering all `BASE_URL`-composed asset paths.
