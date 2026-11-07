<script lang="ts">
	import { Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { pages } from '../../lib/content/pages';
</script>

<PageMetadata metadata={pages.about.metadata} />

<div class="page-shell">
	<div class="collection-glass">
		<div class="about-lead">
			<div class="about-copy">
				<PageIntro title={pages.about.name} displayTitle compact />
				<div class="about-statement">
					<Typography variant="p">
						MemoryCore is an independent creative software studio focused on
						building tools for people who make things differently.
					</Typography>
					<Typography variant="p">
						Good software should encourage exploration, respect the creative
						process, and leave room for the unexpected.
					</Typography>
					<Typography variant="p">
						MemoryCore's work spans creative applications, experimental ideas,
						and the open-source foundations that support them.
					</Typography>
				</div>
			</div>
			<div class="about-art" aria-hidden="true">
				<img
					class="glow-art"
					src="/images/about/reclining-figure.png"
					alt=""
					width="1536"
					height="1024"
					loading="lazy"
					decoding="async"
				/>
				<img
					class="clear-art"
					src="/images/about/reclining-figure.png"
					alt=""
					width="1536"
					height="1024"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
		<section class="principles" aria-labelledby="principles-heading">
			<Typography variant="h2" id="principles-heading"
				>Working principles</Typography
			>
			<div class="principles-grid">
				<div class="principle">
					<Typography variant="h3">Make room for exploration</Typography>
					<Typography variant="p">
						Tools are designed for experimentation, iteration, and unexpected
						results.
					</Typography>
				</div>
				<div class="principle">
					<Typography variant="h3">Respect the creative process</Typography>
					<Typography variant="p">
						Software should support deliberate choices, flexible workflows, and
						each maker's way of working.
					</Typography>
				</div>
				<div class="principle">
					<Typography variant="h3">Publish the foundations</Typography>
					<Typography variant="p">
						The libraries beneath MemoryCore's Tools are developed openly and
						remain useful on their own.
					</Typography>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.about-lead {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.about-copy {
		align-content: start;
		display: grid;
		position: relative;
		z-index: 1;
	}

	.about-statement {
		display: grid;
		gap: var(--mc-space-4);
		max-inline-size: 40rem;
		padding-block-end: var(--mc-space-5);
	}

	.about-statement :global(.mc-typography) {
		margin: 0;
	}

	.about-art {
		align-self: center;
		display: grid;
		max-block-size: 32rem;
		pointer-events: none;
		transform: translateY(var(--mc-space-3));
	}

	.about-art img {
		block-size: 100%;
		grid-area: 1 / 1;
		inline-size: 100%;
		object-fit: contain;
		transform: scaleX(-1);
	}

	.about-art .glow-art {
		filter: blur(var(--mc-space-3));
		opacity: 0.45;
	}

	.principles {
		display: grid;
		gap: var(--mc-space-5);
		max-inline-size: 64rem;
		padding-block: var(--mc-space-5);
	}

	.principles-grid {
		display: grid;
		gap: var(--mc-space-5);
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.principle {
		display: grid;
		gap: var(--mc-space-3);
	}

	.principles :global(.mc-typography) {
		margin: 0;
	}

	@media (max-width: 52rem) {
		.about-lead {
			grid-template-columns: minmax(0, 1fr);
		}

		.about-art {
			inline-size: min(100%, 28rem);
			justify-self: center;
		}

		.principles-grid {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
