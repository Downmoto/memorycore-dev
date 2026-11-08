# Plan: memorycore.dev overhaul

Status: Current
Last reviewed: 2026-11-04
Owner: Arad Fadaei

## Objective

Replace the existing website with the approved static SvelteKit experience while keeping the current production site deployable until the verified Cloudflare cutover.

## Current position

Phase 2 and the shared Pass 1 foundations are implemented on `feat/website-overhaul`. The remaining Phase 2 exit evidence is a clean-checkout `npm ci` and `npm run verify` run. The deployed branch Preview remains non-indexable and has the expected security headers.

Home, the Tools and Libraries collection routes, About, Community, and the Privacy presentation are approved. Home retains its request-count and asset provenance/resolution gates. Privacy retains its legal and operational publication gates and remains `preview` and `noindex`.

### Resume point

Refine `/resources`, then return to `/tools/dithertool` and the remaining Tool and Library detail routes. Keep the Home and Privacy release gates open.

The remaining shared Pass 1 items stay queued: retain the font licence texts in the repository, define the initial structured-data boundaries, and establish documentation manifests from verified immutable library sources before adding documentation routes.

## Implementation approach

Use a skeleton-first sequence followed by focused refinement in vertical slices. Each pass should leave the site coherent and verifiable so work can stop and resume safely between chats.

At the end of every implementation slice, update the applicable checklist and revise **Current position** or **Resume point** only when the active area, decision, or remaining gate changes. Keep those sections as a concise snapshot; do not repeat implementation history. Record newly discovered blockers or gates beside the affected checkpoint.

### Focused refinement sequence

Complete and review one area at a time. Commit each approved checkpoint before moving to the next area.

1. Shared site shell
   - [x] Update `@memorycore/design` to 0.2.1 and wrap the root site tree with `<Consumer consumer="website">`.
   - [x] Refine the header identity and primary navigation.
   - [x] Refine the small-screen navigation and no-JavaScript fallback.
   - [x] Refine the footer hierarchy and destinations.
   - [x] Approve shared shell spacing, responsive presentation, keyboard behaviour, and viewport checks. Carry cross-site consistency checks into whole-site review.
2. Home
   - [x] Add the supplied Riemersma image across the complete Home surface as a visible refinement precursor.
   - [x] Refine and approve the hero first viewport.
   - [x] Review and approve the Home Tools spread.
   - [x] Review and approve the Home Libraries spread.
   - [x] Review and approve the Home About section.
   - [x] Refine the page hierarchy through the remaining sections.
   - [x] Refine the Tool, library, About, and Community sections.
   - [ ] Complete Home responsive, accessibility, no-JavaScript, metadata, and performance checks.
3. Main pages
   - [x] Refine About.
   - [x] Refine Community.
   - [x] Refine Privacy while preserving its publication gates.
4. Tool pages
   - [x] Refine the Tools collection page alongside the Libraries collection page.
   - [ ] Refine DitherTool as the representative Tool page.
   - [ ] Apply the approved pattern to AethelTool.
5. Library pages
   - [x] Refine the Libraries collection page alongside the Tools collection page.
   - [ ] Refine ditherlib as the representative library page.
   - [ ] Apply the approved pattern to aethellib.
6. Remaining public pages
   - [ ] Refine Resources.
7. Error response and whole-site polish
   - [ ] Refine the shared error response and verify deployed `404.html` behaviour.
   - [ ] Resolve cross-site typography, spacing, alignment, density, and responsive inconsistencies.
   - [ ] Complete whole-site accessibility, metadata, performance, privacy, and browser review.

### Pass 1: Route skeleton and shared structure

Establish the complete information architecture using genuine outline-level copy. Confirm content order, page hierarchy, relationships, navigation, metadata, responsive placement, and no-JavaScript behaviour before detailed visual treatment.

