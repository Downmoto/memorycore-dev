<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../../lib/components/site/PageMetadata.svelte';
	import { ditherlib, dithertool } from '../../../lib/content/catalogue';
	import { externalDestinations } from '../../../lib/content/external-destinations';

	const destinations = externalDestinations.filter(({ id }) =>
		ditherlib.destinations.includes(id)
	);
</script>

<PageMetadata metadata={ditherlib.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="Rust library"
		title={ditherlib.name}
		summary={ditherlib.summary}
		status={`Stable · ${ditherlib.documentedVersion}`}
	/>
	<section class="content-section" aria-labelledby="purpose-heading">
		<Typography variant="h2" id="purpose-heading"
			>Image effects and dithering</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				ditherlib exposes the image-processing foundation used by MemoryCore’s
				image-effect work.
			</Typography>
			<Typography variant="p">
				Version {ditherlib.documentedVersion} is the current public release recorded
				for this website baseline.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="tool-heading">
		<Typography variant="h2" id="tool-heading"
			>Powers {dithertool.name}</Typography
		>
		<Typography class="reading-copy" variant="p">
			The library supplies the open technical foundation while DitherTool
			provides the authored application experience.
		</Typography>
		<Button appearance="link" href={resolve('/tools/dithertool')}
			>Explore DitherTool</Button
		>
	</section>
	<section class="content-section" aria-labelledby="destinations-heading">
		<Typography variant="h2" id="destinations-heading"
			>Technical destinations</Typography
		>
		<ul class="link-list">
			{#each destinations as destination (destination.id)}
				<li>
					<Button appearance="link" href={destination.url} rel="external"
						>{destination.label}</Button
					>
				</li>
			{/each}
		</ul>
	</section>
</div>
