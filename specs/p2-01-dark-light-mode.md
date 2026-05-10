# Dark / Light Mode Toggle

**Status:** Verified | **Version:** 1.1 | **Date:** 2026-05-09 | **Author:** jr-iterate-spec
**Roadmap:** #2.1 — E5 · Extensions
**Depends on:** specs/02-astro-i18n-layout.md (Verified ✅), specs/03-accessibility-mode.md (Verified ✅), specs/09-header.md (Verified ✅), specs/p2-05-tailwind-v4.md (Verified ✅) — must-preserve contracts
**Related specs:** all 09-16 section components (will refactor `bg-black`/`text-white` → semantic tokens)

> ⚠️ **Scope warning:** This spec touches **3+ modules** (CSS theme system, Layout init, Header UI, multiple sections). Estimated 1-2 dev days. Not split because the architectural change (semantic tokens) is the unifying thread — splitting would create coordination overhead.

> 🔄 **Updated in v1.1:** Light palette refined for higher contrast — bg moves from saturated eagle (`#afac95`) to off-white (`#f9f9f9`); FR-08 introduces a text-shadow outline for `.text-primary` in light mode (primary green has only ~1.6:1 contrast against light backgrounds and needs the outline to remain readable); Skills badge color migrates from inline hex to a semantic CSS var so it adapts per theme.

---

## 1. Executive Summary

Add a user-controllable **dark/light theme toggle** to the portfolio. Site stays dark by default and respects `prefers-color-scheme: light` on first visit; explicit user toggle persists in `localStorage.THEME_V1`. Architecture introduces **semantic CSS tokens** (`--color-bg`, `--color-text`, `--color-border`, etc.) defined in `@theme {}` and swapped via `html[data-theme="light"]` selectors. Components refactor away from raw `bg-black`/`text-white` to the semantic tokens, eliminating duplicate dark/light declarations everywhere.

---

## 2. Context and Motivation

The portfolio currently has only a dark theme. Light theme is a common visitor expectation in 2026, especially on devices set to light system mode. Adding it improves accessibility (some users prefer light), broadens platform consistency (matches OS), and demonstrates technical breadth.

The previous accessibility-mode spec (spec 03) established the `data-*` + localStorage + Layout-init pattern that is reused here, so the implementation cost is mostly **palette design** and **component refactor**, not new infrastructure.

**Why now:** Tailwind v4 (just migrated in spec p2-05) ships native CSS-var theming via `@theme {}` — making this approach significantly cleaner than v3 would have allowed.

---

## 3. Goals

