export type RepositoryProject = {
	kind: 'repository';
	name: string;
	slug: string;
	github: string;
	product: string;
	description: string;
	version: string;
};

export type ProductProject = {
	kind: 'product';
	name: string;
	slug: string;
	library: string;
};

export type Project = RepositoryProject | ProductProject;

export const projects: Record<string, Project> = {
	aethellib: {
		kind: 'repository',
		name: 'aethellib',
		slug: 'aethellib',
		github: 'https://github.com/Downmoto/aethellib',
		product: 'aethel',
		description: 'Composable procedural text generation with source provenance.',
		version: 'Rust'
	},
	ditherlib: {
		kind: 'repository',
		name: 'ditherlib',
		slug: 'ditherlib',
		github: 'https://github.com/Downmoto/ditherlib',
		product: 'dithertool',
		description: 'Non-destructive image effects, selections, and dithering pipelines.',
		version: 'Rust · 0.6'
	},
	aethel: {
		kind: 'product',
		name: 'aethel',
		slug: 'aethel',
		library: 'aethellib'
	},
	dithertool: {
		kind: 'product',
		name: 'dithertool',
		slug: 'dithertool',
		library: 'ditherlib'
	}
};
