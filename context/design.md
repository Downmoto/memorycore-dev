# Website design context

Status: Approved
Last reviewed: 2026-10-23

## Direction

The approved direction is speculative technical editorial. MemoryCore presents creative software and open-source foundations as authored instruments within a vivid editorial world. Classical and mythic imagery, computational transformation, severe typography, and technical structure create the character. Direct copy and clear routes keep the work understandable.

Core principles:

1. The work leads.
2. One dominant idea carries each section.
3. Expressive material sits inside a usable grid and hierarchy.
4. Shared cobalt, pale blue, pixel fragmentation, severe type, and classical imagery create continuity.
5. DitherTool centres image transformation; AethelTool centres rules, corpora, syntax, and generated language.
6. Promotional pages may be intense; documentation and utility pages remain calm and readable.

Approved composition studies define hierarchy and rhythm. Treat them as visual references rather than production markup. All included third-party imagery remains planning material until rights and attribution are cleared.

## Typography

| Role | Family | Shipped weights | Key use |
|---|---|---|---|
| Expressive display | Manufacturing Consent | 400 | Home hero and short editorial statements |
| Technical headings and data | Space Mono | 400, 700 | Page titles, section titles, code, measurements, metadata |
| Body and interface | Roboto | 400, 500, 700 | Reading copy, controls, labels |

Self-host WOFF2 files and retain SIL Open Font License 1.1 texts. Keep body copy near 65 characters and within a 640 px reading column. Use sentence case. Keep editable controls at 16 px or larger.

Responsive type roles:

- Hero display: `clamp(4.5rem, 11vw, 10.5rem)`, line height 0.80.
- Section display: `clamp(3rem, 7vw, 7.5rem)`, line height 0.86.
- Page title: `clamp(2.5rem, 6vw, 5.5rem)`, line height 0.96.
- Section title: `clamp(2rem, 4vw, 4rem)`, line height 1.05.
- Large body: `clamp(1.125rem, 1.4vw, 1.375rem)`, line height 1.50.
- Body: `1rem`, line height 1.55.
- Label: `0.875rem`, line height 1.40.
- Caption: `0.75rem`, line height 1.40.
- Code: `0.875rem`, line height 1.60.

Prevent display text clipping at 320 CSS px and 200 percent text scaling.

## Colour

Inherited foundations include `brand-dark` `#050507`, `brand-light` `#E8E1D2`, `brand-light-surface` `#F3EBDD`, `brand-dark-surface` `#1C1A20`, and the shared muted and status colours.

Website consumer colours:

| Token | Value | Use |
|---|---|---|
| `colour-consumer-website-primary-light` | `#2F6892` | Shared website action on light backgrounds and large fields |
| `colour-consumer-website-primary-dark` | `#4E8BB7` | Shared website action and focus on dark backgrounds |
| `colour-consumer-website-supporting-pale-blue` | `#D3DAE0` | Supporting field and high-contrast dark-background content |
| `colour-consumer-website-resource-primary-light` | `#1547D2` | Resource action on light backgrounds |
| `colour-consumer-website-resource-primary-dark` | `#6D98FF` | Resource action and focus on dark backgrounds |

Generated CSS properties use the `--mc-` prefix. Tool pages are website surfaces and use the website consumer pair. Standalone DitherTool and AethelTool interfaces have reserved consumer-primary identifiers without values. Use cream text on solid cobalt controls, dark-theme tokens for small text on near-black, and a persistent cue alongside colour.

## Layout

- Use the approved 8 px rhythm with a 4 px half-step.
- Page margin: `clamp(24px, 5vw, 48px)`.
- Maximum content width: 1,280 px.
- Major section padding: `clamp(64px, 9vw, 128px)`.
- Use 12 columns at large widths, six at medium widths, and one content column at small widths.
- Use 32 px, 24 px, and 16 px grid gaps respectively.
- Recompose overlaps into logical reading order on narrow layouts.
- Use the shared radius scale for ordinary fields and controls. Angular framing and technical markers may use square corners consistently.
- Use 1 px structural rules and 2 px emphasis, selection, or focus rules.
- Shadows communicate temporary depth only.

## Component ownership

`@memorycore/design` owns reusable tokens and approved primitives such as links, buttons, icon buttons, menu or disclosure behaviour, dialogs, alerts, status, progress, empty states, cards, lists, tables, and responsive overflow.

The website owns its shell, header, footer, breadcrumbs, introductions, relationship panels, evidence compositions, documentation shell, Resource records and previews, supporting-page compositions, and page templates.

Keep page-specific heroes, visual studies, generation studies, archives, source packets, and founder compositions local until repeated use establishes a stable shared contract.

## Imagery and technical material

- Prefer genuine outputs, process material, code, research, and source artefacts.
- Show a product interface only when a real interface exists.
- Label conceptual studies and in-development evidence accurately.
- Use source-and-output pairs for DitherTool.
- Use corpus fragments, rules, syntax, provenance, and generated text for AethelTool.
- Record creator, source, licence, permission, attribution, and modifications for public imagery.
- Capture raster product material at twice its intended display dimensions and prefer SVG for vector output.
- Keep fragmentation outside essential text and controls.
- Render Resource preview bytes only after visitor activation.

## Interaction and motion

- Use native semantic controls and visible `focus-visible` treatment.
- Minimum target is 24 by 24 CSS px; prefer 44 by 44 CSS px for primary touch controls.
- Underline body-copy links. Hover cannot reveal essential information.
- Dialog focus enters the layer and returns to the trigger on close.
- Use 100 ms for direct response, 160 ms for standard transitions, 240 ms for large transitions, and no more than 400 ms for one purposeful editorial entrance.
- Limit entrance movement to 8 px. Keep scrolling under visitor control.
- Avoid scroll hijacking, parallax, timed splash screens, decorative loops, and typewriter effects for essential output.
- Under reduced motion, remove movement and loops, render entrances in their final state, and keep any opacity transition at 100 ms or less.

## Page-family expression

- Home uses the shared cobalt environment and largest display scale. Its navigation and hero fill the first viewport.
- Tool pages share structure while their evidence stays medium-specific.
- Libraries and documentation reduce decorative density and preserve stable navigation and reading measure.
- Resources use electric cobalt, archival composition, dense source annotation, file-led structure, and requested previews.

## Production checks

- Confirm Manufacturing Consent with final self-hosted files and real headings.
- Replace or clear provisional classical imagery.
- Validate texture density on production layouts and small screens.
- Record and approve any Tool-specific colour before replacing the shared interaction pair.
