# Website scope and routes

Status: Approved
Last reviewed: 2026-10-21

## Purpose and audience

memorycore.dev is the authoritative public home for MemoryCore. It explains the organisation, makes its commercial creative Tools understandable and desirable, connects each Tool to its open-source foundation, and provides dependable paths to documentation, source code, public Resources, and Community.

Priority audiences:

1. Creative practitioners evaluating MemoryCore Tools.
2. Developers evaluating or using `ditherlib` and `aethellib`.
3. YouTube viewers arriving for a specific Resource.
4. Future readers of the public brand and product-design presentations.

The experience should feel distinctive, focused, experimental, technically credible, carefully made, and calm.

## Product and relationship model

- DitherTool is a photobashing image-effect application in active development. `ditherlib` is its open-source image-effects and dithering foundation.
- AethelTool is a planned graphical application for rule-based, corpus-consuming random text generation. `aethellib` is its open-source foundation.
- Every Tool and supporting library pair links in both directions and explains the relationship.
- Tool pages lead primarily to Community during active development.
- Library pages lead primarily to internal documentation, with GitHub, crates.io, and docs.rs as labelled external destinations.
- Resources are open companion pages for MemoryCore videos. Product relationships appear only when the subject genuinely supports them.
- About carries organisation, philosophy, founder, and authorship context.
- Community explains the MemoryCore Discord server before sending visitors to it.

## Initial route inventory

| Route | Page family | Publication rule |
|---|---|---|
| `/` | Home | Initial release |
| `/tools` | Tools collection | Initial release |
| `/tools/dithertool` | Image-led Tool detail | Initial release |
| `/tools/aetheltool` | Language-led Tool detail | Initial release; review early Q1 2027 |
| `/libraries` | Libraries collection | Initial release |
| `/libraries/ditherlib` | Image-processing library detail | Initial release |
| `/libraries/aethellib` | Text-generation library detail | Initial release; review early Q1 2027 |
| `/libraries/[library]/docs` | Documentation index | Initial release with a maintained, reviewed topic set |
| `/libraries/[library]/docs/[...path]` | Documentation topic | Publish complete topics only |
| `/resources` | Resources collection | Initial release with approved empty state; `noindex` until the first Resource publishes |
| `/resources/[reference]` | Resource detail | Publish per complete source packet |
| `/community` | Community | Initial release |
| `/about` | About | Initial release |
| `/privacy` | Privacy | Initial release after implementation and legal review |
| Unknown route | Error response | Return HTTP `404` with `noindex, follow` and no canonical |

Generate `/404` as deployment output. Keep it out of navigation and the sitemap.

## Navigation

Wide header order:

1. MemoryCore identity linked to `/`.
2. Tools.
3. Libraries.
4. Resources.
5. About.
6. Community as the prominent action.

Use direct links without desktop dropdown menus. On small screens, use one labelled menu button and reveal the same destinations in the same order. The menu must expose its expanded state, manage focus, close with `Escape`, return focus to its trigger, and prevent background focus while modal.

Nested pages use breadcrumbs. The current page is text with `aria-current="page"`; ancestors are links. Documentation breadcrumbs include the topic hierarchy. Resource breadcrumbs use the display title while the stable route reference remains unchanged.

The footer exposes the complete public structure, external destinations, Privacy, the MemoryCore identity, the tagline `Creative tools for unusual work`, and a current copyright line.

## Page-family responsibilities

- Home establishes MemoryCore, leads with both Tools, then introduces libraries, an optional Featured Resource, About, and Community.
- Collection pages introduce the group and list every published child once with accurate status.
- Tool pages explain purpose, audience, active-development status, authentic evidence, the supporting library, relevant Resources, and Community.
- Library pages explain purpose, capabilities, maturity, Tool relationship, documentation, examples, source, package, API reference, and licence.
- Documentation pages provide stable local navigation, hierarchy, applicability, technical links, and reviewed task guidance.
- Resource pages provide a stable reference, video link, source packet, file manifest, downloads, on-demand previews, citations, research, rights, corrections, and genuine relationships.
- Community explains purpose, expectations, conduct, privacy context, and invite availability.
- About establishes MemoryCore's purpose, philosophy, founder, current responsibilities, and body of work.
- Privacy explains implemented data practices and visitor choices after its launch gates pass.
- The error response provides concise recovery through Home, Tools, Resources, and Community.

## Primary journeys

1. Creative practitioner: Home to Tool to Community to Discord.
2. Developer: Library to documentation index to topic to source, package, API reference, or Tool context.
3. YouTube viewer: Resource to promised files and sources to related work or Community.
4. Credibility: any substantive page to evidence to About to related work.

## Deferred and conditional scope

Deferred routes:

- `/brand`
- `/brand/design`
- `/brand/product-design`

Add Brand navigation only when at least one complete designed presentation is publishable. The two presentation routes require a complete approved page-type blueprint.

The initial release also excludes accounts, profiles, newsletter, wishlist, search, comments, on-site community features, a general blog, a separate founder profile, product account or licence-management routes, and DitherTool or AethelTool application interfaces.

Commerce, paid downloads, R2, populated Resources, and direct Discord invitations are conditional on their content and operational gates. Do not create public placeholders for them.

## Time-bounded facts

The AethelTool, `aethellib`, and related documentation descriptions represent the pre-product and pre-overhaul state. Review them in early Q1 2027 after a shippable DitherTool build and definition of the planned `aethellib` overhaul.
