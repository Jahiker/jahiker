## Context

The site is a static Astro 4 portfolio (Tailwind v4, two locales, GitHub Pages). Colours come from semantic tokens declared in `@theme` in `src/styles/global.css` (`--color-bg`, `--color-text`, ...) and overridden by `html[data-theme="light"]`. Two older mechanisms sit on top and do not use the tokens:

- a11y mode (`html[data-a11y="true"]`, `specs/03`) forces `#000` on `body/header/footer/main/section/nav/div` and `#fff` on a fixed list of text elements.
- `@media (prefers-contrast: more)` forces `body` to black / white.

Both were written before the light theme existed (`specs/p2-01`), so in the light theme they produce dark text on a black page.

Evidence gathered for this change (`npm ci && npm run build` on `07f6d42`):

| Check | Result |
|---|---|
| `bg-dark-mid`, `bg-gray` in built CSS | 0 rules generated |
| OG build log | `Loading https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf`, only "Noto Sans" 400 loaded |
| `dist/og/en.png` | title rendered in regular weight, not ExtraBold |
| `canvaskit-wasm` | 0.41.1 at top level (imported by nothing), 0.40.0 nested under `astro-og-canvas` (a regular dependency, not a peer) |

Constraints: the repo keeps its own spec history in `specs/*.md` with `// spec:` traceability comments in every file; those comments must stay accurate.

## Goals / Non-Goals

**Goals:**
- Text is readable in the four combinations of theme (dark, light) and contrast mode (a11y toggle, `prefers-contrast: more`).
- Every colour utility used in components resolves to a token that exists.
- Spanish pages contain no English UI strings and never link to the English home.
- OG images build offline and render the weights they ask for.

**Non-Goals:**
- OG background `#101010`: confirmed by the owner in `specs/p2-02` AC-02.5.
- Versioned or hashed OG URLs: `specs/p2-02` leaves cache refresh to the platform debuggers.
- Removing `Project.image` / `siteUrl` or merging the EN/ES data files: `specs/14` v2.2 tolerates placeholder images on purpose, and `p2-04` (project detail pages) is still pending and may use them.
- Replacing the two OG endpoints with one `[lang].png.ts` route: `specs/p2-02` FR-02 chose two explicit files.
- Removing off-screen carousel slides from the tab order.
- Any redesign: token values are added only where a utility has no token today.

## Decisions

### D1. Contrast modes override tokens, not elements

`html[data-a11y="true"]` and `@media (prefers-contrast: more)` redefine `--color-bg`, `--color-bg-elevated`, `--color-text`, `--color-text-muted`, `--color-text-subtle`, `--color-border` and `--color-border-strong`.

- **a11y mode** keeps its contract from `specs/03` (black page, white text, regardless of theme). The token overrides are added to that block so text that sits directly in a `div` (the Banner marquee) inherits white. The existing element rules stay as they are. One rule is extended: `html[data-a11y="true"] .bg-primary` also restores `background-color`, so the timeline dot is not blacked out by the `div` rule.
- **`prefers-contrast: more`** keeps the visitor's theme and pushes it to maximum contrast: dark becomes `#000` / `#fff`, light becomes `#fff` / `#000`. The current `body { ... !important }` rule is removed.

Selector note: the dark overrides inside the media query must use `:root` (not `html`) to match the specificity of the `@theme` output, and the light overrides must repeat `html[data-theme="light"]` inside the media query, after the base light block.

*Alternative considered:* add the missing elements (`div` text, more selectors) to the forcing rules. Rejected: it is the same approach that broke when the light theme arrived, and it needs `!important` on every new element.

### D2. One new token for lime-on-hover in the light theme

`#d5ff40` on `#f9f9f9` is about 1.1:1. The existing fix (`specs/p2-01` FR-08, a black `text-shadow` on `.text-primary`) cannot be extended to hover states because three of the affected elements are SVG icons and SVG text, where `text-shadow` has no effect.

Add `--color-primary-ink`: `#d5ff40` in the dark theme, a dark olive (`#4d6600`, about 6.2:1 on `#f9f9f9`) in the light theme. Replace `hover:text-primary` and `group-hover:text-primary` with `hover:text-primary-ink` and `group-hover:text-primary-ink` (Header logo and toggles, ProjectCard number and arrow). Static `.text-primary` text keeps the FR-08 outline unchanged.

*Alternative considered:* `hover:text-text` in the light theme only. Rejected: it needs a variant per theme on every element, and loses the accent on hover.

### D3. Card surface tokens

`ProjectCard` uses `bg-bg-elevated` at rest (token exists, unused today) and a new `--color-bg-hover` on hover (`#2a2a2a` dark, `#f1f1f1` light). This closes GAP-01, which `specs/p2-01` left open on purpose.

### D4. Theme-aware replacements for fixed colours

