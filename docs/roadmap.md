# Roadmap — Jahiker Portfolio v2

**Status:** Active | **Date:** 2026-05-01 | **Author:** jr-roadmap
**Based on:** docs/vision.md · docs/architecture.md

---

## Summary

| Total features | Phase 0 (Foundation) | Phase 1 (MVP) | Phase 2 (Extensions) | MVP estimated |
|---|---|---|---|---|
| 25 | 5 | 14 | 6 | 3–4 weeks |

---

## Epics

| Epic | Description |
|---|---|
| **E0 · Foundation** | Cleanup, config, types, base layout, deploy pipeline |
| **E1 · Data layer** | Typed EN/ES content files for all sections + image migration |
| **E2 · Global UI** | Header (nav + lang switch + a11y toggle) and Footer |
| **E3 · Sections** | All page sections: Hero, About, Skills, Projects, Experience, Contact |
| **E4 · Pages & SEO** | Page assembly, meta tags, sitemap, responsive QA |
| **E5 · Extensions** | Phase 2 improvements post-launch |

---

## Execution order

### 🏗️ PHASE 0 — Foundation

| # | Feature | Epic | Value | Complexity | Depends on | Status | Spec file |
|---|---|---|---|---|---|---|---|
| 0.1 | Project cleanup & directory restructure | E0 | High | Low | — | Partial | `specs/00-project-cleanup.md` |
| 0.2 | TypeScript types + Tailwind config + global.css | E0 | High | Low | 0.1 | Partial | `specs/01-types-tailwind-global.md` |
| 0.3 | Astro i18n config + Layout.astro + a11y init script | E0 | High | Medium | 0.1, 0.2 | Partial | `specs/02-astro-i18n-layout.md` |
| 0.4 | Accessibility mode (CSS vars + `data-a11y` + OS media queries) | E0 | High | Medium | 0.2, 0.3 | Pending | `specs/03-accessibility-mode.md` |
| 0.5 | Deploy workflow (GitHub Actions → GitHub Pages) | E0 | High | Low | 0.1 | Pending | `specs/04-deploy-workflow.md` |

### 🚀 PHASE 1 — MVP Core

| # | Feature | Epic | Value | Complexity | Depends on | Status | Spec file |
|---|---|---|---|---|---|---|---|
| 1.1 | Content data files — EN + ES (hero, about, nav, contact) | E1 | High | Low | 0.2 | Pending | `specs/05-content-data.md` |
| 1.2 | Projects data files — EN + ES + image migration | E1 | High | Low | 0.2 | Pending | `specs/06-projects-data.md` |
| 1.3 | Skills data files — EN + ES | E1 | Medium | Low | 0.2 | Pending | `specs/07-skills-data.md` |
| 1.4 | Experience data files — EN + ES | E1 | Medium | Low | 0.2 | Pending | `specs/08-experience-data.md` |
| 1.5 | Header — nav + lang switcher + a11y toggle button | E2 | High | Medium | 0.3, 0.4, 1.1 | Partial | `specs/09-header.md` |
| 1.6 | Footer | E2 | Low | Low | 1.1 | Partial | `specs/10-footer.md` |
| 1.7 | Hero section | E3 | High | Medium | 0.3, 1.1 | Partial | `specs/11-hero-section.md` |
| 1.8 | About section | E3 | High | Low | 0.3, 1.1 | Pending | `specs/12-about-section.md` |
| 1.9 | Skills section + Badge UI | E3 | Medium | Low | 0.3, 1.3 | Pending | `specs/13-skills-section.md` |
| 1.10 | Projects section + ProjectCard UI + Glide.js slider | E3 | High | High | 0.3, 1.2 | Partial | `specs/14-projects-section.md` |
| 1.11 | Experience section + TimelineItem UI | E3 | Medium | Medium | 0.3, 1.4 | Pending | `specs/15-experience-section.md` |
| 1.12 | Contact / CTA section | E3 | High | Low | 0.3, 1.1 | Pending | `specs/16-contact-section.md` |
| 1.13 | Pages assembly — EN `index.astro` + ES `es/index.astro` | E4 | High | Low | 1.5–1.12 | Partial | `specs/17-pages-assembly.md` |
| 1.14 | SEO meta + sitemap config + responsive QA | E4 | High | Low | 1.13 | Pending | `specs/18-seo-sitemap-qa.md` |

