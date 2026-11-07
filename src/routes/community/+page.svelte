<script lang="ts">
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { communityInvite } from '../../lib/content/external-destinations';
	import { pages } from '../../lib/content/pages';
</script>

<PageMetadata metadata={pages.community.metadata} />

<div class="page-shell">
	<div class="collection-glass community-glass">
		<div class="community-copy">
			<PageIntro title={pages.community.name} displayTitle compact />
			<section
				class="content-section collection-section"
				aria-labelledby="expectations-heading"
			>
				<Typography variant="h2" id="expectations-heading"
					>Expectations</Typography
				>
				<div class="reading-copy">
					<Typography variant="p">
						Participation should remain thoughtful, constructive, and attentive
						to the people sharing work and technical knowledge.
					</Typography>
					<Typography variant="p">
						Joining opens Discord, an external service. Review its privacy
						information before participating.
					</Typography>
				</div>
			</section>
			<section
				class="content-section collection-section"
				aria-labelledby="purpose-heading"
			>
				<Typography variant="h2" id="purpose-heading"
					>Join the discussion</Typography
				>
				<div class="reading-copy">
					<Typography variant="p">
						MemoryCore community activity centres on discussion of the Tools,
						their open-source libraries, YouTube videos, and the creative
						practices around them.
					</Typography>
					<Typography variant="p">
						The MemoryCore Discord server hosts development updates, discussion,
						feedback, and initial bug reports.
					</Typography>
					<Button appearance="primary" href={communityInvite.url} rel="external"
						>Join Discord</Button
					>
				</div>
			</section>
		</div>
		<div class="community-art" aria-hidden="true">
			<img
				class="glow-art"
				src="/images/community/falling-figure.png"
				alt=""
				width="1245"
				height="1263"
				loading="lazy"
				decoding="async"
			/>
			<img
				class="clear-art"
				src="/images/community/falling-figure.png"
				alt=""
				width="1245"
				height="1263"
				loading="lazy"
				decoding="async"
			/>
		</div>
	</div>
</div>

<style>
	.community-glass {
		display: grid;
		gap: var(--mc-space-5);
		grid-template-columns: minmax(0, 3fr) minmax(18rem, 2fr);
		isolation: isolate;
	}

	.community-copy {
		position: relative;
		z-index: 1;
	}

	.community-glass :global(.page-intro),
	.community-glass .content-section {
		inline-size: 100%;
		max-inline-size: 40rem;
	}

	.community-art {
		align-self: center;
		display: grid;
		inline-size: 100%;
		pointer-events: none;
	}

	.community-art img {
		block-size: auto;
		grid-area: 1 / 1;
		inline-size: 100%;
	}

	.community-art .glow-art {
		filter: blur(var(--mc-space-3));
		opacity: 0.45;
	}

	@media (max-width: 52rem) {
		.community-glass {
			grid-template-columns: minmax(0, 1fr);
		}

		.community-art {
			inline-size: min(100%, 28rem);
			justify-self: center;
		}
	}
</style>