- [x] Add typed site, Tool, library, destination, relationship, publication, and metadata records.
- [x] Run `validateContent()` from the root server layout and from a unit test.
- [x] Add the initial semantic shell, skip link, header, footer, and design-library styles.
- [x] Extract one shared error view for `+error.svelte` and the `/404` build route.
- [x] Add real outline-level content for Home, Tools, both Tool pages, Libraries, both library pages, Resources, Community, About, and the Privacy structure.
- [ ] Add the documentation indexes only when the documentation manifest can supply their real published inventory.
- [x] Add desktop navigation after all of its destinations prerender successfully.
- [x] Add the accessible small-screen menu with the same order and destinations.
- [ ] Add the shared metadata helper, canonical URLs, indexing rules, and initial structured-data boundaries. The helper, canonicals, and indexing rules are complete; structured-data boundaries remain.
- [ ] Add font licence files.
- [x] Review the committed security headers and robots file against the skeleton.
- [x] Generate the sitemap from published indexable records.
- [x] Review redirect requirements. No route aliases are currently approved.
- [x] Confirm the shell and primary content remain useful with JavaScript disabled.
- [x] Review the whole skeleton at 320, 768, 1200, and 1440 CSS px.

Checkpoint: every unconditional route exists with truthful content, coherent hierarchy, valid relationships, one `h1`, working shell navigation, appropriate indexing, and no public placeholder claims. Layout and typography may remain deliberately rough.

### Pass 2: Representative-page benchmarks

Refine one representative from each page family. Settle the shared visual language and component contracts against several real contexts before applying them across sibling pages.

- [ ] Home: establish the cobalt environment, first-viewport hierarchy, major section rhythm, and connections to Tools, libraries, About, and Community.
- [ ] DitherTool: establish the Tool-detail structure, active-development status, authentic evidence treatment, library relationship, and Community action.
- [ ] ditherlib: establish the library-detail structure, technical hierarchy, Tool relationship, documentation action, examples, and labelled external destinations.
- [ ] One documentation page: establish calm reading layout, hierarchy, navigation, code treatment, applicability, and technical links.
- [ ] Resources: establish the approved empty state and keep the route `noindex, follow`.
- [x] Privacy: establish the readable policy structure while preserving its operational and legal publication gates.
- [ ] Error response: establish concise recovery actions and verify the deployed `404.html` behaviour.

For each representative page:

1. Confirm content accuracy and order.
2. Block out responsive composition and reading order.
3. Refine typography, spacing, colour, borders, and shared controls.
4. Add cleared imagery or authentic technical material when required.
5. Verify metadata, accessibility, no-JavaScript behaviour, performance, and route-family tests.
6. Record shared decisions in the owning component or content contract before moving to the next family.

Checkpoint: the representative set expresses the approved direction, establishes reusable family patterns, and passes automated checks plus the required viewport review.

### Pass 3: Complete sibling pages

Apply the proven family patterns to the remaining pages while preserving their content-specific expression.

- [ ] Complete AethelTool from the reviewed Tool-detail pattern.
- [ ] Complete aethellib from the reviewed library-detail pattern.
- [x] Complete the Tools and Libraries collection pages.
- [x] Complete Community and About.
- [ ] Complete the maintained documentation topic sets for both libraries.
- [ ] Complete Home sections that depend on finished family content.
- [ ] Complete Privacy after its launch gates and legal review are satisfied.

Checkpoint: every unconditional route is content-complete, visually reviewed, accessible, prerendered, and covered by its applicable tests.

### Pass 4: Whole-site refinement

Refine cross-route consistency after all page families are visible together.

- [ ] Resolve typography, spacing, alignment, density, and responsive inconsistencies.
- [ ] Add approved purposeful motion and reduced-motion behaviour.
- [ ] Complete cleared imagery, rights records, licences, attribution, and alternatives.
- [ ] Complete browser, keyboard, screen-reader, forced-colour, zoom, and text-spacing review.
- [ ] Enforce request, byte, font, image, script, stylesheet, and third-party budgets.
- [ ] Complete metadata, structured data, privacy, security, and operational acceptance.

Checkpoint: the release candidate is ready for Phase 7 stabilisation and owner review.

## Phase 0: Hand off approved context

- [x] Review this exported pack.
- [x] Copy this directory's contents into the website repository root, preserving `context/`.
- [x] Record the exported source-review dates in the website repository.
- [x] Create `feat/website-overhaul` from the current deployable `main`.

