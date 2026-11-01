<script lang="ts">
	import { Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { pages } from '../../lib/content/pages';
</script>

<PageMetadata metadata={pages.resources.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="Open companion material"
		title={pages.resources.name}
		summary={pages.resources.summary}
	/>
	<section class="content-section" aria-labelledby="empty-heading">
		<Typography variant="h2" id="empty-heading">The archive is empty</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				Resources will appear here when a MemoryCore video has a complete
				reviewed source packet, cleared assets, and dependable downloads.
			</Typography>
			<Typography variant="p">
				Each published Resource will identify its files, sources, rights,
				revisions, and genuine relationships to MemoryCore work.
			</Typography>
		</div>
	</section>
</div>
