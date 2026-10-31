# Website platform context

Status: Approved
Last reviewed: 2026-10-21

## Repository strategy

Reuse `Downmoto/memorycore-dev`. Develop the replacement on `feat/website-overhaul` and keep `main` deployable until the replacement passes release acceptance and cutover.

The existing implementation is historical reference. Its routes, layout, copy, animation, artwork, navigation, and README-rendering approach do not define the replacement architecture.

## Framework and rendering

- Generate with the current `sv` tooling and stable SvelteKit release available when implementation begins.
- Use `adapter-static` with root prerendering.
- Keep server-side rendering enabled during the build so every public page emits complete HTML.
- Keep SvelteKit's `trailingSlash: 'never'`.
- Set `paths.relative` to `false` so `404.html` assets resolve from nested unknown URLs.
- Leave the adapter fallback unset.
- Export entries for dynamic documentation and Resource routes from the same published inventory used by navigation and the sitemap.
- Use a `library` parameter matcher that accepts published library identifiers only.
- Fail the build when a public route cannot be prerendered.

Use JavaScript for the small-screen menu, requested Resource previews, optional code-copy controls, and other approved enhancements. Primary navigation, content, downloads, documentation, Privacy, and external links work without it.

## Target structure

```text
.github/workflows/verify.yml
src/
  lib/
    index.ts
    components/{documentation,resources,site}/
    content/
      docs/{aethellib,ditherlib}/
      catalogue.ts
      documentation.ts
      external-destinations.ts
      privacy.ts
      resources.ts
      site.ts
      types.ts
      validate.server.ts
  params/library.ts
  routes/
    +error.svelte
    +layout.server.ts
    +layout.svelte
    +page.svelte
    404/+page.svelte
    about/+page.svelte
    community/+page.svelte
    libraries/+page.svelte
    libraries/aethellib/+page.svelte
    libraries/ditherlib/+page.svelte
    libraries/[library=library]/docs/+page.{ts,svelte}
    libraries/[library=library]/docs/[...path]/+page.{ts,svelte}
    privacy/+page.svelte
    resources/+page.svelte
    resources/[reference]/+page.{ts,svelte}
    tools/+page.svelte
    tools/aetheltool/+page.svelte
    tools/dithertool/+page.svelte
  app.css
  app.d.ts
  app.html
static/
  downloads/resources/
  fonts/
  images/
  social/
  _headers
  _redirects
  robots.txt
tests/
  e2e/
  unit/content.test.ts
package.json
package-lock.json
playwright.config.ts
tsconfig.json
vite.config.ts
wrangler.jsonc
```

Use explicit routes for the two Tools and two libraries because their compositions differ. Use dynamic routes for documentation topics and Resource references only. Add directories when a real implementation responsibility needs them.

The root server layout enables prerendering and calls the server-only content validator. The content unit test calls the same validator.

Use one shared error component from root `+error.svelte` and the explicit `/404` build route. Exclude the build route from navigation, canonical metadata, and the sitemap.

## Package and tooling baseline

- npm with committed `package-lock.json`.
- Current Active LTS Node.js with a pinned supported range.
- Strict TypeScript and `svelte-check`.
- ESLint with `eslint-plugin-svelte`.
- Prettier.
- Vitest for content validation and pure non-trivial logic.
- Playwright for production-build route, journey, interaction, responsive, and budget checks.
- `@axe-core/playwright` for automated accessibility findings.
- GitHub Actions for clean install and the complete verify gate.

Required scripts:

| Script | Responsibility |
|---|---|
| `npm run format` | Apply formatting |
| `npm run format:check` | Verify formatting without writes |
| `npm run lint` | Run ESLint |
| `npm run check` | Run Svelte and TypeScript diagnostics |
| `npm run test:unit` | Run focused Vitest checks |
| `npm run build` | Produce strict prerendered output |
| `npm run test:e2e` | Test the production build with Playwright and axe |
| `npm run verify` | Run every required gate in order |

Install Playwright browser binaries and operating-system dependencies after `npm ci` in CI. Keep browser installation outside `npm run verify`.

## Design-library integration

- Install the released `@memorycore/design` package through npm and lock its resolved version.
- Import tokens and primitives from documented public exports only.
- Keep global foundations and token consumption in `src/app.css`.
- Keep composition-specific rules beside the owning Svelte component or route.
- Keep route-aware wrappers and site compositions local.
- Move a capability to the library only when another current consumer can reuse it.
- Record any temporary local adapter with the missing primitive, reason, and removal condition.
- Keep `@memorycore/design` independent of SvelteKit runtime APIs and safe during server rendering.

## Documentation subsystem

Configure mdsvex inside the main application. Use one shared documentation layout and one explicit navigation manifest per library. Begin with callouts, code examples, figures, responsive tables, and cross-references. Reuse the site's metadata, canonical, sitemap, error, responsive, and accessibility systems.

Keep syntax highlighting at build time. Add no external documentation framework.

## Cloudflare configuration

- Deploy the generated `build` directory through Workers Static Assets.
- Commit `wrangler.jsonc` with the Worker name, current compatibility date, asset directory, `404-page` handling, and previews enabled.
- Use Workers Builds Git integration for successful `main` pushes.
- Use `npx wrangler preview` for branch previews.
- Commit `_redirects` for path aliases and `_headers` for response policy.
- Use a zone-level Always Use HTTPS setting and a Single Redirect rule for apex to `www`, preserving path and query.
- Add `X-Robots-Tag: noindex` for the production `workers.dev` hostname used in pre-cutover smoke testing without matching `www.memorycore.dev`.
- Add Cloudflare Access only if a concrete preview-confidentiality need appears.

Keep the initial deployment fully static. Request-time processing, authentication, personalisation, or forms require a new rendering decision.

## Conditional external systems

- Cloudflare Web Analytics is the only initial analytics provider and loads on production `www` only.
- R2 remains absent until the first approved asset exceeds repository policy.
- Lemon Squeezy is the intended first Merchant of Record, subject to pre-launch provider and entity checks.
- Paid installers and commercial secrets stay in private Tool release workflows and provider storage.
