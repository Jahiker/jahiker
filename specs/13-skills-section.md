# Skills Section + Badge UI

**Status:** Verified | **Version:** 2.0 | **Date:** 2026-05-02 | **Author:** jr-iterate-spec
**Roadmap:** #1.9 — E3 · Sections
**Depends on:** specs/02-astro-i18n-layout.md (Implemented ✅), specs/07-skills-data.md (Implemented ✅)

---

## Summary

Skills section with three-column grid (Frontend / Backend / Tools). Each skill rendered as a pill badge with brand-colored border and label text — no icon. Category headings localized (Tools → Herramientas in ES). Skills data extended with `color` field and 10 new entries across all three categories.

---

## Functional Requirements

### FR-01 — Three-column category grid
Section renders a responsive 3-column grid (1-col mobile, 3-col `lg`). Columns: Frontend · Backend · Tools. Category headings localized.

> 🔄 Modified in v2.0: no behavior change — preserving from v1.1 implementation.

### FR-02 — Badge pill: brand color border + label, no icon
Each skill renders as a pill badge. The border color and label text color are driven by `skill.color`. No icon is rendered.

> 🔄 Modified in v2.0: icon (`<img>`) removed; border and text now use `skill.color` instead of static `white/20` / `white/60`.

**Acceptance Criteria:**
- `<img>` element is completely absent from badge markup
- Badge border uses `skill.color` at reduced opacity (e.g. `border` set via inline style `border-color: skill.color + '4D'` ~30%)
- Badge label text uses `skill.color` at full or high opacity
- On hover: border and text shift to `skill.color` at full opacity
- Transition: `200ms` ease on color changes
- Shape, padding, and font remain unchanged (`rounded-full`, `px-4 py-2`, `font-display text-xs uppercase`)

### FR-03 — `color` field in Skill type
The `Skill` TypeScript type gains a required `color: string` field (hex value).

> ✨ New in v2.0

**Acceptance Criteria:**
- `src/data/types.ts` — `Skill` interface includes `color: string`
- All existing skill entries in `skills.ts` include a `color` value
- TypeScript build passes with no type errors

### FR-04 — New skills data entries
Ten new skills added across the three categories with name, category, and brand color.

> ✨ New in v2.0

**New entries:**

| Category | Name | color |
|---|---|---|
| frontend | Shopify | `#96BF48` |
| frontend | WordPress | `#21759B` |
| frontend | GSAP | `#88CE02` |
| backend | PHP | `#777BB4` |
| backend | Laravel | `#FF2D20` |
| backend | MySQL | `#4479A1` |
| tools | Claude | `#CC6B4D` |
| tools | Claude Code | `#E8845E` |
| tools | Cursor | `#6366F1` |
| tools | Gemini CLI | `#4285F4` |

**Acceptance Criteria:**
- All 10 entries present in `src/data/skills.ts` in correct category order
- No `icon` field required for new entries (field remains optional in type)

---

## Technical Design

### Skill type update

```ts
export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools'
  icon?: string      // optional — kept for backward compat, not rendered
  color: string      // hex brand color, e.g. '#E34F26'
}
```

> 🔄 Updated in v2.0: `color: string` added as required field; `icon` made optional.

### Badge color application

Use inline styles for dynamic per-skill color (Tailwind cannot handle runtime hex values):

```astro
<span
  style={`border-color: ${skill.color}4D; color: ${skill.color};`}
  class="... hover:border-[var(--c)] hover:text-[var(--c)]"
>
```

Simpler approach — CSS custom property on the element:

```astro
<span
  style={`--c: ${skill.color};`}
  class="inline-flex items-center border font-display text-xs uppercase px-4 py-2 rounded-full transition-colors duration-200"
  style-border="border-color: color-mix(in srgb, var(--c) 30%, transparent)"
>
```

**Recommended implementation:** set `style="--c: {skill.color}"` on the `<span>`, then use Tailwind's arbitrary CSS + `[border-color:color-mix(in_srgb,var(--c)_30%,transparent)]` and `[color:var(--c)]` classes. This avoids inline style overrides conflicting with Tailwind.

