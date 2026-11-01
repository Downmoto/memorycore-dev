<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import { externalDestinations } from '../../content/external-destinations';
	import { site } from '../../content/site';

	const year = new Date().getUTCFullYear();
	const sourceDestinations = externalDestinations.filter(
		({ kind }) => kind === 'source'
	);
</script>

<footer class="site-footer">
	<div class="introduction">
		<Typography class="identity" variant="small">{site.name}</Typography>
		<Typography variant="p">{site.tagline}</Typography>
	</div>
	<nav aria-label="Footer">
		<Typography class="label" variant="muted">Explore</Typography>
		{#each site.navigation as item (item.href)}<Button
				appearance="link"
				href={resolve(item.href)}>{item.label}</Button
			>{/each}
		<Button appearance="link" href={resolve('/privacy')}>Privacy</Button>
	</nav>
	<div class="external-links">
		<Typography class="label" variant="muted">Source</Typography>
		{#each sourceDestinations as destination (destination.id)}
			<Button appearance="link" href={destination.url} rel="external"
				>{destination.label}</Button
			>
		{/each}
	</div>
	<Typography class="copyright" variant="small">© {year} MemoryCore</Typography>
</footer>

<style>
	.site-footer {
		align-items: start;
		border-block-start: 1px solid currentColor;
		display: grid;
		gap: 2rem;
		grid-template-columns: 2fr 1fr 1fr;
		inline-size: min(100% - (2 * var(--page-margin)), var(--content-width));
		margin-inline: auto;
		padding-block: clamp(3rem, 7vw, 5rem);
	}

	.site-footer nav,
	.external-links {
		display: grid;
		gap: 0.5rem;
	}

	:global(.label) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	:global(.identity),
	:global(.copyright) {
		grid-column: 1 / -1;
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: 0.875rem;
	}

	:global(.identity) {
		font-weight: 700;
		margin-block-end: 0.5rem;
	}

	@media (max-width: 40rem) {
		.site-footer {
			grid-template-columns: 1fr;
		}

		:global(.copyright) {
			grid-column: auto;
		}
	}
</style>
