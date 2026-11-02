<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Button, Dialog, Logo, Typography } from '@memorycore/design';
	import { onMount } from 'svelte';
	import { site } from '../../content/site';

	let menuOpen = $state(false);
	let enhanced = $state(false);

	onMount(() => {
		enhanced = true;
	});

	function isCurrent(href: string): boolean {
		return (
			page.url.pathname === href || page.url.pathname.startsWith(`${href}/`)
		);
	}
</script>

<header class="site-header">
	<Button
		appearance="link"
		class="site-identity"
		href={resolve('/')}
		aria-label="MemoryCore home"
		><Logo appearance="inverse" alt="" class="site-logo" /></Button
	>
	<nav class="desktop-navigation" aria-label="Primary">
		<div class="primary-links">
			{#each site.navigation.filter((item) => !item.prominent) as item (item.href)}
				<Button
					appearance="link"
					href={resolve(item.href)}
					aria-current={isCurrent(item.href) ? 'page' : undefined}
					>{item.label}</Button
				>
			{/each}
		</div>
		{#each site.navigation.filter((item) => item.prominent) as item (item.href)}
			<Button
				appearance="secondary"
				class="prominent-link"
				href={resolve(item.href)}
				aria-current={isCurrent(item.href) ? 'page' : undefined}
				>{item.label}</Button
			>
		{/each}
	</nav>
	<div class="mobile-navigation">
		{#if enhanced}
			<Button
				appearance="secondary"
				consumer="website"
				aria-haspopup="dialog"
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = true)}>Menu</Button
			>
			<Dialog bind:open={menuOpen} consumer="website" size="large" title="Menu">
				<nav class="mobile-links" aria-label="Primary">
					{#each site.navigation as item (item.href)}
						<Button
							appearance="link"
							href={resolve(item.href)}
							aria-current={isCurrent(item.href) ? 'page' : undefined}
							onclick={() => (menuOpen = false)}>{item.label}</Button
						>
					{/each}
				</nav>
			</Dialog>
		{:else}
			<details>
				<summary><Typography variant="small">Menu</Typography></summary>
				<nav class="mobile-links fallback-links" aria-label="Primary">
					{#each site.navigation as item (item.href)}
						<Button appearance="link" href={resolve(item.href)}
							>{item.label}</Button
						>
					{/each}
				</nav>
			</details>
		{/if}
	</div>
</header>

<style>
	.site-header {
		align-items: center;
		background: transparent;
		border: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--mc-brand-light) 30%, transparent);
		border-radius: var(--mc-radius-2);
		box-shadow: var(--mc-shadow-1);
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		inline-size: min(100% - (2 * var(--page-margin)), var(--content-width));
		margin-inline: auto;
		min-block-size: 5rem;
		padding-inline: var(--mc-space-4);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}

	:global(.site-identity) {
		grid-column: 1;
		inline-size: fit-content;
	}

	:global(.site-logo) {
		inline-size: 8.5rem;
	}

	.desktop-navigation {
		align-items: center;
		display: grid;
		grid-column: 2 / 4;
		grid-template-columns: subgrid;
	}

	.primary-links {
		align-items: center;
		display: flex;
		gap: clamp(var(--mc-space-4), 2.5vw, var(--mc-space-6));
	}

	.desktop-navigation :global(.prominent-link) {
		justify-self: end;
	}

	.desktop-navigation :global(.mc-button),
	.mobile-links :global(.mc-button) {
		color: inherit;
		font-weight: var(--mc-font-weight-medium);
		text-underline-offset: var(--mc-space-1);
	}

	.desktop-navigation :global(.mc-button) {
		text-transform: uppercase;
	}

	.desktop-navigation :global(.mc-button:not([aria-current='page'])) {
		text-decoration: none;
	}

	.mobile-navigation {
		display: none;
	}

	.mobile-links {
		display: grid;
		gap: var(--mc-space-2);
	}

	.mobile-links :global(.mc-button) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(1.5rem, 8vw, 2.5rem);
		padding-block: var(--mc-space-2);
	}

	details {
		position: relative;
	}

	summary {
		cursor: pointer;
		font-weight: var(--mc-font-weight-bold);
		padding: var(--mc-space-3);
	}

	.fallback-links {
		background: var(--mc-brand-dark);
		border: var(--mc-border-width-default) solid currentColor;
		inline-size: min(18rem, calc(100vw - var(--mc-space-7)));
		inset-inline-end: 0;
		padding: var(--mc-space-4);
		position: absolute;
		z-index: var(--mc-layer-overlay);
	}

	@media (max-width: 52rem) {
		.site-header {
			grid-template-columns: 1fr auto;
		}

		.desktop-navigation {
			display: none;
		}

		.mobile-navigation {
			display: block;
			grid-column: 2;
		}
	}
</style>
