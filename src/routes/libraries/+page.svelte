<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { libraries, tools } from '../../lib/content/catalogue';
	import { pages } from '../../lib/content/pages';

	const toolById = new Map(tools.map((tool) => [tool.id, tool]));
</script>

<PageMetadata metadata={pages.libraries.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="Open source"
		title={pages.libraries.name}
		summary={pages.libraries.summary}
	/>
	<section class="content-section" aria-labelledby="library-list-heading">
		<Typography variant="h2" id="library-list-heading"
			>Published libraries</Typography
		>
		<div class="card-grid">
			{#each libraries as library (library.id)}
				{@const tool = toolById.get(library.supportingTool)}
				<article class="outline-card">
					<Typography class="status-label" variant="muted">
						{library.maturity === 'stable' ? 'Stable' : 'Pre-release'} · {library.documentedVersion}
					</Typography>
					<Typography variant="h3"
						><Button
							appearance="link"
							href={resolve(library.metadata.canonicalPath)}
							>{library.name}</Button
						></Typography
					>
					<Typography variant="p">{library.summary}</Typography>
					{#if tool}
						<Typography variant="p"
							>Supports <Button
								appearance="link"
								href={resolve(tool.metadata.canonicalPath)}>{tool.name}</Button
							></Typography
						>
					{/if}
				</article>
			{/each}
		</div>
	</section>
</div>
