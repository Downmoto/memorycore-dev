<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		Button,
		Card,
		CardContent,
		CardHeader,
		CardHero,
		Typography
	} from '@memorycore/design';
	import ImageComparison from '../../../lib/components/site/ImageComparison.svelte';
	import PageIntro from '../../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../../lib/components/site/PageMetadata.svelte';
	import { ditherlib, dithertool } from '../../../lib/content/catalogue';
	import { externalDestinations } from '../../../lib/content/external-destinations';

	const destinations = externalDestinations.filter(({ id }) =>
		ditherlib.destinations.includes(id)
	);
	// Original and processed images supplied by the project owner on 2026-11-17.
	const logicalPixelImages = {
		before: '/images/libraries/ditherlib/logical-pixels-original.jpg',
		after: '/images/libraries/ditherlib/logical-pixels.png',
		beforeAlt: 'Original photograph of a Brutalist concrete building',
		afterAlt: 'The same building rendered with large logical pixels'
	} as const;
	const paletteImages = {
		before: '/images/libraries/ditherlib/palettes-original.jpg',
		after: '/images/libraries/ditherlib/palettes.png',
		beforeAlt: 'Original photograph of a glass prism casting a rainbow',
		afterAlt: 'The same prism photograph rendered with a limited palette'
	} as const;
	const pipelineImages = {
		before: '/images/libraries/ditherlib/pipelines-original.jpg',
		after: '/images/libraries/ditherlib/pipelines.png',
		beforeAlt: 'Original photograph of purple flowers',
		afterAlt: 'The same flowers after a greyscale halftone pipeline',
		width: 1920,
		height: 2560
	} as const;
	const selectionImages = {
		before: '/images/libraries/ditherlib/selections-original.jpg',
		after: '/images/libraries/ditherlib/selections.png',
		beforeAlt: 'Original photograph of storm clouds lit by sunset',
		afterAlt: 'The same clouds with an elliptical selection effect',
		width: 1920,
		height: 2560
	} as const;

	const effectFamilies = [
		{
			title: 'Foundations',
			description:
				'Prepare, alter, or stylize pixels with foundational image effects before and between dithering passes.'
		},
		{
			title: 'Threshold and ordered',
			description:
				'Map directly to a palette or use Bayer, artistic, blue-noise, and custom threshold maps.'
		},
		{
			title: 'Noise and halftone',
			description:
				'Use deterministic white or blue noise, geometric screens, and independent RGB or CMYK channels.'
		},
		{
			title: 'Error diffusion',
			description:
				'Choose from fourteen presets, define a custom kernel, or use Ostromoukhov and Hilbert-curve Riemersma dithering.'
		}
	] as const;

	const renderControls = [
		{
			key: 'palettes',
			title: 'Palettes',
			description:
				'Use black-and-white, greyscale, Game Boy, CGA, PICO-8, monochrome, custom, or source-derived colours. Match in gamma-encoded RGB, linear RGB, or Oklab.'
		},
		{
			key: 'selections',
			title: 'Selections',
			description:
				'Apply an effect to the complete image, an anti-aliased polygon, or a custom per-pixel coverage mask.'
		},
		{
			key: 'pixels',
			title: 'Logical pixels',
			description:
				'Configure rectangular pixel sizes, grid offsets, and sampling behaviour across the main dithering families.'
		},
		{
			key: 'pipelines',
			title: 'Pipelines',
			description:
				'Apply selected effects in insertion order. Each render begins again from the unchanged source image.'
		}
	] as const;

	const examples = [
		['quick_start', 'Read, threshold, render, and write an image'],
		['ordered_dither', 'Combine ordered dithering with custom logical pixels'],
		['error_diffusion', 'Compare Floyd–Steinberg, Ostromoukhov, and Riemersma'],
		['halftone', 'Render monochrome and colour halftones'],
		['palettes', 'Use built-in, custom, derived, and perceptual palettes'],
		['selections', 'Render whole images and polygon selections'],
		['pipeline', 'Compose several effects into one ordered render'],
		['comparison', 'Survey the major algorithm families visually']
	] as const;
</script>

<PageMetadata metadata={ditherlib.metadata} />

