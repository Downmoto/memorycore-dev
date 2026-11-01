<script lang="ts">
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../lib/components/site/PageMetadata.svelte';
	import { pages } from '../../lib/content/pages';
</script>

<PageMetadata metadata={pages.privacy.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="Preview structure"
		title={pages.privacy.name}
		summary={pages.privacy.summary}
		status="Excluded from indexing pending operational and legal review"
	/>
	<section class="content-section" aria-labelledby="current-heading">
		<Typography variant="h2" id="current-heading"
			>Current implementation</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				The local and preview versions of this website do not load analytics or
				collect information through accounts, forms, comments, or commerce.
			</Typography>
			<Typography variant="p">
				External destinations apply their own privacy practices when a visitor
				chooses to follow a link.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="contact-heading">
		<Typography variant="h2" id="contact-heading">Privacy contact</Typography>
		<div class="reading-copy">
			<Typography variant="p">
				Arad Fadaei is the accountable Privacy Officer for the pre-launch
				MemoryCore venture.
			</Typography>
			<Typography variant="p">
				Email <Button appearance="link" href="mailto:privacy@memorycore.dev"
					>privacy@memorycore.dev</Button
				> for privacy questions.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="publication-heading">
		<Typography variant="h2" id="publication-heading"
			>Publication gate</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				The production policy requires verified organisational identity,
				provider evidence, retention and request procedures, incident handling,
				visitor choices, an effective date, and qualified legal review.
			</Typography>
			<Typography variant="p">
				This structure will remain excluded from indexing until those
				requirements are complete.
			</Typography>
		</div>
	</section>
</div>
