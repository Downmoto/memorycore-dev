<script lang="ts">
	import { Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { pages } from '../../lib/content/pages';
</script>

<PageMetadata metadata={pages.about.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="MemoryCore"
		title={pages.about.name}
		summary={pages.about.summary}
	/>
	<section class="content-section" aria-labelledby="purpose-heading">
		<Typography variant="h2" id="purpose-heading"
			>Creative systems with visible authorship</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				MemoryCore develops commercial creative Tools and publishes the
				open-source libraries that power them.
			</Typography>
			<Typography variant="p">
				The work combines expressive software, technical structure, and clear
				evidence of how each system is made.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="founder-heading">
		<Typography variant="h2" id="founder-heading">Founder</Typography>
		<div class="reading-copy">
			<Typography variant="p">
				MemoryCore is a pre-launch creative software venture operated by Arad
				Fadaei in Ontario, Canada.
			</Typography>
			<Typography variant="p">
				Arad is responsible for the current product direction, software,
				open-source libraries, design, and public material.
			</Typography>
		</div>
	</section>
</div>
