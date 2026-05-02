# Product Vision — Jahiker Portfolio v2

**Status:** Confirmed | **Version:** 1.1 | **Date:** 2026-05-01 | **Author:** jr-vision

---

## 1. One-line summary

A redesigned personal portfolio for Jahiker Rojas — a fullstack developer with 4+ years of experience — built with Astro + Tailwind CSS, inspired by the Astromax template's bold minimalist aesthetic and the current project's lime-green color palette, designed to impress recruiters and clients at first glance.

---

## 2. The problem

The current portfolio (React + Vite, `master` branch) has solid structure and i18n support, but suffers from several issues:

- **Weak visual impact:** The design doesn't communicate seniority or differentiation at a glance.
- **Incomplete content:** Several sections still lack information or use placeholder copy.
- **Tech stack perception:** React SPA + hash routing on GitHub Pages is functional but doesn't signal mastery of modern frontend tooling (Astro, SSG, performance).
- **Not optimized for conversion:** There's no clear hierarchy guiding visitors toward a contact action or a specific project highlight.
- **SEO limitations:** A fully client-rendered SPA limits organic discoverability.

---

## 3. The solution

A full redesign and migration to **Astro + Tailwind CSS v4**, taking the **Astromax template** as the structural and aesthetic base — bold typography, grid backgrounds, dark layout with high-contrast sections — and replacing its color palette with the project's signature **lime-green (`#d5ff40`) + near-black (`#101010`)** scheme.

Content will be reviewed and rewritten to be concrete, metrics-driven, and compelling. The portfolio must make an immediate impression and guide visitors toward contacting Jahiker.

**What this is NOT:**
- Not a blog or CMS-driven site
- Not a multi-page app with client-side routing
- Not a direct clone of Astromax — it's a portfolio adapted from it

---

## 4. Users

### Primary: Tech recruiters & hiring managers
- **Profile:** Look at 10–20 portfolios per week
- **Context:** Fast scan — 10–15 seconds to decide if they read more
- **Goal:** Quickly verify skills, seniority, and past work quality
- **Frustration:** Generic portfolios with no personality, no real metrics, no clear specialization

### Secondary: Potential clients (freelance)
- **Profile:** Business owners or startups needing a web project
- **Context:** Looking for a reliable dev who can own a project end-to-end
- **Goal:** See real work, understand capabilities, find a way to reach out
- **Frustration:** Hard to contact, portfolios that don't show results

---

## 5. Value proposition

Jahiker's new portfolio communicates immediately: *this developer builds real things, knows modern tools, and has a distinctive aesthetic eye.* The bold Astromax-inspired layout signals confidence, while real project screenshots and a curated skills section prove capability. A clear contact path removes friction for anyone who wants to hire.

**Key benefits:**
- Memorable first impression via bold typography and signature lime-green accents
- Static site generation (Astro) for near-instant load and better SEO
- Concise, results-oriented content that speaks to both recruiters and clients
- Mobile-first, accessible, and fast

---

## 6. Scope

### MVP — Essential (v2.0)

| Section | Content | Notes |
|---|---|---|
| **Navigation** | Logo + links (Home, Projects, Contact) | Minimal, sticky top |
| **Hero** | Name, title, short tagline, CTA button | Bold, full-width, grid bg |
| **About / Intro** | 2–3 sentence professional statement | Replace Astromax "manifesto" with personal copy |
| **Skills** | Technology badges/grid, grouped by category | Visual, scannable |
| **Projects / Work** | 7 curated projects: Pugstagram, Pokedex, Platzi Conf Merch, Cashflow App, Vue Image Editor, React Fly Booking, Weather App | Carousel or grid; each with screenshot, stack tags, links |
| **Experience** | Timeline of roles with company + year | Adapted from current `Experience` page |
| **Contact / CTA** | Email link + social links (LinkedIn, GitHub) | Bold CTA section like Astromax's |
| **Footer** | Minimal — name + year | |
| **Accessibility mode toggle** | Button in nav/header — activates high-contrast + no-animation mode | Persisted in `localStorage`; see details below |

