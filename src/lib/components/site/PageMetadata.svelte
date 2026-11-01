<script lang="ts">
	import { site } from '../../content/site';
	import type { PageMetadata } from '../../content/types';

	let { metadata }: { metadata: PageMetadata } = $props();
	let title = $derived(
		metadata.title === site.name
			? site.name
			: `${metadata.title} | ${site.name}`
	);
	let url = $derived(`${site.canonicalOrigin}${metadata.canonicalPath}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metadata.description} />
	<meta name="robots" content={`${metadata.indexing}, follow`} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:url" content={url} />
	<meta property="og:site_name" content={site.name} />
</svelte:head>
