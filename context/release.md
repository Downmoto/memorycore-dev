# Website release and operations context

Status: Approved
Last reviewed: 2026-10-21
Release owner: Arad Fadaei

## Environments

| Environment | Source | Rules |
|---|---|---|
| Local | Working tree | No analytics, production credentials, or external publication |
| Preview | Non-production branch Worker Preview | `noindex`, no production analytics, no R2 writes |
| Production | Protected `main` | `www.memorycore.dev`, production analytics, approved read-only public assets |

Use a reviewed pull request and Worker Preview as the release candidate. Add no staging branch, permanent staging domain, release train, gradual rollout, or separate deployment service.

## Routine release

1. Update affected review dates, provider facts, library baselines, Resource manifests, redirects, and dependencies.
2. Run `npm ci` and `npm run verify` from a clean checkout. Require the same GitHub Actions checks.
3. Review the immutable deployment and updating branch Preview URL. Verify that analytics is absent.
4. Resolve every blocker and obtain required review. Merge without bypassing protected-branch checks.
5. Let Workers Builds deploy the merged `main` commit.
6. Verify Home, one route from each affected family, redirects, `404`, headers, canonicals, sitemap, downloads, analytics state, and changed external destinations on production.
7. Record commit SHA, Cloudflare version, deployment time, operator, smoke check, and approved exceptions in the pull request or linked issue.

Git, the pull request, and Cloudflare deployment history are the release record. Maintain no duplicate release ledger.

Use the platform's default HTML and ordinary-static-file revalidation. Cache content-hashed immutable assets for one year. Cache versioned Resource downloads for one day. Routine releases require no manual purge.

## Initial Cloudflare and DNS cutover

This procedure occurs before commercial promotion.

1. Freeze the approved candidate on `feat/website-overhaul`, record its SHA, and pass full acceptance on its Worker Preview.
2. Create or connect the Worker after committed Wrangler configuration exists. Set `main` as production, enable branch previews, and leave custom domains disconnected.
3. Add `memorycore.dev` to Cloudflare Free. Export the Porkbun zone and current public answers. Reproduce every web, Proton verification, MX, SPF, DKIM, DMARC, and service record. Keep mail records DNS only, exactly one SPF record, and Cloudflare Email Routing disabled.
4. Query the assigned Cloudflare nameservers directly and compare them with current authoritative answers. Stop on any mismatch. If Porkbun has a DNSSEC DS record, remove it at least 24 hours before delegation and confirm removal.
5. Pause or disconnect Vercel automatic production deployment while keeping its last verified deployment and current domain connection available.
6. Merge the approved branch. Let Workers Builds deploy and run the production smoke check on the `workers.dev` address. Stop on failure.
7. Change only the authoritative nameservers at Porkbun. Keep Porkbun as registrar, Proton as mail provider, and the old Porkbun zone intact.
8. After Cloudflare reports the zone active, attach `memorycore.dev` and `www.memorycore.dev`. Enable Always Use HTTPS and the apex-to-`www` Single Redirect rule while preserving path and query. Run the public smoke check.
9. Test inbound mail from an independent provider and reply through Proton. Inspect SPF, DKIM, and DMARC. Confirm Proton's domain checks and repeat after delegation settles across multiple public resolvers.
10. Enable Cloudflare DNSSEC and publish its new DS record at Porkbun only after website and mail are stable. Verify signed resolution.
11. Retain the last Vercel deployment and old Porkbun zone through sign-off. Then remove the obsolete Vercel custom-domain connection and automation. Keep the Porkbun registration and renewal unchanged.

Stop before changing nameservers when the Cloudflare zone differs from the verified source, a Proton record is absent or proxied, more than one SPF record exists, the old DS record still resolves, the Worker is unverified, or the owner cannot test mail independently.

## Rollback

| Failure | Recovery |
|---|---|
| Preview or build failure | Leave production unchanged, fix the branch, and create a new preview |
| Bad routine deployment | Restore the last verified Worker version, smoke-test it, then create a normal revert or corrective commit on `main` |
| Bad Worker before nameserver cutover | Repair or restore it and stop; the current Vercel site remains authoritative |
| Website failure after DNS cutover | Roll back the Worker version first |
| Web DNS or domain mapping failure | Repair the record or Worker domain mapping and verify it directly |
| Proton Mail failure | Freeze unrelated changes, compare saved records, repair the Cloudflare zone, and retest; nameserver reversal is the final recovery path |
| Resource rights, privacy, malware, or safety issue | Remove the manifest entry and public object, deploy a forward fix, and verify the old URL |
| R2 or external-provider issue | Repair, withdraw, or replace that external state independently |
| Checkout or entitlement issue | Disable the provider product or checkout, remove the website action through a forward release, and verify support |

Before each release, identify the last verified Worker version. After rollback, record the reason and restored version, verify critical routes and mail where relevant, then reconcile `main` promptly.

## Analytics operations

Cloudflare Web Analytics is production-only and uses aggregate route, referrer, compatibility, page-load, and Core Web Vitals data. It uses no approved custom events, cookies, storage identifiers, fingerprinting, session replay, advertising pixels, redirect tracking, tag manager, or second analytics provider.

Use the first 90 complete production days as the initial quantitative baseline. Store one aggregate snapshot in private operational records before the provider's available history expires. Set numeric targets after reviewing that evidence.

Reconfirm data practices, retention, contractual terms, processing documents, pricing, and feature limits before launch. If legal review requires prior consent, keep the beacon disabled until a compliant choice exists.

## Resource operations

Use repository storage first. R2 activation requires an approved asset beyond the 10 MB per-file or 100 MB collection threshold. Start with a documented manual upload and verification procedure. Automate after publication frequency makes manual handling unreliable. Review usage monthly once active.

## Commerce boundary

Lemon Squeezy is the intended Merchant of Record for the first paid Tool release. Before implementation, confirm entity and jurisdiction support, payout requirements, refunds, chargebacks, installer limits, licence behaviour, and current fees. Paddle is the leading alternative if onboarding or product fit fails.

The public website contains public product information and hosted-checkout links. Private Tool repositories and release workflows contain source, signing and notarisation credentials, licence secrets, build automation, and paid installers.

Add webhooks, customer accounts, entitlement services, or a proprietary updater only when an approved product requirement needs them.

## Privacy launch gate

Before Privacy publication and commercial launch:

- Complete applicable Ontario registration or incorporation.
- Replace transitional identity with exact registered information.
- Complete provider evidence, retention, safeguards, international-processing, request, incident, and Community reviews.
- Verify `privacy@memorycore.dev` inbound and outbound through Proton.
- Complete qualified legal review of the implemented data flows and final policy.
