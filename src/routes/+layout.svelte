<script lang="ts">
	import '../app.css';
	import SiteFooter from '../lib/components/site/SiteFooter.svelte';
	import SiteHeader from '../lib/components/site/SiteHeader.svelte';

	let { children } = $props();
</script>

<a class="skip-link" href="#main-content">Skip to main content</a>
<SiteHeader />
<main id="main-content" tabindex="-1">
	{@render children()}
</main>
<SiteFooter />
