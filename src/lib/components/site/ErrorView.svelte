<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
</script>

<section class="page-shell error-view" aria-labelledby="error-title">
	<div class="error-code" aria-hidden="true">
		<Typography class="code" variant="display">404</Typography>
	</div>
	<div class="error-content">
		<Typography class="eyebrow" variant="muted">Unknown route</Typography>
		<Typography id="error-title" class="title" variant="h1"
			>Page unavailable</Typography
		>
		<Typography class="summary" variant="lead">
			This address does not lead to a published MemoryCore page. Choose a
			destination to continue.
		</Typography>
		<nav aria-label="Recovery">
			<Typography class="recovery-label" variant="small">Continue to</Typography
			>
			<div class="recovery-links">
				<Button appearance="link" href={resolve('/')}>Home</Button>
				<Button appearance="link" href={resolve('/tools')}>Tools</Button>
				<Button appearance="link" href={resolve('/resources')}>Resources</Button
				>
				<Button appearance="link" href={resolve('/community')}>Community</Button
				>
			</div>
		</nav>
	</div>
</section>

<style>
	.error-view {
		border-block: var(--mc-border-width-default) solid var(--mc-colour-border);
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(20rem, 1fr);
		margin-block: var(--mc-space-7);
		min-block-size: clamp(30rem, 62svh, 42rem);
	}

	.error-code {
		align-items: center;
		background: var(--mc-colour-surface-low);
		border-inline-end: var(--mc-border-width-default) solid
			var(--mc-colour-border);
		display: flex;
		overflow: hidden;
		padding: clamp(var(--mc-space-6), 6vw, var(--mc-space-9));
	}

	.error-code :global(.code) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(7rem, 18vw, 17rem);
		font-weight: var(--mc-font-weight-bold);
		letter-spacing: -0.1em;
		line-height: 0.75;
		margin-inline-start: -0.08em;
	}

	.error-content {
		align-content: center;
		display: grid;
		gap: var(--mc-space-5);
		padding: clamp(var(--mc-space-6), 6vw, var(--mc-space-9));
	}

	.error-content :global(.title) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: clamp(2.5rem, 4vw, 3.25rem);
		line-height: 0.96;
		margin: 0;
		overflow-wrap: normal;
		word-break: normal;
	}

	.error-content :global(.eyebrow),
	.error-content :global(.recovery-label) {
		font-family: var(--mc-font-family-space-mono, monospace);
		text-transform: uppercase;
	}

	.error-content :global(.summary) {
		line-height: 1.5;
		margin: 0;
		max-inline-size: 36rem;
	}

	nav {
		border-block-start: var(--mc-border-width-default) solid
			var(--mc-colour-border);
		display: grid;
		gap: var(--mc-space-3);
		padding-block-start: var(--mc-space-5);
	}

	.recovery-links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--mc-space-4);
	}

	.recovery-links :global(.mc-button) {
		min-block-size: var(--mc-size-control-standard);
		text-underline-offset: var(--mc-space-1);
	}

	@media (max-width: 48rem) {
		.error-view {
			grid-template-columns: minmax(0, 1fr);
			margin-block: var(--mc-space-5);
			min-block-size: 0;
		}

		.error-code {
			border-block-end: var(--mc-border-width-default) solid
				var(--mc-colour-border);
			border-inline-end: 0;
			padding-block: var(--mc-space-7);
		}

		.error-code :global(.code) {
			font-size: clamp(6rem, 32vw, 10rem);
		}

		.error-content {
			padding-block: var(--mc-space-7);
			padding-inline: var(--mc-space-5);
		}

		.error-content :global(.title) {
			font-size: clamp(1.875rem, 9.5vw, 3rem);
		}
	}
</style>
