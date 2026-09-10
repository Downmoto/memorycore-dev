export type RepositoryProject = {
	kind: 'repository';
	name: string;
	slug: string;
	github: string;
	product: string;
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
		product: 'aethel'
	},
	ditherlib: {
		kind: 'repository',
		name: 'ditherlib',
		slug: 'ditherlib',
		github: 'https://github.com/Downmoto/ditherlib',
		product: 'dithertool'
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
