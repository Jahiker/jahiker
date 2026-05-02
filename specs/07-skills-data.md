# Skills Data File

**Status:** Implemented | **Version:** 1.1 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.3 — E1 · Data layer
**Depends on:** specs/01-types-tailwind-global.md (Implemented ✅)

---

## 1. Executive Summary

Create a single locale-independent skills data file `src/data/skills.ts` exporting a typed `Skill[]` array grouped by category. Skill names are technology names that do not change between EN and ES, so a single file is sufficient.

---

## 5. Functional Requirements

### FR-01: Skills Data File

- [ ] AC-01: File exports a named constant `skills` typed as `Skill[]`
- [ ] AC-02: Contains skills in three categories: `frontend`, `backend`, `tools`
- [ ] AC-03: Each skill has `name`, `category`, and `icon` (devicon slug)
- [ ] AC-04: File includes traceability comment `// spec: specs/07-skills-data.md`

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/data/skills.ts` | CREATE | 22 skills across frontend / backend / tools |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — single locale-independent skills file, icon slugs for devicons |
