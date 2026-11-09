<script lang="ts">
	import { Button, Typography } from '@memorycore/design';
	import PageMetadata from '../../../lib/components/site/PageMetadata.svelte';
	import ResourceSection from '../../../lib/components/resources/ResourceSection.svelte';
	import ResourceSurface from '../../../lib/components/resources/ResourceSurface.svelte';
	import {
		communityInvite,
		externalDestinations
	} from '../../../lib/content/external-destinations';
	import type { Resource } from '../../../lib/content/types';

	let { data }: { data: { resource: Resource } } = $props();
	let resource = $derived(data.resource);
	let video = $derived(
		externalDestinations.find(({ id }) => id === resource.videoDestination)
	);
</script>

<PageMetadata metadata={resource.metadata} />

<div class="page-shell resource-detail-page">
	<ResourceSurface>
		<nav class="resource-breadcrumb" aria-label="Breadcrumb">
			<Button appearance="link" href="/resources">Resources</Button>
			<span aria-hidden="true">/</span>
			<Typography variant="small">{resource.reference}</Typography>
		</nav>

		<header class="resource-hero">
			<div class="resource-hero-main">
				<div class="resource-overline">
					<Typography variant="small">{resource.category}</Typography>
					<Typography variant="small">{resource.publicationState}</Typography>
				</div>
				<h1>
					{#each resource.titleLines as line (line)}
						<Typography class="resource-title-line" variant="display"
							>{line}</Typography
						>
					{/each}
				</h1>
				<Typography class="resource-summary" variant="lead"
					>{resource.summary}</Typography
				>
				<div class="resource-actions">
					<Button appearance="primary" size="large" href="#files"
						>Browse the packet</Button
					>
					{#if video}
						<Button
							appearance="secondary"
							size="large"
							href={video.url}
							rel="external"
						>
							Watch on {video.label}
						</Button>
					{/if}
				</div>
			</div>

			<aside class="resource-record" aria-label="Resource record">
				<div class="resource-record-heading">
					<Typography class="resource-code" variant="large"
						>{resource.code}</Typography
					>
					<div class="resource-stamp">Resource<br />record</div>
				</div>
				<div class="resource-symbol" aria-hidden="true">{resource.symbol}</div>
				<dl>
					<div>
						<dt>Reference</dt>
						<dd>{resource.reference}</dd>
					</div>
					<div>
						<dt>Files</dt>
						<dd>{String(resource.assets.length).padStart(2, '0')}</dd>
					</div>
					<div>
						<dt>Citations</dt>
						<dd>{String(resource.citations.length).padStart(2, '0')}</dd>
					</div>
					<div>
						<dt>Research</dt>
						<dd>{String(resource.research.length).padStart(2, '0')}</dd>
					</div>
				</dl>
			</aside>
		</header>

		<section class="packet-manifest" aria-labelledby="manifest-heading">
			<Typography variant="small">Packet manifest</Typography>
			<Typography id="manifest-heading" variant="h2"
				>A record made to be inspected</Typography
			>
			<div class="manifest-grid">
				<div>
					<span>01</span><strong>Files</strong><small
						>{resource.assets.length} records</small
					>
				</div>
				<div>
					<span>02</span><strong>Evidence</strong><small
						>{resource.citations.length} sources</small
					>
				</div>
				<div>
					<span>03</span><strong>Reading</strong><small
						>{resource.research.length} sources</small
					>
				</div>
				<div>
					<span>04</span><strong>Rights</strong><small>Item-level notes</small>
				</div>
			</div>
		</section>

		<ResourceSection id="files" label="Packet / 01" title="Files">
			<div class="file-list">
				{#each resource.assets as asset (asset.id)}
					<article class="file-row">
						<div class="file-number" aria-hidden="true">
							{String(resource.assets.indexOf(asset) + 1).padStart(2, '0')}
						</div>
						<div class="file-copy">
							<Typography variant="h3">{asset.name}</Typography>
							<Typography variant="p">{asset.description}</Typography>
							<Typography class="file-meta" variant="small">
								{asset.type} · {asset.format} · {asset.size} · {asset.revision}
							</Typography>
						</div>
						{#if asset.downloadUrl}
							<Button appearance="secondary" href={asset.downloadUrl}
								>Download</Button
							>
						{:else}
							<span class="unavailable">Not published</span>
						{/if}
					</article>
				{/each}
			</div>
		</ResourceSection>

		<ResourceSection
			id="citations"
			label="Packet / 02"
			title="Citations"
			variant="dark"
		>
			<div class="source-list">
				{#each resource.citations as source, index (source.id)}
					<article class="source-row">
						<span>{String(index + 1).padStart(2, '0')}</span>
						<div>
							<Typography variant="h3">{source.title}</Typography>
							<Typography variant="p">{source.description}</Typography>
						</div>
						<Button appearance="link" href={source.url} rel="external"
							>{source.kind}</Button
						>
					</article>
				{/each}
			</div>
		</ResourceSection>

		<ResourceSection id="research" label="Packet / 03" title="Further research">
			<div class="research-grid">
				{#each resource.research as source, index (source.id)}
					<article class="research-card">
						<Typography variant="small"
							>{String(index + 1).padStart(2, '0')} · {source.kind}</Typography
						>
						<Typography variant="h3">{source.title}</Typography>
						<Typography variant="p">{source.description}</Typography>
						<Button appearance="link" href={source.url} rel="external"
							>Open source</Button
						>
					</article>
				{/each}
			</div>
		</ResourceSection>

		<section class="related-section" aria-labelledby="related-heading">
			<Typography variant="small">Connected work</Typography>
			<Typography id="related-heading" variant="h2"
				>Related MemoryCore work</Typography
			>
			<div class="related-grid">
				{#each resource.relationships as relationship (relationship.id)}
					<article>
						<Typography variant="h3">{relationship.name}</Typography>
						<Typography variant="p">{relationship.description}</Typography>
						<Button appearance="secondary" href={relationship.href}
							>Explore</Button
						>
					</article>
				{/each}
			</div>
		</section>

		<ResourceSection
			id="rights"
			label="Packet / 04"
			title="Rights and corrections"
		>
			<div class="rights-copy">
				<Typography variant="p">{resource.rightsStatement}</Typography>
				{#if resource.corrections.length}
					<ul>
						{#each resource.corrections as correction (correction.date)}
							<li>
								<strong>{correction.date}</strong>
								{correction.description}
							</li>
						{/each}
					</ul>
				{:else}
					<Typography variant="small">No corrections recorded</Typography>
				{/if}
			</div>
			<div class="community-callout">
				<Typography variant="h3">Discuss the work</Typography>
				<Typography variant="p"
					>Questions, corrections, and useful extensions can continue in the
					MemoryCore community.</Typography
				>
				<Button appearance="primary" href={communityInvite.url} rel="external"
					>Join Discord</Button
				>
			</div>
		</ResourceSection>
	</ResourceSurface>
</div>

<style>
	.resource-detail-page {
		margin-block: var(--mc-space-5);
	}
	.resource-breadcrumb {
		align-items: center;
		border-block-end: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--resource-cream) 40%, transparent);
		display: flex;
		gap: var(--mc-space-3);
		padding: var(--mc-space-3) var(--mc-space-5);
		text-transform: uppercase;
	}
	.resource-hero {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(19rem, 0.6fr);
		min-block-size: clamp(42rem, 70vw, 56rem);
	}
	.resource-hero-main {
		border-inline-end: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--resource-cream) 40%, transparent);
		display: flex;
		flex-direction: column;
		padding: clamp(var(--mc-space-5), 6vw, var(--mc-space-8));
	}
	.resource-overline {
		display: flex;
		font-family: var(--mc-font-family-space-mono, monospace);
		justify-content: space-between;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}
	.resource-hero h1 {
		margin-block: auto;
	}
	.resource-hero-main :global(.resource-title-line) {
		display: block;
		font-size: clamp(4rem, 8vw, 9.5rem);
		letter-spacing: -0.055em;
		line-height: 0.78;
		text-transform: uppercase;
	}
	.resource-hero-main :global(.resource-summary) {
		font-size: clamp(1.15rem, 1.7vw, 1.5rem);
		line-height: 1.4;
		max-inline-size: 45rem;
	}
	.resource-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--mc-space-3);
		margin-block-start: var(--mc-space-5);
	}
	.resource-record {
		background: color-mix(in srgb, var(--resource-black) 10%, transparent);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--mc-space-5);
	}
	.resource-record-heading {
		align-items: start;
		display: flex;
		justify-content: space-between;
	}
	.resource-record :global(.resource-code) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2.5rem, 4vw, 4.5rem);
		font-weight: bold;
		letter-spacing: -0.08em;
	}
	.resource-stamp {
		align-items: center;
		aspect-ratio: 1;
		border: var(--mc-border-width-default) solid currentColor;
		border-radius: 50%;
		display: flex;
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: var(--mc-typography-caption-size);
		inline-size: 6rem;
		justify-content: center;
		text-align: center;
		text-transform: uppercase;
		transform: rotate(8deg);
	}
	.resource-symbol {
		align-items: center;
		aspect-ratio: 1;
		border: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--resource-cream) 55%, transparent);
		border-radius: 50%;
		display: flex;
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(4rem, 8vw, 8rem);
		inline-size: min(100%, 16rem);
		justify-content: center;
		margin-inline: auto;
	}
	.resource-record dl {
		margin: 0;
	}
	.resource-record dl div {
		border-block-start: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--resource-cream) 30%, transparent);
		display: flex;
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: var(--mc-typography-caption-size);
		gap: var(--mc-space-3);
		justify-content: space-between;
		padding-block: var(--mc-space-3);
		text-transform: uppercase;
	}
	.resource-record dd {
		margin: 0;
		text-align: end;
	}
	.packet-manifest {
		--mc-colour-background: var(--resource-paper);
		--mc-colour-interactive: var(--resource-blue);
		--mc-colour-text-primary: var(--resource-black);
		--mc-colour-text-secondary: color-mix(
			in srgb,
			var(--resource-black) 70%,
			transparent
		);

		background: var(--resource-cream);
		color: var(--resource-black);
		display: grid;
		gap: var(--mc-space-5);
		padding: clamp(var(--mc-space-5), 6vw, var(--mc-space-8));
	}
	.packet-manifest :global(h2) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2rem, 5vw, 4.5rem);
		letter-spacing: -0.06em;
		text-transform: uppercase;
	}
	.manifest-grid {
		background: var(--resource-black);
		border: var(--mc-border-width-default) solid var(--resource-black);
		display: grid;
		gap: var(--mc-border-width-default);
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
	.manifest-grid div {
		background: var(--resource-cream);
		display: grid;
		gap: var(--mc-space-4);
		min-block-size: 11rem;
		padding: var(--mc-space-4);
	}
	.manifest-grid span,
	.manifest-grid small,
	:global(.file-meta),
	.unavailable {
		font-family: var(--mc-font-family-space-mono, monospace);
		text-transform: uppercase;
	}
	.manifest-grid strong {
		font-size: clamp(1.5rem, 3vw, 2.5rem);
	}
	.file-list,
	.source-list {
		display: grid;
	}
	.file-row,
	.source-row {
		align-items: center;
		border-block-start: var(--mc-border-width-default) solid currentColor;
		display: grid;
		gap: var(--mc-space-4);
		grid-template-columns: auto minmax(0, 1fr) auto;
		padding-block: var(--mc-space-5);
	}
	.file-number,
	.source-row > span {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: 1.5rem;
		font-weight: bold;
	}
	.file-copy,
	.source-row > div {
		display: grid;
		gap: var(--mc-space-2);
	}
	.unavailable {
		border: var(--mc-border-width-default) solid currentColor;
		font-size: var(--mc-typography-caption-size);
		padding: var(--mc-space-3);
	}
	.research-grid,
	.related-grid {
		display: grid;
		gap: var(--mc-border-width-default);
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.research-card {
		border: var(--mc-border-width-default) solid var(--resource-black);
		display: grid;
		gap: var(--mc-space-4);
		min-block-size: 18rem;
		padding: var(--mc-space-5);
	}
	.related-section {
		display: grid;
		gap: var(--mc-space-5);
		padding: clamp(var(--mc-space-5), 6vw, var(--mc-space-8));
	}
	.related-section :global(h2) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2rem, 5vw, 4.5rem);
		letter-spacing: -0.06em;
		text-transform: uppercase;
	}
	.related-grid article {
		border: var(--mc-border-width-default) solid var(--resource-cream);
		display: grid;
		gap: var(--mc-space-4);
		min-block-size: 16rem;
		padding: var(--mc-space-5);
	}
	.rights-copy {
		display: grid;
		gap: var(--mc-space-4);
		max-inline-size: 50rem;
	}
	.community-callout {
		background: var(--resource-blue);
		color: var(--resource-cream);
		display: grid;
		gap: var(--mc-space-4);
		padding: var(--mc-space-5);
	}
	@media (max-width: 58rem) {
		.resource-hero {
			grid-template-columns: minmax(0, 1fr);
		}
		.resource-hero-main {
			border-block-end: var(--mc-border-width-default) solid
				color-mix(in srgb, var(--resource-cream) 40%, transparent);
			border-inline-end: 0;
			min-block-size: 38rem;
		}
		.resource-record {
			display: grid;
			gap: var(--mc-space-5);
			grid-template-columns: 1fr 1fr;
		}
		.resource-record-heading {
			grid-column: 1 / -1;
		}
		.manifest-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 42rem) {
		.resource-breadcrumb {
			overflow: hidden;
		}
		.resource-hero-main :global(.resource-title-line) {
			font-size: clamp(3.25rem, 15vw, 5rem);
		}
		.resource-record,
		.manifest-grid,
		.research-grid,
		.related-grid {
			grid-template-columns: minmax(0, 1fr);
		}
		.resource-record-heading {
			grid-column: auto;
		}
		.file-row,
		.source-row {
			align-items: start;
			grid-template-columns: auto minmax(0, 1fr);
		}
		.file-row > :last-child,
		.source-row > :last-child {
			grid-column: 2;
			justify-self: start;
		}
	}
</style>
