<script lang="ts">
	import { site } from '../../content/site';

	const year = new Date().getUTCFullYear();
</script>

<footer class="site-footer">
	<div>
		<p class="identity">{site.name}</p>
		<p>{site.tagline}</p>
	</div>
	<p class="copyright">© {year} MemoryCore</p>
</footer>

<style>
	.site-footer {
		align-items: end;
		border-block-start: 1px solid currentColor;
		display: flex;
		gap: 2rem;
		inline-size: min(100% - (2 * var(--page-margin)), var(--content-width));
		justify-content: space-between;
		margin-inline: auto;
		padding-block: clamp(3rem, 7vw, 5rem);
	}

	.site-footer p {
		margin: 0;
	}

	.identity,
	.copyright {
		font-family: var(--mc-font-family-space-mono, monospace);
		font-size: 0.875rem;
	}

	.identity {
		font-weight: 700;
		margin-block-end: 0.5rem;
	}

	@media (max-width: 40rem) {
		.site-footer {
			align-items: start;
			flex-direction: column;
		}
	}
</style>
