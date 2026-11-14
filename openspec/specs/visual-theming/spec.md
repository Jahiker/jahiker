# visual-theming Specification

## Purpose
Keep the site readable and consistent across the dark and light themes and the contrast modes (a11y toggle and OS `prefers-contrast: more`), with every colour utility backed by a semantic token.
## Requirements
### Requirement: Text is readable in every theme and contrast mode
When a contrast mode is active (the a11y toggle or OS `prefers-contrast: more`), the site SHALL keep all text at a contrast ratio of at least 4.5:1 against its background, in both the dark and the light theme. Contrast modes MUST change colours through the semantic colour tokens so that every utility bound to a token follows them.

#### Scenario: Light theme with OS increased contrast
- **WHEN** a visitor with the light theme has "Increase contrast" enabled in the operating system
- **THEN** the page background is white and body text, headings and navigation are black

#### Scenario: Dark theme with OS increased contrast
- **WHEN** a visitor with the dark theme has "Increase contrast" enabled in the operating system
- **THEN** the page background is black and body text, headings and navigation are white

#### Scenario: a11y mode turned on from the light theme
- **WHEN** a visitor in the light theme turns on a11y mode
- **THEN** the page background is black and all text is white, including the Banner marquee words

#### Scenario: Accent surfaces survive a11y mode
- **WHEN** a11y mode is on
- **THEN** the Experience timeline dots keep the primary colour

### Requirement: Accent hover states are readable in the light theme
Interactive elements that take the accent colour on hover or focus SHALL reach a contrast ratio of at least 4.5:1 against the page background in the light theme, and SHALL keep the primary lime in the dark theme.

#### Scenario: Hovering a header toggle in the light theme
- **WHEN** a visitor in the light theme hovers the theme toggle, the a11y toggle or the logo
- **THEN** the icon or logo text uses the dark accent colour, not `#d5ff40`

#### Scenario: Hovering a project card in the light theme
- **WHEN** a visitor in the light theme hovers a project card
- **THEN** the card number and arrow use the dark accent colour

#### Scenario: Hovering in the dark theme
- **WHEN** a visitor in the dark theme hovers the same elements
- **THEN** they use `#d5ff40`, as before

### Requirement: Every colour utility resolves to a token
Components MUST NOT use a colour utility that has no token in the Tailwind theme. Surfaces and rings MUST use semantic tokens so that they follow the active theme.

#### Scenario: Project card surface
- **WHEN** the site is built
- **THEN** project cards have an elevated background at rest and a distinct background on hover, in both themes

#### Scenario: No silent utilities in the build
- **WHEN** the built CSS is searched for the colour utilities used in `src/components`
- **THEN** each one has a generated rule, and `bg-dark-mid` and `bg-gray` appear nowhere in `src/`

#### Scenario: Timeline dot in the light theme
- **WHEN** a visitor views the Experience section in the light theme
- **THEN** the ring around each timeline dot matches the page background

#### Scenario: Hero call to action on hover in the light theme
- **WHEN** a visitor in the light theme hovers the main Hero button
- **THEN** the button and its label remain clearly visible against the page

### Requirement: Display font renders without synthetic bold
The Basement font face SHALL be declared with the weight that the display styles request, so that browsers render the font file as designed.

#### Scenario: Display headings
- **WHEN** a heading with `.font-display` is rendered
- **THEN** the browser uses the Basement Black glyphs without adding synthetic emboldening

