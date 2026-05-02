# System Architecture — Jahiker Portfolio v2

**Status:** Draft | **Version:** 1.0 | **Date:** 2026-05-01 | **Author:** jr-arch | **Based on:** docs/vision.md

---

## 1. Executive summary

Static personal portfolio built with Astro 4 + Tailwind CSS v3, deployed to GitHub Pages. Content is managed via typed TypeScript data files with parallel EN/ES versions; Astro's built-in i18n routing generates two static URL trees (`/` for English, `/es/` for Spanish) giving each language its own crawlable page. An accessibility mode (high-contrast dark + no animations) is toggled via a `data-a11y` attribute on `<html>`, initialized before first paint to prevent flash of default styles.

---

## 2. System type

| Attribute | Value |
|---|---|
| Category | Static Site (SSG) |
| Pattern | Component-based, data-driven, multi-locale |
| Rendering | 100% server-side at build time — zero client-side rendering |
| Routing | Astro i18n file-based: `src/pages/index.astro` (EN) + `src/pages/es/index.astro` (ES) |
| Justification | Astro SSG eliminates the SPA/hash-routing SEO problem of the current portfolio. Zero JS by default means Lighthouse Performance ≥ 95 is achievable. File-based i18n routes give each language a real URL for search indexing. |

---

## 3. Tech stack

### Frontend

| Decision | Technology | Justification |
|---|---|---|
| Framework | Astro 4 | Already installed. SSG-first, ships zero JS by default, native i18n routing, component islands for interactive parts only |
| Language | TypeScript | Already configured (`tsconfig.json`, `env.d.ts`). Catches data shape errors in content files at build time |
| Styles | Tailwind CSS v3 | Already configured with the full project palette. **Do not upgrade to v4** — the project is mid-development and v4 has a different config format; upgrade is Phase 2 tech debt |
| Custom fonts | Basement (display) + Inter Variable (body) | Already implemented in `global.css`. Basement provides the bold aesthetic from Astromax |
| Slider | Glide.js | Already installed for the Projects carousel. Lightweight, no framework dependency |
| Animations | CSS transitions + Tailwind utilities only | No Framer Motion (React-only). Keeps the bundle at zero JS for static sections. All animations must respect `prefers-reduced-motion` and the accessibility mode |
| Icons | Inline SVG or Astro Icon | No icon library dependency; keeps bundle small |

### Backend / Integrations

| Decision | Technology | Justification |
|---|---|---|
| Contact form | EmailJS (browser SDK) | Reused from current portfolio. No backend required — sends email directly from client |
| Sitemap | `@astrojs/sitemap` | Already installed. Generates `sitemap.xml` automatically from all routes |
| Analytics | None (MVP) | Out of scope for MVP |

### Infrastructure

| Decision | Technology | Justification |
|---|---|---|
| Hosting | GitHub Pages | Free, already used. Astro SSG output is plain static files — no hash routing workaround needed unlike the current React SPA |
| CI/CD | GitHub Actions (via `gh-pages` or Astro GitHub Pages guide) | Same deploy workflow as current project |
| Build output | `dist/` | Astro default |

---

## 4. System architecture

### High-level diagram

```
┌──────────────────────────────────────────────────────────┐
│                     BUILD TIME (Astro)                   │
│                                                          │
│  src/data/en/*.ts ──┐                                    │
│  src/data/es/*.ts ──┼──► pages/index.astro (EN)  ──┐    │
│                     │                               │    │
│  src/components/    ┤    pages/es/index.astro (ES) ─┼──► dist/
│  src/layouts/       │                               │    │
│  src/styles/        ┘    sitemap.xml               ─┘    │
└──────────────────────────────────────────────────────────┘
                              │
                              ▼
                    GitHub Pages (static CDN)
                              │
              ┌───────────────┴──────────────┐
              ▼                              ▼
     jahiker.github.io/        jahiker.github.io/es/
     (English)                  (Spanish)
```

### Main modules

