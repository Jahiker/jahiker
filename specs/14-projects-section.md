# Projects Section + ProjectCard UI + Glide.js Slider

**Status:** Verified | **Version:** 2.2 | **Date:** 2026-05-09 | **Author:** jr-iterate-spec
**Roadmap:** #1.10 — E3 · Sections
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/06-projects-data.md (Draft v1.2)

---

## Summary

Projects section with Glide.js slider (3→2→1 perView responsive), locale-aware data, styled prev/next controls in heading bar, and a ProjectCard UI aligned with the JKR design system: sequential number prefix, `↗` navigation cue, hover state via design system tokens, card click navigates to the project's source URL (GitHub or npm). Render order is fully driven by the data layer — no client-side sorting or reordering.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/components/ui/ProjectCard.astro` | — | No change in v2.2 (covered by v2.1) |
| `src/components/sections/Work.astro` | — | No change in v2.2 (locks the existing data-order-driven contract) |
| `src/pages/index.astro` | — | No change |
| `src/pages/es/index.astro` | — | No change |

---

## Functional Requirements

### FR-01 — ProjectCard component
> 🔄 Modified in v2.0: full visual redesign aligned with JKR design system — replaces image + action links with num prefix, ↗ cue, and card-level GitHub link

`src/components/ui/ProjectCard.astro` receives `project: Project` and `index: number`.

**AC-01.1** The card is an `<a>` element linking to `project.sourceCodeUrl`. If `sourceCodeUrl` is `null`, the card renders as a non-interactive `<article>` (no href). The link host is not assumed (GitHub, npm, or any other URL is valid).
> 🔄 Updated in v2.2: clarified that `sourceCodeUrl` is host-agnostic (jr-toolkit uses an npm URL)

**AC-01.2** Top-left: sequential number + year in Geist Mono uppercase — `001 · 2024`. Number is derived from `index + 1`, zero-padded to 3 digits.

**AC-01.3** Top-right: `↗` arrow in `text-white/40`. On card hover it shifts to `text-primary` and translates `translate(2px, -2px)`.

**AC-01.4** Title renders as `<h3>` in Geist sans, `font-medium`, `text-xl`, `text-white`, `tracking-tight`.

**AC-01.5** Description renders at `text-sm text-white/50 leading-relaxed`, clamped to 3 lines (`line-clamp-3`).

**AC-01.6** Tags render as mono uppercase pills — `font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 border border-white/20 rounded-full text-white/40`.

**AC-01.7** Card hover state: `background` lifts from `bg-dark-mid` to `bg-gray`; `border-color` strengthens from `border-white/10` to `border-white/30`; `box-shadow` appears as a 2px ring in `--tw-ring-color` (white/20) — equivalent visual weight to Tailwind's `ring-2`. At rest: no shadow. Transition: `transition-all duration-[120ms]`.
> ✨ New in v2.1: box-shadow ring on hover

**AC-01.8** No `image`, no `viewLabel`, no `sourceLabel` — these are removed from this component. The `Project.image` field may be a placeholder; the card never references it.
> 🔄 Updated in v2.2: explicitly tolerates placeholder `image` values (jr-toolkit uses one — see spec 06 FR-04)

---

### FR-02 — Work.astro section (Glide.js slider)
> 🔄 Modified in v2.0: remove viewLabel/sourceLabel; pass index to ProjectCard

`src/components/sections/Work.astro` renders the full slider section.

**AC-02.1** Passes `project={project}` and `index={idx}` to `<ProjectCard>`. No `viewLabel` or `sourceLabel` props.

**AC-02.2** Slider configuration unchanged: `perView: 3`, breakpoints `1024 → 2`, `640 → 1`, `gap: 0`, `type: 'slider'`, `bound: true`.

**AC-02.3** Section heading, prev/next controls, and locale-aware labels remain unchanged from v1.1.

**AC-02.4** Render order matches the data layer order **exactly**. No client-side `sort`, `reverse`, `slice`, or filter is applied to the `projects` array. Adding, removing, or reordering entries is a data-only operation (spec 06).
> ✨ New in v2.2

**AC-02.5** The slider supports any `N ≥ 1` projects without code changes — the loop iterates the array and Glide.js handles step count automatically. Currently `N = 8` after spec 06 v1.2.
> ✨ New in v2.2

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

### Render order contract
> ✨ New in v2.2

`Work.astro` is intentionally a thin renderer:

```astro
{projects.map((project, idx) => (
  <ProjectCard project={project} index={idx} />
))}
```

No reordering, sorting, or pinning happens in this component. The first card the user sees is `projects[0]`, the second is `projects[1]`, etc. To change which project appears first, edit `src/data/{en,es}/projects.ts` (spec 06).

This keeps responsibilities separated: spec 14 owns the *visual* rendering, spec 06 owns *what is shown and in what order*.

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
- Pinning/featured-project logic in the renderer — order is data-driven (v2.2)

---

## Delta v2.2

### What changes from v2.1:
- AC-02.4 (new): explicit no-client-side-reordering contract for `Work.astro`
- AC-02.5 (new): explicit support for arbitrary `N` projects (currently 8 after spec 06 v1.2)
- AC-01.1 (clarified): `sourceCodeUrl` is host-agnostic — npm URLs are valid (jr-toolkit case)
- AC-01.8 (clarified): `image` may be a placeholder; the card never reads it
- New "Render order contract" subsection in Technical Design

### What does NOT change:
- ProjectCard markup, hover state, ring, layout, props
- Glide.js config, breakpoints, locale labels, section structure
- `Project` type
- Any source file is touched — v2.2 is a documentation/contract patch

### Regression risk: None — no source files modified; only locks the existing implicit behavior into an explicit contract. The ordering change for the actual projects list lives in spec 06 v1.2.

---

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
| 2.2 | 2026-05-09 | Iterated | jr-iterate-spec — lock data-order-driven contract; document N projects + npm URLs + placeholder image tolerance |
| 2.2 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (16/16 AC) · Gaps: 0 · contract-only iteration verified against existing v2.1 implementation |
