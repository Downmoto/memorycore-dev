import type { Library, Tool } from './types';

export const dithertool = {
	id: 'dithertool',
	slug: 'dithertool',
	name: 'DitherTool',
	summary: 'A photobashing image-effect application in active development.',
	status: 'active-development',
	supportingLibrary: 'ditherlib',
	destinations: [],
	publicationState: 'published',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-10-30',
	metadata: {
		title: 'DitherTool',
		description:
			'Explore DitherTool, a photobashing image-effect application powered by ditherlib.',
		canonicalPath: '/tools/dithertool',
		indexing: 'index'
	}
} satisfies Tool;

export const aetheltool = {
	id: 'aetheltool',
	slug: 'aetheltool',
	name: 'AethelTool',
	summary:
		'A planned graphical application for rule-based, corpus-consuming text generation.',
	status: 'planned',
	supportingLibrary: 'aethellib',
	destinations: [],
	publicationState: 'published',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-10-30',
	metadata: {
		title: 'AethelTool',
		description:
			'Discover the planned AethelTool application for rule-based text generation.',
		canonicalPath: '/tools/aetheltool',
		indexing: 'index'
	}
} satisfies Tool;

export const tools = [dithertool, aetheltool] satisfies readonly Tool[];

export const ditherlib = {
	id: 'ditherlib',
	slug: 'ditherlib',
	name: 'ditherlib',
	crate: 'ditherlib',
	summary:
		'A Rust library for non-destructive image effects and dithering across whole images, selected regions, and ordered pipelines.',
	maturity: 'stable',
	supportingTool: 'dithertool',
	destinations: ['ditherlib-source', 'ditherlib-package', 'ditherlib-api'],
	publicationState: 'published',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-11-17',
	metadata: {
		title: 'ditherlib',
		description:
			'Explore ditherlib, a Rust library for non-destructive image effects, dithering, palettes, selections, and ordered pipelines.',
		canonicalPath: '/libraries/ditherlib',
		indexing: 'index',
		updatedAt: '2026-11-17'
	}
} satisfies Library;

export const aethellib = {
	id: 'aethellib',
	slug: 'aethellib',
	name: 'aethellib',
	crate: 'aethellib',
	summary:
		'An open-source Rust library for rule-based text generation, currently under construction.',
	maturity: 'pre-release',
	supportingTool: 'aetheltool',
	destinations: ['aethellib-source', 'aethellib-package', 'aethellib-api'],
	publicationState: 'published',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-11-18',
	metadata: {
		title: 'aethellib',
		description:
			'Follow aethellib, an open-source Rust library for rule-based text generation currently under construction.',
		canonicalPath: '/libraries/aethellib',
		indexing: 'index',
		updatedAt: '2026-11-18'
	}
} satisfies Library;

export const libraries = [ditherlib, aethellib] satisfies readonly Library[];