| Module | Responsibility | Technology |
|---|---|---|
| `src/layouts/Layout.astro` | Base HTML shell: `<head>` meta, font loading, a11y init script, body classes | Astro |
| `src/components/global/` | Header (nav + lang switcher + a11y toggle), Footer | Astro |
| `src/components/sections/` | Hero, About, Skills, Projects, Experience, Contact — one file per section | Astro |
| `src/components/ui/` | Reusable primitives: Badge, ProjectCard, TimelineItem | Astro |
| `src/data/{en,es}/` | Typed content: projects, skills, experience, site copy | TypeScript |
| `src/styles/global.css` | Font faces, `.gradient-grid`, accessibility CSS custom properties, marquee animation | CSS |
| `src/pages/index.astro` | EN page — imports all sections, passes EN data | Astro |
| `src/pages/es/index.astro` | ES page — same structure, passes ES data | Astro |

### Main data flow

```
1. Build starts
2. pages/index.astro imports data from src/data/en/*.ts
3. Data is passed as props to section components
4. Components render to static HTML
5. dist/ is generated (two full pages: / and /es/)

At runtime (browser):
6. User loads page → zero JS shipped for static content
7. Accessibility toggle clicked → inline <script> sets data-a11y="true" on <html>, saves to localStorage
8. CSS custom properties update instantly (no repaint flash)
9. Projects slider → Glide.js loaded as client-side island
10. Contact form submit → EmailJS SDK call
```

---

## 5. Directory structure

```
/
├── astro.config.mjs          # Astro config — site URL, i18n, integrations
├── tailwind.config.mjs       # Palette: black(#1e1e1e), white(#e7e7d8), primary(#d5ff40)
├── tsconfig.json
├── astromax/                 # Reference template only — never imported
├── docs/                     # vision.md, architecture.md, roadmap (future)
│
└── src/
    ├── data/
    │   ├── en/
    │   │   ├── projects.ts   # 7 curated projects (EN descriptions)
    │   │   ├── skills.ts     # Skills grouped by category
    │   │   ├── experience.ts # Work history
    │   │   └── content.ts    # Hero, About, nav labels, CTA copy
    │   └── es/
    │       ├── projects.ts   # Same structure, ES descriptions
    │       ├── skills.ts
    │       ├── experience.ts
    │       └── content.ts
    │
    ├── components/
    │   ├── global/
    │   │   ├── Header.astro  # Nav + lang switcher + a11y toggle
    │   │   └── Footer.astro
    │   ├── sections/
    │   │   ├── Hero.astro
    │   │   ├── About.astro
    │   │   ├── Skills.astro
    │   │   ├── Projects.astro  # Glide.js slider
    │   │   ├── Experience.astro
    │   │   └── Contact.astro
    │   └── ui/
    │       ├── Badge.astro     # Skill/tag badge
    │       ├── ProjectCard.astro
    │       └── TimelineItem.astro
    │
    ├── fonts/                # BSBlack.woff2, BSBlack.woff (Basement)
    ├── images/
    │   ├── avatar.svg        # Generic dev avatar (code/terminal theme)
    │   └── projects/         # Screenshot PNGs reused from current portfolio
    │
    ├── layouts/
    │   └── Layout.astro      # HTML shell + a11y init inline script
    │
    ├── pages/
    │   ├── index.astro       # English — imports EN data + all sections
    │   └── es/
    │       └── index.astro   # Spanish — imports ES data + all sections
    │
    ├── styles/
    │   └── global.css        # Font faces, .gradient-grid, a11y CSS vars
    │
    └── env.d.ts
```

---

## 6. Initial data model

### Project

| Field | Type | Description | Constraints |
|---|---|---|---|
| `name` | `string` | Project name | Required |
| `description` | `string` | Short description (1–2 sentences) | Required |
| `tags` | `string[]` | Tech stack tags, lowercase | Required, ≥ 1 |
| `image` | `ImageMetadata` | Imported screenshot via `import` | Required |
| `siteUrl` | `string` | Live site URL | Required |
| `sourceCodeUrl` | `string \| null` | GitHub repo URL | Optional |
| `year` | `number` | Year published | Required |

