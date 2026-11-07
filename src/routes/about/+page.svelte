<script lang="ts">
	import { Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { pages } from '../../lib/content/pages';
</script>

<PageMetadata metadata={pages.about.metadata} />

<div class="page-shell">
	<div class="collection-glass">
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
				MemoryCore's work spans creative applications, experimental ideas, and
				the open-source foundations that support them.
			</Typography>
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
	.about-statement {
		display: grid;
		gap: var(--mc-space-4);
		max-inline-size: 40rem;
		padding-block-end: var(--mc-space-5);
	}

	.about-statement :global(.mc-typography) {
		margin: 0;
	}

	.principles {
		display: grid;
		gap: var(--mc-space-5);
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
		.principles-grid {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
