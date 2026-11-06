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

	const toolById = new Map(tools.map((tool) => [tool.id, tool]));
</script>

<PageMetadata metadata={pages.libraries.metadata} />

<div class="page-shell">
	<div class="collection-page collection-glass">
		<PageIntro
			title={pages.libraries.name}
			summary={pages.libraries.summary}
			displayTitle
			compact
		/>
		<section
			class="content-section collection-section"
			aria-labelledby="library-list-heading"
		>
			<Typography variant="h2" id="library-list-heading"
				>Open-source foundations</Typography
			>
			<div class="collection-grid">
				{#each libraries as library (library.id)}
					{@const tool = toolById.get(library.supportingTool)}
					<Card class="collection-card">
						<CardHeader class="collection-card-header">
							<Typography class="status-label" variant="muted">
								{library.maturity === 'stable' ? 'Stable' : 'Pre-release'}
							</Typography>
							<Typography variant="h3"
								><Button
									appearance="link"
									href={resolve(library.metadata.canonicalPath)}
									>{library.name}</Button
								></Typography
							>
						</CardHeader>
						<CardContent class="collection-card-content">
							<Typography variant="p">{library.summary}</Typography>
						</CardContent>
						{#if tool}
							<CardFooter class="collection-card-footer">
								<Typography class="collection-relationship" variant="small"
									>Supports <Button
										appearance="link"
										href={resolve(tool.metadata.canonicalPath)}
										>{tool.name}</Button
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