### Skill

| Field | Type | Description | Constraints |
|---|---|---|---|
| `name` | `string` | Technology name | Required |
| `category` | `'frontend' \| 'backend' \| 'tools' \| 'other'` | Grouping for display | Required |
| `icon` | `string \| null` | SVG string or icon name | Optional |

### ExperienceItem

| Field | Type | Description | Constraints |
|---|---|---|---|
| `company` | `string` | Company name | Required |
| `role` | `string` | Job title | Required |
| `period` | `string` | e.g. `"2022 – 2024"` | Required |
| `description` | `string` | Short summary of responsibilities | Required |
| `stack` | `string[]` | Technologies used | Optional |

### SiteContent (per locale)

| Field | Type | Description |
|---|---|---|
| `hero.greeting` | `string` | e.g. `"Hi, I'm"` |
| `hero.name` | `string` | `"Jahiker Rojas"` |
| `hero.tagline` | `string` | `"Fullstack Developer building fast, beautiful web experiences"` |
| `hero.cta` | `string` | Button label, e.g. `"See my work"` |
| `about.text` | `string` | 2–3 sentence bio |
| `nav.links` | `{ label: string; href: string }[]` | Navigation links |
| `contact.heading` | `string` | CTA section heading |
| `contact.email` | `string` | `"rojasjahiker@gmail.com"` |

---

## 7. Fundamental technical decisions

### 1. Astro i18n file-based routing vs. JS language toggle

| | Detail |
|---|---|
| **Decision** | Astro i18n: two static pages (`/` EN, `/es/` ES) |
| **Context** | Vision requires EN + ES from MVP; SEO is a primary goal |
| **Alternatives** | JS lang toggle (like current React portfolio) — single page, client switches locale on click |
| **Justification** | File-based routes give each language a real crawlable URL. A JS toggle means Spanish content is never indexed. Astro i18n adds minimal complexity: two `index.astro` files that share the same components but receive different data props. |
| **Consequences** | Language switch is a full page navigation (`/` ↔ `/es/`). No SPA-like instant switch. Acceptable for a portfolio. |

### 2. Tailwind v3 — no upgrade to v4

| | Detail |
|---|---|
| **Decision** | Stay on Tailwind v3 (current: `3.4.12`) |
| **Context** | `astromax/` reference uses Tailwind v4, but the root project is already configured with v3 and the full palette |
| **Alternatives** | Upgrade to v4 — different config format (`@theme {}` in CSS, no `tailwind.config.mjs`) |
| **Justification** | Mid-project upgrade would break the existing config and require rewriting all custom color references. v3 is stable and supports everything needed. Upgrade to v4 is recorded as Phase 2 tech debt. |
| **Consequences** | Config stays in `tailwind.config.mjs`. Tailwind plugins (`@tailwindcss/forms`, `@tailwindcss/typography`) use v3 API. |

### 3. Accessibility mode via CSS custom properties + `data-a11y` attribute

| | Detail |
|---|---|
| **Decision** | `data-a11y="true"` on `<html>` → CSS custom properties override colors + disable animations |
| **Context** | Vision requires a toggle for `#000000`/`#ffffff` high-contrast mode and no animations, persisted in localStorage |
| **Alternatives** | A second CSS class; a CSS `prefers-contrast` media query only (no manual toggle) |
| **Justification** | A data attribute scopes all overrides to a single CSS selector (`html[data-a11y="true"]`). An inline `<script>` in `<head>` reads localStorage and sets the attribute before first paint — preventing flash. `prefers-contrast` and `prefers-reduced-motion` are also handled in the same CSS block for OS-level respect. |
| **Consequences** | Zero-JS dependency for the accessibility feature. The inline script is the only render-blocking JS on the page. |

### 4. Data files in TypeScript instead of a CMS

