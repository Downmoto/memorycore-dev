# memorycore.dev implementation contract

Status: Approved
Last reviewed: 2026-10-21
Owner: Arad Fadaei

## Purpose

This file contains the stable constraints shared by implementation tasks. `CONTEXT.md` routes subject-specific work to the focused files under `context/`.

## Repository and dependency boundary

- Reuse `Downmoto/memorycore-dev` and preserve its history.
- Develop the replacement on `feat/website-overhaul` while `main` remains deployable.
- Keep the website repository public.
- Consume `@memorycore/design` as a normal versioned package dependency through documented public exports.
- Commit the resolved package version in `package-lock.json`.
- Do not import design-library source, private paths, Git submodules, or build-time wiki content.
- Fix shared primitive defects in the design-library repository, release them, then update the website dependency deliberately.

## Rendering contract

- Use the current stable SvelteKit release with `adapter-static`.
- Keep server-side rendering enabled during the build and prerender every published route.
- Emit complete HTML for primary content.
- Do not add a single-page-application fallback, request-time application server, or Worker script for the initial release.
- Generate `404.html` and configure unmatched routes to return it with HTTP `404`.
- Use client JavaScript for approved progressive enhancements only.

## Content contract

- Use typed TypeScript values with `satisfies` for site configuration, destinations, Tools, libraries, documentation manifests, Resources, providers, and privacy state.
- Use route-local Svelte markup or adjacent typed modules for unique composed pages.
- Use mdsvex `.svx` files only for library-documentation topics.
- Use one focused `validateContent()` path for cross-record, route, publication, rights, metadata, checksum, and filesystem rules TypeScript cannot prove.
- Perform no network requests during content validation or the production build.
- Keep draft, incomplete, withdrawn, and superseded content out of public navigation and indexing.

## Tooling contract

- Use npm and commit `package-lock.json`.
- Use the Active LTS Node.js release available when implementation begins and pin the supported range.
- Use strict TypeScript, `svelte-check`, ESLint with `eslint-plugin-svelte`, Prettier, Vitest, Playwright, `@axe-core/playwright`, and GitHub Actions.
- Keep `npm run verify` as the single local and continuous-integration gate. It runs format checking, linting, Svelte and TypeScript checks, unit tests, the production build, and end-to-end tests.
- Keep build-time syntax highlighting inside the documentation pipeline.

## Deliberately absent infrastructure

Do not add Storybook, Tailwind, a component-test framework, a monorepo tool, a CMS, a content API, a state store, a second end-to-end runner, hosted visual regression, a remote performance service, a second analytics provider, or an external documentation framework for the initial release.

Add a missing capability only when an approved workflow cannot be implemented or maintained with the baseline.

## Environment contract

- Local: no analytics, production credentials, or external publication.
- Preview: branch Worker Preview, `noindex`, no production analytics, and no R2 writes.
- Production: protected `main`, Cloudflare Workers Static Assets, production analytics, and approved read-only public assets.
- Keep three environments. Do not add a staging branch or permanent staging domain.

## Change governance

- Keep page templates and website compositions local to the website.
- Keep reusable tokens and primitives in `@memorycore/design`.
- Record a change to an approved product, architecture, provider, privacy, or release contract in the MemoryCore operations wiki and refresh this pack through review.
- Keep ordinary implementation detail and public content in the website repository.
- Treat all provider facts and plan limits as review-time evidence that must be reconfirmed before commercial launch.
