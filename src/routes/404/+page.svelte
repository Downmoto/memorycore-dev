<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Page unavailable | MemoryCore</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<main>
	<h1>Page unavailable</h1>
	<p>The requested page is unavailable.</p>
	<a href={resolve('/')}>Return to MemoryCore</a>
</main>
