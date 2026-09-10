<script lang="ts">
	import { replaceState } from '$app/navigation';
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

	type ProjectLink = {
		label: string;
		href: string;
	};

	let { data }: PageProps = $props();

	const initialPromptText = 'How did you get here?';
	const returningPromptText = 'welcome back';
	const initialFinalText = 'are you still here?';
	const returningFinalText = 'why have you returned?';
	const projectsPromptText = "is this what you're looking for?";

	// Total number of prompts shown in the burst, including the original centered prompt.
	const totalPrompts = 64;
	// Delay before spawning begins for first-time visitors.
	const initialSpawnStartDelayMs = 2000;
	// Initial gap between spawned prompts for first-time visitors.
	const initialSpawnIntervalMs = 100;
	// Amount removed from the spawn gap after each first-time spawn to gradually speed things up.
	const initialSpawnIntervalDecreaseMs = 2;
	// Fastest allowed spawn gap for first-time visitors.
	const initialMinimumSpawnIntervalMs = 50;
	// Delay before spawning begins for returning visitors so "welcome back" stays visible first.
	const returningSpawnStartDelayMs = 2000;
	// Gap between spawned prompts for returning visitors; kept tiny so the burst feels nearly instant.
	const returningSpawnIntervalMs = 30;
	// Blank-screen pause after all prompts are cleared and before the final message appears.
	const finalPromptDelayMs = 1500;
	// Delay after the final message appears before the projects section is shown underneath it.
	const projectsAppearDelayMs = 4000;
	// Starting scale for the original centered prompt.
	const baseScale = 1;
	// Amount each newly spawned prompt grows relative to the previous one.
	const scaleStep = 0.08;
	// Percentage-based area where random prompts are allowed to appear.
	const randomBounds = {
		// Horizontal spawn range from the left edge of the viewport.
		xMin: 10,
		xMax: 90,
		// Vertical spawn range from the top edge of the viewport.
		yMin: 12,
		yMax: 88
	};

	const promptText = $derived(data.hasVisited ? returningPromptText : initialPromptText);

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
	let isDark = $state(false);
	let showFinalPrompt = $state(false);
	let showProjects = $state(false);

	const finalText = $derived(
		data.skipIntro || showProjects
			? projectsPromptText
			: data.hasVisited
				? returningFinalText
				: initialFinalText
	);
	const projectLinks: ProjectLink[] = [
		{ label: 'aethellib', href: '/aethellib' },
		{ label: 'ditherlib', href: '/ditherlib' },
		{ label: 'aethel', href: '/aethel' },
		{ label: 'dithertool', href: '/dithertool' }
	];

	onMount(() => {
		if (data.skipIntro) {
			replaceState('/', {});
			return;
		}

		prompts = [createCenterPrompt()];
		isDark = false;
		showFinalPrompt = false;
		showProjects = false;

		const hasVisited = data.hasVisited;
		const spawnStartDelayMs = hasVisited ? returningSpawnStartDelayMs : initialSpawnStartDelayMs;
		const spawnIntervalMs = hasVisited ? returningSpawnIntervalMs : initialSpawnIntervalMs;
		const spawnIntervalDecreaseMs = hasVisited ? 0 : initialSpawnIntervalDecreaseMs;
		const minimumSpawnIntervalMs = hasVisited ? returningSpawnIntervalMs : initialMinimumSpawnIntervalMs;

		let startTimer: ReturnType<typeof setTimeout> | undefined;
		let finalPromptTimer: ReturnType<typeof setTimeout> | undefined;
		let projectsTimer: ReturnType<typeof setTimeout> | undefined;
		let spawnTimer: ReturnType<typeof setTimeout> | undefined;

		const clearSequenceTimers = () => {
			if (startTimer) {
				clearTimeout(startTimer);
			}

			if (spawnTimer) {
				clearTimeout(spawnTimer);
			}

			if (finalPromptTimer) {
				clearTimeout(finalPromptTimer);
			}

			if (projectsTimer) {
				clearTimeout(projectsTimer);
			}
		};

		const queueFinalPrompt = () => {
			prompts = [];
			isDark = true;

			finalPromptTimer = setTimeout(() => {
				showFinalPrompt = true;
				projectsTimer = setTimeout(() => {
					showProjects = true;
				}, projectsAppearDelayMs);
			}, finalPromptDelayMs);
		};

		const skipToProjects = () => {
			if (!hasVisited || showProjects) {
				return;
			}

			clearSequenceTimers();
			prompts = [];
			isDark = true;
			showFinalPrompt = true;
			showProjects = true;
		};

		const handleSkip = () => {
			skipToProjects();
		};

		if (hasVisited) {
			window.addEventListener('pointerdown', handleSkip);
			window.addEventListener('keydown', handleSkip);
		}

		startTimer = setTimeout(() => {
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
			clearSequenceTimers();

			if (hasVisited) {
				window.removeEventListener('pointerdown', handleSkip);
				window.removeEventListener('keydown', handleSkip);
			}
		};
	});
</script>

<svelte:head>
	<title>{promptText}</title>
</svelte:head>

<div class:dark={data.skipIntro || isDark} class="scene">
	{#if !data.skipIntro}
		{#each prompts as prompt (prompt.id)}
			<TextPrompt
				text={promptText}
				x={prompt.x}
				y={prompt.y}
				scale={prompt.scale}
				fontSize={prompt.fontSize}
			/>
		{/each}
	{/if}

	{#if data.skipIntro || showFinalPrompt}
		<p class="final-message">{finalText}</p>

		{#if data.skipIntro || showProjects}
			<section class="projects" aria-label="Projects section">
				<nav class="project-links" aria-label="Project links">
					{#each projectLinks as project}
						<a class="project-link" href={project.href}>
							{project.label}
						</a>
					{/each}
				</nav>
			</section>
		{/if}
	{/if}
</div>

<style>
	:global(body) {
		overflow: hidden;
	}

	.scene {
		position: relative;
		width: 100vw;
		min-height: 100vh;
		overflow: hidden;
		background: #fff;
	}

	.scene.dark {
		background: #000;
		color: #fff;
	}

	.final-message {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-align: center;
		white-space: nowrap;
	}

	.projects {
		position: absolute;
		left: 50%;
		top: calc(50% + 3.5rem);
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.project-links {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.project-link {
		border: 1px solid currentColor;
		padding: 0.5rem 0.85rem;
		color: inherit;
		font-size: 0.85rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		text-transform: uppercase;
		transition:
			background-color 120ms ease,
			color 120ms ease;
	}

	.project-link:hover,
	.project-link:focus-visible {
		background: #fff;
		color: #000;
	}
</style>
