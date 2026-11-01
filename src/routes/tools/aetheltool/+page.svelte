<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../../lib/components/site/PageMetadata.svelte';
	import { aethellib, aetheltool } from '../../../lib/content/catalogue';
</script>

<PageMetadata metadata={aetheltool.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="Generated language"
		title={aetheltool.name}
		summary={aetheltool.summary}
		status="Planned"
	/>
	<section class="content-section" aria-labelledby="purpose-heading">
		<Typography variant="h2" id="purpose-heading"
			>Rules, corpora, and generated text</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				AethelTool is planned as a graphical environment for constructing
				rule-based text systems from authored rules and source corpora.
			</Typography>
			<Typography variant="p">
				Interface claims and visual evidence will follow a real application
				build.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="foundation-heading">
		<Typography variant="h2" id="foundation-heading"
			>Planned foundation</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				<Button appearance="link" href={resolve('/libraries/aethellib')}
					>{aethellib.name}</Button
				> is the planned open-source foundation for AethelTool.
			</Typography>
			<Typography variant="p">
				The relationship and product description are scheduled for review in
				early Q1 2027.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="follow-heading">
		<Typography variant="h2" id="follow-heading">Follow the work</Typography>
		<Button appearance="link" href={resolve('/community')}
			>Explore Community</Button
		>
	</section>
</div>
