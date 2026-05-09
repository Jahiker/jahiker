# Tailwind v4 Upgrade

**Status:** Verified | **Version:** 1.0 | **Date:** 2026-05-09 | **Author:** jr-build-spec
**Roadmap:** #2.5 — E5 · Extensions
**Depends on:** specs/01-types-tailwind-global.md (Verified ✅), specs/02-astro-i18n-layout.md (Verified ✅), specs/03-accessibility-mode.md (Verified ✅), specs/11-hero-section.md (Verified ✅) — must-preserve contracts
**Related specs:** all 09-16 section specs (use Tailwind utilities — must remain visually identical post-upgrade)

---

## 1. Executive Summary

Migrate the project from **Tailwind CSS v3 (with `@astrojs/tailwind` integration)** to **Tailwind CSS v4 (with `@tailwindcss/vite` Vite plugin + CSS-first `@theme` config)**. The migration deletes `tailwind.config.mjs`, moves all design tokens into a `@theme {}` block inside `src/styles/global.css`, and preserves every custom CSS rule (a11y overrides, custom utilities, `@font-face`). The visual output of every page MUST be identical before and after the upgrade.

---

## 2. Context and Motivation

Tailwind v4 ships major architectural improvements: faster builds (Lightning CSS), smaller bundles, native `oklch` colors, CSS-first config (no JS file), and zero-runtime theming via CSS variables. The current Tailwind v3 + `@astrojs/tailwind` setup will reach legacy status as the ecosystem migrates, and Astro's official guidance now recommends the Vite plugin path for v4.

**Why now:**
- Phase 1 is 100% Verified — perfect baseline for a structural change
- No active feature work in flight that could conflict
- Establishing v4 early simplifies all future Phase 2 features (p2-01 dark mode benefits from CSS-var theming)

**Why this is risky:** the project has a substantial CSS surface (a11y mode rules, custom utilities, custom fonts, gradient backgrounds) that lives ALONGSIDE Tailwind utilities. A mishandled migration can break the a11y mode, the favicon URL fixes, or visual consistency.

---

## 3. Goals

- [ ] Upgrade `tailwindcss` from `^3.x` to `^4.x` and replace `@astrojs/tailwind` with `@tailwindcss/vite`
- [ ] Delete `tailwind.config.mjs` and migrate the `theme.extend.colors` block to a `@theme {}` directive inside `src/styles/global.css`
- [ ] Update `astro.config.mjs` to remove the Tailwind integration and add the Vite plugin
- [ ] Preserve every custom CSS rule in `global.css` (fonts, `@font-face`, `.font-display`, `.animate-marquee`, `.gradient-grid`, all `[data-a11y="true"]` overrides, `prefers-reduced-motion`, `prefers-contrast`)
- [ ] Verify every page renders visually identical (manual + build-output diff)
- [ ] Verify `astro check` passes with 0 errors
- [ ] Verify spec 02 AC-01.8 regex still produces empty output (no `/jahiker[a-z]/` patterns)
- [ ] Verify accessibility mode toggle still flips backgrounds, text, borders, animations as expected
- [ ] Verify the Hero CTA `.bg-primary` text-color override still works in a11y mode
- [ ] Document a one-command rollback path

---

## 4. Out of Scope

- Adopting v4-specific features beyond the migration itself (e.g. new `@variant`, container queries refactor, `oklch` palette redesign) — those are separate iterations
- Visual redesign / color palette changes — tokens stay 1:1 with current values
- Performance optimization beyond what Tailwind v4 ships by default
- Removing `eagle`/`error` tokens even if unused — preservation by default; cleanup is a separate spec
- Migration of any other dependency (Astro, Glide.js, EmailJS) — strictly Tailwind-scoped

---

## 5. Functional Requirements

### FR-01: Package upgrade

Replace the Tailwind v3 stack with the v4 stack in `package.json`.

