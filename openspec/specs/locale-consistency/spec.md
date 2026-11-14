# locale-consistency Specification

## Purpose
Keep navigation and interface text in the language of the page being viewed (`en` at `/jahiker/`, `es` at `/jahiker/es/`).
## Requirements
### Requirement: Navigation stays in the current locale
Links that lead to the home page, other than the language switcher, SHALL point to the home page of the locale being viewed.

#### Scenario: Logo on the Spanish site
- **WHEN** a visitor on `/jahiker/es/` clicks the header logo
- **THEN** they land on `/jahiker/es/`

#### Scenario: Logo on the English site
- **WHEN** a visitor on `/jahiker/` clicks the header logo
- **THEN** they land on `/jahiker/`

### Requirement: Interface strings follow the page language
Every visible string and every accessible name in the header and footer SHALL be written in the language of the page.

#### Scenario: Footer on the Spanish site
- **WHEN** a visitor views the footer on `/jahiker/es/`
- **THEN** the copyright line and the accessible names of the email, GitHub and LinkedIn links are in Spanish

#### Scenario: Header controls on the Spanish site
- **WHEN** a screen reader user reaches the menu button, the navigation landmark, the theme toggle or the a11y toggle on `/jahiker/es/`
- **THEN** each accessible name is announced in Spanish

#### Scenario: English site unchanged
- **WHEN** a visitor views `/jahiker/`
- **THEN** the same strings are in English

### Requirement: Both locales state the same availability
The Contact subheading SHALL communicate the same availability in English and in Spanish.

#### Scenario: Comparing locales
- **WHEN** the Contact section is read on `/jahiker/` and on `/jahiker/es/`
- **THEN** both describe the same kinds of work the owner is available for

