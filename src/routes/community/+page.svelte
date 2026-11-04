<script lang="ts">
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { communityInvite } from '../../lib/content/external-destinations';
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
				The MemoryCore Discord server hosts development updates, discussion,
				feedback, and initial bug reports.
			</Typography>
			<Button appearance="primary" href={communityInvite.url} rel="external"
				>Join Discord</Button
			>
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
				Joining opens Discord, an external service. Review its privacy
				information before participating.
			</Typography>
		</div>
	</section>
</div>
