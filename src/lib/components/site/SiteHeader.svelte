<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Button, Dialog, Typography } from '@memorycore/design';
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
		aria-label="MemoryCore home">{site.name}</Button
	>
	<nav class="desktop-navigation" aria-label="Primary">
		{#each site.navigation as item (item.href)}
			<Button
				appearance={item.prominent ? 'secondary' : 'link'}
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
		display: flex;
		inline-size: min(100% - (2 * var(--page-margin)), var(--content-width));
		justify-content: space-between;
		margin-inline: auto;
		min-block-size: 5rem;
	}

	:global(.site-identity) {
		color: inherit;
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: 1rem;
		font-weight: 700;
		text-decoration: none;
	}

	.desktop-navigation {
		align-items: center;
		display: flex;
		gap: clamp(1rem, 2.5vw, 2rem);
	}

	.desktop-navigation :global(.mc-button),
	.mobile-links :global(.mc-button) {
		color: inherit;
		font-weight: 500;
		text-underline-offset: 0.25rem;
	}

	.desktop-navigation :global(.mc-button:not([aria-current='page'])) {
		text-decoration: none;
	}

	.mobile-navigation {
		display: none;
	}

	.mobile-links {
		display: grid;
		gap: 0.5rem;
	}

	.mobile-links :global(.mc-button) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(1.5rem, 8vw, 2.5rem);
		padding-block: 0.5rem;
	}

	details {
		position: relative;
	}

	summary {
		cursor: pointer;
		font-weight: 700;
		padding: 0.75rem;
	}

	.fallback-links {
		background: var(--mc-brand-dark, #050507);
		border: 1px solid currentColor;
		inline-size: min(18rem, calc(100vw - 3rem));
		inset-inline-end: 0;
		padding: 1rem;
		position: absolute;
		z-index: 10;
	}

	@media (max-width: 52rem) {
		.desktop-navigation {
			display: none;
		}

		.mobile-navigation {
			display: block;
		}
	}
</style>
