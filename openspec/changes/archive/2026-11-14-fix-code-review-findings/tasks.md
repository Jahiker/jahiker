## 1. Baseline

- [x] 1.1 Run `npm ci && npm run build` and keep `dist/og/en.png` plus screenshots of the home page (dark, light, a11y on) as the "before" reference
- [x] 1.2 Confirm with the owner the open questions in design.md (owner accepted the implemented defaults, 2026-11-14): Contact subheading message, `--color-primary-ink` and `--color-bg-hover` values, logo dot colour, OG font

## 2. Quick fixes (one line each)

- [x] 2.1 `Header.astro`: logo `href` uses `getRelativeLocaleUrl(locale, '/')` instead of `enUrl`
- [x] 2.2 `Experience.astro`: timeline dot `ring-black` becomes `ring-bg`
- [x] 2.3 `Hero.astro`: CTA `hover:bg-white` becomes `hover:bg-text hover:text-bg`
- [x] 2.4 `Work.astro`: import `Swipe` and mount Glide with `{ Controls, Breakpoints, Swipe, Anchors }` (`Anchors` stops a drag from opening the card link)
- [x] 2.5 `Layout.astro`: type `Props.lang` as `'en' | 'es'`

## 3. Colour tokens and card surface

- [x] 3.1 `global.css`: add `--color-bg-hover` and `--color-primary-ink` to `@theme` (dark values) and to `html[data-theme="light"]` (light values)
- [x] 3.2 `ProjectCard.astro`: replace `bg-dark-mid` with `bg-bg-elevated` and `hover:bg-gray` with `hover:bg-bg-hover`
- [x] 3.3 `ProjectCard.astro` and `Header.astro`: replace `hover:text-primary` / `group-hover:text-primary` with `hover:text-primary-ink` / `group-hover:text-primary-ink`
- [x] 3.4 Build and confirm the new utilities have rules in `dist/_astro/*.css` and that `grep -rn "bg-dark-mid\|bg-gray" src` returns nothing

## 4. Contrast modes

- [x] 4.1 `global.css`: add the token overrides (bg, bg-elevated, text, text-muted, text-subtle, border, border-strong) to the `html[data-a11y="true"]` block
- [x] 4.2 `global.css`: extend `html[data-a11y="true"] .bg-primary` to restore `background-color: var(--color-primary) !important`
- [x] 4.3 `global.css`: replace the `prefers-contrast: more` body rule with token overrides for `:root` (black / white) and `html[data-theme="light"]` (white / black); keep the stronger border colour through the border tokens
- [x] 4.4 Check in the browser, emulating `prefers-contrast: more`: dark and light themes are both readable
- [x] 4.5 Check in the browser with a11y on, starting from the light theme: Banner words are white and timeline dots stay lime

## 5. Display font weight

- [x] 5.1 `global.css`: change the Basement `@font-face` to `font-weight: 700`
- [x] 5.2 `Banner.astro`: remove the dead `font-black` class
- [x] 5.3 Compare headings with the "before" screenshots in Chrome and Safari; if the owner prefers the previous look, revert 5.1 and note it

## 6. Localized strings

- [x] 6.1 `Footer.astro`: localize "All rights reserved" and the three link `aria-label`s with a local labels map keyed by locale
- [x] 6.2 `Header.astro`: localize the `aria-label`s of the logo, both navigation landmarks, the menu button, the theme toggles and the a11y toggles
- [x] 6.3 `Contact.astro`: align the EN and ES subheadings to the message confirmed in 1.2
- [x] 6.4 Build and confirm `grep -c "All rights reserved\|Toggle \|Main navigation\|Send email" dist/es/index.html` returns 0

## 7. Social share cards

- [x] 7.1 Add Noto Sans latin 400 and 800 TTF files (SIL OFL) under `src/fonts/og/`
- [x] 7.2 Create `src/pages/og/_card.ts` with the shared card options (`fonts` pointing to the local files, no `border`) and a function that returns the PNG `Response` for a given description; start it with the `// spec:` comment
- [x] 7.3 Reduce `en.png.ts` and `es.png.ts` to one call each to the shared function
- [x] 7.4 `Layout.astro`: set `twitter:card` to `summary_large_image` and add `og:image:width`, `og:image:height`, `og:image:type`, `og:image:alt` and `twitter:image:alt` (alt text per locale)
- [x] 7.5 Align `canvaskit-wasm` to `^0.40.0` with `npm install canvaskit-wasm@^0.40.0` (removing it breaks the SSR build, see design D7)
- [x] 7.6 Build and confirm: no `fontsource` line in the log, both PNGs exist under 200 KB, and the title in `dist/og/en.png` is visibly heavier than in the "before" image

## 8. Wrap-up

- [x] 8.1 Run `npm run build` (includes `astro check`) with 0 errors
- [x] 8.2 `npm run preview`: walk both locales in dark, light and a11y modes, swipe the carousel at phone width, and click the logo on `/es/`
- [x] 8.3 Add `specs/fixes/code-review-fixes.md` listing the amendments from design.md D9, and update the `// spec:` header comments of the files touched
