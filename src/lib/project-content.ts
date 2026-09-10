export type DocsSection = {
	id: string;
	title: string;
	paragraphs?: string[];
	bullets?: string[];
	code?: string;
};

export type ProjectDocs = {
	intro: string;
	sections: DocsSection[];
};

export const projectDocs: Record<string, ProjectDocs> = {
	aethellib: {
		intro: 'Build traceable procedural text from small TOML corpora and composable rules.',
		sections: [
			{
				id: 'installation',
				title: 'Installation',
				paragraphs: ['Add aethellib to an existing Rust project.'],
				code: 'cargo add aethellib'
			},
			{
				id: 'quick-start',
				title: 'Quick start',
				paragraphs: [
					'Load a corpus, describe a generation rule, compile the plan once, and generate values with your preferred random-number source.'
				],
				code: `use aethellib::engine::combinators;
use aethellib::prelude::*;

let prefix = PoolRef::new("name", "prefix")?;
let kind = PoolRef::new("type", "type")?;
let key = RuleKey::new("weapon_name")?;
let corpus = Corpus::from_files(&["weapons.toml"], "weapon", None, None)?;

let plan = PlanBuilder::new(&corpus)
    .rule(key.clone(), combinators::join([
        combinators::pick(prefix),
        combinators::lit(" "),
        combinators::pick(kind),
    ]))
    .validate()?
    .compile()?;

let generated = plan.generate(&mut rand::rng())?;
println!("{}", generated.require(key)?.value);`
			},
			{
				id: 'core-concepts',
				title: 'Core concepts',
				bullets: [
					'Corpus: attributed documents loaded for one target, such as a weapon or person.',
					'Rules: small operations that read pools and compose generated text.',
					'Compiled plan: a validated dependency graph executed in order.',
					'Combinators: picks, unique picks, choices, fallbacks, joins, and transforms.',
					'Provenance: source metadata carried alongside every generated value.'
				]
			},
			{
				id: 'design',
				title: 'Design',
				bullets: [
					'Keep loading and generation primitives focused on one target.',
					'Compose small building blocks instead of adopting a rigid generation language.',
					'Keep generated output explainable through first-class provenance.',
					'Prefer explicit behaviour and a small dependency surface.'
				]
			},
			{
				id: 'contributing',
				title: 'Contributing',
				paragraphs: ['Contributions are welcome. Format, lint, and test the crate before opening a pull request.'],
				code: `cargo fmt
cargo clippy
cargo test`
			}
		]
	},
	ditherlib: {
		intro: 'Apply non-destructive image effects and dithering to complete images or polygon selections.',
		sections: [
			{
				id: 'installation',
				title: 'Installation',
				paragraphs: ['JPEG and PNG support are enabled by default.'],
				code: 'cargo add ditherlib'
			},
			{
				id: 'codec-features',
				title: 'Codec features',
				paragraphs: [
					'Image codecs can be selected individually. Processing algorithms remain available without codec features.'
				],
				code: `[dependencies]
ditherlib = { version = "0.6", default-features = false, features = ["png", "webp"] }`,
				bullets: ['AVIF', 'BMP', 'DDS', 'EXR', 'GIF', 'HDR', 'ICO', 'JPEG', 'PNG', 'PNM', 'QOI', 'TGA', 'TIFF', 'WebP']
			},
			{
				id: 'pipelines',
				title: 'Pipelines',
				paragraphs: [
					'Effects run in order, and each one receives the previous result. Re-rendering begins from the immutable source image.'
				],
				code: `use ditherlib::{Greyscale, Pipeline, Renderer, Selection, read, write};

let source = read("input.jpg")?;
let mut pipeline = Pipeline::new();
pipeline.add(Greyscale, Selection::All);

let output = Renderer::new().render_pipeline(&source, &pipeline)?;
write("output.png", &output)?;`
			},
			{
				id: 'dithering',
				title: 'Dithering',
				paragraphs: [
					'Choose threshold, ordered, noise, or error-diffusion dithering. Every method supports configurable logical pixel sizes.'
				],
				bullets: [
					'Ordered maps include Bayer, clustered-dot, lines, crosshatch, checkerboard, and dispersed-dot patterns.',
					'Noise dithering includes deterministic white-noise and blue-noise thresholds.',
					'Fourteen built-in diffusion presets range from Two-dimensional Knuth to Stevenson-Arce.',
					'Custom diffusion kernels can control strength, error clamping, and scan direction.'
				]
			},
			{
				id: 'palettes',
				title: 'Palettes',
				paragraphs: [
					'Use built-in black-and-white, monochrome, greyscale, Game Boy, CGA, or PICO-8 palettes, or provide your own RGB colours.'
				]
			},
			{
				id: 'selections',
				title: 'Selections',
				paragraphs: [
					'Target the whole image or an anti-aliased polygon. Overlapping polygon effects still follow pipeline order, while patterns stay anchored to the image origin.'
				]
			},
			{
				id: 'errors',
				title: 'Errors',
				paragraphs: [
					'Fallible operations return ditherlib::Result<T>. Stable error categories cover file access, unsupported formats, codecs, geometry, dimensions, parameters, and effects.'
				]
			}
		]
	}
};
