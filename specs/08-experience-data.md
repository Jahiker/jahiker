# Experience Data Files — EN + ES

**Status:** Verified | **Version:** 1.1 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.4 — E1 · Data layer
**Depends on:** specs/01-types-tailwind-global.md (Implemented ✅)

---

## 1. Executive Summary

Create EN and ES experience data files with 6 career positions sourced from the CV. Descriptions are translated per locale; stack arrays and periods share the same structure.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/data/en/experience.ts` | CREATE | 6 positions in English |
| `src/data/es/experience.ts` | CREATE | 6 positions in Spanish |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — 6 positions EN/ES from CV, Softlimit placeholder desc |
| 1.1 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (10/10) · Gaps: 0 · 6 positions consistentes EN/ES, periods con meses localizados, stacks idénticos por posición |
