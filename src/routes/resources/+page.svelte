<script lang="ts">
	import { Button, Typography } from '@memorycore/design';
	import ResourceSection from '../../lib/components/resources/ResourceSection.svelte';
	import ResourceSurface from '../../lib/components/resources/ResourceSurface.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { pages } from '../../lib/content/pages';
	import { resources } from '../../lib/content/resources';

	const publishedResources = resources.filter(
		({ publicationState }) => publicationState === 'published'
	);
	const previewResource = resources.find(
		({ publicationState }) => publicationState === 'preview'
	);

	const packetParts = [
		{
			index: '01',
			name: 'Files',
			description: 'Scripts and original production assets'
		},
		{
			index: '02',
			name: 'Evidence',
			description: 'Direct citations for claims and definitions'
		},
		{
			index: '03',
			name: 'Reading',
			description: 'Research that shaped the finished work'
		},
		{
			index: '04',
			name: 'Rights',
			description: 'Item-level licences and attribution'
		}
	] as const;
</script>

<PageMetadata metadata={pages.resources.metadata} />

<div class="page-shell resources-page">
	<ResourceSurface>
		<section class="resources-hero" aria-labelledby="resources-title">
			<div class="resources-hero-main">
				<Typography class="resource-kicker" variant="small"
					>MemoryCore · Resource archive</Typography
				>
				<div class="resource-title-lockup">
					<h1 id="resources-title">
						<Typography class="resource-title" variant="display"
							>Resour<wbr />ces</Typography
						>
					</h1>
				</div>
				<Typography class="resource-summary" variant="lead"
					>{pages.resources.summary}</Typography
				>
			</div>

			<aside class="archive-record" aria-label="Resource archive record">
				<div class="archive-record-top">
					<Typography class="archive-code" variant="large">R/000</Typography>
				</div>
				<div class="archive-symbol" aria-hidden="true">∅</div>
				<ul class="archive-record-list">
					<li>
						<span>Available Resources</span><span
							>{String(publishedResources.length).padStart(2, '0')}</span
						>
					</li>
				</ul>
			</aside>
		</section>

		<ResourceSection
			id="archive-status"
			label="Archive / 000"
			title={previewResource
				? 'Preview the Resource system'
				: 'The archive is empty'}
		>
			<div class="empty-copy">
				{#if previewResource}
					<Typography variant="p"
						>This catalogue item demonstrates the full Resource page before the
						first video packet is ready for release.</Typography
					>
					<Button
						appearance="primary"
						size="large"
						href={previewResource.metadata.canonicalPath}
						>Open {previewResource.title}</Button
					>
				{:else}
					<Typography variant="p"
						>Resources will appear here when a MemoryCore video has a complete
						reviewed source packet, cleared assets, and dependable downloads.</Typography
					>
				{/if}
				<Typography variant="p">
					Each published Resource will identify its files, sources, rights,
					revisions, and genuine relationships to MemoryCore work.
				</Typography>
			</div>

			<div class="packet-grid" aria-label="Contents of a Resource packet">
				{#each packetParts as part (part.index)}
					<article class="packet-part">
						<Typography class="packet-index" variant="small"
							>{part.index} · {part.name}</Typography
						>
						<Typography class="packet-value" variant="large">—</Typography>
						<Typography variant="p">{part.description}</Typography>
					</article>
				{/each}
			</div>
		</ResourceSection>
	</ResourceSurface>
</div>

<style>
	.resources-page {
		margin-block: var(--mc-space-5);
	}

	.resources-hero {
		display: flex;
		flex-wrap: wrap;
		min-block-size: clamp(36rem, 68vw, 50rem);
	}

	.resources-hero-main {
		container-type: inline-size;
		display: flex;
		flex: 5 1 42rem;
		flex-direction: column;
		min-block-size: 34rem;
		min-inline-size: 0;
		padding: var(--mc-space-5) clamp(var(--mc-space-5), 4vw, var(--mc-space-7));
	}

	:global(.resource-kicker),
	:global(.packet-index) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-weight: var(--mc-font-weight-bold);
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.resource-title-lockup {
		align-items: center;
		display: flex;
		margin-block: auto;
	}

	.resource-title-lockup h1 {
		margin: 0;
	}

	.resource-title-lockup :global(.mc-typography.resource-title) {
		font-size: clamp(7rem, 17.8cqi, 12rem);
		letter-spacing: -0.04em;
		line-height: 0.76;
		text-transform: uppercase;
		white-space: normal;
	}

	.resources-hero-main :global(.resource-summary) {
		font-size: clamp(1.125rem, 2.2cqi, 1.45rem);
		line-height: 1.4;
		max-inline-size: 38rem;
	}

	.archive-record {
		background: color-mix(in srgb, var(--resource-black) 9%, transparent);
		container-type: inline-size;
		display: grid;
		flex: 1 1 15rem;
		gap: var(--mc-space-5);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
		align-content: space-between;
		padding: var(--mc-space-5);
	}

	.archive-record-top {
		align-items: start;
		display: flex;
		gap: var(--mc-space-4);
		grid-column: 1 / -1;
		justify-content: space-between;
	}

	.archive-record-top :global(.archive-code) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2rem, 4cqi, 4rem);
		font-weight: var(--mc-font-weight-bold);
		letter-spacing: -0.08em;
		line-height: 0.9;
		white-space: nowrap;
	}

	.archive-symbol {
		--archive-symbol-size: clamp(10rem, 55cqi, 12rem);

		align-items: center;
		align-self: center;
		block-size: var(--archive-symbol-size);
		border: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--resource-cream) 60%, transparent);
		border-radius: 50%;
		box-sizing: border-box;
		display: flex;
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: calc(var(--archive-symbol-size) * 0.58);
		flex: none;
		inline-size: var(--archive-symbol-size);
		justify-content: center;
		line-height: 1;
		margin-inline: auto;
	}

	.archive-record-list {
		align-self: end;
		border-block-start: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--resource-cream) 45%, transparent);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.archive-record-list li {
		border-block-end: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--resource-cream) 28%, transparent);
		display: flex;
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: var(--mc-typography-caption-size);
		font-weight: var(--mc-font-weight-bold);
		gap: var(--mc-space-3);
		justify-content: space-between;
		padding-block: var(--mc-space-3);
		text-transform: uppercase;
	}

	.empty-copy {
		display: grid;
		font-size: clamp(1rem, 1.4vw, 1.25rem);
		gap: var(--mc-space-4);
		line-height: 1.5;
		max-inline-size: 44rem;
	}

	.packet-grid {
		background: var(--resource-black);
		border: var(--mc-border-width-default) solid var(--resource-black);
		display: grid;
		gap: var(--mc-border-width-default);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr));
	}

	.packet-part {
		--mc-colour-text-primary: var(--resource-black);

		background: var(--resource-cream);
		display: flex;
		flex-direction: column;
		gap: var(--mc-space-4);
		justify-content: space-between;
		min-block-size: 13rem;
		padding: var(--mc-space-4);
	}

	.packet-part :global(.packet-value) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2.75rem, 5vw, 4.5rem);
		font-weight: var(--mc-font-weight-bold);
		letter-spacing: -0.07em;
		line-height: 1;
	}

	@media (max-width: 40rem) {
		.resources-hero-main {
			min-block-size: 30rem;
		}

		.packet-part {
			min-block-size: 10rem;
		}
	}
</style>