### ✨ PHASE 2 — Extensions

| # | Feature | Epic | Value | Complexity | Depends on | Status | Spec file |
|---|---|---|---|---|---|---|---|
| 2.1 | Dark/light mode toggle | E5 | Medium | Medium | MVP complete | Pending | `specs/p2-01-dark-light-mode.md` |
| 2.2 | OG image generation (Astro OG) | E5 | Medium | Medium | MVP complete | Pending | `specs/p2-02-og-images.md` |
| 2.3 | Blog / Notes section | E5 | Medium | High | MVP complete | Pending | `specs/p2-03-blog-section.md` |
| 2.4 | Project detail pages | E5 | Medium | Medium | MVP complete | Pending | `specs/p2-04-project-detail-pages.md` |
| 2.5 | Tailwind v4 upgrade | E5 | Low | High | MVP complete | Pending | `specs/p2-05-tailwind-v4.md` |
| 2.6 | Contact form rate-limit (honeypot / Turnstile) | E5 | Low | Medium | MVP complete | Pending | `specs/p2-06-form-ratelimit.md` |

---

## Dependency map

```
0.1 Project cleanup
 ├── 0.2 Types + Tailwind + global.css
 │    ├── 0.3 i18n config + Layout + a11y init ──── 0.4 Accessibility mode
 │    │    ├── 1.1 Content data EN/ES
 │    │    │    ├── 1.5 Header ─────────────────┐
 │    │    │    ├── 1.6 Footer                  │
 │    │    │    ├── 1.7 Hero section             │
 │    │    │    ├── 1.8 About section            │
 │    │    │    └── 1.12 Contact section         │
 │    │    ├── 1.2 Projects data EN/ES           │
 │    │    │    └── 1.10 Projects section        │
 │    │    ├── 1.3 Skills data EN/ES             │
 │    │    │    └── 1.9 Skills section           │
 │    │    └── 1.4 Experience data EN/ES         │
 │    │         └── 1.11 Experience section      │
 │    │                                          │
 │    │    All sections ────────────────────────►├── 1.13 Pages assembly
 │    │                                          │         └── 1.14 SEO + sitemap + QA
 │    └── (also feeds into components directly) ─┘
 │
 └── 0.5 Deploy workflow (independent, early)
```

---

## How to use with the toolkit

For each feature, in order:

```
/jr-build-spec   → writes the full implementation spec for that feature
/jr-exe-spec     → implements the spec (code)
/jr-verify-spec  → verifies implementation matches the spec
/jr-status       → dashboard of all specs and their current status
```

Start with: `/jr-build-spec` on `specs/00-project-cleanup.md`

---

## Prioritization decisions

1. **Foundation before product:** Directory structure and types must be stable before writing any component. Changing the folder structure mid-development is expensive.
2. **Data layer before UI:** Components receive data as props — writing the TypeScript data files first means components can be built with real content immediately, not placeholders.
3. **Header/Footer before sections:** They wrap every section; having them done means pages look complete even as sections are added one by one.
4. **Hero first among sections:** It's the first thing visitors see — highest visual priority, fastest feedback loop for the design.
5. **Projects section ranked High despite High complexity:** It's the #1 thing recruiters look at; Glide.js integration needs a dedicated spec.
6. **SEO + QA last in MVP:** Can only be validated once all real content is in place.
7. **Deploy workflow in Phase 0:** Setting it up early means every commit can be previewed on the live URL, enabling visual QA throughout development.

---

## What's NOT in this roadmap

| Feature | Reason |
|---|---|
| CMS integration | Overkill for a solo-maintained portfolio updated a few times/year |
| Authentication | Not needed — public portfolio |
| Analytics | Out of scope for MVP; can be added with a one-line script in Phase 2 |
| Testimonials section | Not enough real testimonials to fill it; would require placeholder content |
| Multiple project pages (case studies) | Phase 2 — adds significant complexity; slider card is sufficient for MVP |
| Contact form with EmailJS | Deferred — contact via email link is simpler and sufficient for MVP; EmailJS adds a dependency and credentials management |

---

## History

| Version | Date | Author | Notes |
|---|---|---|---|
| 1.0 | 2026-05-01 | jr-roadmap | Initial roadmap — 5 foundation + 14 MVP + 6 Phase 2 features |
