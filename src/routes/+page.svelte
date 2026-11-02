<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageMetadata from '../lib/components/site/PageMetadata.svelte';
	import { libraries, tools } from '../lib/content/catalogue';
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

<section class="content-section page-shell" aria-labelledby="tools-heading">
	<Typography variant="h2" id="tools-heading">Tools</Typography>
	<div class="card-grid">
		{#each tools as tool (tool.id)}
			<article class="outline-card">
				<Typography class="status-label" variant="muted">
					{tool.status === 'planned' ? 'Planned' : 'In active development'}
				</Typography>
				<Typography variant="h3"
					><Button appearance="link" href={resolve(tool.metadata.canonicalPath)}
						>{tool.name}</Button
					></Typography
				>
				<Typography variant="p">{tool.summary}</Typography>
			</article>
		{/each}
	</div>
	<Button appearance="link" href={resolve('/tools')}>Explore all Tools</Button>
</section>

<section class="content-section page-shell" aria-labelledby="libraries-heading">
	<Typography variant="h2" id="libraries-heading">Libraries</Typography>
	<Typography class="reading-copy" variant="p">
		Open-source foundations expose the technical systems beneath each Tool.
	</Typography>
	<div class="card-grid">
		{#each libraries as library (library.id)}
			<article class="outline-card">
				<Typography class="status-label" variant="muted"
					>Version {library.documentedVersion}</Typography
				>
				<Typography variant="h3"
					><Button
						appearance="link"
						href={resolve(library.metadata.canonicalPath)}
						>{library.name}</Button
					></Typography
				>
				<Typography variant="p">{library.summary}</Typography>
			</article>
		{/each}
	</div>
	<Button appearance="link" href={resolve('/libraries')}
		>Explore all libraries</Button
	>
</section>

<section class="content-section page-shell" aria-labelledby="about-heading">
	<Typography variant="h2" id="about-heading"
		>Made with a point of view</Typography
	>
	<div class="reading-copy">
		<Typography variant="p">
			MemoryCore builds authored creative instruments and publishes the reusable
			foundations beneath them.
		</Typography>
		<Button appearance="link" href={resolve('/about')}>About MemoryCore</Button>
	</div>
</section>

<section class="content-section page-shell" aria-labelledby="community-heading">
	<Typography variant="h2" id="community-heading">Community</Typography>
	<div class="reading-copy">
		<Typography variant="p">
			Follow the work, discuss the tools, and share unusual creative and
			technical practice.
		</Typography>
		<Button appearance="link" href={resolve('/community')}
			>Explore Community</Button
		>
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

	@media (max-width: 52rem) {
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
	}
</style>
