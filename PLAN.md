# Plan: memorycore.dev launch

Status: Current
Last reviewed: 2026-11-20
Owner: Arad Fadaei

## Objective

Launch the approved static SvelteKit website on Cloudflare without disrupting the current website or Proton Mail.

## Current position

The website implementation and whole-site refinement are complete on `feat/website-overhaul`. The site uses `@memorycore/design` 0.2.1, prerenders every published route, and passes the current automated verification suite.

Home, Tools, libraries, About, Community, Resources preview, Privacy preview, and the error response have completed focused visual refinement. Automated checks cover route rendering, metadata, structured data, accessibility scanning, no-JavaScript navigation, responsive overflow, interactions, performance budgets, sitemap generation, and `404` behaviour.

The release candidate still requires clean-checkout evidence, manual acceptance, final Privacy and rights approval, and review of a Worker Preview built from the candidate commit.

Library documentation remains on docs.rs for launch. Resources contain no public downloads. Privacy remains `preview` and `noindex` until its launch gates are complete.

## Remaining launch work

Complete these sections in order.

### 1. Freeze and verify the release candidate

- [x] Update time-sensitive product, library, provider, external-link, and review-date facts.
- [x] Run `npm ci` from a clean checkout.
- [x] Run `npm run verify` from that clean checkout.
- [x] Require the matching GitHub Actions checks to pass without skipped or flaky tests.
- [x] Record the candidate commit SHA and the last verified production rollback version.

Candidate record: annotated tag `release-candidate-2026-11-20`. Production rollback: `4ba7e3c`, recorded by GitHub as a successful Production deployment on 2026-09-11.

### 2. Complete manual content, rights, browser, and accessibility acceptance

- [ ] Review public copy, Canadian spelling, product status, library versions, relationships, dates, citations, and labels.
- [ ] Open every external destination from the candidate Preview and confirm its label and target.
- [ ] Confirm the source, publication rights, modifications, required attribution, and alternative text for every image. Confirm the committed font licences cover the shipped files.
- [ ] Review Home, both Tool variations, ditherlib, Resources, Privacy, and `404` at 320, 768, 1200, and 1440 CSS px.
- [ ] Smoke-test current Chrome, Firefox, Safari, and Edge, plus Safari on an available iPhone or iPad.
- [ ] Test keyboard-only use, 400 percent zoom, 200 percent text scaling, text-spacing overrides, forced colours, reduced motion, font fallback, print output, and blocked optional media.
- [ ] Test VoiceOver with Safari on macOS and iOS, and NVDA with Firefox on Windows, for the shell and each unique interactive pattern.
- [ ] Resolve every confirmed WCAG 2.2 Level A or AA failure.

### 3. Complete the Privacy and operational launch gates

- [ ] Complete the applicable Ontario registration or incorporation and approve the exact public operator identity.
- [ ] Replace transitional Privacy copy with the approved identity, jurisdiction, effective date, and contact details.
- [ ] Complete the provider register, retention schedule, safeguards, international-processing review, visitor choices, incident procedure, Community review, and younger-visitor review.
- [ ] Establish and document the monitored privacy-request procedure.
- [ ] Verify inbound and outbound delivery for `privacy@memorycore.dev` through Proton.
- [ ] Complete qualified legal review of the implemented data flows and final Privacy policy.
- [ ] Confirm whether production analytics can launch without prior consent. Keep the beacon disabled until a compliant choice exists if legal review requires consent.

### 4. Review the frozen Worker Preview

- [ ] Deploy the frozen candidate commit to its immutable branch Worker Preview.
- [ ] Confirm the Preview is `noindex`, contains no production analytics, performs no R2 writes, and matches the reviewed commit.
- [ ] Verify Home, one route from each page family, direct and nested unknown routes, response headers, canonicals, sitemap, robots policy, and changed external destinations.
- [ ] Repeat the automated performance measurements against the deployed Preview.
- [ ] Resolve every release blocker and obtain owner approval for the candidate.

### 5. Deploy and cut over

- [ ] Connect the production Worker to `main`, enable branch previews, and keep custom domains disconnected during verification.
- [ ] Export the current Porkbun zone and reproduce every web and Proton Mail record in Cloudflare. Keep mail records DNS-only, preserve one SPF record, and leave Cloudflare Email Routing disabled.
- [ ] Query the assigned Cloudflare nameservers directly and compare their answers with the current authoritative zone.
- [ ] Remove any existing Porkbun DNSSEC DS record at least 24 hours before delegation and confirm its removal.
- [ ] Pause Vercel production automation while retaining the last verified deployment and current domain connection for rollback.
- [ ] Merge the approved candidate through protected checks, deploy `main`, and smoke-test the production Worker on its `workers.dev` address.
- [ ] Change only the authoritative nameservers at Porkbun.
- [ ] After Cloudflare reports the zone active, attach `memorycore.dev` and `www.memorycore.dev`, enable HTTPS, and redirect the apex to `www` while preserving paths and queries.
- [ ] Run the public website smoke check and independently test Proton inbound mail, outbound replies, SPF, DKIM, and DMARC.
- [ ] Enable Cloudflare DNSSEC and publish the new DS record at Porkbun after the website and mail are stable.
- [ ] Record the deployed commit, Cloudflare version, deployment time, operator, smoke-check result, and any approved exceptions in the pull request or linked issue.
- [ ] Retain the last Vercel deployment and old Porkbun zone through sign-off, then remove obsolete Vercel domain automation.

## Deferred work

These items do not block the website launch:

- Transition library documentation in-house after DitherTool is ready.
- Publish Resource downloads only when a complete source packet, rights evidence, and final files are approved.
- Add R2 only when an approved Resource exceeds the repository storage policy.
- Add commerce only when a paid Tool and provider review are complete.
- Add Brand routes only after their page type and public content are approved.

## Launch completion

The launch is complete when every applicable launch checkbox above is satisfied, the frozen candidate has owner approval, `www.memorycore.dev` serves the verified commit, Proton Mail passes independent testing, and a verified rollback path remains available through sign-off.
