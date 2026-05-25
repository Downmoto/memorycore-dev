<script lang="ts">
	type Props = {
		text: string;
		x?: number;
		y?: number;
		scale?: number;
		fontSize?: string;
	};

	let { text, x = 50, y = 50, scale = 1, fontSize = 'clamp(1.4rem, 1.3rem + 1vw, 2.4rem)' }: Props = $props();
</script>

<div class="prompt" style={`left:${x}%; top:${y}%; --prompt-scale:${scale}; --prompt-font-size:${fontSize};`}>
	{text}
</div>

<style>
	.prompt {
		position: absolute;
		transform: translate(-50%, -50%) scale(var(--prompt-scale));
		transform-origin: center;
		font-size: var(--prompt-font-size);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #000;
		text-align: center;
		white-space: nowrap;
		pointer-events: none;
		user-select: none;
	}
</style>
