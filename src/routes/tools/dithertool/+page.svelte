<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Typography } from '@memorycore/design';
	import PageIntro from '../../../lib/components/site/PageIntro.svelte';
	import PageMetadata from '../../../lib/components/site/PageMetadata.svelte';
	import { ditherlib, dithertool } from '../../../lib/content/catalogue';
</script>

<PageMetadata metadata={dithertool.metadata} />

<div class="page-shell">
	<PageIntro
		eyebrow="Image transformation"
		title={dithertool.name}
		summary={dithertool.summary}
		status="In active development"
	/>
	<section class="content-section" aria-labelledby="purpose-heading">
		<Typography variant="h2" id="purpose-heading"
			>An instrument for image effects</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				DitherTool is being developed for photobashing workflows that treat
				image transformation as visible creative material.
			</Typography>
			<Typography variant="p">
				The public page will centre genuine source-and-output evidence as the
				application reaches a reviewable state.
			</Typography>
		</div>
	</section>
	<section class="content-section" aria-labelledby="foundation-heading">
		<Typography variant="h2" id="foundation-heading">Open foundation</Typography
		>
		<div class="reading-copy">
			<Typography variant="p">
				<Button appearance="link" href={resolve('/libraries/ditherlib')}
					>{ditherlib.name}</Button
				> provides the open-source image-effects and dithering foundation beneath
				DitherTool.
			</Typography>
			<Typography variant="p"
				>The library remains available independently for developers.</Typography
			>
		</div>
	</section>
	<section class="content-section" aria-labelledby="follow-heading">
		<Typography variant="h2" id="follow-heading">Follow the work</Typography>
		<Typography class="reading-copy" variant="p">
			Development context and future participation paths belong in the
			MemoryCore community.
		</Typography>
		<Button appearance="link" href={resolve('/community')}
			>Explore Community</Button
		>
	</section>
</div>
