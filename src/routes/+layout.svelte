<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import {
		Button,
		Consumer,
		initialiseTheme,
		setTheme
	} from '@memorycore/design';
	import { onMount } from 'svelte';
	import SiteFooter from '../lib/components/site/SiteFooter.svelte';
	import SiteHeader from '../lib/components/site/SiteHeader.svelte';

	let { children } = $props();
	let darkTheme = $state(true);

	onMount(() => {
		const theme = initialiseTheme();
		darkTheme =
			theme === 'dark' ||
			(theme === 'system' &&
				!window.matchMedia('(prefers-color-scheme: light)').matches);
	});

	function updateTheme(dark: boolean): void {
		darkTheme = dark;
		setTheme(dark ? 'dark' : 'light');
	}
</script>

<Consumer consumer="website">
	<div
		class="site-shell"
		class:dark-theme={darkTheme}
		class:textured={page.route.id === '/' ||
			page.route.id === '/tools' ||
			page.route.id === '/libraries'}
	>
		<div class="skip-link">
			<Button appearance="link" href="#main-content"
				>Skip to main content</Button
			>
		</div>
		<SiteHeader {darkTheme} />
		<main id="main-content" tabindex="-1">
			{@render children()}
		</main>
		<SiteFooter {darkTheme} onThemeChange={updateTheme} />
	</div>
</Consumer>

<style>
	.site-shell {
		min-block-size: 100svh;
		padding-block-end: var(--mc-space-5);
		padding-block-start: var(--mc-space-5);
	}

	.site-shell.textured {
		--texture-shade: transparent;

		background:
			linear-gradient(var(--texture-shade), var(--texture-shade)) center / cover
				no-repeat,
			var(--mc-colour-consumer-website-primary-light, #2f6892)
				url('/images/home/riemersma.png') center top / cover no-repeat;
	}

	.site-shell.textured.dark-theme {
		--texture-shade: rgb(5 5 7 / 50%);
	}

	main {
		display: block;
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