#### Accessibility mode — behavior
The site is always dark (default: `#1e1e1e` bg / `#e7e7d8` text). The accessibility mode is **not** a light theme — it stays dark but pushes contrast to the absolute maximum:
- **High contrast:** background `#000000`, text `#ffffff` — no intermediate grays, no semi-transparent overlays
- **No animations:** all CSS transitions, keyframe animations, and scroll-triggered effects are disabled (equivalent to `prefers-reduced-motion: reduce`)
- The toggle also respects the OS-level `prefers-reduced-motion` and `prefers-contrast` media queries automatically, even without manual activation

#### Baseline accessibility requirements (all pages, always)
- Semantic HTML (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`)
- All interactive elements keyboard-navigable with visible focus ring
- All images have descriptive `alt` attributes
- All icon-only buttons have `aria-label`
- Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text (in default mode)
- Lang attribute set correctly per language version (`lang="en"` / `lang="es"`)
- No content conveyed by color alone

### Phase 2 — Extensions

- Dark/light mode toggle — reintegrate from current portfolio
- Blog or "Notes" section — short posts on technologies
- Project detail pages — individual case studies

### Out of scope

- Backend or CMS integration
- Authentication or user accounts
- Custom animations beyond Tailwind/CSS transitions

---

## 7. Business context

- **Model:** Personal portfolio — no monetization
- **Deployment:** GitHub Pages (static output from Astro fits perfectly — no hash routing workaround needed)
- **Constraint:** Must be maintainable solo; adding a new project should require editing one data file
- **Brand constraint:** Must preserve the lime-green (`#d5ff40`) + near-black palette from the current portfolio — this is a known identity element

---

## 8. Success metrics

| Metric | Target |
|---|---|
| Lighthouse Performance score | ≥ 95 |
| Lighthouse SEO score | ≥ 95 |
| Lighthouse Accessibility score | ≥ 90 (target: 100) |
| Time to first meaningful paint | < 1s on 4G |
| Contact link clicks (subjective) | Measurable increase vs. current site |
| All sections have real, complete content | 100% — no placeholder text |
| Mobile layout passes visual QA | All sections usable on 375px viewport |
| Accessibility mode toggle works | High contrast + no animations activate correctly; persists on reload |
| OS reduced-motion respected | Animations disabled automatically when `prefers-reduced-motion: reduce` |

---

## 9. Risks and assumptions

| Assumption | Risk if false | Priority |
|---|---|---|
| Astromax template structure maps cleanly to a developer portfolio | Some sections (e.g. Work/carousel) need significant rework to show real projects | Medium |
| GitHub Pages supports Astro's static output without hash routing | May need `404.html` redirect trick for deep links | Low (Astro SSG = static files, works natively) |
| Current project screenshot assets can be reused | Image format/quality may not fit Astromax's wide card layout | Low |
| EN/ES content managed via data files (no i18n library) | Maintenance overhead doubles for copy changes | Low — same pattern as current portfolio |
| One data file per content type is sufficient for maintenance | Complex filtering logic may require more structure | Low |

---

## 10. Confirmed decisions

| # | Decision |
|---|---|
| 1 | Build in current branch → PR to master when done. Astro at root, `astromax/` is reference only |
| 2 | EN + ES from MVP day one |
| 3 | 7 featured projects: Pugstagram, Pokedex, Platzi Conf Merch, Cashflow App, Vue Image Editor, React Fly Booking, Weather App |
| 4 | No personal photo — use a generic dev-related avatar/illustration |
| 5 | Tagline: *"Fullstack Developer building fast, beautiful web experiences"* |

---

## History

| Version | Date | Author | Notes |
|---|---|---|---|
| 1.0 | 2026-05-01 | jr-vision | Initial draft |
| 1.1 | 2026-05-01 | jr-vision | All decisions confirmed — ready for architecture |
| 1.2 | 2026-05-01 | jr-vision | Added accessibility mode (high contrast + no animations) + baseline a11y requirements |