- Experience timeline dot: `ring-black` becomes `ring-bg`.
- Hero CTA hover: `hover:bg-white` becomes `hover:bg-text hover:text-bg`. In the dark theme this is the same result as today; in the light theme the button inverts instead of fading into the page.

### D5. Font face weight

`@font-face` for Basement declares `font-weight: 700`, matching `.font-display` and the logo SVG. The dead `font-black` class on the Banner is removed.

### D6. Localized strings stay next to the component

The components already keep small labels as local ternaries or maps (`Work.astro` `prevLabel`, `Skills.astro` `categoryLabels`). The eight hardcoded strings in Header and Footer follow the same pattern. No new `ui` section in `content.ts`, so `SiteContent` and `specs/05` are untouched.

The logo link uses `getRelativeLocaleUrl(locale, '/')`.

### D7. OG card: shared definition, local fonts

- New `src/pages/og/_card.ts` (the underscore keeps it out of routing) exports one function that takes the description and returns the PNG `Response`. `en.png.ts` and `es.png.ts` stay as two files, as `specs/p2-02` requires, and shrink to one call each.
- `fonts` points to two TTF files committed under `src/fonts/og/` (Noto Sans latin 400 and 800, SIL OFL). Passing `fonts` replaces the library default, so nothing is fetched at build time.
- The `border` option (width 0) is removed.
- `canvaskit-wasm` stays a direct dependency but moves to `^0.40.0`, the range `astro-og-canvas` requires. Found during apply: removing it makes Vite bundle the nested copy into the SSR chunk and the build fails with `__dirname is not defined` (the error `astro-og-canvas` documents for missing direct installs). Aligning the version removes the duplicate 0.41.1 install, which was the real problem.

*Alternative considered:* keep the remote default and add a second remote URL for weight 800. Rejected: the build would still depend on fontsource being reachable from CI.

### D7b. Carousel modules

Glide mounts `Swipe` for touch and drag, and `Anchors` so that releasing a drag over a card does not follow its link (found during apply).

### D8. Share meta tags

- `twitter:card` becomes `summary_large_image`. With `summary`, X crops the image to a centred square (x from about 285 to 915), and the text starts at x = 80, so the name is cut.
- Add `og:image:width` (1200), `og:image:height` (630), `og:image:type`, `og:image:alt` and `twitter:image:alt`.
- `Props.lang` is typed `'en' | 'es'`, so a locale without an OG image fails `astro check` instead of producing a 404 URL.

### D9. Amendments to the existing project specs

| Spec | Criterion | Amendment |
|---|---|---|
| `specs/p2-02` | AC-01.1 | `canvaskit-wasm` stays a direct dependency, pinned to the range `astro-og-canvas` requires (`^0.40.0`) |
| `specs/p2-02` | Out of scope: `summary_large_image`, custom fonts | Both brought in scope: the square crop cuts the text, and the requested weight needs a font file |
| `specs/p2-02` | AC-03.5 | `Layout.astro` gains the image meta tags and the `lang` type |
| `specs/14` | AC-01.7 | Card background tokens are `bg-bg-elevated` and `bg-bg-hover` |
| `specs/03` | `prefers-contrast` | Keeps the visitor's theme at maximum contrast instead of forcing black |

They are recorded in one note under `specs/fixes/`, following `specs/fixes/favicon-double-slash-regression.md`.

## Risks / Trade-offs

- **Headings look lighter after D5** → Today most browsers add synthetic bold on top of Basement Black. Compare the Hero and section headings before and after in Chrome and Safari; if the owner prefers the current look, D5 is dropped and nothing else depends on it.
- **CanvasKit may not report "Noto Sans" as one family for both files** → The build log prints the loaded families; check that the title is visibly heavier in `dist/og/en.png`. If not, set `font.title.families` explicitly.
- **`prefers-contrast` behaviour changes for light-theme visitors** (white page instead of black) → This is the intent of D1; noted in the `specs/fixes` record.
- **Social platforms keep the old card cached** → Out of scope here; refresh with the LinkedIn and Facebook debuggers after deploy.
- **Token overrides lose to `@theme` if the selector is weaker** → Covered by the selector note in D1 and by the manual check in each mode.

## Migration Plan

Single deploy through the existing GitHub Pages workflow. Rollback is a revert of the change commits; no data or URL changes.

## Open Questions

1. **Contact subheading**: EN says "freelance projects", ES adds full-time opportunities. Which message is correct? Tasks assume the ES meaning (freelance and full-time) until the owner confirms.
2. **`--color-primary-ink` light value** (`#4d6600`) and **`--color-bg-hover` values** (`#2a2a2a` / `#f1f1f1`) are proposals; the owner may prefer other values from the design system.
3. **Logo dot** (`fill="#D5FF40"`, decorative) stays lime in the light theme. Switch it to `--color-primary-ink` too?
4. **OG font**: Noto Sans is kept to preserve the current look. Use Basement instead if a TTF/OTF of the brand font is available?
