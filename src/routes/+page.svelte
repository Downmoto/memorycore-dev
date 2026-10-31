<script lang="ts">
	import { site } from '../lib/content/site';
</script>

<svelte:head>
	<title>{site.metadata.title}</title>
	<meta name="description" content={site.metadata.description} />
	<link
		rel="canonical"
		href={`${site.canonicalOrigin}${site.metadata.canonicalPath}`}
	/>
</svelte:head>

<div class="welcome">
	<p class="eyebrow">MemoryCore</p>
	<h1>Creative tools for unusual work</h1>
	<p>
		MemoryCore creates commercial creative software and the open-source
		libraries powering it.
	</p>
</div>

<style>
	.welcome {
		align-content: center;
		display: grid;
		gap: 1.5rem;
		min-height: 100svh;
		padding: clamp(1.5rem, 5vw, 3rem);
	}

	.eyebrow {
		font-family: var(--mc-font-family-mono, monospace);
		margin: 0;
		text-transform: uppercase;
	}
</style>
