## Why

A code review of the current Astro site (commit `07f6d42`) found defects that a visitor can see or that make the build fragile: unreadable text in three contrast modes, project cards without a background, Spanish pages that fall back to English, a carousel that cannot be swiped on phones, and share cards that ignore the requested font weight and download a font from the network on every build. Each finding kept here was confirmed against the source and a real `npm run build`.

## What Changes

**Contrast and theming**
- High-contrast modes (the a11y toggle and the OS `prefers-contrast: more` setting) redefine the semantic colour tokens instead of forcing colours on individual elements, so every `bg-*` / `text-*` utility follows them in both themes.
- Project cards get a real background and hover background (`bg-dark-mid` and `hover:bg-gray` generate no CSS today).
- Hover and focus states that turn lime (`hover:text-primary`, `group-hover:text-primary`) get a readable colour in the light theme.
- The Experience timeline dot and the Hero CTA hover use theme-aware tokens instead of fixed dark-theme colours.
- The Basement font face is declared with the weight the site actually requests, removing synthetic bold.

**Locale consistency**
- The header logo links to the home page of the current locale.
- Footer and header strings that are hardcoded in English (copyright line and `aria-label`s) are localized.
- The Contact subheading says the same thing in both languages.

**Projects carousel**
- Touch and drag navigation is enabled.

**Social share cards**
- OG images load their fonts from files in the repo, in the weights they request, with no network call at build time.
- The two OG endpoints share one card definition; the dead `border` option is removed.
- The X/Twitter card type matches the 1200x630 image, and the image declares its size, type and alt text.
- `Layout` only accepts locales that have an OG image.
- The direct dependency `canvaskit-wasm` is aligned with the version `astro-og-canvas` requires, so only one copy is installed.

**Not included** (deliberate decisions already recorded in `specs/`, see design.md): the `#101010` OG background, versioned OG URLs, the unused `Project.image` / `siteUrl` fields, and merging the two OG endpoints into one dynamic route.

## Capabilities

### New Capabilities
- `visual-theming`: readable colours in every theme and contrast mode, card surfaces, and display font weight.
- `locale-consistency`: links and UI strings follow the current locale.
- `projects-carousel`: how visitors move through the project cards.
- `social-share-cards`: OG image generation and the meta tags that point to it.

### Modified Capabilities

None. `openspec/specs/` does not exist yet; this change introduces the first capability specs.

## Impact

- **Code**: `src/styles/global.css`, `src/layouts/Layout.astro`, `src/components/global/{Header,Footer}.astro`, `src/components/sections/{Hero,Experience,Contact,Work}.astro`, `src/components/ui/{ProjectCard,Banner}.astro`, `src/pages/og/{en,es}.png.ts`, new `src/pages/og/_card.ts`, new font files under `src/fonts/og/`.
- **Dependencies**: `canvaskit-wasm` goes from `^0.41.1` to `^0.40.0` (same as `astro-og-canvas`), removing the duplicate install.
- **Existing project specs** (`specs/*.md`, jr-toolkit): four acceptance criteria are amended; they are listed in design.md and recorded in `specs/fixes/`.
- **Visual**: headings may look slightly lighter once synthetic bold is removed; share cards on X switch to the large format.
- **No change** to URLs, routes, the deploy workflow or content data.
