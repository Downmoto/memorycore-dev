<script lang="ts">
	let {
		before,
		after,
		beforeAlt,
		afterAlt,
		width = 1920,
		height = 1280,
		beforeLabel = 'Original',
		afterLabel = 'Edited'
	}: {
		before: string;
		after: string;
		beforeAlt: string;
		afterAlt: string;
		width?: number;
		height?: number;
		beforeLabel?: string;
		afterLabel?: string;
	} = $props();

	let position = $state(50);

	function followPointer(surface: HTMLDivElement) {
		function move(event: PointerEvent) {
			if (event.pointerType !== 'mouse') return;

			const bounds = surface.getBoundingClientRect();
			position = Math.min(
				100,
				Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100)
			);
		}

		surface.addEventListener('pointermove', move);

		return {
			destroy() {
				surface.removeEventListener('pointermove', move);
			}
		};
	}
</script>

<div
	class="image-comparison"
	style={`--comparison-position: ${position}%`}
	use:followPointer
>
	<img
		class="original-image"
		src={before}
		alt={beforeAlt}
		{width}
		{height}
		loading="lazy"
		decoding="async"
	/>
	<div class="edited-image">
		<img
			src={after}
			alt={afterAlt}
			{width}
			{height}
			loading="lazy"
			decoding="async"
		/>
	</div>
	<span class="comparison-label original-label">{beforeLabel}</span>
	<span class="comparison-label edited-label">{afterLabel}</span>
	<span class="comparison-divider" aria-hidden="true"></span>
	<input
		type="range"
		min="0"
		max="100"
		bind:value={position}
		aria-label={`Compare ${beforeLabel} and ${afterLabel}`}
	/>
</div>

<style>
	.image-comparison {
		block-size: 100%;
		inline-size: 100%;
		overflow: hidden;
		position: relative;
	}

	.image-comparison:has(input:focus-visible) {
		outline: var(--mc-border-width-emphasis, 2px) solid
			var(--mc-colour-interactive);
		outline-offset: calc(-1 * var(--mc-border-width-emphasis, 2px));
	}

	.image-comparison img {
		block-size: 100%;
		display: block;
		inline-size: 100%;
		object-fit: cover;
	}

	.edited-image {
		clip-path: inset(0 0 0 var(--comparison-position));
		inset: 0;
		position: absolute;
	}

	.comparison-label {
		background: color-mix(
			in srgb,
			var(--mc-colour-background) 78%,
			transparent
		);
		border-radius: var(--mc-radius-1);
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: var(--mc-typography-caption-size);
		inset-block-start: var(--mc-space-3);
		padding: var(--mc-space-1) var(--mc-space-2);
		pointer-events: none;
		position: absolute;
		text-transform: uppercase;
		z-index: 2;
	}

	.original-label {
		inset-inline-start: var(--mc-space-3);
	}

	.edited-label {
		inset-inline-end: var(--mc-space-3);
	}

	.comparison-divider {
		background: var(--mc-colour-text-primary);
		box-shadow: 0 0 0 var(--mc-border-width-default) var(--mc-colour-background);
		inline-size: var(--mc-border-width-emphasis, 2px);
		inset-block: 0;
		inset-inline-start: var(--comparison-position);
		pointer-events: none;
		position: absolute;
		transform: translateX(-50%);
		z-index: 2;
	}

	.comparison-divider::after {
		background: var(--mc-colour-surface-highest);
		border: var(--mc-border-width-default) solid var(--mc-colour-text-primary);
		border-radius: 50%;
		block-size: var(--mc-size-target-preferred);
		content: '↔';
		display: grid;
		inline-size: var(--mc-size-target-preferred);
		inset-block-start: 50%;
		place-items: center;
		position: absolute;
		transform: translate(-50%, -50%);
	}

	input {
		cursor: ew-resize;
		inset: 0;
		opacity: 0;
		position: absolute;
		z-index: 4;
	}

	.image-comparison:has(input:focus-visible) .comparison-divider::after {
		box-shadow: 0 0 0 var(--mc-space-1) var(--mc-colour-interactive);
	}

	@media (max-width: 48rem) {
		input {
			display: none;
		}

		.edited-image {
			clip-path: inset(0 0 0 50%);
		}

		.comparison-divider {
			inset-inline-start: 50%;
		}

		.comparison-divider::after {
			display: none;
		}
	}
</style>
