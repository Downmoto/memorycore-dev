<script lang="ts">
	import type { Project } from '$lib/projects';

	let { project }: { project: Project } = $props();
</script>

<nav aria-label={`${project.name} navigation`}>
	<a href="/">memorycore</a>
	<a href={`/${project.slug}`}>{project.name}</a>

	{#if project.kind === 'repository'}
		<a href={`/${project.slug}/docs`}>docs</a>
		<a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
	{:else}
		<a href={`/${project.library}`}>{project.library}</a>
	{/if}
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.25rem;
		align-items: center;
	}

	a {
		color: inherit;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-decoration: none;
		text-transform: uppercase;
	}

	a:hover,
	a:focus-visible {
		text-decoration: underline;
		text-underline-offset: 0.3em;
	}
</style>
