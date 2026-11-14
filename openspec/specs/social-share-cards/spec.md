# social-share-cards Specification

## Purpose
Generate the Open Graph images at build time and describe them in the meta tags used by social platforms.
## Requirements
### Requirement: Share images build without network access
OG images SHALL be generated from font files stored in the repository. The build MUST NOT download fonts.

#### Scenario: Build log
- **WHEN** `npm run build` runs
- **THEN** the output contains no font download from a remote host and `dist/og/en.png` and `dist/og/es.png` exist

### Requirement: Share images render the requested weights
The title of each OG image SHALL be rendered in the weight set in its configuration, using a font file of that weight.

#### Scenario: Title weight
- **WHEN** `dist/og/en.png` is opened after a build
- **THEN** "Jahiker Rojas" is visibly heavier than the description line

### Requirement: Locale cards share one definition
All locale OG images SHALL be produced from a single card definition, so that they differ only in the localized description.

#### Scenario: Changing the layout
- **WHEN** the padding, colours or font sizes of the card are changed in one place
- **THEN** both `en.png` and `es.png` reflect the change after a build

### Requirement: Share meta tags describe the image
Each page SHALL declare a card type that matches the 1200x630 image, the image dimensions and type, and a text alternative.

#### Scenario: Large card on X
- **WHEN** the built `index.html` is inspected
- **THEN** `twitter:card` is `summary_large_image`

#### Scenario: Image metadata
- **WHEN** the built `index.html` and `es/index.html` are inspected
- **THEN** each contains `og:image:width` 1200, `og:image:height` 630, `og:image:type` `image/png`, `og:image:alt` and `twitter:image:alt`, with the alt text in the page language

### Requirement: Only locales with a share image are accepted
The layout SHALL accept only the locales that have an OG image, so that a page cannot reference an image that does not exist.

#### Scenario: Unsupported locale
- **WHEN** a page passes a `lang` value other than `en` or `es` to the layout
- **THEN** `astro check` reports a type error

### Requirement: Single copy of the rendering engine
The direct `canvaskit-wasm` dependency MUST use a version range compatible with the one `astro-og-canvas` requires, so that only one copy is installed.

#### Scenario: Installed copies
- **WHEN** `node_modules` is searched for `canvaskit-wasm/package.json` after `npm ci`
- **THEN** exactly one copy exists, and the build produces both OG images

