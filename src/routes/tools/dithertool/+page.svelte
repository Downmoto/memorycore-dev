<script lang="ts">
	import { Typography } from '@memorycore/design';
	import PageIntro from '../../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../../lib/components/site/PageMetadata.svelte';
	import { dithertool } from '../../../lib/content/catalogue';
</script>

<PageMetadata metadata={dithertool.metadata} />

<div class="page-shell tool-page">
	<PageIntro
		eyebrow="Creative tool"
		title={dithertool.name}
		summary={dithertool.summary}
	/>
	<section class="content-section" aria-labelledby="construction-heading">
		<Typography variant="h2" id="construction-heading"
			>Under construction</Typography
		>
		<Typography class="reading-copy" variant="p">
			DitherTool is being rebuilt. A complete public overview will arrive with
			the new application.
		</Typography>
	</section>
</div>

<style>
	.tool-page {
		margin-block-end: var(--mc-space-5);
	}

	.tool-page :global(.content-section) {
		border: 0;
	}
</style>
