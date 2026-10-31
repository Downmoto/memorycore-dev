# Website content and data context

Status: Approved
Last reviewed: 2026-10-21

## Ownership

| Material | Authority |
|---|---|
| Business, brand, product, architecture, and planning decisions | Private MemoryCore operations wiki and reviewed context pack |
| Public copy, metadata, navigation labels, Resource records, local structured data, redirects, and website documentation | Website repository |
| Reusable Svelte tokens and primitives | `@memorycore/design` |
| Rust source, API behaviour, rustdoc, tested examples, changelogs, compatibility, and release facts | Relevant library repository |
| Generated item-level Rust API reference | docs.rs for the corresponding release |
| Video playback and channel subscription | YouTube |
| Community participation | Discord |
| Hosting, analytics, storage, mail, and commerce operations | Their approved external providers |

Primary page content remains usable when an external service is unavailable. Do not duplicate volatile external data without an explicit maintenance contract.

Current ecosystem snapshot:

- `ditherlib` v1.0.0 is the current public release and powers DitherTool.
- `aethellib` v0.10.1 is the current public release and is the planned foundation for AethelTool.

These versions are dated context. Verify the current release and choose an immutable tag or commit before publishing each documentation manifest.

## Authoring formats

- Typed TypeScript records: site configuration, navigation, external destinations, Tool and library records, relationships, metadata, documentation manifests, Resources, providers, and privacy state.
- Route-local Svelte markup or adjacent typed modules: unique page copy and composed Resource narratives.
- mdsvex `.svx`: library-documentation topics only.
- Repository-managed static files: fonts, licences, approved imagery, social images, icons when local, and eligible Resource downloads.

Use TypeScript values with `satisfies`. Add no general schema dependency for the initial release. One focused `validateContent()` handles cross-record and filesystem rules.

## Publication and review fields

Publication states are `draft`, `preview`, `scheduled`, `published`, `withdrawn`, and `superseded`. Indexing is `index` or `noindex`. Every maintained record has an owner and `YYYY-MM-DD` review date.

Every page metadata record includes title, description, canonical path, indexing, optional social image with alternative text, and optional update date.

External destinations use a stable identifier, label, kind, and secure URL. Supported kinds are source, package, API reference, video, community, and commerce.

## Core records

| Record | Required responsibilities |
|---|---|
| Tool | Identifier, slug, name, summary, status, supporting library, external destinations, review fields, metadata |
| Library | Identifier, slug, name, crate, documented version, summary, maturity, Tool, destinations, review fields, metadata |
| Documentation manifest | Library, documented version or pre-release state, immutable tag or commit, publication state, destinations, ordered groups and topic paths, review fields |
| Documentation topic | Title, summary, type, state, source links, owner, review date, optional narrower applicability |
| Resource | Stable reference, title, summary, state, dates, video, assets, citations, research, relationships, corrections, review fields, metadata |
| Resource asset | Stable identifier, revision, revision date, name, description, type, storage, file name, media type, byte size, source, rights, licence or permission, optional attribution, modifications, preview, state, and withdrawal reason |
| Provider | Identifier, service, state, collection trigger, purposes, data categories, processing locations, retention, safeguards, visitor choices, evidence, and review fields |
| Privacy policy | State, operator status, legal and venture names, jurisdiction, Privacy Officer, contact email, dates, providers, and review fields |

A documentation topic's file path determines its route. Its manifest determines group and order. Do not duplicate the route in frontmatter.

A Resource record owns structured identity and manifest data. Keep rich one-off narrative in an adjacent Svelte content component referenced by an explicit Resource map.

## Validation

`validateContent()` fails with the record identifier and field for:

