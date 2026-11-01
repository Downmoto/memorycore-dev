<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageMetadata from '../lib/components/site/PageMetadata.svelte';
	import { libraries, tools } from '../lib/content/catalogue';
	import { site } from '../lib/content/site';
</script>

<PageMetadata metadata={site.metadata} />

<div class="welcome page-shell">
	<Typography class="eyebrow" variant="muted">MemoryCore</Typography>
	<Typography class="hero-title" variant="h1"
		>Creative tools for unusual work</Typography
	>
	<Typography class="hero-summary" variant="lead">
		MemoryCore creates commercial creative software and the open-source
		libraries powering it.
	</Typography>
</div>

<section class="content-section page-shell" aria-labelledby="tools-heading">
	<Typography variant="h2" id="tools-heading">Tools</Typography>
	<div class="card-grid">
		{#each tools as tool (tool.id)}
			<article class="outline-card">
				<Typography class="status-label" variant="muted">
					{tool.status === 'planned' ? 'Planned' : 'In active development'}
				</Typography>
				<Typography variant="h3"
					><Button appearance="link" href={resolve(tool.metadata.canonicalPath)}
						>{tool.name}</Button
					></Typography
				>
				<Typography variant="p">{tool.summary}</Typography>
			</article>
		{/each}
	</div>
	<Button appearance="link" href={resolve('/tools')}>Explore all Tools</Button>
</section>

<section class="content-section page-shell" aria-labelledby="libraries-heading">
	<Typography variant="h2" id="libraries-heading">Libraries</Typography>
	<Typography class="reading-copy" variant="p">
		Open-source foundations expose the technical systems beneath each Tool.
	</Typography>
	<div class="card-grid">
		{#each libraries as library (library.id)}
			<article class="outline-card">
				<Typography class="status-label" variant="muted"
					>Version {library.documentedVersion}</Typography
				>
				<Typography variant="h3"
					><Button
						appearance="link"
						href={resolve(library.metadata.canonicalPath)}
						>{library.name}</Button
					></Typography
				>
				<Typography variant="p">{library.summary}</Typography>
			</article>
		{/each}
	</div>
	<Button appearance="link" href={resolve('/libraries')}
		>Explore all libraries</Button
	>
</section>

<section class="content-section page-shell" aria-labelledby="about-heading">
	<Typography variant="h2" id="about-heading"
		>Made with a point of view</Typography
	>
	<div class="reading-copy">
		<Typography variant="p">
			MemoryCore builds authored creative instruments and publishes the reusable
			foundations beneath them.
		</Typography>
		<Button appearance="link" href={resolve('/about')}>About MemoryCore</Button>
	</div>
</section>

<section class="content-section page-shell" aria-labelledby="community-heading">
	<Typography variant="h2" id="community-heading">Community</Typography>
	<div class="reading-copy">
		<Typography variant="p">
			Follow the work, discuss the tools, and share unusual creative and
			technical practice.
		</Typography>
		<Button appearance="link" href={resolve('/community')}
			>Explore Community</Button
		>
	</div>
</section>

<style>
	.welcome {
		align-content: center;
		display: grid;
		gap: 1.5rem;
		min-height: 100svh;
		padding-block: clamp(4rem, 9vw, 8rem);
	}

	:global(.eyebrow) {
		font-family: var(--mc-font-family-space-mono, monospace);
		margin: 0;
		text-transform: uppercase;
	}

	:global(.hero-title) {
		font-family: var(--mc-font-family-manufacturing-consent, serif);
		font-size: clamp(4.5rem, 11vw, 10.5rem);
		line-height: 0.8;
		margin: 0;
	}

	:global(.hero-summary) {
		font-size: clamp(1.125rem, 1.4vw, 1.375rem);
		line-height: 1.5;
		margin: 0;
		max-inline-size: 40rem;
	}
</style>
