<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { libraries, tools } from '../../lib/content/catalogue';
	import { pages } from '../../lib/content/pages';

	const libraryById = new Map(
		libraries.map((library) => [library.id, library])
	);
</script>

<PageMetadata metadata={pages.tools.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="MemoryCore"
		title={pages.tools.name}
		summary={pages.tools.summary}
	/>
	<section class="content-section" aria-labelledby="tool-list-heading">
		<Typography variant="h2" id="tool-list-heading"
			>Creative software</Typography
		>
		<div class="card-grid">
			{#each tools as tool (tool.id)}
				{@const library = libraryById.get(tool.supportingLibrary)}
				<article class="outline-card">
					<Typography class="status-label" variant="muted">
						{tool.status === 'planned' ? 'Planned' : 'In active development'}
					</Typography>
					<Typography variant="h3"
						><Button
							appearance="link"
							href={resolve(tool.metadata.canonicalPath)}>{tool.name}</Button
						></Typography
					>
					<Typography variant="p">{tool.summary}</Typography>
					{#if library}
						<Typography variant="p"
							>Powered by <Button
								appearance="link"
								href={resolve(library.metadata.canonicalPath)}
								>{library.name}</Button
							></Typography
						>
					{/if}
				</article>
			{/each}
		</div>
	</section>
</div>
