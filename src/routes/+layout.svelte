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
		class:about-background={page.route.id === '/about' ||
			page.route.id === '/community'}
		class:privacy-background={page.route.id === '/privacy'}
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

	.site-shell.about-background {
		--about-shade: transparent;

		background:
			linear-gradient(var(--about-shade), var(--about-shade)) center / cover
				no-repeat,
			url('/images/about/floyd-steinberg.png') center top / cover no-repeat;
	}

	.site-shell.about-background.dark-theme {
		--about-shade: rgb(5 5 7 / 50%);
	}

	.site-shell.privacy-background {
		--privacy-shade: color-mix(
			in srgb,
			var(--mc-colour-background) 82%,
			transparent
		);

		background:
			linear-gradient(var(--privacy-shade), var(--privacy-shade)) center / cover
				no-repeat,
			url('/images/privacy/floyd-steinberg.png') center calc(0% - 25vh) / cover
				no-repeat #000;
	}

	.site-shell.privacy-background.dark-theme {
		--privacy-shade: rgb(5 5 7 / 25%);
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
