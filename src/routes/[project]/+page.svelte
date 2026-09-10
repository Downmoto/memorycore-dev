<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.project.name} | memorycore</title>
</svelte:head>

<section>
	{#if data.project.kind === 'repository'}
		<div class="hero" class:dither={data.project.slug === 'ditherlib'}>
			<div>
				<p class="eyebrow">{data.project.version} library</p>
				<h1>{data.project.name}</h1>
				<p class="lede">{data.project.description}</p>
				<div class="actions">
					<a class="primary" href={`/${data.project.slug}/docs`}>read the docs</a>
					<a href={data.project.github} target="_blank" rel="noreferrer">view on GitHub</a>
				</div>
			</div>

			{#if data.project.slug === 'aethellib'}
				<div class="aethel-mark" aria-hidden="true">
					<span>corpus.toml</span>
					<span>pool → rule → plan</span>
					<strong>“the silver glaive”</strong>
				</div>
			{:else}
				<div class="dither-mark" aria-hidden="true"></div>
			{/if}
		</div>

		<div class="details">
			{#if data.project.slug === 'aethellib'}
				<article>
					<p>01</p>
					<h2>Load</h2>
					<span>Validate attributed TOML documents into a target-specific corpus.</span>
				</article>
				<article>
					<p>02</p>
					<h2>Compose</h2>
					<span>Build generation plans from focused, reusable rules and combinators.</span>
				</article>
				<article>
					<p>03</p>
					<h2>Trace</h2>
					<span>Carry source provenance into every generated value.</span>
				</article>
			{:else}
				<article>
					<p>01</p>
					<h2>Select</h2>
					<span>Work across a complete image or inside anti-aliased polygons.</span>
				</article>
				<article>
					<p>02</p>
					<h2>Arrange</h2>
					<span>Combine effects in ordered, reusable, non-destructive pipelines.</span>
				</article>
				<article>
					<p>03</p>
					<h2>Dither</h2>
					<span>Choose ordered, noise, threshold, or error-diffusion methods.</span>
				</article>
			{/if}
		</div>
	{:else}
		<div class="product-wip">
			<p class="eyebrow">product · work in progress</p>
			<h1>{data.project.name}</h1>
			<p class="lede">something is taking shape here.</p>
			<a href={`/${data.project.library}`}>explore {data.project.library} →</a>
		</div>
	{/if}
</section>

<style>
	section {
		padding-bottom: 4rem;
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(3rem, 9vw, 9rem);
		align-items: center;
	}

	.eyebrow,
	h1,
	.lede,
	h2,
	.details p {
		margin: 0;
	}

	.eyebrow {
		margin-bottom: 1rem;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1 {
		font-size: clamp(3rem, 12vw, 9rem);
		font-weight: 600;
		letter-spacing: -0.06em;
		line-height: 0.85;
	}

	.lede {
		max-width: 38rem;
		margin-top: 2rem;
		font-size: clamp(1rem, 2vw, 1.35rem);
		line-height: 1.5;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2.5rem;
	}

	.actions a {
		border: 1px solid #fff;
		padding: 0.7rem 1rem;
		color: inherit;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-decoration: none;
		text-transform: uppercase;
	}

	.actions .primary,
	.actions a:hover,
	.actions a:focus-visible {
		background: #fff;
		color: #000;
	}

	.aethel-mark {
		display: grid;
		gap: 1px;
		background: #fff;
		border: 1px solid #fff;
		transform: rotate(2deg);
	}

	.aethel-mark > * {
		padding: 1.25rem;
		background: #000;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	}

	.aethel-mark strong {
		padding-block: 2.5rem;
		font-size: clamp(1.2rem, 3vw, 2rem);
	}

	.dither-mark {
		aspect-ratio: 1;
		border: 1px solid #fff;
		background:
			radial-gradient(circle, #fff 0 28%, transparent 30%) 0 0 / 12px 12px,
			radial-gradient(circle, #fff 0 12%, transparent 14%) 6px 6px / 12px 12px;
		clip-path: polygon(8% 0, 100% 13%, 91% 100%, 0 87%);
	}

	.details {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-top: clamp(6rem, 14vw, 12rem);
		border-top: 1px solid #555;
	}

	.details article {
		padding: 1.5rem 1.5rem 1.5rem 0;
		border-right: 1px solid #555;
	}

	.details article + article {
		padding-left: 1.5rem;
	}

	.details article:last-child {
		border-right: 0;
	}

	.details p,
	.details span {
		color: #aaa;
		font-size: 0.85rem;
	}

	.details h2 {
		margin-block: 2.5rem 0.75rem;
		font-size: 1.5rem;
	}

	.details span {
		line-height: 1.6;
	}

	.product-wip {
		min-height: 55vh;
	}

	.product-wip a {
		display: inline-block;
		margin-top: 3rem;
		color: inherit;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-underline-offset: 0.35em;
	}

	@media (max-width: 720px) {
		.hero,
		.details {
			grid-template-columns: 1fr;
		}

		.aethel-mark,
		.dither-mark {
			width: min(100%, 24rem);
		}

		.details article,
		.details article + article {
			padding: 1.5rem 0;
			border-right: 0;
			border-bottom: 1px solid #555;
		}
	}
</style>
