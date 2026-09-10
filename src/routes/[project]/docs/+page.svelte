<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.project.name} docs | memorycore</title>
</svelte:head>

<article>
	<p>documentation</p>
	<h1>{data.project.name}</h1>
	<p>Documentation is coming in the next update.</p>
</article>

<style>
	article {
		max-width: 46rem;
		padding-bottom: 4rem;
	}

	p,
	h1 {
		margin: 0;
	}

	article > p:first-child {
		margin-bottom: 1rem;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: clamp(2.5rem, 8vw, 6rem);
		letter-spacing: -0.05em;
	}

	article > p:last-child {
		font-size: 1.1rem;
		line-height: 1.6;
	}
</style>
