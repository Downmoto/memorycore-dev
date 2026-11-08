<script lang="ts">
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { pages } from '../../lib/content/pages';
</script>

<PageMetadata metadata={pages.privacy.metadata} />

<div class="page-shell">
	<div class="collection-glass privacy-glass">
		<PageIntro title={pages.privacy.name} displayTitle compact />
		<div class="privacy-content">
			<section class="privacy-section" aria-labelledby="core-principle-heading">
				<Typography variant="h2" id="core-principle-heading"
					>1. Core principle</Typography
				>
				<Typography variant="p">
					We do not collect, store, share, or sell your personal information.
					Our products and services are designed to function completely without
					tracking you.
				</Typography>
			</section>

			<section class="privacy-section" aria-labelledby="visitors-heading">
				<Typography variant="h2" id="visitors-heading"
					>2. Website visitors</Typography
				>
				<Typography variant="p">
					When you visit our website, we do not log your IP address, use
					tracking cookies, or employ analytics software to monitor your
					behaviour.
				</Typography>
			</section>

			<section class="privacy-section" aria-labelledby="software-heading">
				<Typography variant="h2" id="software-heading"
					>3. Applications and software</Typography
				>
				<Typography variant="p">
					Our apps do not require you to create an account to purchase or use
					them. We do not integrate Digital Rights Management (DRM) software,
					telemetry, or crash reporting tools. Any data you generate while using
					our applications remains entirely on your local device.
				</Typography>
			</section>

			<section class="privacy-section" aria-labelledby="community-heading">
				<Typography variant="h2" id="community-heading"
					>4. Community and Discord server</Typography
				>
				<Typography variant="p">
					We host a community server on Discord for our users. Please be aware
					that Discord is an independent, third-party platform governed by its
					own Privacy Policy and Terms of Service. When you join, participate
					in, or use our Discord server, the data you generate is collected and
					managed by Discord, not by us. We do not export, store, or process
					your personal information from Discord. We encourage you to review
					Discord's privacy policies to understand how they handle your
					information before joining.
				</Typography>
			</section>

			<section class="privacy-section" aria-labelledby="services-heading">
				<Typography variant="h2" id="services-heading"
					>5. Third-party services</Typography
				>
				<Typography variant="p">
					Because we collect no personal data, we have no data to share with or
					sell to third parties, advertisers, or data brokers. If you purchase
					our software through a third-party storefront or payment processor,
					that entity may collect payment and account information according to
					its own independent privacy policy.
				</Typography>
			</section>

			<section class="privacy-section" aria-labelledby="changes-heading">
				<Typography variant="h2" id="changes-heading"
					>6. Changes to this policy</Typography
				>
				<Typography variant="p">
					If we ever change our practices and introduce features that require
					data collection, we will update this policy and notify users clearly
					before any changes take effect.
				</Typography>
			</section>

			<section class="privacy-section" aria-labelledby="contact-heading">
				<Typography variant="h2" id="contact-heading">7. Contact</Typography>
				<Typography variant="p">
					If you have any questions about our privacy practices, please contact
					us at <Button appearance="link" href="mailto:privacy@memorycore.dev"
						>privacy@memorycore.dev</Button
					>, or on our public Discord server.
				</Typography>
			</section>
		</div>
	</div>
</div>

<style>
	.privacy-glass :global(.page-intro),
	.privacy-content {
		inline-size: 100%;
		margin-inline: auto;
		max-inline-size: 48rem;
	}

	.privacy-content {
		display: grid;
	}

	.privacy-section {
		display: grid;
		gap: var(--mc-space-4);
		padding-block-end: var(--mc-space-6);
	}

	.privacy-section :global(.mc-typography) {
		margin: 0;
	}

	.privacy-section :global(h2) {
		font-size: clamp(1.25rem, 2vw, 1.75rem);
	}
</style>
