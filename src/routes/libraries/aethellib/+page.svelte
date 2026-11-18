<script lang="ts">
	import { Typography } from '@memorycore/design';
	import PageIntro from '../../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../../lib/components/site/PageMetadata.svelte';
	import { aethellib } from '../../../lib/content/catalogue';
</script>

<PageMetadata metadata={aethellib.metadata} />

<div class="page-shell library-page">
	<PageIntro
		eyebrow="Rust library"
		title={aethellib.name}
		summary={aethellib.summary}
	/>
	<section class="content-section" aria-labelledby="construction-heading">
		<Typography variant="h2" id="construction-heading"
			>Under construction</Typography
		>
		<Typography class="reading-copy" variant="p">
			aethellib is being rebuilt. A complete public overview will arrive with
			the new library.
		</Typography>
	</section>
</div>

<style>
	.library-page {
		margin-block-end: var(--mc-space-5);
	}

	.library-page :global(.content-section) {
		border-block-start: 0;
	}
</style>