- Duplicate identifiers, slugs, canonical routes, Resource references, asset locations, or source identifiers.
- Invalid dates, non-canonical internal paths, missing metadata, or indexable non-published content.
- Missing destinations, insecure external URLs outside approved `mailto:` use, or broken relationships.
- Tool and library relationships that are not reciprocal.
- Published documentation without an immutable source, missing topics, duplicate navigation entries, or unpublished topics in public navigation.
- Published Resources with missing files, unsafe paths, size or checksum mismatches, unsupported media, uncleared rights, missing licence or permission, or storage-policy violations.
- R2 assets outside `downloads.memorycore.dev` or missing their required checksum and HTTP metadata.
- A published Privacy policy with transitional identity, incomplete contact or dates, or active providers without complete evidence.
- Planned providers that create public data flows or retired providers that remain configured.

Validation performs no network requests. Deployed response checks and external verification belong to release review.

## Documentation workflow

Maintain one curated documentation set per library in the website repository. Record the documented release or immutable source revision. Keep complete runnable examples in the library repository and compile or test them there whenever practical.

Each library change or release receives a documentation-impact classification:

- None: record why website documentation is unaffected.
- Editorial: create a linked website issue or pull request.
- Behavioural: create a linked website issue or pull request.
- Structural: create a linked website issue or pull request.

Advance the website baseline only after every published topic remains accurate and checks pass. When documentation trails a release, keep the accurate older baseline visible, add a compatibility notice where needed, and withdraw invalid topics from public navigation and indexing.

Start with manual synchronisation. Consider automation after three real cycles expose a stable repetitive step or a documented miss demonstrates a reliability problem.

Defer documentation search, version switching, internationalisation, third-party theming, a plug-in API, and package extraction. Consider extraction only after two maintained SvelteKit consumers establish a stable shared surface.

## Resource publication

Repository tier:

- Store under `static/downloads/resources/<reference>/`.
- Use stable lowercase ASCII names containing asset identifier and revision.
- Limit one committed file to 10 MB and the complete Resource download tree to 100 MB.
- Keep published file URLs immutable. Corrections create new revisions.
- Apply attachment disposition, `nosniff`, and a one-day public cache policy.

R2 tier:

- Create only when an approved file or collection exceeds the repository limits.
- Use R2 Standard through `downloads.memorycore.dev`.
- Keep `r2.dev` disabled for production, bucket listing disabled, and upload credentials private.
- Set type, attachment disposition, and one-day caching at upload.
- Allow cross-origin `GET` and `HEAD` from `https://www.memorycore.dev` only for an approved preview.

Require SHA-256 for archives, executable or binary project files, and all R2 objects. Review every file for private notes, credentials, personal information, malicious content, rights, and attribution. Upload and verify an R2 object before merging its public link.

Do not generate a bundle for the first Resource. Add one when several files make a single archive materially useful, derive it from the same manifest, and preserve individual downloads.

## Privacy and provider state

Transitional operating context:

- Arad Fadaei is the individual operator of the pre-launch MemoryCore venture in Ontario, Canada.
- Arad Fadaei is the accountable Privacy Officer.
- `privacy@memorycore.dev` is the public privacy contact.
- PIPEDA is the planning baseline, subject to final applicability and legal review.

Do not describe MemoryCore as incorporated or as another registered entity while it remains unregistered. Registration or incorporation gates the final Privacy copy, commercial-provider onboarding, and commercial launch.

The final Privacy release requires the exact registered identity, verified Proton delivery, a monitored request procedure, complete provider register, retention schedule, international-processing review, safeguards, incident procedure, visitor choices, Community and younger-visitor approach, effective date, and qualified legal review.

Keep private residential addresses and operational evidence outside the public repository.

## Content workflow

- The website maintainer owns records, route copy, metadata, and validation.
- The relevant library maintainer owns technical fact and example review.
- The Resource producer owns the source packet, rights evidence, corrections, and final bytes; the website owner approves publication.
- The Privacy Officer owns provider evidence and final policy review.
- Change a record and its repository files in the same pull request.
- Withdrawal updates state, navigation, indexing, and public links while preserving historical identity.