| | Detail |
|---|---|
| **Decision** | Content lives in `src/data/{en,es}/*.ts` |
| **Context** | Solo maintainer; adding a project means editing one file |
| **Alternatives** | Astro Content Collections (Markdown + schema); headless CMS (Contentful, Sanity) |
| **Justification** | TypeScript files give type safety at build time with zero extra dependencies. Content Collections add a layer of abstraction that isn't needed for this scale. A CMS is overkill for a personal portfolio updated a few times per year. |
| **Consequences** | Content updates require a code commit and rebuild. Acceptable for solo maintenance. |

### 5. Single-page layout (all sections on `index.astro`)

| | Detail |
|---|---|
| **Decision** | All sections rendered on one page; navigation links use anchor (`#`) jumps |
| **Context** | Portfolio pattern — visitors scroll through, not navigate between pages |
| **Alternatives** | Multi-page: `/skills`, `/projects`, `/experience` as separate routes |
| **Justification** | Recruiters scan a portfolio in one scroll session. Anchor links give the feel of navigation without actual page loads. Multi-page adds no SEO value for a portfolio and fragments the experience. |
| **Consequences** | Each section needs an `id` attribute for anchor links. The header nav links to `#skills`, `#projects`, etc. |

---

## 8. Project conventions

### Naming
- **Components:** PascalCase `.astro` files (`ProjectCard.astro`, `TimelineItem.astro`)
- **Data files:** camelCase (`projects.ts`, `siteContent.ts`)
- **CSS classes:** Tailwind utilities only; custom classes only in `global.css` (`.gradient-grid`, `.font-display`, `.animate-marquee`)
- **Section IDs:** kebab-case (`id="my-work"`, `id="get-in-touch"`)

### TypeScript
- All data files export named typed constants: `export const projectsEN: Project[] = [...]`
- Types defined in `src/data/types.ts` (shared between EN and ES)
- No `any` — every content shape is typed

### Imports
- Use the `@/` alias for `src/` (already in `tsconfig.json`): `import { projectsEN } from '@/data/en/projects'`
- Images imported directly in data files via `import screenshot from '@/images/projects/pugstagram.jpg'`

### Git
- Branch: current feature branch → PR to `master`
- Commit format: `[type] description` (matching repo convention: `[feat]`, `[fix]`, `[improve]`, `[update]`)
- `astromax/` directory is never modified — reference only

### i18n
- EN is the default locale (root `/`)
- ES lives under `/es/`
- Language switcher in Header links to the equivalent page: `/` ↔ `/es/`
- All user-facing strings come from `src/data/{locale}/content.ts` — no hardcoded text in components

---

## 9. Security

- No authentication or user accounts
- **EmailJS:** service ID, template ID, and public key must be stored as environment variables (`PUBLIC_EMAILJS_SERVICE_ID`, `PUBLIC_EMAILJS_TEMPLATE_ID`, `PUBLIC_EMAILJS_PUBLIC_KEY`) — Astro exposes `PUBLIC_*` vars to the client. Never hardcode in components.
- **No sensitive data** is rendered server-side; all build-time data is public portfolio content
- Contact form: validate email format client-side before calling EmailJS to avoid wasted API calls

---

## 10. Known technical debt from start

| Simplified for MVP | Impact | When to revisit |
|---|---|---|
| Tailwind v3 (not v4) | v4 has better performance and simpler config | Phase 2 — after MVP ships |
| No Astro Content Collections | Adding types manually per data file | When content grows beyond 3–4 files per locale |
| EmailJS credentials in env vars without a form rate-limit | API key exposed to client, spam risk | Phase 2 — add honeypot or Cloudflare Turnstile |
| Glide.js loaded from npm (not CDN) | Slightly larger bundle than inline CDN | Low priority — Glide is small (~10kb) |
| No OG image generation | Social sharing shows no preview card | Phase 2 — add Astro OG image integration |
| `src/index.astro` (root-level) still exists | Leftover from initial setup, conflicts with pages/ | Delete immediately at build start |

---

## History

| Version | Date | Author | Notes |
|---|---|---|---|
| 1.0 | 2026-05-01 | jr-arch | Initial architecture — based on vision v1.2 |
