<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Button, Consumer } from '@memorycore/design';
	import SiteFooter from '../lib/components/site/SiteFooter.svelte';
	import SiteHeader from '../lib/components/site/SiteHeader.svelte';

	let { children } = $props();
</script>

<Consumer consumer="website">
	<div class="site-shell" class:home={page.route.id === '/'}>
		<div class="skip-link">
			<Button appearance="link" href="#main-content"
				>Skip to main content</Button
			>
		</div>
		<SiteHeader />
		<main id="main-content" tabindex="-1">
			{@render children()}
		</main>
		<SiteFooter />
	</div>
</Consumer>

<style>
	.site-shell {
		min-block-size: 100svh;
		padding-block-end: var(--mc-space-5);
		padding-block-start: var(--mc-space-5);
	}

	.site-shell.home {
		background:
			linear-gradient(rgb(5 5 7 / 60%), rgb(5 5 7 / 60%)) center / cover
				no-repeat,
			var(--mc-colour-consumer-website-primary-light, #2f6892)
				url('/images/home/riemersma.png') center top / cover no-repeat;
	}

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
