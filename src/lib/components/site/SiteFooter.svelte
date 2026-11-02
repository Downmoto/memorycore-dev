<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Logo, Typography } from '@memorycore/design';
	import { GithubLogoIcon, YoutubeLogoIcon } from 'phosphor-svelte';
	import { externalDestinations } from '../../content/external-destinations';
	import { site } from '../../content/site';

	const year = new Date().getUTCFullYear();
	const socialDestinations = externalDestinations.filter(
		({ id }) => id === 'memorycore-github' || id === 'memorycore-youtube'
	);
</script>

<footer class="site-footer">
	<div class="introduction">
		<Button appearance="link" href={resolve('/')} aria-label="MemoryCore home">
			<Logo
				appearance="inverse"
				variant="mark-bordered"
				alt=""
				class="footer-logo"
			/>
		</Button>
		<Typography variant="p">{site.tagline}</Typography>
	</div>
	<nav class="footer-navigation" aria-label="Footer">
		<div class="footer-section" role="group" aria-label="Tools and libraries">
			<Typography class="section-heading" variant="small"
				>Tools and libraries</Typography
			>
			<Button appearance="link" href={resolve('/tools')}
				><Typography variant="small">Tools</Typography></Button
			>
			<Button appearance="link" href={resolve('/libraries')}
				><Typography variant="small">Libraries</Typography></Button
			>
		</div>
		<div
			class="footer-section"
			role="group"
			aria-label="About, community and resources"
		>
			<Typography class="section-heading" variant="small">MemoryCore</Typography
			>
			<Button appearance="link" href={resolve('/about')}
				><Typography variant="small">About</Typography></Button
			>
			<Button appearance="link" href={resolve('/community')}
				><Typography variant="small">Community</Typography></Button
			>
			<Button appearance="link" href={resolve('/resources')}
				><Typography variant="small">Resources</Typography></Button
			>
		</div>
		<div class="footer-section" role="group" aria-label="Privacy">
			<Typography class="section-heading" variant="small">Legal</Typography>
			<Button appearance="link" href={resolve('/privacy')}
				><Typography variant="small">Privacy</Typography></Button
			>
		</div>
	</nav>
	<div class="footer-bottom">
		<Typography class="copyright" variant="small"
			>© {year} MemoryCore</Typography
		>
		<div class="social-links">
			{#each socialDestinations as destination (destination.id)}
				<Button
					appearance="ghost"
					size="icon-compact"
					aria-label={destination.label}
					href={destination.url}
					rel="external"
				>
					{#if destination.id === 'memorycore-github'}
						<GithubLogoIcon weight="fill" size="var(--mc-size-icon-compact)" />
					{:else}
						<YoutubeLogoIcon weight="fill" size="var(--mc-size-icon-compact)" />
					{/if}
				</Button>
			{/each}
		</div>
	</div>
</footer>

<style>
	.site-footer {
		align-items: start;
		background: transparent;
		border: var(--mc-border-width-default) solid
			color-mix(in srgb, var(--mc-brand-light) 30%, transparent);
		border-radius: var(--mc-radius-2);
		box-shadow: var(--mc-shadow-1);
		display: grid;
		gap: var(--mc-space-6);
		grid-template-columns: 2fr 1fr 1fr;
		inline-size: min(100% - (2 * var(--page-margin)), var(--content-width));
		margin-inline: auto;
		padding-block: var(--mc-space-5);
		padding-inline: var(--mc-space-5);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}

	.footer-navigation {
		display: grid;
		gap: var(--mc-space-6);
		grid-column: 2 / -1;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.introduction {
		align-content: start;
		display: grid;
		gap: var(--mc-space-2);
		justify-items: start;
	}

	.site-footer :global(.footer-logo) {
		block-size: var(--mc-size-control-large);
		inline-size: var(--mc-size-control-large);
	}

	.footer-bottom {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: var(--mc-space-4);
		grid-column: 1 / -1;
	}

	.social-links {
		display: flex;
		gap: var(--mc-space-2);
		margin-inline-start: auto;
	}

	.footer-section {
		align-content: start;
		display: grid;
		gap: var(--mc-space-2);
		justify-items: start;
	}

	.footer-section :global(.section-heading) {
		font-weight: var(--mc-font-weight-bold);
		text-transform: uppercase;
	}

	.site-footer :global(.mc-typography[data-variant='small']) {
		font-size: var(--mc-font-size-2);
	}

	.site-footer :global(.mc-button .mc-typography) {
		color: inherit;
	}

	:global(.copyright) {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: var(--mc-font-size-2);
	}

	@media (max-width: 52rem) {
		.site-footer {
			grid-template-columns: 1fr;
		}

		.footer-navigation {
			grid-column: auto;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 40rem) {
		.footer-navigation {
			grid-template-columns: 1fr;
		}
	}
</style>