Exit: the website repository has local, versioned context and no dependency on the private operations wiki.

## Phase 1: Design-library baseline

- [x] Complete website-required tokens, themes, and primitives.
- [x] Verify server-rendering and prerendering safety.
- [x] Release `@memorycore/design` 0.1.0 with documented public exports.
- [x] Avoid speculative primitives and variants.

Exit: the website can install `@memorycore/design` 0.1.0 without source or repository coupling.

## Phase 2: Establish the website foundation

- [x] Replace the obsolete implementation with the current stable SvelteKit scaffold.
- [x] Configure static rendering, mdsvex, strict TypeScript, npm scripts, linting, formatting, checks, Vitest, Playwright, axe, GitHub Actions, Wrangler, previews, and `404` handling.
- [x] Pin `@memorycore/design` 0.1.0.
- [ ] Confirm `npm ci` and `npm run verify` from a clean checkout.
- [ ] Confirm the minimal site on a non-indexable Worker Preview.

Exit: `npm ci` and `npm run verify` pass from a clean checkout, and the minimal site deploys to a non-indexable Worker Preview.

## Phase 3: Build shared foundations

- Follow Pass 1 and the shared work exposed by the representative pages in Pass 2.
- Add self-hosted fonts and licences, global styles, shell, navigation, footer, themes, metadata helpers, headers, redirects, sitemap, and robots generation.
- Add typed content records, relationships, publication states, and `validateContent()`.
- Add only the shared website compositions required by approved routes.

Exit: representative pages satisfy the shell, no-JavaScript, content-validation, responsive, and accessibility baselines.

## Phase 4: Implement core public routes

- Follow Passes 1 through 3 for core routes, with the route-skeleton review preceding detailed page polish.
- Build Home, Tools, both Tool pages, Libraries, both library pages, Community, About, the Resources empty state, Privacy structure, and the error response.
- Add reviewed copy, metadata, structured data, cleared media, and route-family tests with each page.

Exit: every unconditional route is complete in preview. Privacy remains gated by its legal and operational requirements.

## Phase 5: Implement documentation

- Add the internal mdsvex pipeline, manifests, loaders, shell, navigation, build-time highlighting, technical components, and source-baseline validation.
- Publish both documentation indexes with maintained, reviewed topic sets.

Exit: every published topic appears once in its manifest, prerenders correctly, and passes technical-owner review.

## Phase 6: Implement Resources when material exists

- Keep the approved empty overview as the shipping baseline.
- Add a Resource record and detail route only for a complete reviewed source packet.
- Use repository storage first and activate R2 only at the approved threshold.

Exit: each published Resource passes rights, licence, checksum, download, preview, accessibility, performance, and relationship checks.

## Phase 7: Stabilise the release candidate

- Fix shared primitive defects in `@memorycore/design` and consume released updates through the lockfile.
- Confirm the installed design-library version remains appropriate after website integration and release an update only when a shared defect or reusable gap requires it.
- Complete content, browser, accessibility, privacy, security, performance, and operational acceptance.

Exit: the frozen release-candidate commit passes automated and manual gates and has owner approval.

## Phase 8: Deploy and cut over

- Configure the production Worker from committed files.
- Pause Vercel production automation while retaining the last deployment.
- Verify the Worker and complete the Cloudflare DNS and Proton Mail safety procedure.
- Merge the approved branch, attach the domains, verify production, then enable DNSSEC.

Exit: `www.memorycore.dev` serves the verified release, mail passes independent tests, and the release record identifies both deployed and rollback versions.

## Dependency rules

- `@memorycore/design` tokens and required primitives precede website composition.
- Typed records and validation precede generated documentation and Resource routes.
- Tool and library records precede pages that consume their reciprocal relationships.
- Documentation manifests and immutable source baselines precede topic publication.
- Resource details, R2, commerce, and Brand routes remain conditional.
- Worker verification and a matching Cloudflare zone precede the Porkbun nameserver change.
- Accessibility, metadata, performance, privacy, validation, and tests belong to every phase.
