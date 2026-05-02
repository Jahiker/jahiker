# Content Data Files — EN + ES (hero, about, nav, contact)

**Status:** Implemented | **Version:** 1.1 | **Date:** 2026-05-02 | **Author:** jr-build-spec
**Roadmap:** #1.1 — E1 · Data layer
**Depends on:** specs/01-types-tailwind-global.md (Implemented ✅)

---

## 1. Executive Summary

Create the typed content data files for EN and ES locales covering the hero, about, nav, and contact sections of the portfolio. These files are the single source of truth for all user-visible copy in those sections. All section components will import from these files instead of hardcoding strings.

---

## 2. Context and Motivation

The portfolio is bilingual (EN/ES). All copy must live in `src/data/{en,es}/` as typed TypeScript exports so that:
- Components remain string-free (no hardcoded copy)
- Adding a third locale later requires only a new data file
- TypeScript ensures every locale has the same shape

---

## 3. Goals

- [ ] Create `src/data/en/content.ts` with full EN `SiteContent` export
- [ ] Create `src/data/es/content.ts` with full ES `SiteContent` export
- [ ] Both files typed against `SiteContent` from `src/data/types.ts`
- [ ] Nav links use anchor hrefs compatible with single-page scroll navigation
- [ ] Contact section includes email, LinkedIn handle, and GitHub handle

---

## 4. Out of Scope

- Projects, skills, and experience data (specs 06, 07, 08)
- Section components that consume this data (specs 11, 12, 16)
- i18n routing or locale detection logic (spec 02, already implemented)

---

## 5. Functional Requirements

### FR-01: EN Content File

Create `src/data/en/content.ts` exporting a `SiteContent` object with all required fields in English.

**Acceptance Criteria:**
- [ ] AC-01: File exports a named constant `content` typed as `SiteContent`
- [ ] AC-02: `hero.greeting` = `"Hi, I'm"`, `hero.name` = `"Jahiker Rojas"`, `hero.tagline` = `"Fullstack Developer building fast, beautiful web experiences."`, `hero.cta` = `"See my work"`
- [ ] AC-03: `about.text` contains a 2–3 sentence professional bio in English mentioning fullstack development and passion for web experiences
- [ ] AC-04: `nav` array contains links for: About, Skills, Projects, Experience, Contact — each with `label` (English) and anchor `href` (`#about`, `#skills`, `#projects`, `#experience`, `#contact`)
- [ ] AC-05: `contact.heading` = `"Get in touch"`, `contact.email` = `"rojasjahiker@gmail.com"`, `contact.linkedin` = `"jahikerrojas"`, `contact.github` = `"jahiker"`
- [ ] AC-06: File includes traceability comment `// spec: specs/05-content-data.md`

### FR-02: ES Content File

Create `src/data/es/content.ts` exporting a `SiteContent` object with all required fields in Spanish.

**Acceptance Criteria:**
- [ ] AC-01: File exports a named constant `content` typed as `SiteContent`
- [ ] AC-02: `hero.greeting` = `"Hola, soy"`, `hero.name` = `"Jahiker Rojas"`, `hero.tagline` = `"Desarrollador Fullstack creando experiencias web rápidas y atractivas."`, `hero.cta` = `"Ver mi trabajo"`
- [ ] AC-03: `about.text` contains a 2–3 sentence professional bio in Spanish, same meaning as EN version
- [ ] AC-04: `nav` array contains same 5 links as EN but with Spanish labels: Sobre mí, Habilidades, Proyectos, Experiencia, Contacto — same anchor hrefs as EN
- [ ] AC-05: `contact.heading` = `"Hablemos"`, `contact.email`, `contact.linkedin`, `contact.github` identical to EN
- [ ] AC-06: File includes traceability comment `// spec: specs/05-content-data.md`

---

## 6. Non-Functional Requirements

- **Type safety:** Both files must satisfy `SiteContent` — TypeScript compilation must pass with no errors
- **No runtime deps:** Pure data files, no imports beyond `SiteContent` type
- **Consistency:** Anchor hrefs identical across locales (components use the same DOM IDs regardless of language)

---

## 7. Technical Design

**Architecture:** Static data files imported directly by Astro components at build time. No dynamic loading, no API calls.

**Involved Components:**

| Component | Role | Required Changes |
|---|---|---|
| `src/data/types.ts` | Provides `SiteContent` interface | None — already implemented |
| `src/data/en/content.ts` | EN locale data | CREATE |
| `src/data/es/content.ts` | ES locale data | CREATE |

**Data Flow:**
```
src/data/{locale}/content.ts
  → imported by section components (Hero.astro, About.astro, etc.)
  → section component receives locale as prop or Astro.currentLocale
  → renders correct copy
```

**Database Considerations:** No DB changes.

**APIs / Integrations:** No API changes.

---

## 8. Edge Cases and Error Handling

| Case | Expected Behavior |
|---|---|
| Missing field in one locale | TypeScript compile error — caught at build time |
| Wrong type for a field | TypeScript compile error — caught at build time |
| Nav href not matching DOM id | Visual bug — section components must use matching `id` attributes (verified in specs 11–16) |

---

## 9. Dependencies

- **specs/01-types-tailwind-global.md** — Implemented ✅ (`SiteContent` and sub-interfaces defined)
- No external packages needed

---

## 11. Additional Notes

- `contact.linkedin` and `contact.github` store handles only (no full URLs) — components construct the full URL
- The `about.text` bio is intentionally kept short (2–3 sentences) to fit the minimal design aesthetic
- Nav anchor hrefs must match the `id` attributes that will be added to each section element in specs 11–16

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/data/en/content.ts` | CREATE | EN locale — hero, about, nav, contact |
| `src/data/es/content.ts` | CREATE | ES locale — hero, about, nav, contact |

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — EN + ES content data files with SiteContent type |