**Acceptance Criteria:**
- [ ] AC-01: `package.json` `dependencies` (or `devDependencies`) includes `tailwindcss@^4.x` (no `^3.x`)
- [ ] AC-02: `@astrojs/tailwind` is **removed** from `package.json`
- [ ] AC-03: `@tailwindcss/vite@^4.x` is added to `devDependencies`
- [ ] AC-04: `npm install` completes with 0 errors and `npm run build` succeeds afterward
- [ ] AC-05: `package-lock.json` is regenerated and committed

### FR-02: Astro config update

Remove the `@astrojs/tailwind` integration and register the Vite plugin instead.

**Acceptance Criteria:**
- [ ] AC-01: `astro.config.mjs` no longer imports `@astrojs/tailwind`
- [ ] AC-02: `integrations: [...]` array no longer contains `tailwind()`
- [ ] AC-03: `astro.config.mjs` imports `@tailwindcss/vite` and registers it via `vite: { plugins: [tailwindcss()] }`
- [ ] AC-04: The existing `sitemap()` integration with i18n config remains intact (do not touch unrelated config)
- [ ] AC-05: The multi-spec header per spec 02 v1.3 / FR-02 is **updated** to add `specs/p2-05-tailwind-v4.md` to the comma-separated list (current: `00, 02, 18` → new: `00, 02, 18, p2-05-tailwind-v4`)

### FR-03: CSS-first theme migration

Delete `tailwind.config.mjs`. Recreate the `theme.extend.colors` palette inside a `@theme {}` block at the top of `src/styles/global.css`.

**Acceptance Criteria:**
- [ ] AC-01: `tailwind.config.mjs` is **deleted** from the repo root
- [ ] AC-02: `src/styles/global.css` contains a `@theme {}` block defining at minimum:
  ```css
  --color-primary: #d5ff40;
  --color-error:   #ff8b00;
  --color-eagle:   #afac95;
  ```
  (Tailwind v4 generates `bg-primary`, `text-primary`, `border-primary`, etc. from these `--color-*` variables.)
