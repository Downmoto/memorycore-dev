<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageMetadata from '../lib/components/site/PageMetadata.svelte';
	import { libraries, tools } from '../lib/content/catalogue';
	import { communityInvite } from '../lib/content/external-destinations';
	import { site } from '../lib/content/site';
</script>

<PageMetadata metadata={site.metadata} />

<div class="welcome page-shell">
	<div class="welcome-content">
		<h1>
			<Typography class="hero-title" variant="display"
				>Creative tools for unusual work</Typography
			>
		</h1>
	</div>
	<div class="hero-art" aria-hidden="true">
		<img
			class="blurred-art"
			src="/images/home/icarus.webp"
			alt=""
			width="1328"
			height="1184"
			fetchpriority="high"
		/>
		<img
			class="clear-art"
			src="/images/home/icarus.webp"
			alt=""
			width="1328"
			height="1184"
		/>
	</div>
	<figure class="hero-quote">
		<blockquote
			cite="https://beta.perseus.tufts.edu/urn:cts:latinLit:phi0959.phi006.perseus-eng3:8/"
		>
			<Typography variant="small">
				And as he called upon his father's name his voice was smothered in the
				dark blue sea, now called Icarian from the dead boy's name.
			</Typography>
		</blockquote>
		<figcaption>
			<Typography variant="muted"
				>Ovid · Metamorphoses VIII · Brookes More (1922)</Typography
			>
		</figcaption>
	</figure>
</div>

<section
	class="content-section page-shell home-feature-section"
	aria-labelledby="tools-heading"
