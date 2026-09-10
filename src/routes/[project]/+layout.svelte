<script lang="ts">
	import ProjectNav from '$lib/components/ProjectNav.svelte';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div class="project-shell">
	<header>
		<ProjectNav project={data.project} />
	</header>

	<main>
		{@render children()}
	</main>
</div>

<style>
	.project-shell {
		box-sizing: border-box;
		min-height: 100vh;
		padding: clamp(1.25rem, 4vw, 3rem);
		background: #000;
		color: #fff;
	}

	header {
		padding-bottom: clamp(4rem, 12vw, 9rem);
	}

	main {
		width: min(100%, 72rem);
		margin: 0 auto;
	}
</style>
