<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.project.name} | memorycore</title>
</svelte:head>

<section>
	<p class="eyebrow">{data.project.kind === 'repository' ? 'repository' : 'product'}</p>
	<h1>{data.project.name}</h1>

	{#if data.project.kind === 'repository'}
		<p class="lede">Project details are coming in the next update.</p>
	{:else}
		<p class="lede">work in progress</p>
	{/if}
</section>

<style>
	section {
		padding-bottom: 4rem;
	}

	.eyebrow,
	h1,
	.lede {
		margin: 0;
	}

	.eyebrow {
		margin-bottom: 1rem;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1 {
		font-size: clamp(3rem, 12vw, 9rem);
		font-weight: 600;
		letter-spacing: -0.06em;
		line-height: 0.85;
	}

	.lede {
		max-width: 38rem;
		margin-top: 2rem;
		font-size: clamp(1rem, 2vw, 1.35rem);
		line-height: 1.5;
	}
</style>