>
	<Typography variant="h2" id="tools-heading">Tools</Typography>
	<div class="feature-spread">
		{#each tools as tool (tool.id)}
			<article
				class="feature-entry tool-feature"
				class:featured={tool.id === 'dithertool'}
			>
				<div class="tool-copy">
					<Typography class="feature-name" variant="h3">{tool.name}</Typography>
					<Typography variant="p">{tool.summary}</Typography>
					<Button
						appearance={tool.id === 'dithertool' ? 'primary' : 'secondary'}
						href={resolve(tool.metadata.canonicalPath)}
						>Explore {tool.name}</Button
					>
				</div>
				{#if tool.id === 'dithertool'}
					<figure class="tool-image-slot">
						<img
							src="/images/home/dithertool-riemersma.png"
							alt="Dithered close-up of an eye"
							width="200"
							height="200"
							loading="lazy"
						/>
					</figure>
				{/if}
			</article>
		{/each}
	</div>
</section>

<section
	class="content-section page-shell home-feature-section libraries-section"
	aria-labelledby="libraries-heading"
>
	<Typography variant="h2" id="libraries-heading">Libraries</Typography>
	<div class="feature-spread">
		{#each libraries as library (library.id)}
			<article class="feature-entry library-feature">
				<Typography class="feature-name" variant="h3">{library.name}</Typography
				>
				<Typography variant="p">{library.summary}</Typography>
				<Button
					appearance="primary"
					href={resolve(library.metadata.canonicalPath)}
					>Explore {library.name}</Button
				>
			</article>
		{/each}
	</div>
</section>

<section
	class="content-section page-shell about-section"
	aria-labelledby="about-heading"
>
	<div class="about-spread">
		<div class="about-statement">
			<Typography variant="small" class="about-index">About</Typography>
			<h2 id="about-heading">
				<Typography variant="display">Built for strange ideas</Typography>
			</h2>
		</div>
		<div class="about-editorial">
			<Typography variant="p" class="about-copy">
				MemoryCore develops creative software and open-source libraries.
			</Typography>
			<Typography variant="p" class="about-copy">
				Arad Fadaei leads work on image transformation, generative language, and
				the systems behind both.
			</Typography>
			<Button class="about-link" appearance="link" href={resolve('/about')}
				>About MemoryCore</Button
			>
		</div>
	</div>
</section>

<section
	class="content-section page-shell community-section"
	aria-labelledby="community-heading"
>
	<div class="community-spread">
		<div class="community-statement">
			<Typography variant="small" class="community-index">Community</Typography>
			<h2 id="community-heading">
				<Typography variant="display">Follow the work as it develops</Typography
				>
			</h2>
		</div>
		<div class="community-details">
			<Typography variant="p" class="community-copy">
				The MemoryCore Discord is a place for development updates, discussion,
				feedback, and initial bug reports.
			</Typography>
			<div class="community-actions">
				<Button
					appearance="primary"
					size="large"
					href={communityInvite.url}
					rel="external">Join Discord</Button
				>
				<Button appearance="secondary" size="large" href={resolve('/community')}
					>Learn about the community</Button
				>
			</div>
		</div>
	</div>
</section>

<style>
	.welcome {
		background: color-mix(in srgb, var(--mc-brand-light) 8%, transparent);
		border: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--mc-brand-light) 30%, transparent);
		border-radius: var(--mc-radius-2);
		box-shadow: var(--mc-shadow-1);
		display: grid;
		isolation: isolate;
		margin-block-start: var(--mc-space-5);
		min-height: calc(100svh - 5rem - var(--mc-space-5) - var(--mc-space-5));
		overflow: hidden;
		position: relative;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}

	.welcome-content {
		align-content: center;
		display: grid;
		inline-size: min(68%, 52rem);
		padding-block: clamp(4rem, 9vw, 8rem);
		padding-inline: var(--mc-space-6);
		position: relative;
		z-index: 1;
	}

	.hero-art {
		align-items: center;
		display: grid;
		inline-size: min(64%, 52rem);
		inset-block: 0;
		inset-inline-end: 0;
		pointer-events: none;
		position: absolute;
	}

	.hero-art img {
		block-size: auto;
		grid-area: 1 / 1;
		inline-size: 100%;
	}

	.hero-art .blurred-art {
		filter: blur(10px);
	}

	.hero-art .clear-art {
		-webkit-mask-image: linear-gradient(
			to bottom right,
			transparent 5%,
			black 80%
		);
		mask-image: linear-gradient(to bottom right, transparent 5%, black 80%);
	}

	.welcome-content h1 {
		margin: 0;
	}

	.hero-quote {
		display: grid;
		gap: var(--mc-space-2);
		inline-size: min(40%, 24rem);
		inset-block-end: var(--mc-space-6);
		inset-inline-start: var(--mc-space-6);
		margin: 0;
		position: absolute;
		z-index: 1;
	}

	.hero-quote blockquote {
		margin: 0;
	}

	.hero-quote :global(.mc-typography) {
		font-family: var(--mc-font-family-space-mono);
	}

	.content-section:first-of-type {
		border-block-start: 0;
	}

	.home-feature-section {
		gap: var(--mc-space-5);
		padding-block: var(--mc-space-6);
	}

	.libraries-section {
		border-block-start: 0;
	}

	.about-section {
		border-block-start: 0;
		padding-block: var(--mc-space-6);
	}

	.about-spread {
		border-radius: var(--mc-radius-2);
		display: grid;
		grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
		min-block-size: 38rem;
		overflow: hidden;
	}

	.about-statement,
	.about-editorial {
		display: grid;
		padding: var(--mc-space-8);
	}

	.about-statement {
		align-content: space-between;
		background: var(--mc-brand-dark);
		color: var(--mc-brand-light);
	}

	.about-statement h2 {
		margin: 0;
	}

	.about-statement :global(.mc-typography) {
		color: inherit;
	}

	.about-statement :global(.mc-typography.about-index) {
		font-family: var(--mc-font-family-space-mono);
		text-transform: uppercase;
	}

	.about-statement h2 :global(.mc-typography) {
		font-size: clamp(var(--mc-font-size-5), 5vw, var(--mc-font-size-6));
	}

	.about-editorial {
		align-content: center;
		background: var(--mc-brand-light);
		color: var(--mc-brand-dark);
		gap: var(--mc-space-7);
	}

	.about-editorial :global(.mc-typography.about-copy) {
		color: inherit;
		font-size: clamp(var(--mc-font-size-4), 2.5vw, var(--mc-font-size-5));
		font-weight: var(--mc-font-weight-bold);
		line-height: var(--mc-line-height-2);
	}

	.about-editorial :global(.mc-button.about-link) {
		color: var(--mc-brand-dark);
		justify-self: start;
		text-decoration: underline;
		text-underline-offset: var(--mc-space-2);
	}

	.community-section {
		border-block-start: 0;
		padding-block: var(--mc-space-6);
	}

	.community-spread {
		background: color-mix(
			in srgb,
			var(--mc-colour-consumer-website-primary-light) 75%,
			var(--mc-brand-dark)
		);
		border-radius: var(--mc-radius-2);
		color: var(--mc-brand-light);
		display: grid;
		gap: var(--mc-space-8);
		grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
		min-block-size: 28rem;
		overflow: hidden;
		padding: var(--mc-space-8);
	}

	.community-statement {
		align-content: space-between;
		display: grid;
		gap: var(--mc-space-7);
	}

	.community-statement h2 {
		margin: 0;
	}

	.community-statement :global(.mc-typography) {
		color: inherit;
	}

	.community-statement :global(.mc-typography.community-index) {
		font-family: var(--mc-font-family-space-mono);
		text-transform: uppercase;
	}

	.community-statement h2 :global(.mc-typography) {
		font-size: clamp(var(--mc-font-size-5), 5vw, var(--mc-font-size-6));
		max-inline-size: 9ch;
	}

	.community-details {
		display: grid;
		gap: var(--mc-space-6);
		grid-template-rows: 1fr auto;
	}

	.community-details :global(.mc-typography.community-copy) {
		color: inherit;
		font-size: clamp(var(--mc-font-size-3), 2.5vw, var(--mc-font-size-4));
		font-weight: var(--mc-font-weight-bold);
		line-height: var(--mc-line-height-2);
	}

	.community-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--mc-space-4);
		justify-content: flex-end;
	}

	.feature-spread {
		background: color-mix(in srgb, var(--mc-brand-light) 8%, transparent);
		border: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--mc-brand-light) 30%, transparent);
		border-radius: var(--mc-radius-2);
		display: grid;
		grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
		overflow: hidden;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}

	.libraries-section .feature-spread {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.feature-entry {
		align-content: center;
		display: grid;
		gap: var(--mc-space-4);
		min-inline-size: 0;
		padding: var(--mc-space-5);
	}

	.feature-entry + .feature-entry {
		border-inline-start: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--mc-brand-light) 30%, transparent);
	}

	.tool-feature.featured {
		gap: 0;
		grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
		min-block-size: 20rem;
		padding: 0;
	}

	.tool-copy {
		display: grid;
		gap: var(--mc-space-4);
		grid-template-rows: auto minmax(0, 1fr) auto;
		min-block-size: 100%;
	}

	.library-feature {
		align-content: stretch;
		grid-template-rows: auto minmax(0, 1fr) auto;
	}

	.tool-feature.featured .tool-copy {
		padding: var(--mc-space-5);
	}

	.tool-image-slot {
		border-inline-start: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--mc-brand-light) 30%, transparent);
		margin: 0;
		min-block-size: 20rem;
		overflow: hidden;
		position: relative;
	}

	.tool-image-slot img {
		block-size: 100%;
		image-rendering: pixelated;
		inline-size: 100%;
		inset: 0;
		object-fit: cover;
		position: absolute;
	}

	.featured :global(.mc-typography.feature-name) {
		font-size: clamp(
			var(--mc-typography-page-title-size),
			6vw,
			var(--mc-typography-display-size)
		);
	}

	.feature-entry :global(.mc-button) {
		justify-self: start;
	}

	@media (max-width: 64rem) {
		.about-statement,
		.about-editorial {
			padding: var(--mc-space-7);
		}

		.community-spread {
			gap: var(--mc-space-7);
			grid-template-columns: minmax(0, 1fr);
			min-block-size: 0;
			padding: var(--mc-space-6);
		}

		.community-statement {
			gap: var(--mc-space-8);
		}

		.community-statement h2 :global(.mc-typography) {
			font-size: clamp(var(--mc-font-size-3), 8vw, var(--mc-font-size-5));
		}

		.community-details {
			grid-template-rows: auto auto;
		}

		.community-actions {
			justify-content: flex-start;
		}

		.feature-spread,
		.libraries-section .feature-spread {
			grid-template-columns: minmax(0, 1fr);
		}

		.feature-entry + .feature-entry {
			border-block-start: var(--mc-border-width-default) solid
				color-mix(in srgb, var(--mc-brand-light) 30%, transparent);
			border-inline-start: 0;
		}
	}

	@media (max-width: 52rem) {
		.about-spread {
			grid-template-columns: minmax(0, 1fr);
			min-block-size: 0;
		}

		.about-statement,
		.about-editorial {
			padding: var(--mc-space-6);
		}

		.about-statement {
			gap: var(--mc-space-8);
		}

		.about-editorial {
			gap: var(--mc-space-6);
		}

		.about-editorial :global(.mc-typography.about-copy) {
			font-size: clamp(var(--mc-font-size-3), 6vw, var(--mc-font-size-4));
		}

		.welcome-content {
			inline-size: 100%;
			mix-blend-mode: difference;
			padding-inline: var(--mc-space-4);
		}

		.welcome-content :global(.mc-typography) {
			color: white;
			text-shadow:
				1px 1px 0 var(--mc-brand-dark),
				-1px -1px 0 var(--mc-brand-dark),
				1px -1px 0 var(--mc-brand-dark),
				-1px 1px 0 var(--mc-brand-dark);
		}

		.hero-art {
			inline-size: min(100%, 34rem);
		}

		.hero-quote {
			inline-size: min(
				calc(100% - var(--mc-space-4) - var(--mc-space-4)),
				24rem
			);
			inset-block-end: var(--mc-space-4);
			inset-inline-start: var(--mc-space-4);
		}

		.welcome :global(.hero-title) {
			font-size: clamp(2.5rem, 11vw, 3rem);
		}

		.tool-feature.featured {
			grid-template-columns: minmax(0, 1fr);
		}

		.tool-image-slot {
			aspect-ratio: 4 / 3;
			border-block-start: var(--mc-border-width-default) solid
				color-mix(in srgb, var(--mc-brand-light) 30%, transparent);
			border-inline-start: 0;
			min-block-size: 0;
		}
	}
</style>
