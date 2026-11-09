<script lang="ts">
	import { Typography } from '@memorycore/design';
	import type { Snippet } from 'svelte';

	let {
		id,
		label,
		title,
		variant = 'paper',
		children
	}: {
		id: string;
		label: string;
		title: string;
		variant?: 'paper' | 'dark';
		children: Snippet;
	} = $props();
</script>

<section
	class:dark={variant === 'dark'}
	class="resource-section"
	{id}
	aria-labelledby={`${id}-heading`}
>
	<div class="resource-rail">
		<Typography variant="small">{label}</Typography>
	</div>
	<div class="resource-section-body">
		<Typography variant="h2" id={`${id}-heading`}>{title}</Typography>
		{@render children()}
	</div>
</section>

<style>
	.resource-section {
		--mc-colour-background: var(--resource-paper);
		--mc-colour-interactive: var(--resource-blue);
		--mc-colour-text-primary: var(--resource-black);
		--mc-colour-text-secondary: color-mix(
			in srgb,
			var(--resource-black) 70%,
			transparent
		);

		background: var(--resource-paper);
		color: var(--resource-black);
		display: grid;
		grid-template-columns: minmax(13rem, 0.42fr) minmax(0, 1.58fr);
	}

	.resource-section.dark {
		--mc-colour-background: var(--resource-black);
		--mc-colour-interactive: var(--resource-cream);
		--mc-colour-text-primary: var(--resource-cream);
		--mc-colour-text-secondary: color-mix(
			in srgb,
			var(--resource-cream) 72%,
			transparent
		);
		--resource-line: color-mix(in srgb, var(--resource-cream) 25%, transparent);

		background: var(--resource-black);
		color: var(--resource-cream);
	}

	.resource-section.dark .resource-rail::after {
		background: radial-gradient(
				circle,
				var(--resource-cream) var(--mc-border-width-emphasised),
				transparent var(--mc-border-width-emphasised)
			)
			0 0 / var(--mc-space-2) var(--mc-space-2);
	}

	.resource-rail {
		border-inline-end: var(--mc-border-width-default) solid var(--resource-line);
		padding: var(--mc-space-5);
		position: relative;
	}

	.resource-rail::after {
		background: radial-gradient(
				circle,
				var(--resource-black) var(--mc-border-width-emphasised),
				transparent var(--mc-border-width-emphasised)
			)
			0 0 / var(--mc-space-2) var(--mc-space-2);
		block-size: var(--mc-space-7);
		content: '';
		inline-size: var(--mc-space-7);
		inset-block-end: var(--mc-space-5);
		inset-inline-start: var(--mc-space-5);
		opacity: 0.65;
		position: absolute;
	}

	.resource-rail :global(.mc-typography) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-weight: var(--mc-font-weight-bold);
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.resource-section-body {
		display: grid;
		gap: var(--mc-space-5);
		padding: clamp(var(--mc-space-5), 6vw, var(--mc-space-8));
	}

	.resource-section-body :global(h2) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2rem, 5vw, 4.5rem);
		letter-spacing: -0.06em;
		line-height: 0.95;
		text-transform: uppercase;
	}

	@media (max-width: 44rem) {
		.resource-section {
			grid-template-columns: minmax(0, 1fr);
		}

		.resource-rail {
			border-block-end: var(--mc-border-width-default) solid
				var(--resource-line);
			border-inline-end: 0;
			min-block-size: var(--mc-space-8);
		}

		.resource-rail::after {
			inset-block-end: var(--mc-space-4);
			inset-inline: auto var(--mc-space-5);
		}
	}
</style>
