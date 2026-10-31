<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '../../content/site';
</script>

<header class="site-header">
	<a class="site-identity" href={resolve('/')} aria-label="MemoryCore home"
		>{site.name}</a
	>
</header>

<style>
	.site-header {
		align-items: center;
		display: flex;
		inline-size: min(100% - (2 * var(--page-margin)), var(--content-width));
		justify-content: space-between;
		margin-inline: auto;
		min-block-size: 5rem;
	}

	.site-identity {
		color: inherit;
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: 1rem;
		font-weight: 700;
		text-decoration: none;
	}
</style>