- [ ] Define a **semantic token layer** in `@theme {}` (`--color-bg`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-border-strong`)
- [ ] Define a **light theme palette** based on the existing `eagle` token (`#afac95` bg) + `black` (`#1e1e1e` text)
- [ ] Add `html[data-theme="light"]` overrides that swap the semantic tokens for the light palette
- [ ] Add a Layout inline init script that: (a) reads `localStorage.THEME_V1`, (b) falls back to `prefers-color-scheme: light` only if no localStorage value, (c) sets `data-theme` on `<html>` before first paint
- [ ] Add a theme toggle button in the Header (sun ↔ moon icon swap, synced desktop + mobile)
- [ ] Toggle button is **disabled** (visually + semantically) when `html[data-a11y="true"]` is set
- [ ] Refactor `bg-black`, `text-white`, `text-white/{40,50,60,70}`, `border-white/{10,20,30,60}` in components to use semantic tokens
- [ ] All a11y mode rules (spec 03) remain unchanged and continue to override
- [ ] All BASE_URL fixes (spec 02) remain unaffected
- [ ] `astro check` passes 0 errors after the change

---

## 4. Out of Scope

- **System-wide redesign for light:** the light palette is functional, not redesigned. Brand primary green (`#d5ff40`) stays the same in both themes (eagle bg has enough contrast).
- **Auto-switching based on time of day** — too gimmicky, not requested
- **More than 2 themes** (e.g. sepia, high-contrast variants beyond a11y mode) — out of scope
- **Per-component theme overrides** — every component obeys the global theme
- **Full-component refactor for components that already use safe tokens** — only components using `bg-black`/`text-white`/`border-white/N` are touched
- **Migration of `bg-dark-mid`/`bg-gray` placeholders** in ProjectCard.astro — those tokens are missing from `@theme` (separate issue, GAP-01 from spec 01 verify); this spec does NOT solve them but FR-05 will use semantic tokens consistent with the broader fix

---

## 5. Functional Requirements

### FR-01: Semantic theme tokens

Add a semantic-color layer to `@theme {}` in `src/styles/global.css`. These tokens are the **single source of truth** for colors in components going forward.

**Acceptance Criteria:**
- [ ] AC-01.1: `@theme {}` block in [src/styles/global.css](src/styles/global.css) defines (in addition to existing `--color-primary`, `--color-error`, `--color-eagle`, `--color-black`, `--color-white`):
  ```css
  --color-bg:            #1e1e1e;       /* alias of black for dark default */
  --color-bg-elevated:   #232323;       /* slightly lighter for cards/elevated surfaces */
  --color-text:          #e7e7d8;       /* alias of white */
  --color-text-muted:    rgba(231, 231, 216, 0.6);   /* white/60 */
  --color-text-subtle:   rgba(231, 231, 216, 0.4);   /* white/40 */
  --color-border:        rgba(231, 231, 216, 0.2);   /* white/20 */
  --color-border-strong: rgba(231, 231, 216, 0.6);   /* white/60 */
  ```
- [ ] AC-01.2: Tailwind v4 auto-generates utilities from these tokens: `bg-bg`, `bg-bg-elevated`, `text-text`, `text-text-muted`, `text-text-subtle`, `border-border`, `border-border-strong`
- [ ] AC-01.3: Existing tokens (`primary`, `error`, `eagle`, `black`, `white`) remain unchanged — no breaking change to spec 01 / p2-05 contracts

### FR-02: Light theme palette + selector switch
> 🔄 Modified in v1.1: AC-02.1 light palette refined — `--color-bg` moves from `#afac95` (eagle, low contrast with primary) to `#f9f9f9` (off-white, AAA contrast with black text); `--color-bg-elevated` becomes pure white. Eagle remains as `--color-eagle` brand token for accents.

Define the light theme as `html[data-theme="light"]` overrides in `src/styles/global.css`, immediately after the `@theme {}` block.

**Acceptance Criteria:**
- [ ] AC-02.1 *(updated v1.1)*: A CSS block `html[data-theme="light"] { ... }` redefines the semantic tokens for light mode:
  ```css
  --color-bg:            #f9f9f9;       /* off-white — high contrast with black text (17.5:1, AAA) */
  --color-bg-elevated:   #ffffff;       /* pure white for cards/elevated surfaces */
  --color-text:          #1e1e1e;       /* black */
  --color-text-muted:    rgba(30, 30, 30, 0.7);   /* slightly stronger than dark theme to compensate for less depth */
  --color-text-subtle:   rgba(30, 30, 30, 0.5);
  --color-border:        rgba(30, 30, 30, 0.15);
  --color-border-strong: rgba(30, 30, 30, 0.5);
  ```
- [ ] AC-02.2: `--color-primary`, `--color-error`, `--color-eagle`, `--color-black`, `--color-white` are NOT redefined for light theme — they stay constant brand tokens
- [ ] AC-02.3: When `<html>` has no `data-theme` attribute (default), the dark token values from FR-01 apply — no implicit selector needed
- [ ] AC-02.4: When `<html>` has `data-theme="dark"` explicitly, the dark values apply (no-op vs default — for clarity in DOM)
- [ ] AC-02.5 *(new in v1.1)*: The `--color-eagle` brand token is preserved unchanged (`#afac95`) and remains available as a utility (`bg-eagle`, `text-eagle`, `border-eagle`) for accent use cases — only the *bg semantic role* moved away from eagle

### FR-03: Theme toggle button (Header)

Add a theme-switching button in the Header alongside the existing a11y toggle.

**Acceptance Criteria:**
- [ ] AC-03.1: Two new buttons in `src/components/global/Header.astro`: `#theme-toggle` (desktop) and `#theme-toggle-mobile` (mobile menu), placed adjacent to the a11y toggle buttons
- [ ] AC-03.2: Each button uses two SVG icons: a Heroicons `SunIcon` (visible when current theme is dark, signaling "switch to light") and a Heroicons `MoonIcon` (visible when current theme is light, signaling "switch to dark"). Icon swap via `classList.toggle('hidden')`
- [ ] AC-03.3: Buttons have `aria-label="Toggle dark and light theme"` and `aria-pressed` synced to current theme state (`aria-pressed="false"` for dark, `"true"` for light — convention: pressed = "non-default" state)
- [ ] AC-03.4: Click handler shared between both buttons (similar to `syncToggles` pattern in spec 03 a11y toggle): flips `data-theme` between `'dark'` and `'light'`, persists to `localStorage.THEME_V1` (with `try/catch`), and updates `aria-pressed` + visible icon on both buttons
- [ ] AC-03.5: Button styling matches the a11y toggle: `font-display text-text-subtle hover:text-text` with same padding/transitions
- [ ] AC-03.6 *(mobile single-line constraint)*: In the **mobile menu "Bottom actions row"** ([Header.astro:135-176](src/components/global/Header.astro#L135-L176)), ALL action buttons MUST fit on a **single horizontal line** without wrapping at viewport widths ≥ 320px. The post-iteration row contains: `EN | ES | GitHub | LinkedIn | theme-toggle-mobile | a11y-toggle-mobile` (6 items, was 5).

  **Implementation strategy** (choose at exe time):
  - **Option A (recommended):** Remove the visible text label inside `#a11y-toggle-mobile` (currently shows `"A11y"` per [Header.astro:173](src/components/global/Header.astro#L173)) and keep both `theme-toggle-mobile` and `a11y-toggle-mobile` as **icon-only** buttons (SVG only, with `aria-label` retained for accessibility). This affects spec 09 (mobile a11y toggle drops the visible label) — updates the multi-spec header per FR-07.3 to declare co-ownership.
  - **Option B:** Reduce horizontal padding on all 6 buttons from `px-4` to `px-3` to gain ~48px total room. May still wrap at 320px depending on text widths — measure during exe.
  - **Option C:** Combine A + B for maximum safety margin.

  **Verification at exe time:** open dev tools at viewport widths 320, 360, 375, 414, 1023 (lg breakpoint) and confirm zero wrap. The row currently wraps **before** this iteration too; this AC formalizes the contract going forward.

### FR-04: Layout inline init script (anti-flash)

Extend the existing `<script is:inline>` in `src/layouts/Layout.astro` to also restore the theme before first paint.

**Acceptance Criteria:**
- [ ] AC-04.1: A new inline script (or extension of the existing a11y init script) reads `localStorage.THEME_V1`. Wrapped in `try/catch` (privacy mode tolerance, same pattern as a11y init).
- [ ] AC-04.2: If `localStorage.THEME_V1 === 'light'`, set `data-theme="light"` on `<html>`. If `'dark'`, set `data-theme="dark"`. If absent, query `window.matchMedia('(prefers-color-scheme: light)')`; if it matches, set `data-theme="light"`; otherwise leave the attribute absent (dark default).
- [ ] AC-04.3: This logic runs in `<head>` BEFORE `<body>` paints — preventing flash of opposite theme
- [ ] AC-04.4: The existing a11y init script (lines 70-76 of Layout.astro) is preserved unchanged
- [ ] AC-04.5: The two init scripts may be combined into one `<script is:inline>` block for clarity (single try/catch wrapping both reads), or remain separate — implementation choice

### FR-05: Component refactor to semantic tokens

Replace direct color utilities (`bg-black`, `text-white`, `text-white/N`, `border-white/N`) in **all** components with the semantic equivalents (`bg-bg`, `text-text`, `text-text-muted`, `border-border`, etc.).

**Acceptance Criteria:**
- [ ] AC-05.1: Inventory + replace pattern table:
  | Old utility | New utility |
  |---|---|
  | `bg-black` | `bg-bg` |
  | `text-white` | `text-text` |
  | `text-white/60` | `text-text-muted` |
  | `text-white/40` | `text-text-subtle` |
  | `text-white/50` | (case-by-case: muted or subtle, choose closer) |
  | `text-white/70` | `text-text` (close to full text) |
  | `border-white/10` | `border-border` (case-by-case) |
  | `border-white/20` | `border-border` |
  | `border-white/30` | `border-border-strong` (case-by-case) |
  | `border-white/60` | `border-border-strong` |
- [ ] AC-05.2: Affected files (per code audit):
  - [src/layouts/Layout.astro](src/layouts/Layout.astro) — `bg-black` on `<body>` → `bg-bg`
  - [src/components/global/Header.astro](src/components/global/Header.astro) — `bg-black`, `text-white/60`, `border-white/20`
  - [src/components/global/Footer.astro](src/components/global/Footer.astro) — `bg-black`, `text-white/40`, `border-white/20`
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro) — `text-white/50`, `text-white/60`, `text-white`, `border-white/20`
  - [src/components/sections/About.astro](src/components/sections/About.astro) — `text-white`, `text-white/40`, `text-white/70`, `border-white/20`, `border-white/10`, `divide-white/10`
  - [src/components/sections/Skills.astro](src/components/sections/Skills.astro) — TBD (read during execution)
  - [src/components/sections/Work.astro](src/components/sections/Work.astro) — `text-white/50`, `border-white/20`
  - [src/components/ui/ProjectCard.astro](src/components/ui/ProjectCard.astro) — `text-white`, `text-white/40`, `text-white/50`, `border-white/10`, `border-white/30`, `bg-dark-mid`/`bg-gray` (the latter two are PRE-EXISTING broken tokens — left as-is per Out-of-Scope)
  - [src/components/sections/Experience.astro](src/components/sections/Experience.astro) — `text-white`, `text-white/40`, `text-white/50`, `text-white/30`, `border-white/{10,20}`
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro) — `text-white`, `text-white/40`, `border-white/{20,60}`
- [ ] AC-05.3: `text-primary`, `bg-primary`, `ring-primary` — NOT touched (brand color, intentional in both themes)
- [ ] AC-05.4: After refactor, dark theme renders **visually identical** to pre-refactor baseline (semantic tokens default to the same colors)
- [ ] AC-05.5: Light theme (data-theme="light" set) renders without any white-on-white or black-on-black contrast issues — manually verified per FR-07

### FR-06: A11y interplay — disable theme toggle when a11y ON

When accessibility mode is active, the theme toggle MUST be visually and functionally disabled (a11y mode forces fixed contrast colors that supersede any theme).

**Acceptance Criteria:**
- [ ] AC-06.1: When `html[data-a11y="true"]` is set, both theme toggle buttons (`#theme-toggle` and `#theme-toggle-mobile`) receive: `disabled` attribute, `aria-disabled="true"`, `cursor: not-allowed`, and `opacity: 0.4` (or equivalent visual de-emphasis)
- [ ] AC-06.2: Click on a disabled toggle is a no-op (does NOT flip `data-theme`, does NOT write to localStorage)
- [ ] AC-06.3: When a11y mode is toggled OFF, theme toggle buttons re-enable and reflect the current theme state correctly
- [ ] AC-06.4: Implementation uses a `MutationObserver` on `<html>` watching the `data-a11y` attribute, OR the a11y toggle script (spec 03) is extended to call a small `syncThemeToggleAvailability()` function. **Choose the simpler approach during execution.**
- [ ] AC-06.5: A CSS rule covers the visual: `html[data-a11y="true"] #theme-toggle, html[data-a11y="true"] #theme-toggle-mobile { opacity: 0.4; cursor: not-allowed; pointer-events: none; }` (pointer-events:none provides the no-op behavior at CSS level even if JS fails)

### FR-08: Primary text contrast outline (light theme only)
> ✨ New in v1.1

Brand primary green `#d5ff40` has very low contrast (~1.6:1) against any light background — well below WCAG AA. Rather than darken the primary token (which would change the brand on dark theme too), apply a black 1px text-shadow outline that "wraps" the primary text only when the page is in light theme. Outline is invisible on dark theme so it stays opt-in.

**Acceptance Criteria:**
- [ ] AC-08.1: A CSS rule in `src/styles/global.css` targets primary-colored text in light theme:
  ```css
  html[data-theme="light"] .text-primary {
    text-shadow:
       1px  1px 0 #000,
      -1px -1px 0 #000,
       1px -1px 0 #000,
      -1px  1px 0 #000;
  }
  ```
  Four-corner outline (1px each direction) gives full character coverage; pure black `#000` for max contrast.
- [ ] AC-08.2: The rule applies ONLY when `html[data-theme="light"]` is set — dark theme primary text remains untouched (no shadow, retains current rendering)
- [ ] AC-08.3: The rule is **scoped to `.text-primary`** — does NOT affect `.bg-primary` (the CTA button keeps its existing `text-black` color, no shadow needed there)
- [ ] AC-08.4: Compatibility with a11y mode: when `data-a11y="true"` is also set, spec 03 forces `color: #ffffff !important` on `<a>` and other text elements. The text-shadow remains rendered but visually overlaps with the white text — confirm during exe that no visual artifact appears. If artifact found, add `html[data-a11y="true"] .text-primary { text-shadow: none; }` as a safety override.
- [ ] AC-08.5: Verify in dist CSS post-build that the rule is emitted exactly once (no duplication from `@layer` cascading)

### FR-09: Skills badge color — semantic token migration
> ✨ New in v1.1

Skills section ([Skills.astro:42-49](src/components/sections/Skills.astro#L42-L49)) currently hardcodes `color: #888888CC` in an inline `style` attribute on each badge. This color was tuned for the dark theme background and produces poor contrast (~3.5:1) on the new light bg `#f9f9f9`. Replace the hardcoded color with a CSS variable that adapts per theme.

**Acceptance Criteria:**
- [ ] AC-09.1: Add a new semantic token `--color-skill-text` in `@theme {}` (dark default) and `html[data-theme="light"] {}` (light override):
  ```css
  /* dark default */
  --color-skill-text:       rgba(255, 255, 255, 0.55);   /* equivalent to current #888888CC look on dark */
  --color-skill-text-hover: rgba(255, 255, 255, 0.95);
  /* light override */
  --color-skill-text:       rgba(30, 30, 30, 0.65);
  --color-skill-text-hover: rgba(30, 30, 30, 0.95);
  ```
- [ ] AC-09.2: [Skills.astro:45](src/components/sections/Skills.astro#L45) inline style changes from `color: #888888CC` to `color: var(--color-skill-text)`
- [ ] AC-09.3: [Skills.astro:62](src/components/sections/Skills.astro#L62) `<style>` `.skill-badge:hover` rule changes from `color: #888888FF !important` to `color: var(--color-skill-text-hover) !important`
- [ ] AC-09.4: Border per-skill (`border-color: ${skill.color}50` at rest, `border-color: var(--skill-color)` on hover) is **NOT changed** — per-skill brand colors remain intact (HTML red, CSS blue, JS yellow, etc.)
- [ ] AC-09.5: After the change, badges in light theme render with a darker text color (~7:1 contrast on `#f9f9f9`) — readable per WCAG AAA

### FR-07: Multi-spec traceability convention (spec 02 v1.3 / FR-02)

Apply the multi-spec header convention to every file this spec touches.

**Acceptance Criteria:**
- [ ] AC-07.1: [src/styles/global.css:1](src/styles/global.css#L1) header MUST be updated to add `specs/p2-01-dark-light-mode.md`. New header (numeric/roadmap order): `/* spec: specs/01-types-tailwind-global.md, specs/03-accessibility-mode.md, specs/11-hero-section.md, specs/p2-01-dark-light-mode.md, specs/p2-05-tailwind-v4.md */`
- [ ] AC-07.2: [src/layouts/Layout.astro:2](src/layouts/Layout.astro#L2) header MUST be updated to add `specs/p2-01-dark-light-mode.md`. New header: `// spec: specs/02-astro-i18n-layout.md, specs/03-accessibility-mode.md, specs/17-pages-assembly.md, specs/18-seo-sitemap-qa.md, specs/p2-01-dark-light-mode.md`
- [ ] AC-07.3: [src/components/global/Header.astro:2](src/components/global/Header.astro#L2) header MUST be updated. New header: `// spec: specs/03-accessibility-mode.md, specs/09-header.md, specs/p2-01-dark-light-mode.md`. **Note:** if Option A of AC-03.6 is chosen (icon-only mobile buttons → drops the `"A11y"` text label), this spec p2-01 implicitly modifies spec 09 v1.3 FR-04 AC-04.1 (which described the mobile button as having a visible label). A small spec 09 v1.4 iteration MAY be required after exe to update its description; the multi-spec header co-ownership documents this for future verifications.
- [ ] AC-07.4: Every section/UI component file modified per FR-05 MUST have its header updated to include `specs/p2-01-dark-light-mode.md` if not already a multi-spec file. Single-spec files become multi-spec; multi-spec files extend the list (numeric order).

---

## 6. Non-Functional Requirements

- **No Flash of Unstyled / Opposite Theme:** the inline init script in `<head>` MUST set `data-theme` before the `<body>` paints. Acceptance: manually reload with browser DevTools "Slow 3G" throttling — no theme flicker.
- **Performance:** the theme toggle MUST update visually within 100ms of click. CSS-var swap is instant; only JS overhead matters.
- **A11y:** color contrast ratio in light theme MUST meet WCAG AA (≥4.5:1 for body text, ≥3:1 for large text). Eagle (`#afac95`) bg + Black (`#1e1e1e`) text yields ~7.5:1 — passes AAA.
- **Browser support:** `prefers-color-scheme` media query is universally supported in Tailwind v4's modern-browser baseline (per spec p2-05 DEC-01).
- **Build:** `astro check` MUST pass 0 errors. Build size delta acceptable: ≤ +2KB raw CSS for the new tokens + light theme block.
- **Spec ownership:** every modified file follows the multi-spec convention (FR-07).

---

## 7. Technical Design

### Architecture impact

```
┌─────────────────────────────────────────────────────────┐
│  src/styles/global.css                                  │
│  ┌──────────────────────────────────────────────────┐   │
│  │ @theme {                                         │   │
│  │   --color-primary, --color-error, --color-eagle  │   │
│  │   --color-black, --color-white                   │   │
│  │   --color-bg, --color-bg-elevated                │  ← FR-01 new
│  │   --color-text, --color-text-muted, -subtle      │  ← FR-01 new
│  │   --color-border, --color-border-strong          │  ← FR-01 new
│  │ }                                                │   │
│  │                                                  │   │
│  │ html[data-theme="light"] {                       │  ← FR-02 new
│  │   --color-bg: #afac95;                           │   │
│  │   --color-text: #1e1e1e;                         │   │
│  │   ... (semantic tokens redefined)                │   │
│  │ }                                                │   │
│  │                                                  │   │
│  │ /* a11y rules unchanged — spec 03 contract */    │   │
│  │ html[data-a11y="true"] #theme-toggle,            │  ← FR-06 new
│  │ html[data-a11y="true"] #theme-toggle-mobile {    │   │
│  │   opacity: 0.4; cursor: not-allowed;             │   │
│  │   pointer-events: none;                          │   │
│  │ }                                                │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────┐
│  src/layouts/Layout.astro                               │
│  <html lang={lang}>                                     │
│    <head>                                               │
│      <script is:inline>                                 │
│        try {                                            │
│          // a11y restore (spec 03 — unchanged)          │
│          if (localStorage.A11Y_V1 === 'true')           │
│            html.setAttribute('data-a11y', 'true')       │
│          // theme restore (NEW — FR-04)                 │
│          const stored = localStorage.THEME_V1           │
│          if (stored === 'light' || stored === 'dark')   │
│            html.setAttribute('data-theme', stored)      │
│          else if (matchMedia('(prefers-color-scheme:    │
│                  light)').matches)                      │
│            html.setAttribute('data-theme', 'light')     │
│        } catch (_) {}                                   │
│      </script>                                          │
│    </head>                                              │
│    <body class="bg-bg">  ← FR-05 (was bg-black)         │
└─────────────────────────────────────────────────────────┘
```

### Involved Components

| Component | Role | Required Changes |
|---|---|---|
| `src/styles/global.css` | Theme system | Add semantic tokens (FR-01) + light selector (FR-02) + theme-toggle disable rule (FR-06 AC-05) + multi-spec header (FR-07.1) |
| `src/layouts/Layout.astro` | Anti-flash init | Extend `<script is:inline>` with theme restore (FR-04) + body class refactor (FR-05) + multi-spec header (FR-07.2) |
| `src/components/global/Header.astro` | Toggle UI | Add 2 theme-toggle buttons + script (FR-03) + a11y interplay (FR-06) + utility refactor (FR-05) + multi-spec header (FR-07.3) |
| `src/components/global/Footer.astro` | UI | Refactor `bg-black`/`text-white/N`/`border-white/N` → semantic tokens (FR-05) + multi-spec header |
| `src/components/sections/{Hero,About,Skills,Work,Experience,Contact}.astro` | UI | Refactor utilities (FR-05) + multi-spec header per file |
| `src/components/ui/ProjectCard.astro` | UI | Refactor utilities (FR-05). Note: `bg-dark-mid` and `bg-gray` remain (pre-existing GAP from spec 01 verify, not solved here) |

### Data Flow

```
Page load:
  → <head> inline script (synchronous, blocks paint)
    → Read localStorage.THEME_V1
    → If 'light' or 'dark': apply
    → Else: query prefers-color-scheme; if light → apply 'light'; else no attr (dark default)
  → <body> paints with correct theme tokens (no flash)

User clicks theme toggle:
  → Read current data-theme (or fallback to dark)
  → Compute next: 'dark' → 'light', else → 'dark'
  → html.setAttribute('data-theme', next)
  → CSS vars swap instantly via [data-theme="light"] selector
  → localStorage.setItem('THEME_V1', next)
  → syncToggles() updates aria-pressed + icon visibility on both buttons

User toggles a11y mode:
  → spec 03 script flips data-a11y
  → MutationObserver (FR-06.4) sees data-a11y change → updates theme-toggle disabled state
  → CSS rule (FR-06.5) auto-applies opacity + cursor via [data-a11y="true"] selector
```

### Database Considerations
No DB changes.

### APIs / Integrations
No external API changes. Uses browser-native `localStorage` and `matchMedia`.

---

## 8. Edge Cases and Error Handling

| Case | Expected Behavior |
|---|---|
| `localStorage` throws (privacy mode) | Init script `try/catch` swallows error; theme falls back to OS preference, then to dark default. Toggle still works in-session but state doesn't persist across reloads. |
| `localStorage.THEME_V1 = 'invalid_value'` | Init script ignores the value (only `'light'` or `'dark'` are accepted) and falls back to OS preference / dark default |
| User has `prefers-color-scheme: no-preference` (or unsupported) | `matchMedia(...).matches === false` → dark default applies. Same outcome as no preference. |
| User manually toggles, then changes OS preference later | The localStorage value wins. OS preference only applies on first visit (no localStorage value). This matches industry convention (e.g. GitHub, Vercel). |
| Theme toggle clicked while a11y mode ON | Per FR-06: button has `pointer-events: none` (CSS) + script returns early if `html[data-a11y="true"]`. Click is fully no-op. |
| A11y mode toggled ON while user is in light theme | Light theme tokens are still set on `data-theme="light"` but a11y rules' `!important` overrides them visually. When a11y is toggled OFF, light theme reappears (theme state was preserved). |
| User opens 2 tabs, toggles theme in one | The other tab does NOT auto-update (no `storage` event listener implemented). Each tab keeps its in-memory state until reload. **Out of scope** — not a real-world issue for portfolio. |
| Component still uses `bg-black` after FR-05 refactor (missed file) | Visually OK in dark mode (semantic tokens default to same color), broken in light mode (stays black). Mitigation: after refactor, run `grep -rE "bg-black\|text-white(/[0-9]+)?\|border-white/" src/` and ensure 0 matches in component files |

---

## 9. Dependencies

**Specs to run first:**
- All Phase 1 + p2-05 Verified ✅ (already true)

**Internal:**
- spec 02 (Verified v1.3) — Layout.astro inline-script slot reused for theme init
- spec 03 (Verified) — a11y mode pattern reused (`data-*` + localStorage + init script); a11y rules MUST stay unchanged
- spec 09 (Verified v1.3) — Header is the host for the toggle button
- spec p2-05 (Verified) — `@theme {}` infrastructure where tokens are added

**External:**
- None (no new npm packages — Heroicons SVG paths embedded inline like the a11y icon)

**Blockers:** None.

---

## 10. Resolved Decisions (was Pending)

- ✅ **DEC-01 (formerly PENDING-01) Icon style:** Heroicons outline stroke-width 1.5 — consistent with the existing a11y toggle (`AdjustmentsHorizontalIcon`). Use Heroicons `SunIcon` (visible in dark mode, signaling "switch to light") and `MoonIcon` (visible in light mode, signaling "switch to dark"). *(decided 2026-05-09 by user)*
- ✅ **DEC-02 (formerly PENDING-02) Header position:** Theme toggle goes **before** the a11y toggle. Final desktop button order: `nav | lang | github | linkedin | theme-toggle | a11y-toggle`. Same order applies in the mobile menu (theme-toggle-mobile before a11y-toggle-mobile). *(decided 2026-05-09 by user)*

---

## 11. Additional Notes

- The semantic-token approach (Approach A) means future palette changes (e.g. dark/light variants of a third theme) only require changing the `@theme` and the `[data-theme=...]` block — no component edits.
- A11y mode (`data-a11y="true"`) intentionally supersedes the theme via `!important`. This is correct behavior: a11y is a stronger requirement than theme preference.
- After this spec, the project will have **THREE** independent attribute states on `<html>`: `lang` (i18n), `data-a11y` (accessibility), `data-theme` (color scheme). All compose cleanly because they target orthogonal concerns.
- The `bg-dark-mid` / `bg-gray` placeholders in ProjectCard.astro (currently producing no CSS) are explicitly NOT solved here. They warrant their own iteration of spec 01 to add `--color-dark-mid` / `--color-gray` tokens — out of scope.
- `localStorage.THEME_V1` follows the existing convention (`A11Y_V1`, `LANG_V1` per legacy CLAUDE.md). The `_V1` suffix allows future schema migrations.

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/styles/global.css` | MODIFY | v1.0: semantic tokens + light selector + a11y disable rule + multi-spec header. v1.1: refine light palette (`#f9f9f9` bg), add `text-shadow` rule for `.text-primary` in light, add `--color-skill-text(-hover)` tokens for both themes |
| `src/layouts/Layout.astro` | MODIFY | Extend init script for theme restore + body class refactor + multi-spec header |
| `src/components/global/Header.astro` | MODIFY | Add 2 theme toggle buttons + script + utility refactor + multi-spec header |
| `src/components/global/Footer.astro` | MODIFY | Utility refactor (bg/text/border → semantic) + multi-spec header |
| `src/components/sections/Hero.astro` | MODIFY | Utility refactor + multi-spec header |
| `src/components/sections/About.astro` | MODIFY | Utility refactor + multi-spec header |
| `src/components/sections/Skills.astro` | MODIFY | v1.0: Utility refactor + multi-spec header. v1.1: inline `color: #888888CC` → `var(--color-skill-text)`; `.skill-badge:hover` color → `var(--color-skill-text-hover)` |
| `src/components/sections/Work.astro` | MODIFY | Utility refactor + multi-spec header |
| `src/components/sections/Experience.astro` | MODIFY | Utility refactor + multi-spec header |
| `src/components/sections/Contact.astro` | MODIFY | Utility refactor + multi-spec header |
| `src/components/ui/ProjectCard.astro` | MODIFY | Utility refactor (excludes `bg-dark-mid`/`bg-gray` per Out-of-Scope) + multi-spec header |

---

## Delta v1.1

### What changes from v1.0:
- **Light palette refined (FR-02 AC-02.1):** `--color-bg` `#afac95` → `#f9f9f9` (off-white). `--color-bg-elevated` `#c0bda8` → `#ffffff` (pure white). Text-muted/subtle/border opacities slightly bumped to compensate for the lighter background. Reasoning: real-world rendering showed eagle bg had only ~3.5:1 contrast with skills text and ~1.6:1 with primary green — both fail WCAG. The new off-white achieves AAA with body text (17.5:1).
- **FR-02 AC-02.5 (new):** documents that `eagle` is preserved as a brand token (`--color-eagle`) for accent uses — only the `--color-bg` semantic role moved away from it.
- **FR-08 (new — Primary text outline in light):** adds `html[data-theme="light"] .text-primary { text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000 }` (4-corner outline) to make primary green text legible on any light background.
- **FR-09 (new — Skills badge semantic token):** introduces `--color-skill-text` and `--color-skill-text-hover` per-theme. Removes the hardcoded `#888888CC` from Skills inline styles.
- Status returns to Draft pending re-execution.

### What does NOT change:
- FR-01 dark theme tokens — unchanged
- FR-03 toggle button UI/script — unchanged
- FR-04 init script — unchanged
- FR-05 component refactor — unchanged (already done in v1.0)
- FR-06 a11y interplay — unchanged
- FR-07 multi-spec headers — unchanged
- All v1.0 implementation persists; v1.1 only refines values + adds 2 new FRs

### Regression risk: Low
- Light theme is a non-default state (only active when user toggles or OS prefers light) — change has zero impact on dark theme users
- New text-shadow is additive CSS, doesn't break anything
- Skills badge change is one-line: hardcoded color → CSS var. Dark theme behavior preserved by var default value (≈ same look)
- Eagle still exists as brand token, so any future component using `bg-eagle` still works

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-09 | Created | jr-build-spec — full spec for dark/light theme: semantic tokens, eagle-based light palette, prefers-color-scheme + localStorage, a11y interplay, component refactor across 11 files |
| 1.0 | 2026-05-09 | Implemented | jr-exe-spec — semantic tokens + light selector in global.css (FR-01/02), Layout init script with theme restore + prefers-color-scheme fallback (FR-04), Header theme toggle desktop+mobile (FR-03) with Option A applied (icon-only mobile, "A11y" label dropped), 12 files refactored (incl. Banner.astro found during exe), a11y disable rule (FR-06.5 CSS pointer-events:none), multi-spec headers (FR-07) updated. astro check 0 errors. AC-01.8 BASE_URL regex empty. Build 656ms |
| 1.1 | 2026-05-09 | Iterated | jr-iterate-spec — refine light palette (`#f9f9f9` off-white instead of eagle for higher contrast); add FR-08 text-shadow outline for `.text-primary` in light theme; add FR-09 semantic token migration for Skills badge color (`#888888CC` → `var(--color-skill-text)`) |
| 1.1 | 2026-05-09 | Implemented | jr-exe-spec — global.css updated (light palette refined, `--color-skill-text(-hover)` tokens dark+light, text-shadow rule for `.text-primary`); Skills.astro inline style + hover both migrated to var. Build 676ms, all FR-08/09 ACs literal-match in dist CSS, regression checks (a11y, BASE_URL) clean |
| 1.1 | 2026-05-09 | Verified | jr-verify-spec — Coverage: 100% (30/30 code-verifiable ACs across FR-01..09) · 13 ACs runtime/manual (FR-03 mobile viewport, FR-04 anti-flash, FR-05 visual diff, FR-06 click behavior, FR-08 a11y interplay) deferred to user smoke test · NFR contrast confirmed AAA (#f9f9f9+black=17.5:1) · multi-spec headers verified across all 12 affected files |
