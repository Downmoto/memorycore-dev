<script lang="ts">
	import { Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { pages } from '../../lib/content/pages';
</script>

<PageMetadata metadata={pages.community.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="Participate"
		title={pages.community.name}
		summary={pages.community.summary}
	/>
	<section class="content-section" aria-labelledby="purpose-heading">
		<Typography variant="h2" id="purpose-heading"
			>A shared place for the work</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				MemoryCore community activity centres on discussion of the Tools, their
				open-source libraries, and the creative practices around them.
			</Typography>
			<Typography variant="p">
				The intended space is the MemoryCore Discord server. A direct invitation
				is currently unavailable on this site.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="expectations-heading">
		<Typography variant="h2" id="expectations-heading">Expectations</Typography>
		<div class="reading-copy">
			<Typography variant="p">
				Participation should remain thoughtful, constructive, and attentive to
				the people sharing work and technical knowledge.
			</Typography>
			<Typography variant="p">
				Community access will be published with clear conduct and privacy
				context.
			</Typography>
		</div>
	</section>
</div>
