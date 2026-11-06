<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		Button,
		Card,
		CardContent,
		CardFooter,
		CardHeader,
		Typography
	} from '@memorycore/design';
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
	<div class="collection-page collection-glass">
		<PageIntro
			title={pages.tools.name}
			summary={pages.tools.summary}
			displayTitle
			compact
		/>
		<section
			class="content-section collection-section"
			aria-labelledby="tool-list-heading"
		>
			<Typography variant="h2" id="tool-list-heading"
				>Creative software</Typography
			>
			<div class="collection-grid">
				{#each tools as tool (tool.id)}
					{@const library = libraryById.get(tool.supportingLibrary)}
					<Card class="collection-card">
						<CardHeader class="collection-card-header">
							<Typography class="status-label" variant="muted">
								{tool.status === 'planned'
									? 'Planned'
									: 'In active development'}
							</Typography>
							<Typography variant="h3"
								><Button
									appearance="link"
									href={resolve(tool.metadata.canonicalPath)}
									>{tool.name}</Button
								></Typography
							>
						</CardHeader>
						<CardContent class="collection-card-content">
							<Typography variant="p">{tool.summary}</Typography>
						</CardContent>
						{#if library}
							<CardFooter class="collection-card-footer">
								<Typography class="collection-relationship" variant="small"
									>Powered by <Button
										appearance="link"
										href={resolve(library.metadata.canonicalPath)}
										>{library.name}</Button
									></Typography
								>
							</CardFooter>
						{/if}
					</Card>
				{/each}
			</div>
		</section>
	</div>
</div>
