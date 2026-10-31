# Website quality context

Status: Approved
Last reviewed: 2026-10-21

## Metadata and discovery

Render metadata in prerendered HTML from the same typed record as visible content. Use Svelte head support and one small site-owned helper. Add no SEO package, runtime metadata service, automatic social-image generator, or search service.

Every indexable page requires:

- Unique title and description.
- One absolute canonical on `https://www.memorycore.dev`.
- No trailing slash except `/`.
- `index, follow` only for complete published content.
- Open Graph type, title, description, URL, site name, and image when approved.
- Twitter summary-large-image metadata when an approved social image exists.
- Meaningful social-image alternative text.

Draft, preview, scheduled, incomplete, withdrawn, and superseded pages use `noindex, follow`. `/resources` remains `noindex, follow` until its first Resource publishes. The error response has no canonical or structured data and uses `noindex, follow`.

Generate `sitemap.xml` from published indexable records and fixed routes. Generate `robots.txt` with the canonical sitemap. Preview environments use response-header `noindex` rather than relying only on robots exclusion.

Use JSON-LD only when the required facts exist:

- Home: `WebSite` and `Organization`.
- About: `AboutPage`, `Organization`, verified `Person`, and breadcrumbs.
- Tool: `SoftwareApplication` only when status and availability can be represented accurately.
- Library: `SoftwareSourceCode` only when repository, language, licence, runtime, and maintenance facts are current.
- Documentation: `TechArticle` only when authorship, dates, applicability, and sources are maintained.
- Resource: `VideoObject` plus `CreativeWork` or `TechArticle` when video and publication facts are complete.
- Nested pages: `BreadcrumbList`.

Omit legal entity claims, address, release offers, ratings, prices, and availability that are not verified.

## Security and privacy headers

- Enforce HTTPS and canonical `www` through Cloudflare zone rules.
- Apply a least-privilege Content Security Policy. The Cloudflare Web Analytics beacon is the only approved initial third-party script.
- Use `X-Content-Type-Options: nosniff` for downloads and applicable static responses.
- Do not expose source maps, environment files, credentials, private operational records, unpublished downloads, or absolute local paths.
- Keep analytics absent from local and preview builds.
- Keep all content usable when analytics and external services are blocked.

## Accessibility contract

Target WCAG 2.2 Level AA.

- Use semantic landmarks and one visible `h1` per page.
- Provide a skip link and logical heading order.
- Prefer native links, buttons, disclosures, and dialogs.
- Give every control an accessible name, role, state, and keyboard operation.
- Preserve visible focus, logical focus order, unobscured focus, expected `Escape` dismissal, and modal focus return.
- Keep meaning independent of colour and motion.
- Meet 4.5:1 for standard text, 3:1 for large text, and 3:1 for meaningful controls, icons, boundaries, state indicators, and focus indicators.
- Support 320 CSS px, 200 percent text scaling, 400 percent browser zoom, portrait and landscape reflow, and user text-spacing overrides.
- Restrict horizontal scrolling to intrinsically two-dimensional content such as code and data tables.
- Use a 24 by 24 CSS px minimum target and prefer 44 by 44 CSS px for primary touch controls.
- Honour reduced motion and forced colours.
- Prevent flashing and preserve pause or replay controls where required.
- Give informative images accurate alternatives, decorative images empty alternatives, and complex diagrams adjacent explanations.
- Publish media only with the applicable captions, transcript, audio description, controls, and non-autoplay behaviour.
- Associate validation, empty, unavailable, loading, success, and error messages programmatically.

Automated axe findings require review and do not establish conformance. A confirmed WCAG A or AA failure blocks release.

## Performance targets

Production should meet Core Web Vitals good thresholds at the seventy-fifth percentile when the sample is meaningful:

| Metric | Target |
|---|---:|
| Largest Contentful Paint | 2.5 seconds or less |
| Interaction to Next Paint | 200 milliseconds or less |
| Cumulative Layout Shift | 0.1 or less |

