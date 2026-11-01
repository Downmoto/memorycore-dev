<script lang="ts">
	import '../app.css';
	import { Button } from '@memorycore/design';
	import SiteFooter from '../lib/components/site/SiteFooter.svelte';
	import SiteHeader from '../lib/components/site/SiteHeader.svelte';

	let { children } = $props();
</script>

<div class="skip-link">
	<Button appearance="link" href="#main-content">Skip to main content</Button>
</div>
<SiteHeader />
<main id="main-content" tabindex="-1">
	{@render children()}
</main>
<SiteFooter />

<style>
	main {
		display: block;
		min-block-size: calc(100svh - 5rem);
	}

	.skip-link {
		--mc-colour-interactive: var(--mc-brand-dark, #050507);

		background: var(--mc-brand-light, #e8e1d2);
		color: var(--mc-brand-dark, #050507);
		font-weight: 700;
		inset-block-start: 0.5rem;
		inset-inline-start: 0.5rem;
		padding: 0.75rem 1rem;
		position: fixed;
		transform: translateY(-150%);
		z-index: 100;
	}

	.skip-link:focus-within {
		transform: translateY(0);
	}
</style>
