# MemoryCore website instructions

## Start here

Read `CONTEXT.md` first. It routes each task to the smallest relevant file under `context/`. Read `IMPLEMENTATION.md` for cross-cutting constraints and `PLAN.md` when sequencing or estimating work.

Do not load every context file by default. Read the files named for the current task and expand only when the work crosses another responsibility.

## Product role

- memorycore.dev is the authoritative public home for MemoryCore.
- MemoryCore creates commercial creative software and the open-source libraries powering it.
- DitherTool is powered by `ditherlib`.
- AethelTool will be powered by `aethellib`.
- The website is the first production consumer of `@memorycore/design`.
- The commercial Tools lead the public story. Their libraries remain substantial destinations for developers.

## Implementation rules

- Use the existing repository and preserve its Git history.
- Build with the current stable SvelteKit release and `adapter-static`.
- Prerender every published route with complete HTML. Keep server-side rendering enabled during the build.
- Do not configure a single-page-application fallback.
- Keep navigation, reading content, downloads, documentation, external links, Privacy, and the error response useful without client JavaScript.
- Use JavaScript only for approved progressive enhancements such as the small-screen menu, previews, dialogs, and copy controls.
- Consume the released `@memorycore/design` package through documented public exports.
- Keep website compositions and page templates in this repository.
- Keep content in typed TypeScript records, route-local Svelte content, and mdsvex documentation topics.
- Fail the build when content, relationships, publication states, local assets, routes, or metadata violate the approved contracts.
- Do not create public placeholder pages for conditional content.
- Keep secrets, paid binaries, signing material, private operational records, and customer data outside the public repository.

## Scope discipline

- Brand routes remain deferred until their complete page type and public content are approved.
- Tool application interfaces remain outside the website overhaul.
- Commerce remains conditional on an available paid Tool and its separate launch review.
- Create R2 infrastructure only when an approved Resource file exceeds the repository policy.
- Add components, dependencies, abstractions, and tests only when an approved requirement or demonstrated defect needs them.

## Quality

- Target WCAG 2.2 Level AA.
- Treat metadata, accessibility, performance, privacy, validation, and tests as part of each feature.
- Run `npm run verify` before considering implementation work complete.
- Use real public copy and cleared assets. Label provisional or in-development evidence accurately.
- Treat a broken primary journey, confirmed accessibility failure, privacy or rights issue, exposed secret, broken required download, or material factual error as a release blocker.

## Collaboration

- Ask when ambiguity could materially change scope, architecture, public behaviour, or a content claim.
- Make progress autonomously when a choice is safe, reversible, and local to the approved implementation.
- Preserve unrelated changes.
- Treat this pack as a dated snapshot. Request refreshed MemoryCore context when a review date or provider fact may be stale.
- Do not make the website depend on the private MemoryCore operations wiki at build time or runtime.

## Writing

- Use Canadian spelling.
- Refer to the organisation as `MemoryCore`; avoid `we`, `us`, and `our` as substitutes.
- Use sentence case in interface copy.
- Omit terminal punctuation from headings, navigation, buttons, labels, status text, and brief callouts.
- Avoid corrective contrast constructions that negate one framing in favour of another.
- Do not use em dashes.

## Git

- Use Conventional Commit messages with one of: `fix:`, `feat:`, `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, or `test:`.
- Prefix branch names by intent, usually `feat/`, `refactor/`, or `docs/`.
- Use `feat/website-overhaul` for the approved replacement implementation unless the repository state requires an owner-approved change.
