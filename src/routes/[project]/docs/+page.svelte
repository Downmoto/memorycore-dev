<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.project.name} docs | memorycore</title>
</svelte:head>

<div class="docs-layout">
	<header>
		<p>documentation</p>
		<h1>{data.project.name}</h1>
	</header>

	<article>
		{#if data.readmeHtml}
			<div class="readme">{@html data.readmeHtml}</div>
		{:else}
			<p class="unavailable">The README could not be loaded right now.</p>
		{/if}

		<a class="source" href={data.repository.github} target="_blank" rel="noreferrer">source on GitHub →</a>
	</article>
</div>

<style>
	.docs-layout {
		display: grid;
		grid-template-columns: 12rem minmax(0, 58rem);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: start;
	}

	.docs-layout > header {
		position: sticky;
		top: 2rem;
	}

	.docs-layout > header p {
		margin: 0 0 1.25rem;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	article {
		min-width: 0;
		max-width: 58rem;
		padding-bottom: 4rem;
	}

	.docs-layout > header h1 {
		margin: 0;
		font-size: clamp(1.75rem, 4vw, 3.5rem);
		letter-spacing: -0.05em;
		word-break: break-word;
	}

	.readme {
		overflow-wrap: anywhere;
	}

	.readme :global(#readme),
	.readme :global(article) {
		min-width: 0;
	}

	.readme :global(h1) {
		display: none;
	}

	.readme :global(h2) {
		margin: 4rem 0 1.25rem;
		padding-top: 2rem;
		border-top: 1px solid #444;
		font-size: clamp(1.35rem, 4vw, 1.8rem);
	}

	.readme :global(h3) {
		margin: 2.5rem 0 1rem;
		font-size: 1.2rem;
	}

	.readme :global(p),
	.readme :global(li) {
		color: #ccc;
		line-height: 1.7;
	}

	.readme :global(a) {
		color: #fff;
		text-underline-offset: 0.25em;
	}

	.readme :global(.anchor) {
		display: none;
	}

	.readme :global(pre) {
		box-sizing: border-box;
		max-width: 100%;
		overflow-x: auto;
		margin-block: 1.5rem;
		padding: 1.25rem;
		border: 1px solid #444;
		background: #090909;
		font-size: clamp(0.7rem, 2vw, 0.8rem);
		line-height: 1.65;
	}

	.readme :global(code) {
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	}

	.readme :global(p code),
	.readme :global(li code) {
		padding: 0.15em 0.35em;
		background: #1a1a1a;
		font-size: 0.85em;
	}

	.readme :global(img) {
		display: block;
		max-width: 100%;
		height: auto;
		margin-block: 2rem;
	}

	.readme :global(table) {
		display: block;
		width: 100%;
		overflow-x: auto;
		border-collapse: collapse;
		font-size: 0.85rem;
	}

	.readme :global(th),
	.readme :global(td) {
		min-width: 8rem;
		padding: 0.75rem;
		border: 1px solid #444;
		text-align: left;
		vertical-align: top;
	}

	.unavailable {
		color: #bbb;
		line-height: 1.6;
	}

	.source {
		display: inline-block;
		margin-top: 4rem;
		color: inherit;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-underline-offset: 0.35em;
	}

	@media (max-width: 720px) {
		.docs-layout {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.docs-layout > header {
			position: static;
		}

		.readme :global(h2) {
			margin-top: 3rem;
			padding-top: 1.5rem;
		}

		.readme :global(pre) {
			margin-inline: calc(clamp(1.25rem, 4vw, 3rem) * -1);
			padding-inline: clamp(1.25rem, 4vw, 3rem);
			border-inline: 0;
		}
	}
</style>
