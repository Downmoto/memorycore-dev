<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	function gridMotion(surface: HTMLDivElement) {
		function move(event: PointerEvent) {
			const bounds = surface.getBoundingClientRect();
			const x = (event.clientX - bounds.left) / bounds.width - 0.5;
			const y = (event.clientY - bounds.top) / bounds.height - 0.5;

			surface.style.setProperty('--resource-grid-x', `${x * 12}px`);
			surface.style.setProperty('--resource-grid-y', `${y * 12}px`);
		}

		function reset() {
			surface.style.removeProperty('--resource-grid-x');
			surface.style.removeProperty('--resource-grid-y');
		}

		surface.addEventListener('pointermove', move);
		surface.addEventListener('pointerleave', reset);

		return {
			destroy() {
				surface.removeEventListener('pointermove', move);
				surface.removeEventListener('pointerleave', reset);
			}
		};
	}
</script>

<div class="resource-surface" use:gridMotion>
	{@render children()}
</div>

<style>
	.resource-surface {
		--resource-grid-x: 0px;
		--resource-grid-y: 0px;
		--resource-blue: var(
			--mc-colour-consumer-website-resource-primary-light,
			#1547d2
		);
		--resource-blue-deep: color-mix(
			in srgb,
			var(--resource-blue) 72%,
			var(--mc-brand-dark, #050507)
		);
		--resource-blue-pale: var(
			--mc-colour-consumer-website-supporting-pale-blue,
			#d3dae0
		);
		--resource-cream: var(--mc-brand-light, #e8e1d2);
		--resource-paper: var(--mc-brand-light-surface, #f3ebdd);
		--resource-black: var(--mc-brand-dark, #050507);
		--resource-line: color-mix(in srgb, var(--resource-black) 24%, transparent);
		--mc-colour-background: var(--resource-blue);
		--mc-colour-interactive: var(--resource-cream);
		--mc-colour-text-primary: var(--resource-cream);
		--mc-colour-text-secondary: var(--resource-blue-pale);

		background: var(--resource-blue);
		border-block: var(--mc-space-2) solid var(--resource-black);
		color: var(--resource-cream);
		overflow: hidden;
		position: relative;
	}

	.resource-surface::before {
		animation: resource-grid-drift 10s linear infinite;
		background-image:
			linear-gradient(
				color-mix(in srgb, var(--resource-cream) 18%, transparent)
					var(--mc-border-width-default),
				transparent var(--mc-border-width-default)
			),
			linear-gradient(
				90deg,
				color-mix(in srgb, var(--resource-cream) 18%, transparent)
					var(--mc-border-width-default),
				transparent var(--mc-border-width-default)
			);
		background-size: var(--mc-space-7) var(--mc-space-7);
		content: '';
		inset: 0;
		mask-image: linear-gradient(to bottom, #000 0 46%, transparent 72%);
		opacity: 0.55;
		pointer-events: none;
		position: absolute;
		transform: translate3d(var(--resource-grid-x), var(--resource-grid-y), 0);
		transition: transform var(--mc-duration-standard, 160ms) linear;
		will-change: background-position, transform;
	}

	.resource-surface :global(> *) {
		position: relative;
	}

	@keyframes resource-grid-drift {
		to {
			background-position: var(--mc-space-7) var(--mc-space-7);
		}
	}

	@media (prefers-reduced-motion: reduce), (pointer: coarse) {
		.resource-surface::before {
			animation: none;
			transform: none;
			transition: none;
		}
	}
</style>
