# SEO Meta + Sitemap Config + Responsive QA

**Status:** Verified | **Version:** 1.2 | **Date:** 2026-05-09 | **Author:** jr-iterate-spec
**Roadmap:** #1.14 — E4 · Pages & SEO
**Depends on:** specs/02-astro-i18n-layout.md (Verified ✅ — v1.3 establishes the multi-spec traceability convention applied here), specs/17-pages-assembly.md (Verified ✅)

---

## Summary

Full SEO layer added to Layout.astro: Open Graph, Twitter Card, canonical URL, hreflang alternates (EN/ES + x-default). robots.txt created. Sitemap integration configured with i18n locales for hreflang entries in sitemap.

> 🔄 Updated in v1.2: applies the multi-spec traceability convention (spec 02 v1.3 FR-02) to `astro.config.mjs:9` — header now lists spec 18 alongside specs 00 and 02 since this spec adds the `sitemap()` integration.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/layouts/Layout.astro` | (existing) | v1.1 — OG tags, Twitter Card, canonical, hreflang, robots meta. Already follows multi-spec convention after spec 02 v1.3 |
| `public/robots.txt` | (existing) | v1.1 — Allow all + sitemap pointer |
| `astro.config.mjs` | MODIFY | v1.2 — update `// spec:` header to add `specs/18-seo-sitemap-qa.md` (file already had sitemap() since v1.1; only the header needs alignment) |

---

## Functional Requirements

### FR-01 — Multi-spec header on `astro.config.mjs`
> ✨ New in v1.2

`astro.config.mjs` is touched by three specs: spec 00 (project cleanup — initial config), spec 02 (i18n block), and spec 18 (sitemap integration). Per the multi-spec traceability convention established in spec 02 v1.3 (FR-02 / AC-02.5), the file's `// spec:` header must list all contributing specs in numeric order.

**AC-01.1** [astro.config.mjs:9](astro.config.mjs#L9) MUST contain exactly:
```ts
// spec: specs/00-project-cleanup.md, specs/02-astro-i18n-layout.md, specs/18-seo-sitemap-qa.md
```

**AC-01.2** No other line of `astro.config.mjs` is modified by this iteration. The `i18n` block (spec 02) and the `sitemap()` integration (spec 18) remain untouched.

**AC-01.3** This change is doc-only — `npm run build` and `astro check` MUST continue to pass with 0 errors after the edit.

---

## Delta v1.2

### What changes from v1.1:
- New FR-01 documents and enforces the multi-spec header on `astro.config.mjs`
- Single-line edit at [astro.config.mjs:9](astro.config.mjs#L9):
  ```diff
  - // spec: specs/00-project-cleanup.md, specs/02-astro-i18n-layout.md
  + // spec: specs/00-project-cleanup.md, specs/02-astro-i18n-layout.md, specs/18-seo-sitemap-qa.md
  ```
- `Layout.astro` and `robots.txt` are unchanged (already correct after spec 02 v1.3 / spec 18 v1.1 respectively)
- Status returns to Draft pending re-execution

### What does NOT change:
- All v1.1 SEO meta tags, robots.txt content, sitemap() i18n config
- Any non-comment line in `astro.config.mjs`
- Build output, dist sitemap structure, or any HTML/XML

### Regression risk: None
- Single-line comment edit, zero impact on runtime, build, or output
- Resolves the GAP-01 surfaced by jr-verify-spec on 2026-05-09

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — OG/Twitter/canonical/hreflang in Layout, robots.txt, sitemap i18n |
| 1.1 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (9/9) · Gaps: 1 trazabilidad (astro.config.mjs:9 header debería incluir specs/18 per nueva convención FR-02 de spec 02 v1.3) |
| 1.2 | 2026-05-09 | Iterated | jr-iterate-spec — apply multi-spec traceability convention to astro.config.mjs:9 header (resolves GAP-01 from v1.1 verify) |
| 1.2 | 2026-05-09 | Implemented | jr-exe-spec — astro.config.mjs:9 header updated to `00, 02, 18`; `astro check` clean |
| 1.2 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (3/3) · Gaps: 0 · GAP-01 from v1.1 resolved |
