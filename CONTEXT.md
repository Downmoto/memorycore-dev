# Project context router: memorycore.dev

Status: Current
Last reviewed: 2026-10-23
Source: Approved MemoryCore website blueprint

## Project snapshot

memorycore.dev is the public home for MemoryCore, its commercial creative Tools, open-source Rust libraries, educational Resources, Community, and organisation story. The overhaul reuses `Downmoto/memorycore-dev`, replaces the current interface, and ships as a fully prerendered SvelteKit site on Cloudflare Workers Static Assets.

The website is the first production consumer of `@memorycore/design`. The library baseline precedes website composition work and reaches a stable public release through website integration before launch.

## Read by task

| Task | Read |
|---|---|
| Product purpose, audience, route, navigation, page family, or scope | [`context/scope-and-routes.md`](context/scope-and-routes.md) |
| Visual design, responsive composition, tokens, imagery, motion, or component ownership | [`context/design.md`](context/design.md) |
| Typed content, documentation, Resources, privacy, publication state, or ownership | [`context/content-and-data.md`](context/content-and-data.md) |
| SvelteKit, repository structure, packages, rendering, tooling, or hosting configuration | [`context/platform.md`](context/platform.md) |
| Metadata, structured data, accessibility, performance, testing, or acceptance | [`context/quality.md`](context/quality.md) |
| Preview, production release, Cloudflare, DNS, Proton Mail, cutover, or rollback | [`context/release.md`](context/release.md) |
| Work sequencing, estimates, milestones, or current implementation position | [`PLAN.md`](PLAN.md) |
| Stable rules shared by every implementation task | [`IMPLEMENTATION.md`](IMPLEMENTATION.md) |

## Common reading sets

- New public page: scope and routes, design, quality.
- Documentation work: content and data, design, quality.
- Resource publication: content and data, quality, release.
- Shared shell or component composition: design, platform, quality.
- Build or dependency work: platform, quality.
- Deployment or domain work: platform, release.

## Current boundaries

- Initial routes include Home, Tools, both Tool pages, Libraries, both library pages, both documentation indexes and publishable topics, Resources with its empty state, Community, About, Privacy, and `404`.
- Resource detail pages publish individually when their source packets and assets are complete.
- `/brand`, `/brand/design`, and `/brand/product-design` remain deferred.
- Accounts, newsletter, wishlist, search, comments, on-site community features, Tool interfaces, and speculative product claims remain outside the initial release.
- R2, Lemon Squeezy, and paid-download flows remain inactive until their approved triggers occur.

## Freshness

This pack is a reviewed export from the private MemoryCore operations wiki. The destination repository owns implementation and public content. Refresh this pack manually when an approved contract changes materially. Time-sensitive provider limits, terms, library facts, legal applicability, and external destinations require verification at their recorded release gates.
