<script lang="ts">
	import { Typography } from '@memorycore/design';

	let {
		eyebrow,
		title,
		summary,
		status
	}: { eyebrow?: string; title: string; summary: string; status?: string } =
		$props();
</script>

<header class="page-intro">
	{#if eyebrow}<Typography class="eyebrow" variant="muted">{eyebrow}</Typography
		>{/if}
	<Typography class="title" variant="h1">{title}</Typography>
	<Typography class="summary" variant="lead">{summary}</Typography>
	{#if status}<Typography class="status" variant="small">{status}</Typography
		>{/if}
</header>

<style>
	.page-intro {
		display: grid;
		gap: 1rem;
		padding-block: clamp(4rem, 9vw, 8rem);
	}

	:global(.title) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2.5rem, 6vw, 5.5rem);
		line-height: 0.96;
	}

	:global(.eyebrow),
	:global(.status) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: 0.875rem;
	}

	:global(.eyebrow) {
		text-transform: uppercase;
	}

	:global(.summary) {
		font-size: clamp(1.125rem, 1.4vw, 1.375rem);
		line-height: 1.5;
		max-inline-size: 40rem;
	}

	:global(.status) {
		border-inline-start: 2px solid currentColor;
		padding-inline-start: 0.75rem;
	}
</style>
