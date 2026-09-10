<script lang="ts">
	import { projectDocs } from '$lib/project-content';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const docs = $derived(projectDocs[data.project.slug]);
</script>

<svelte:head>
	<title>{data.project.name} docs | memorycore</title>
</svelte:head>

<div class="docs-layout">
	<aside>
		<p>documentation</p>
		<nav aria-label="On this page">
			{#each docs.sections as section}
				<a href={`#${section.id}`}>{section.title}</a>
			{/each}
		</nav>
	</aside>

	<article>
		<header>
			<h1>{data.project.name}</h1>
			<p>{docs.intro}</p>
		</header>

		{#each docs.sections as section}
			<section id={section.id}>
				<h2>{section.title}</h2>

				{#each section.paragraphs ?? [] as paragraph}
					<p>{paragraph}</p>
				{/each}

				{#if section.code}
					<pre><code>{section.code}</code></pre>
				{/if}

				{#if section.bullets}
					<ul>
						{#each section.bullets as bullet}
							<li>{bullet}</li>
						{/each}
					</ul>
				{/if}
			</section>
		{/each}

		<a class="source" href={data.project.github} target="_blank" rel="noreferrer">source on GitHub →</a>
	</article>
</div>

<style>
	.docs-layout {
		display: grid;
		grid-template-columns: 12rem minmax(0, 46rem);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: start;
	}

	aside {
		position: sticky;
		top: 2rem;
	}

	aside p {
		margin: 0 0 1.25rem;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	aside nav {
		display: grid;
		gap: 0.65rem;
	}

	aside a {
		color: #999;
		font-size: 0.8rem;
		text-decoration: none;
	}

	aside a:hover,
	aside a:focus-visible {
		color: #fff;
	}

	article {
		max-width: 46rem;
		padding-bottom: 4rem;
	}

	article header {
		padding-bottom: clamp(4rem, 10vw, 7rem);
	}

	article h1,
	article header p,
	section h2,
	section p {
		margin: 0;
	}

	article h1 {
		font-size: clamp(2.5rem, 8vw, 6rem);
		letter-spacing: -0.05em;
	}

	article header p {
		max-width: 38rem;
		margin-top: 1.5rem;
		color: #bbb;
		font-size: 1.15rem;
		line-height: 1.6;
	}

	section {
		padding-block: 3rem;
		border-top: 1px solid #444;
		scroll-margin-top: 2rem;
	}

	section h2 {
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
	}

	section p,
	li {
		color: #ccc;
		line-height: 1.7;
	}

	section p + p {
		margin-top: 1rem;
	}

	ul {
		padding-left: 1.25rem;
	}

	li + li {
		margin-top: 0.6rem;
	}

	pre {
		overflow-x: auto;
		margin-block: 1.5rem;
		padding: 1.25rem;
		border: 1px solid #444;
		background: #090909;
		font-size: 0.8rem;
		line-height: 1.65;
	}

	.source {
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
			gap: 4rem;
		}

		aside {
			position: static;
		}

		aside nav {
			display: flex;
			flex-wrap: wrap;
			gap: 0.75rem 1rem;
		}
	}
</style>