Fallback (simpler, fully reliable): use two inline style properties directly:

```astro
style={`border-color: ${skill.color}50; color: ${skill.color}CC;`}
```

On hover, shift to full opacity via a wrapping class that overrides. Since Tailwind can't do dynamic hover with inline styles, use a `<style>` block with a CSS rule:

```css
.skill-badge:hover {
  border-color: var(--skill-color) !important;
  color: var(--skill-color) !important;
}
```

And set `--skill-color` via `style="--skill-color: {skill.color}"`.

### Color reference — all skills

| Skill | color |
|---|---|
| HTML | `#E34F26` |
| CSS | `#1572B6` |
| JavaScript | `#F7DF1E` |
| TypeScript | `#3178C6` |
| React | `#61DAFB` |
| Vue | `#4FC08D` |
| Svelte | `#FF3E00` |
| Astro | `#FF5D01` |
| Tailwind CSS | `#06B6D4` |
| Framer Motion | `#0055FF` |
| Shopify | `#96BF48` |
| WordPress | `#21759B` |
| GSAP | `#88CE02` |
| Node.js | `#339933` |
| Express | `#888888` |
| GraphQL | `#E10098` |
| REST APIs | `#FF6C37` |
| MongoDB | `#47A248` |
| PostgreSQL | `#4169E1` |
| PHP | `#777BB4` |
| Laravel | `#FF2D20` |
| MySQL | `#4479A1` |
| Git | `#F05032` |
| GitHub | `#6E5494` |
| Vite | `#646CFF` |
| Figma | `#F24E1E` |
| Docker | `#2496ED` |
| VS Code | `#007ACC` |
| Claude | `#CC6B4D` |
| Claude Code | `#E8845E` |
| Cursor | `#6366F1` |
| Gemini CLI | `#4285F4` |

---

## Affected Files

| File | Action | Description |
|---|---|---|
| `src/data/types.ts` | MODIFY | Add `color: string` to `Skill` interface; make `icon` optional |
| `src/data/skills.ts` | MODIFY | Add `color` to all existing entries + 10 new skill entries |
| `src/components/sections/Skills.astro` | MODIFY | Remove `<img>` icon; apply brand color to badge border and label via CSS custom property |

---

## Delta v2.0

### What changes from v1.1:
- Badge `<img>` icon element completely removed
- Badge border color and label text color driven by `skill.color` (brand hex)
- Hover state: border + text shift to full `skill.color` opacity
- `Skill` type gains required `color: string` field; `icon` becomes optional
- All 22 existing skills get a `color` value
- 10 new skills added: Shopify, WordPress, GSAP (frontend) · PHP, Laravel, MySQL (backend) · Claude, Claude Code, Cursor, Gemini CLI (tools)

### What does NOT change:
- Section layout and grid structure (3-column, responsive)
- Badge shape, padding, typography (`rounded-full`, `px-4 py-2`, `font-display text-xs uppercase`)
- Category heading localization (Tools → Herramientas in ES)
- Section heading and border structure
- `gradient-grid` class on heading row

### Regression risk:
- `src/data/types.ts` — adding required `color` field will cause TS errors on any other file that constructs a `Skill` object without `color`; only `skills.ts` does this, so risk is low
- `src/components/sections/Skills.astro` — `iconUrl` helper and `iconVariant` map become dead code and should be removed

---

## History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-05-02 | Created | jr-build-spec |
| 1.1 | 2026-05-02 | Implemented | jr-exe-spec — 3-column grid, badge pills, Devicons CDN icons with onerror fallback |
| 2.0 | 2026-05-02 | Iterated | jr-iterate-spec — remove icons, add brand color per skill, 10 new skills |
| 2.0 | 2026-05-02 | Implemented | jr-exe-spec — color field in types, 32 skills with brand colors, badge uses CSS custom property |
| 2.0 | 2026-05-02 | Verified | jr-verify-spec — Coverage: 100% · Gaps: 0 |