Measure field results after the first 90 complete production days and after material visual or interaction changes.

Pre-release cold-build budgets at 390 by 844 and 1440 by 900 CSS px:

| Budget | Standard and technical | Home and image-led Tool |
|---|---:|---:|
| Initial transferred bytes | 1 MB | 1.5 MB |
| Initial compressed JavaScript | 80 KB | 80 KB |
| Initial compressed CSS | 60 KB | 60 KB |
| Initial compressed fonts | 180 KB | 180 KB |
| Largest initial image | 400 KB | 600 KB |
| Initial requests | 20 | 25 |
| Third-party requests before action | Production analytics beacon only | Production analytics beacon only |

Resource pages transfer no preview or download bytes before activation. Documentation pages ship no search index, interactive-example runtime, WebAssembly, or client syntax-highlighting bundle unless the visible topic uses it.

Loading rules:

- Reserve intrinsic dimensions or aspect ratio for every visual.
- Load the LCP image eagerly with appropriate priority.
- Lazy-load below-the-fold images and use responsive modern formats with practical fallback.
- Self-host and subset WOFF2 fonts with `font-display: swap`.
- Preload no more than two font files needed in the first viewport.
- Avoid hydration on static components.
- Use build-time syntax highlighting and on-demand interactive examples.
- Use CSS for ordinary transitions.
- Add no speculative external connection or preload.

A budget exception requires measured benefit, affected route and asset, owner, and review or removal condition.

## Automated verification

`npm run verify` runs:

1. `npm run format:check`
2. `npm run lint`
3. `npm run check`
4. `npm run test:unit`
5. `npm run build`
6. `npm run test:e2e`

Vitest covers content validation and pure non-trivial logic. Playwright runs against the production build and covers:

- Every sitemap route and fixed `noindex` route.
- Expected status, one `h1`, unique metadata, canonical, robots rules, shell, and console errors.
- Direct and client-side unknown routes with HTTP `404`, recovery actions, and no canonical.
- Navigation, breadcrumbs, footer, relationships, documentation hierarchy, fragments, and external labels.
- Primary audience journeys.
- Download names, response, media type, disposition, size, checksum, requested previews, and preview failure.
- Keyboard behaviour, focus, themes, reduced motion, forced colours, and approved viewports.
- JavaScript-disabled shell, reading, documentation, downloads, and external links.
- Request, byte, font, image, script, stylesheet, third-party, and eager-preview budgets.
- Absence of analytics and unapproved origins outside production.

Browser projects:

- Every generated page, metadata, axe, and budgets: desktop Chromium, with responsive checks in Mobile Chrome.
- Critical journeys and unique interactions: Chromium, Firefox, and WebKit.
- Small-screen navigation and previews: Mobile Chrome and Mobile Safari.
- JavaScript-disabled experience: desktop Chromium.

Before initial release, manually smoke-test current Chrome, Firefox, Safari, and Edge, plus Safari on an available iPhone or iPad. Test VoiceOver with Safari on macOS and iOS, and NVDA with Firefox on Windows, for the shell and each unique interactive pattern.

## Manual review

- Compare Home, both Tool variations, one library, one documentation page, an available Resource state, Privacy, and `404` with approved direction at 320, 768, 1200, and 1440 CSS px.
- Review copy, Canadian spelling, status, dates, identity, relationships, baselines, citations, rights, licences, and labels.
- Open every changed external destination from preview.
- Inspect responsive images, font fallback, theme colours, print output, and optional-media failure.
- Complete all applicable provider, privacy, commerce, DNS, mail, and Resource gates.

## Definition of done

A page or release is done when its blueprint, content, assets, states, metadata, structured data, automated checks, required manual reviews, and applicable launch gates are complete. The tested preview must match the reviewed commit.

Skipped or flaky tests are release failures. A non-blocking cosmetic or compatibility defect may ship only with an owner-approved exception and review date.
