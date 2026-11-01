<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../../lib/components/site/PageMetadata.svelte';
	import { aethellib, aetheltool } from '../../../lib/content/catalogue';
	import { externalDestinations } from '../../../lib/content/external-destinations';

	const destinations = externalDestinations.filter(({ id }) =>
		aethellib.destinations.includes(id)
	);
</script>

<PageMetadata metadata={aethellib.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="Rust library"
		title={aethellib.name}
		summary={aethellib.summary}
		status={`Pre-release · ${aethellib.documentedVersion}`}
	/>
	<section class="content-section" aria-labelledby="purpose-heading">
		<Typography variant="h2" id="purpose-heading"
			>Rule-based text generation</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				aethellib provides systems for generated language shaped by authored
				rules and source corpora.
			</Typography>
			<Typography variant="p">
				Version {aethellib.documentedVersion} is the current public release recorded
				for this website baseline.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="tool-heading">
		<Typography variant="h2" id="tool-heading"
			>Planned for {aetheltool.name}</Typography
		>
		<Typography class="reading-copy" variant="p">
			AethelTool is planned as the graphical application layer for the library’s
			text-generation systems.
		</Typography>
		<Button appearance="link" href={resolve('/tools/aetheltool')}
			>Explore AethelTool</Button
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
