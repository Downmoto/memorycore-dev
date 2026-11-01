<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
</script>

<div class="page-shell error-view">
	<Typography class="eyebrow" variant="muted">404</Typography>
	<Typography class="title" variant="h1">Page unavailable</Typography>
	<Typography variant="p">
		The requested page could not be found. Continue through one of the main
		areas.
	</Typography>
	<nav aria-label="Recovery">
		<Button appearance="link" href={resolve('/')}>Home</Button>
		<Button appearance="link" href={resolve('/tools')}>Tools</Button>
		<Button appearance="link" href={resolve('/resources')}>Resources</Button>
		<Button appearance="link" href={resolve('/community')}>Community</Button>
	</nav>
</div>

<style>
	.error-view {
		align-content: center;
		display: grid;
		gap: 1.5rem;
		min-block-size: calc(100svh - 5rem);
		padding-block: 4rem;
	}

	:global(.title) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2.5rem, 6vw, 5.5rem);
		line-height: 0.96;
	}

	:global(.eyebrow) {
		font-family: var(--mc-font-family-space-mono, monospace);
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	nav :global(.mc-button) {
		min-block-size: 2.75rem;
		padding-block: 0.75rem;
	}
</style>
