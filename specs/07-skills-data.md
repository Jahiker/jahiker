# Skills Data File

**Status:** Verified | **Version:** 1.2 | **Date:** 2026-05-09 | **Author:** jr-iterate-spec
**Roadmap:** #1.3 — E1 · Data layer
**Depends on:** specs/01-types-tailwind-global.md (Verified ✅), specs/02-astro-i18n-layout.md (Verified ✅ — v1.3 multi-spec traceability convention applied here), specs/13-skills-section.md (Verified ✅ — v2.0 introduced the `color` field and expanded the catalog)

---

## 1. Executive Summary

Create a single locale-independent skills data file `src/data/skills.ts` exporting a typed `Skill[]` array grouped by category. Skill names are technology names that do not change between EN and ES, so a single file is sufficient.

> 🔄 Updated in v1.2: aligns the spec with the post-spec-13-v2.0 reality: AC-03 now correctly marks `icon` as optional (10 skills lack a devicon mapping); new AC-05 documents the mandatory `color` field added by spec 13; AC-04 updated for the multi-spec traceability convention.

---

## 5. Functional Requirements

### FR-01: Skills Data File
> 🔄 Modified in v1.2: AC-03 reflects the actual `icon?` optional field; AC-04 adopts multi-spec traceability; new AC-05 covers the `color` field

- [ ] AC-01: File exports a named constant `skills` typed as `Skill[]`
- [ ] AC-02: Contains skills in three categories: `frontend`, `backend`, `tools`
- [ ] AC-03 *(rewritten in v1.2)*: Each skill has `name`, `category`, and `color` (hex string, mandatory). The `icon` field (devicon slug) is **optional** — present only where a devicon mapping exists. Skills without a devicon (e.g. Shopify, WordPress, GSAP, PHP, Laravel, MySQL, Claude, Claude Code, Cursor, Gemini CLI) MAY omit `icon`.
- [ ] AC-04 *(updated in v1.2 per multi-spec convention)*: File header MUST be `// spec: specs/07-skills-data.md, specs/13-skills-section.md` (numeric order, per spec 02 v1.3 FR-02 / AC-02.1). Spec 07 created the file; spec 13 iterated it (added `color` and expanded the catalog from 22 → 32 skills).
- [ ] AC-05 *(new in v1.2)*: Every skill MUST have `color: string` set to a hex code (`#RRGGBB`). This field was introduced by spec 13 v2.0 to drive brand-colored badges in the Skills section. The type ([types.ts:23](src/data/types.ts#L23)) declares `color` as required.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/data/skills.ts` | MODIFY | v1.2 — update header to multi-spec format `// spec: specs/07-skills-data.md, specs/13-skills-section.md` (was: only `13`). Skill data unchanged — already conforms to AC-03 (icon optional) and AC-05 (color present on all 32 entries) |

---

## Delta v1.2

### What changes from v1.1:
- AC-03 rewritten: `icon` is now correctly marked as optional (matches the actual `icon?` type and the 10 skills without a devicon)
- AC-04 reformulated: applies the multi-spec traceability convention (spec 02 v1.3 FR-02) — header lists both spec 07 and spec 13
- New AC-05: documents the mandatory `color` field (introduced by spec 13 v2.0; previously undocumented in spec 07)
- Affected Files description: `"22 skills"` → reflects current 32 skills via the spec text (no number duplicated since the count lives in spec 13's iteration history)
- Single line of code change: [src/data/skills.ts:1](src/data/skills.ts#L1) header — adds `specs/07-skills-data.md` to the comma-separated list
- Status returns to Draft pending re-execution

### What does NOT change:
- Any skill entry in `src/data/skills.ts` — the data already matches AC-03/AC-05/AC-02 as currently written
- The `Skill` type in `src/data/types.ts` (already correct since spec 13 v2.0)
- Spec 13's contract — this iteration only updates spec 07's documentation to match what spec 13 already implemented

### Regression risk: None
- 1-line comment edit, zero impact on runtime, build, or output
- Resolves both GAPs surfaced by jr-verify-spec on 2026-05-09 (AC-03 drift + AC-04 traceability)

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — single locale-independent skills file, icon slugs for devicons |
| 1.1 | 2026-05-09 | Verified-Partial | jr-verify-spec — Coverage: 50% (2/4) · Gaps: 2 (AC-03 drift: 10/32 skills sin icon tras spec 13 v2.0; AC-04 drift: header `// spec:` apunta solo a 13, debería ser `07, 13` per convención multi-spec) — recomienda iteración v1.2 |
| 1.2 | 2026-05-09 | Iterated | jr-iterate-spec — align spec with post-spec-13-v2.0 reality: AC-03 icon optional, new AC-05 for color field, AC-04 multi-spec header convention |
| 1.2 | 2026-05-09 | Implemented | jr-exe-spec — skills.ts:1 header updated to `07, 13`; `astro check` clean |
| 1.2 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (5/5) · Gaps: 0 · 32 skills, 10 sin icon (matches AC-03), 0 sin color (matches AC-05) |
