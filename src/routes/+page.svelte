<script lang="ts">
	import { onMount } from 'svelte';
	import TextPrompt from '$lib/components/TextPrompt.svelte';
	import type { PageProps } from './$types';

	type Prompt = {
		id: number;
		x: number;
		y: number;
		scale: number;
		fontSize?: string;
	};

	let { data }: PageProps = $props();

	const initialPromptText = 'How did you get here?';
	const returningPromptText = 'welcome back';
	const initialFinalText = 'are you still here?';
	const returningFinalText = 'why have you returned?';

	const totalPrompts = 64;
	const spawnStartDelayMs = 1400;
	const spawnIntervalMs = 305;
	const spawnIntervalDecreaseMs = 2;
	const minimumSpawnIntervalMs = 180;
	const finalPromptDelayMs = 1500;
	const baseScale = 1;
	const scaleStep = 0.08;
	const randomBounds = {
		xMin: 10,
		xMax: 90,
		yMin: 12,
		yMax: 88
	};

	const promptText = $derived(data.hasVisited ? returningPromptText : initialPromptText);
	const finalText = $derived(data.hasVisited ? returningFinalText : initialFinalText);

	const createCenterPrompt = (): Prompt => ({
		id: 0,
		x: 50,
		y: 50,
		scale: baseScale,
		fontSize: '16px'
	});

	const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

	const createRandomPrompt = (id: number): Prompt => ({
		id,
		x: randomInRange(randomBounds.xMin, randomBounds.xMax),
		y: randomInRange(randomBounds.yMin, randomBounds.yMax),
		scale: baseScale + scaleStep * id
	});

	let prompts = $state<Prompt[]>([createCenterPrompt()]);
	let showFinalPrompt = $state(false);

	onMount(() => {
		prompts = [createCenterPrompt()];
		showFinalPrompt = false;

		let clearTimer: ReturnType<typeof setTimeout> | undefined;
		let spawnTimer: ReturnType<typeof setTimeout> | undefined;

		const queueFinalPrompt = () => {
			prompts = [];

			clearTimer = setTimeout(() => {
				showFinalPrompt = true;
			}, finalPromptDelayMs);
		};

		const startTimer = setTimeout(() => {
			if (totalPrompts <= 1) {
				queueFinalPrompt();
				return;
			}

			const scheduleNextSpawn = (delayMs: number) => {
				spawnTimer = setTimeout(() => {
					const nextPrompt = createRandomPrompt(prompts.length);
					const nextPrompts = [...prompts, nextPrompt];

					prompts = nextPrompts;

					if (nextPrompts.length >= totalPrompts) {
						queueFinalPrompt();
						return;
					}

					scheduleNextSpawn(Math.max(minimumSpawnIntervalMs, delayMs - spawnIntervalDecreaseMs));
				}, delayMs);
			};

			scheduleNextSpawn(spawnIntervalMs);
		}, spawnStartDelayMs);

		return () => {
			clearTimeout(startTimer);

			if (spawnTimer) {
				clearTimeout(spawnTimer);
			}

			if (clearTimer) {
				clearTimeout(clearTimer);
			}
		};
	});
</script>

<svelte:head>
	<title>{promptText}</title>
</svelte:head>

<div class="scene">
	{#each prompts as prompt (prompt.id)}
		<TextPrompt
			text={promptText}
			x={prompt.x}
			y={prompt.y}
			scale={prompt.scale}
			fontSize={prompt.fontSize}
		/>
	{/each}

	{#if showFinalPrompt}
		<TextPrompt text={finalText} fontSize="16px" />
	{/if}
</div>

<style>
	:global(body) {
		margin: 0;
		background: #fff;
		color: #000;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		overflow: hidden;
	}

	.scene {
		position: relative;
		width: 100vw;
		min-height: 100vh;
		overflow: hidden;
		background: #fff;
	}
</style>
