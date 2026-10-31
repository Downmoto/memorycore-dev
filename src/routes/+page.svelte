<svelte:head>
	<title>MemoryCore</title>
	<meta
		name="description"
		content="MemoryCore creates commercial creative software and the open-source libraries powering it."
	/>
</svelte:head>

<main class="welcome">
	<p class="eyebrow">MemoryCore</p>
	<h1>Creative tools for unusual work</h1>
	<p>
		MemoryCore creates commercial creative software and the open-source
		libraries powering it.
	</p>
</main>

<style>
	.welcome {
		align-content: center;
		display: grid;
		gap: 1.5rem;
		min-height: 100svh;
		padding: clamp(1.5rem, 5vw, 3rem);
	}

	.eyebrow {
		font-family: var(--mc-font-family-mono, monospace);
		margin: 0;
		text-transform: uppercase;
	}
</style>
