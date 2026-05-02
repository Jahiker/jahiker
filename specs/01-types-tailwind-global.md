# TypeScript Types + Tailwind Config + global.css

**Status:** Implemented | **Version:** 1.0 | **Date:** 2026-05-01 | **Author:** jr-exe-spec
**Roadmap:** #0.2 — E0 · Foundation
**Depends on:** specs/00-project-cleanup.md (Verified ✅)

---

## Summary

Creates the shared TypeScript interfaces used by all data files (`Project`, `Skill`, `ExperienceItem`, `SiteContent`, `NavLink`). Tailwind palette and global.css were already correctly configured — no changes needed to those files.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/data/types.ts` | CREATED | All shared TypeScript interfaces for data layer |
| `tailwind.config.mjs` | VERIFIED | Palette complete — no changes needed |
| `src/styles/global.css` | VERIFIED | Fonts + utilities present — no changes needed |

---

## Interfaces defined in `src/data/types.ts`

| Interface | Fields |
|---|---|
| `NavLink` | `label`, `href` |
| `Project` | `name`, `description`, `tags`, `image` (ImageMetadata), `siteUrl`, `sourceCodeUrl`, `year` |
| `Skill` | `name`, `category` (union), `icon?` |
| `ExperienceItem` | `company`, `role`, `period`, `description`, `stack?` |
| `HeroContent` | `greeting`, `name`, `tagline`, `cta` |
| `AboutContent` | `text` |
| `ContactContent` | `heading`, `email`, `linkedin`, `github` |
| `SiteContent` | `hero`, `about`, `nav`, `contact` |

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Implemented | jr-exe-spec — created src/data/types.ts; tailwind + global.css already complete |
