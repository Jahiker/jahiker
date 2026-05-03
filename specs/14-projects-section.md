# Projects Section + ProjectCard UI + Glide.js Slider

**Status:** Implemented | **Version:** 2.1 | **Date:** 2026-05-02 | **Author:** jr-iterate-spec
**Roadmap:** #1.10 — E3 · Sections
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/06-projects-data.md (Implemented ✅)

---

## Summary

Projects section with Glide.js slider (3→2→1 perView responsive), locale-aware data, styled prev/next controls in heading bar, and a ProjectCard UI aligned with the JKR design system: sequential number prefix, `↗` navigation cue, hover state via design system tokens, card click navigates to the GitHub repo.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/ui/ProjectCard.astro` | MODIFY | Rewrite — remove image + action links; add num prefix, ↗ cue, DS hover tokens, card → repo link |
| `src/components/sections/Work.astro` | MODIFY | Remove viewLabel/sourceLabel props passed to ProjectCard |
| `src/pages/index.astro` | — | No change |
| `src/pages/es/index.astro` | — | No change |

---

## Functional Requirements

### FR-01 — ProjectCard component
> 🔄 Modified in v2.0: full visual redesign aligned with JKR design system — replaces image + action links with num prefix, ↗ cue, and card-level GitHub link

`src/components/ui/ProjectCard.astro` receives `project: Project` and `index: number`.

**AC-01.1** The card is an `<a>` element linking to `project.sourceCodeUrl`. If `sourceCodeUrl` is `null`, the card renders as a non-interactive `<article>` (no href).

**AC-01.2** Top-left: sequential number + year in Geist Mono uppercase — `001 · 2024`. Number is derived from `index + 1`, zero-padded to 3 digits.

**AC-01.3** Top-right: `↗` arrow in `text-white/40`. On card hover it shifts to `text-primary` and translates `translate(2px, -2px)`.

**AC-01.4** Title renders as `<h3>` in Geist sans, `font-medium`, `text-xl`, `text-white`, `tracking-tight`.

**AC-01.5** Description renders at `text-sm text-white/50 leading-relaxed`, clamped to 3 lines (`line-clamp-3`).

**AC-01.6** Tags render as mono uppercase pills — `font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 border border-white/20 rounded-full text-white/40`.

**AC-01.7** Card hover state: `background` lifts from `bg-dark-mid` to `bg-gray`; `border-color` strengthens from `border-white/10` to `border-white/30`; `box-shadow` appears as a 2px ring in `--tw-ring-color` (white/20) — equivalent visual weight to Tailwind's `ring-2`. At rest: no shadow. Transition: `transition-all duration-[120ms]`.
> ✨ New in v2.1: box-shadow ring on hover

**AC-01.8** No `image`, no `viewLabel`, no `sourceLabel` — these are removed from this component.

---

### FR-02 — Work.astro section (Glide.js slider)
> 🔄 Modified in v2.0: remove viewLabel/sourceLabel; pass index to ProjectCard

`src/components/sections/Work.astro` renders the full slider section.

**AC-02.1** Passes `project={project}` and `index={idx}` to `<ProjectCard>`. No `viewLabel` or `sourceLabel` props.

**AC-02.2** Slider configuration unchanged: `perView: 3`, breakpoints `1024 → 2`, `640 → 1`, `gap: 0`, `type: 'slider'`, `bound: true`.

**AC-02.3** Section heading, prev/next controls, and locale-aware labels remain unchanged from v1.1.

---

### FR-03 — Locale-aware labels

**AC-03.1** Section heading: `'Projects'` (EN) / `'Proyectos'` (ES).

**AC-03.2** Prev/Next button labels: `'Previous'`/`'Next'` (EN), `'Anterior'`/`'Siguiente'` (ES).

---

### FR-04 — Responsive breakpoints

**AC-04.1** 3 cards visible on `>1024px`, 2 on `640–1024px`, 1 on `<640px` — driven by Glide.js `breakpoints` config.

---

## Technical Design

### Card anatomy

```
┌──────────────────────────────────┐
│ 001 · 2024               ↗       │  ← mono meta + arrow (shifts on hover)
│                                  │
│ Project title                    │  ← h3, font-medium, text-xl
│                                  │
│ Short description that can span  │  ← text-sm, line-clamp-3
│ up to three lines of text here.  │
│                                  │
│ [React] [Node] [Postgres]        │  ← mono pill tags
└──────────────────────────────────┘
```

### Hover behavior
- Trigger: `:hover` on the `<a>` / `<article>` card wrapper
- BG: `bg-dark-mid` → `bg-gray` (Tailwind custom tokens)
- Border: `border-white/10` → `border-white/30`
- Shadow: `shadow-none` → `ring-2 ring-white/20` (2px inset ring, white at 20% opacity)
- Arrow: `text-white/40` → `text-primary`, `translate-x-0.5 -translate-y-0.5`
- Duration: 120ms, `ease-out`
- Implemented via Tailwind `group` + `group-hover:` on child elements

### Props interface

```astro
---
interface Props {
  project: Project
  index: number
}
---
```

No changes to the `Project` type in `src/data/types.ts`.

---

## Out of Scope

- `status` field (`shipped` / `wip` / `archived`) — omitted; not in the `Project` type
- Grayscale image hover — removed in v2.0

---

## Delta v2.0

## Delta v2.1

### What changes from v2.0:
- `ProjectCard.astro`: hover adds `ring-2 ring-white/20` box-shadow; at rest no shadow

### What does NOT change:
- Everything else from v2.0

### Regression risk: Low — additive CSS only on ProjectCard

---

## Delta v2.0

### What changes from v1.1:
- `ProjectCard.astro`: full visual rewrite — no image, no action link buttons, new layout with num prefix and `↗` cue
- Card is now an `<a>` linking to `sourceCodeUrl` (GitHub repo)
- Hover state uses design system tokens (dark-mid → gray, border strengthens)
- `Work.astro`: stops passing `viewLabel`/`sourceLabel`; starts passing `index`

### What does NOT change:
- Glide.js slider setup and responsive breakpoints
- Locale-aware heading and prev/next labels
- `Work.astro` overall structure and section markup
- `Project` data type — no additions

### Regression risk:
- `src/components/ui/ProjectCard.astro` — full rewrite, medium risk
- `src/components/sections/Work.astro` — minimal change (remove 2 props, add index), low risk

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-01 | Partial — dummy Glide.js placeholder | jr-exe-spec (spec 00) |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — full slider with ProjectCard, real data, responsive breakpoints |
| 2.0 | 2026-05-02 | Iterated | jr-iterate-spec — DS card: remove image/links, add num+↗, card→GitHub, hover tokens |
| 2.1 | 2026-05-02 | Iterated | jr-iterate-spec — add ring-2 box-shadow on hover |
| 2.1 | 2026-05-02 | Implemented | jr-exe-spec — DS card rewrite: num prefix, ↗, hover tokens, ring, card→GitHub |