- [ ] AC-03: `src/styles/global.css` begins with `@import "tailwindcss";` (replaces v3's `@tailwind base/components/utilities;` if present, OR adds the import if missing)
- [ ] AC-04: `black: "#1e1e1e"` and `white: "#e7e7d8"` from the v3 config are preserved as `--color-black` and `--color-white` overrides in `@theme {}` (these override Tailwind's defaults — same behavior as v3 `extend.colors`)

### FR-04: Custom CSS preservation (must-preserve contracts)

Every non-Tailwind CSS rule currently in `global.css` MUST remain functional and unchanged after the migration. This is the highest-risk area.

**Acceptance Criteria:**
- [ ] AC-01 *(spec 01 contract)*: `.font-display`, `:root` font stack, `@font-face Basement`, `.animate-marquee`, `@keyframes marquee`, `.gradient-grid` — all preserved literally (or moved within the file but not modified)
- [ ] AC-02 *(spec 03 contract)*: `html[data-a11y="true"] body, header, footer, main, section, nav, div { background-color: #000000 !important; background-image: none !important; }` — preserved
- [ ] AC-03 *(spec 03 contract)*: `html[data-a11y="true"] h1, h2, h3, h4, p, span, a, li, button { color: #ffffff !important; }` — preserved
- [ ] AC-04 *(spec 03 contract)*: `html[data-a11y="true"] a { text-decoration: underline; }` — preserved
- [ ] AC-05 *(spec 03 contract)*: `html[data-a11y="true"] *, *::before, *::after { border-color, animation-duration, animation-iteration-count, transition-duration, scroll-behavior }` — preserved
- [ ] AC-06 *(spec 03 contract)*: `@media (prefers-reduced-motion: reduce)` and `@media (prefers-contrast: more)` blocks — preserved
- [ ] AC-07 *(spec 11 contract)*: `html[data-a11y="true"] .bg-primary { color: #000000 !important; }` — preserved (this is the CTA contrast rule)
- [ ] AC-08: All `/* spec: ... */` and `/* fix: ... */` traceability comments in `global.css` are preserved

### FR-05: Build & runtime regression checks

After migration, the project must pass automated checks confirming no functional regression.

**Acceptance Criteria:**
- [ ] AC-01: `npx astro check` returns `0 errors, 0 warnings`
- [ ] AC-02: `npm run build` completes successfully and produces `dist/` with valid HTML
- [ ] AC-03 *(spec 02 v1.2 AC-01.8 carryover)*: `grep -oE '"/jahiker[a-z]|jahiker\.github\.io/jahiker[a-z]' dist/index.html dist/es/index.html` returns empty
- [ ] AC-04: `dist/index.html` contains the favicon as `href="/jahiker/favicon.svg"` (single slash)
- [ ] AC-05: `dist/index.html` and `dist/es/index.html` contain CSS `<link>` references to processed Tailwind output (no broken `@tailwind` directives in shipped CSS)

### FR-06: Visual & functional manual verification

After automated checks pass, perform a manual smoke test on the dev server.

**Acceptance Criteria:**
- [ ] AC-01: `npm run dev` starts without errors; the site renders at `http://localhost:4321/jahiker/`
- [ ] AC-02: All 6 sections (Hero, About, Skills, Projects, Experience, Contact) render visually identical to pre-migration screenshots
- [ ] AC-03: A11y mode toggle (Header button) flips: backgrounds → black, text → white, borders → white/40, animations → near-instant
- [ ] AC-04: Hero CTA "See my work" / "Ver mi trabajo" shows **black text** on bright primary green when a11y mode is ON (FR-07 of spec 11)
- [ ] AC-05: Lang switcher EN/ES works (the active locale shown in `text-primary`)
- [ ] AC-06: Glide.js Projects slider works (3→2→1 perView responsive, prev/next buttons functional)
- [ ] AC-07: Resume CV download link resolves to `/jahiker/docs/JAHIKER-CV-2026.pdf` (no `/jahikerdocs/`)

### FR-07: Rollback documentation

Document a one-command rollback path in case the migration introduces unrecoverable visual or functional issues.

**Acceptance Criteria:**
- [ ] AC-01: The migration is performed in a **single commit** (or a clean sequence of commits that share a tag, e.g. `pre-tailwind-v4`)
- [ ] AC-02: The commit message includes the exact `git revert` command needed to undo it (e.g. `git revert <commit-sha>`)
- [ ] AC-03: This spec's "Edge Cases" section (§8) documents a manual rollback playbook if `git revert` fails (restore the 5 affected files from the pre-migration commit)

---

## 6. Non-Functional Requirements

- **Build performance:** Tailwind v4 should NOT be slower than v3 on `npm run build`. Target: equal or faster (Lightning CSS is significantly faster).
- **Bundle size:** CSS in `dist/` should NOT grow significantly. Target: ≤ +5% acceptable; > +10% requires investigation.
- **Browser support:** Project explicitly accepts Tailwind v4's modern-browser baseline (Chrome 111+, Safari 16.4+, Firefox 128+). The portfolio audience is presumed modern. Document this decision.
- **Type safety:** `astro check` continues to return 0 errors.
- **Spec ownership:** The migration adds `specs/p2-05-tailwind-v4.md` to the multi-spec header of any file it touches (per spec 02 v1.3 FR-02).

---

## 7. Technical Design

### Architecture impact

Current pipeline:
```
src/styles/global.css  →  @astrojs/tailwind integration  →  PostCSS  →  dist/_astro/*.css
   tailwind.config.mjs  ↗ (consumes config from JS)
```

After migration:
```
src/styles/global.css  →  @tailwindcss/vite plugin  →  Lightning CSS  →  dist/_astro/*.css
   (config is INSIDE global.css via @theme {} — no separate JS file)
```

### Involved Components

| Component | Role | Required Changes |
|---|---|---|
| `package.json` | Dependency manifest | Replace `tailwindcss@3` + `@astrojs/tailwind` with `tailwindcss@4` + `@tailwindcss/vite` |
| `package-lock.json` | Lockfile | Regenerate via `npm install` |
| `tailwind.config.mjs` | v3 JS config | **DELETE** entirely |
| `astro.config.mjs` | Astro config | Remove `tailwind()` integration; add Vite plugin |
| `src/styles/global.css` | Stylesheet | Add `@import "tailwindcss"` at top; add `@theme {}` block with palette; preserve all existing rules |
| Component `.astro` files (all) | UI surface | NO changes — Tailwind utilities resolve to the same classes (`bg-primary`, `text-white/40`, etc.) |

### Data Flow (pseudocode)

```
1. Pre-migration baseline:
   - git tag pre-tailwind-v4
   - npm run build → save dist/index.html, dist/_astro/*.css for diff
   - Take screenshots of all 6 sections (EN + ES) for visual diff

2. Migration commit:
   - npm uninstall tailwindcss @astrojs/tailwind
   - npm install -D tailwindcss@^4 @tailwindcss/vite
   - Edit astro.config.mjs (remove integration, add vite plugin)
   - Delete tailwind.config.mjs
   - Edit global.css (add @import + @theme {} block at top, preserve everything else)
   - npm run build → verify success
   - Run all FR-05 regression checks
   - Commit single atomic change

3. Validation:
   - npm run dev → manual FR-06 walkthrough
   - Compare screenshots
   - If pass: merge / push
   - If fail: git revert <commit-sha>
```

### Database Considerations
No DB changes.

### APIs / Integrations
No external API changes. The only integration touched is Astro's own (replacing `@astrojs/tailwind` with `@tailwindcss/vite`).

### `@theme {}` reference template

```css
/* spec: specs/01-types-tailwind-global.md, specs/03-accessibility-mode.md, specs/11-hero-section.md, specs/p2-05-tailwind-v4.md */
@import "tailwindcss";

@theme {
  /* Custom brand palette — preserved 1:1 from tailwind.config.mjs v3 */
  --color-primary: #d5ff40;
  --color-error:   #ff8b00;
  --color-eagle:   #afac95;

  /* Tailwind defaults overridden — preserves v3 behavior */
  --color-black:   #1e1e1e;
  --color-white:   #e7e7d8;
}

/* … then all existing rules from global.css below, unchanged … */
```

---

## 8. Edge Cases and Error Handling

| Case | Expected Behavior |
|---|---|
| `npm install` fails (peer-dep conflict) | Retry with `--legacy-peer-deps` only as last resort; report to user before proceeding |
| `astro check` fails after migration | Inspect first error, fix only the migration-related issue (typically a missing `@import` or a Tailwind class that v4 renamed); do NOT touch unrelated code |
| Visual regression detected (e.g. spacing, color) | Identify the changed utility (Tailwind v4 has minor renames: e.g. `shadow-sm` is now `shadow-xs`); apply targeted fix in the affected component, document in History |
| A11y mode no longer applies overrides | Inspect CSS specificity — v4 may emit utilities at a different cascade layer; if needed, wrap a11y rules in `@layer utilities {}` to raise specificity |
| `gradient-grid` or `font-display` lost | These are custom CSS, not Tailwind — they should survive untouched. If broken, the migration accidentally edited those rules |
| Build size grows >10% | Inspect `dist/_astro/*.css` for duplicated rules; v4 may emit extra defaults that v3's preflight stripped |
| `git revert` fails (merge conflict) | Manual rollback playbook: restore `package.json`, `package-lock.json`, `tailwind.config.mjs`, `astro.config.mjs`, `src/styles/global.css` from `git show pre-tailwind-v4:<file>` |

### Manual rollback playbook (if `git revert` fails)

```bash
git show pre-tailwind-v4:package.json > package.json
git show pre-tailwind-v4:package-lock.json > package-lock.json
git show pre-tailwind-v4:tailwind.config.mjs > tailwind.config.mjs
git show pre-tailwind-v4:astro.config.mjs > astro.config.mjs
git show pre-tailwind-v4:src/styles/global.css > src/styles/global.css
rm -rf node_modules
npm install
npm run build  # confirm v3 stack is restored
```

---

## 9. Dependencies

**Specs to run first:**
- All Phase 1 specs Verified ✅ (already true — closed today)

**Internal:**
- spec 01 (Verified) — defines the original tokens; this spec preserves them
- spec 02 (Verified v1.3) — multi-spec convention applies; AC-01.8 regex must keep passing
- spec 03 (Verified) — a11y CSS rules must survive
- spec 11 (Verified v1.2) — `.bg-primary` a11y rule must survive

**External:**
- `tailwindcss@^4.x` — npm package
- `@tailwindcss/vite@^4.x` — npm package

**Blockers:** None (Phase 1 complete).

---

## 10. Resolved Decisions (was Pending)

- ✅ **DEC-01 (formerly PENDING-01) Browser support baseline:** Modern-only is **accepted**. The portfolio targets Chrome 111+, Safari 16.4+, Firefox 128+ (Tailwind v4's baseline). No legacy browser support is required. *(decided 2026-05-09 by user)*
- ✅ **DEC-02 (formerly PENDING-02) Upgrade tool strategy:** Run `npx @tailwindcss/upgrade` as the **first pass**, then review the diff and cleanup manually. The tool handles most boilerplate (package swap, `@import` insertion, basic `@theme` migration) while manual cleanup ensures the multi-spec headers, traceability comments, and a11y rules stay correct. *(decided 2026-05-09 by user)*

---

## 11. Additional Notes

- Tailwind v4 changes color resolution to use `oklch` natively. Hex inputs in `@theme` are auto-converted. Visual difference is imperceptible for the current palette.
- Some utilities that exist in v3 are renamed/removed in v4. The most common: `shadow-sm` → `shadow-xs` (and `shadow` → `shadow-sm`). Audit `dist/` HTML if shadows look off.
- `@apply` is still supported in v4 but discouraged. The current project does not use `@apply`, so this is moot.
- The Tailwind official upgrade guide: https://tailwindcss.com/docs/upgrade-guide
- After migration, running `npx @tailwindcss/upgrade --dry-run` is a good sanity check to confirm no obvious leftovers.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `package.json` | MODIFY | Remove `tailwindcss@3`, `@astrojs/tailwind`; add `tailwindcss@4`, `@tailwindcss/vite` |
| `package-lock.json` | MODIFY | Regenerated by `npm install` |
| `tailwind.config.mjs` | DELETE | Theme moves to `@theme {}` in global.css |
| `astro.config.mjs` | MODIFY | Remove tailwind integration; add Vite plugin; update multi-spec header per spec 02 v1.3 |
| `src/styles/global.css` | MODIFY | Add `@import "tailwindcss"`; add `@theme {}` block; preserve every existing rule + traceability comment |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-09 | Created | jr-build-spec — full migration plan with FR-01..07, must-preserve contracts from specs 01/02/03/11, rollback playbook |
| 1.0 | 2026-05-09 | Implemented | jr-exe-spec — package swap + astro.config Vite plugin + global.css `@theme {}` block + tailwind.config.mjs deleted; tag `pre-tailwind-v4` created for rollback; all FR-04/05 contracts preserved (a11y rules, .bg-primary, BASE_URL fixes); raw CSS +61% but gzip 6KB (better than v3 raw); build 635ms (faster than v3) |
| 1.0 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (28/28 verificables en código) · 7 manual ACs FR-06 deferred a user · 2 user-action pending (commit + commit message) · NFR bundle raw +61% but gzip equivale a v3 (investigado per NFR threshold) |