<div class="page-shell library-page">
	<PageIntro
		eyebrow="Rust library"
		title={ditherlib.name}
		summary={ditherlib.summary}
	/>

	<section class="content-section" aria-labelledby="model-heading">
		<div class="section-heading">
			<Typography variant="small">Rendering model</Typography>
			<Typography variant="h2" id="model-heading"
				>Build effects without changing the source</Typography
			>
		</div>
		<div class="reading-copy">
			<Typography variant="p">
				ditherlib keeps decoded source pixels immutable. Every render produces a
				separately owned image, so an application can revise its effects and
				render again from the same input.
			</Typography>
			<Typography variant="p">
				A reusable effect can cover the whole image, an anti-aliased polygon, or
				a custom mask. When one pass is not enough, a pipeline applies several
				selected effects in order while a reused renderer retains its working
				buffers.
			</Typography>
		</div>
	</section>

	<section class="content-section" aria-labelledby="effects-heading">
		<div class="section-heading">
			<Typography variant="small">Effect catalogue</Typography>
			<Typography variant="h2" id="effects-heading"
				>From threshold to Riemersma</Typography
			>
		</div>
		<div class="capability-grid">
			{#each effectFamilies as family (family.title)}
				<article>
					<Typography variant="h3">{family.title}</Typography>
					<Typography variant="p">{family.description}</Typography>
				</article>
			{/each}
		</div>
	</section>

	<section class="content-section" aria-labelledby="control-heading">
		<div class="section-heading">
			<Typography variant="small">Render control</Typography>
			<Typography variant="h2" id="control-heading"
				>Choose the colour, area, and order</Typography
			>
		</div>
		<div class="control-grid">
			{#each renderControls as control (control.title)}
				<Card class="control-card">
					<CardHero
						class="control-card-hero"
						data-control={control.key}
						aria-hidden={control.key === 'palettes' ||
						control.key === 'selections' ||
						control.key === 'pixels' ||
						control.key === 'pipelines'
							? undefined
							: true}
					>
						{#if control.key === 'palettes'}
							<ImageComparison
								{...paletteImages}
								beforeLabel="Original"
								afterLabel="Palette"
							/>
						{:else if control.key === 'selections'}
							<ImageComparison
								{...selectionImages}
								beforeLabel="Original"
								afterLabel="Selection"
							/>
						{:else if control.key === 'pixels'}
							<ImageComparison
								{...logicalPixelImages}
								beforeLabel="Original"
								afterLabel="Logical pixels"
							/>
						{:else if control.key === 'pipelines'}
							<ImageComparison
								{...pipelineImages}
								beforeLabel="Original"
								afterLabel="Pipeline"
							/>
						{:else}
							<span></span>
						{/if}
					</CardHero>
					<CardHeader class="control-card-header">
						<Typography variant="h3">{control.title}</Typography>
					</CardHeader>
					<CardContent class="control-card-content">
						<Typography variant="p">{control.description}</Typography>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<section class="content-section quick-start" aria-labelledby="start-heading">
		<div class="section-heading">
			<Typography variant="small">Quick start</Typography>
			<Typography variant="h2" id="start-heading">Threshold an image</Typography
			>
			<Typography variant="p"
				>Install the current major release with Cargo:</Typography
			>
			<code class="install-command">cargo add ditherlib</code>
			<Typography variant="p">
				Then load an image, apply an effect, and write the owned result.
			</Typography>
		</div>
		<pre aria-label="ditherlib threshold example"><code
				><span class="syntax-keyword">use</span> <span class="syntax-path"
					>ditherlib</span
				>::&#123;
	<span class="syntax-type">Renderer</span>, <span class="syntax-type"
					>Selection</span
				>,
	effects::dither::&#123;palette::<span class="syntax-type">Palette</span
				>, threshold::<span class="syntax-type">Threshold</span>&#125;,
	read, write,
&#125;;

<span class="syntax-keyword">fn</span> <span class="syntax-function">main</span
				>() -&gt; <span class="syntax-path">ditherlib</span>::<span
					class="syntax-type">Result</span
				>&lt;()&gt; &#123;
	<span class="syntax-keyword">let</span> source = read(<span
					class="syntax-string">"input.jpg"</span
				>)?;
	<span class="syntax-keyword">let</span> effect = <span class="syntax-type"
					>Threshold</span
				>::new(<span class="syntax-type">Palette</span>::black_and_white());
	<span class="syntax-keyword">let</span> rendered = <span class="syntax-type"
					>Renderer</span
				>::new().render(&amp;source, &amp;effect, &amp;<span class="syntax-type"
					>Selection</span
				>::All)?;

	write(<span class="syntax-string">"output.png"</span>, &amp;rendered)
&#125;</code
			></pre>
	</section>

	<section class="content-section" aria-labelledby="examples-heading">
		<div class="section-heading">
			<Typography variant="small">Runnable examples</Typography>
			<Typography variant="h2" id="examples-heading"
				>Explore the API by output</Typography
			>
		</div>
		<ul class="example-list">
			{#each examples as example (example[0])}
				<li>
					<code>{example[0]}</code>
					<span>{example[1]}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="content-section" aria-labelledby="formats-heading">
		<div class="section-heading">
			<Typography variant="small">Formats and errors</Typography>
			<Typography variant="h2" id="formats-heading"
				>Bring pixels or decode an image</Typography
			>
		</div>
		<div class="reading-copy">
			<Typography variant="p">
				JPEG and PNG decoding are available by default. Optional codec features
				cover AVIF, BMP, DDS, EXR, Farbfeld, GIF, HDR, ICO, PNM, QOI, TGA, TIFF,
				and WebP. Applications can also supply decoded pixels directly.
			</Typography>
			<Typography variant="p">
				Fallible operations use the crate’s Result type. Stable error categories
				support programmatic handling while the error chain retains diagnostic
				detail.
			</Typography>
		</div>
	</section>

	<section
		class="content-section relationship-section"
		aria-labelledby="tool-heading"
	>
		<div class="section-heading">
			<Typography variant="small">Built into MemoryCore</Typography>
			<Typography variant="h2" id="tool-heading"
				>Powers {dithertool.name}</Typography
			>
		</div>
		<div class="reading-copy">
			<Typography variant="p">
				ditherlib supplies the non-destructive rendering foundation, effect
				catalogue, selections, palettes, and pipelines used by DitherTool.
			</Typography>
			<Button appearance="secondary" href={resolve('/tools/dithertool')}
				>Explore DitherTool</Button
			>
		</div>
	</section>

	<section class="content-section" aria-labelledby="destinations-heading">
		<div class="section-heading">
			<Typography variant="small">Destinations</Typography>
			<Typography variant="h2" id="destinations-heading"
				>Use ditherlib</Typography
			>
		</div>
		<ul class="destination-list">
			{#each destinations as destination (destination.id)}
				<li>
					<span>{destination.kind.replace('-', ' ')}</span>
					<Button appearance="link" href={destination.url} rel="external"
						>{destination.label}</Button
					>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style>
	.library-page {
		--section-space: clamp(
			var(--mc-space-8),
			9vw,
			calc(var(--mc-space-9) + var(--mc-space-6))
		);

		margin-block-end: var(--mc-space-5);
	}

	.library-page :global(.content-section) {
		border-block-start: 0;
		gap: clamp(var(--mc-space-5), 3vw, var(--mc-space-6));
		padding-block: 0 var(--section-space);
	}

	.section-heading {
		align-content: start;
		align-self: start;
		display: grid;
		gap: var(--mc-space-3);
		max-inline-size: 56rem;
	}

	.library-page :global(.reading-copy) {
		align-content: start;
		align-self: start;
	}

	.section-heading :global(.mc-typography:first-child),
	.destination-list > li > span {
		font-family: var(--mc-font-family-space-mono, monospace);
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.capability-grid,
	.control-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.capability-grid {
		background: var(--mc-colour-border);
		border: var(--mc-border-width-default) solid var(--mc-colour-border);
	}

	.capability-grid article {
		display: grid;
		gap: var(--mc-space-4);
		padding: clamp(var(--mc-space-5), 4vw, var(--mc-space-7));
	}

	.capability-grid article {
		background: var(--mc-colour-background);
	}

	.control-grid {
		gap: var(--mc-space-5);
	}

	:global(.control-card) {
		grid-template-rows: auto 1fr;
	}

	:global(.control-card-hero) {
		aspect-ratio: 16 / 7;
		background-color: var(--mc-colour-surface-low);
		background-image:
			linear-gradient(
				color-mix(in srgb, var(--mc-colour-border) 28%, transparent) 1px,
				transparent 1px
			),
			linear-gradient(
				90deg,
				color-mix(in srgb, var(--mc-colour-border) 28%, transparent) 1px,
				transparent 1px
			);
		background-size: var(--mc-space-5) var(--mc-space-5);
		position: relative;
	}

	:global(.control-card-hero) span {
		border: var(--mc-border-width-default) solid var(--mc-colour-interactive);
		inset: 20%;
		position: absolute;
	}

	:global(.control-card-hero[data-control='palettes']) span {
		background: linear-gradient(
			90deg,
			var(--mc-colour-text-primary) 50%,
			var(--mc-colour-background) 50%
		);
	}

	:global(.control-card-hero[data-control='selections']) span {
		border-radius: 50% 20% 45% 30%;
		transform: rotate(-8deg);
	}

	:global(.control-card-hero[data-control='pixels']) span {
		background: repeating-conic-gradient(
				var(--mc-colour-interactive) 0 25%,
				transparent 0 50%
			)
			0 / var(--mc-space-6) var(--mc-space-6);
	}

	:global(.control-card-hero[data-control='pipelines']) span {
		background: repeating-linear-gradient(
			135deg,
			transparent 0 var(--mc-space-3),
			var(--mc-colour-interactive) var(--mc-space-3) var(--mc-space-4)
		);
	}

	:global(.control-card-header) {
		padding: var(--mc-space-4);
		z-index: 3;
	}

	:global(.control-card-content) {
		padding: var(--mc-space-5);
	}

	.quick-start {
		grid-template-columns: minmax(15rem, 0.7fr) minmax(0, 1.3fr);
	}

	.quick-start pre {
		background: var(--mc-colour-surface-low);
		border: var(--mc-border-width-default) solid var(--mc-colour-border);
		border-radius: var(--mc-radius-2);
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: var(--mc-typography-code-size, 0.875rem);
		line-height: 1.6;
		margin: 0;
		overflow-x: auto;
		padding: var(--mc-space-5);
	}

	.install-command {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: var(--mc-typography-code-size, 0.875rem);
	}

	.example-list,
	.destination-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.example-list {
		border-block-start: var(--mc-border-width-default) solid currentColor;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.example-list li {
		border-block-end: var(--mc-border-width-default) solid currentColor;
		display: grid;
		gap: var(--mc-space-3);
		padding: var(--mc-space-4);
	}

	.example-list li:nth-child(odd) {
		border-inline-end: var(--mc-border-width-default) solid currentColor;
	}

	.example-list code,
	.quick-start pre code {
		font-family: var(--mc-font-family-space-mono, monospace);
	}

	.quick-start pre .syntax-keyword {
		color: var(--mc-colour-warning);
		font-weight: var(--mc-font-weight-bold);
	}

	.quick-start pre .syntax-path,
	.quick-start pre .syntax-type {
		color: var(--mc-colour-interactive);
	}

	.quick-start pre .syntax-function {
		color: var(--mc-colour-success);
	}

	.quick-start pre .syntax-string {
		color: var(--mc-colour-danger);
	}

	.relationship-section {
		grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.7fr);
	}

	.relationship-section :global(.mc-button) {
		justify-self: start;
	}

	.destination-list {
		border-block-start: var(--mc-border-width-default) solid currentColor;
		display: grid;
	}

	.destination-list li {
		align-items: center;
		border-block-end: var(--mc-border-width-default) solid currentColor;
		display: grid;
		gap: var(--mc-space-4);
		grid-template-columns: minmax(8rem, 0.35fr) minmax(0, 1fr);
		padding-block: var(--mc-space-4);
	}

	.destination-list > li > span {
		font-size: var(--mc-typography-caption-size);
	}

	.destination-list :global(.mc-button) {
		justify-self: start;
	}

	@media (max-width: 64rem) {
		:global(.control-grid .control-card .control-card-header) {
			display: none;
		}
	}

	@media (max-width: 48rem) {
		.quick-start,
		.relationship-section {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	@media (max-width: 36rem) {
		.capability-grid,
		.control-grid,
		.example-list {
			grid-template-columns: minmax(0, 1fr);
		}

		.example-list li:nth-child(odd) {
			border-inline-start: 0;
			border-inline-end: 0;
		}

		.destination-list li {
			align-items: start;
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
