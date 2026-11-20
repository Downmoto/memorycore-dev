import type { Library, Tool } from './types';

export const dithertool = {
	id: 'dithertool',
	slug: 'dithertool',
	name: 'DitherTool',
	summary: 'A creative image-effects tool currently under construction.',
	status: 'active-development',
	supportingLibrary: 'ditherlib',
	destinations: [],
	publicationState: 'published',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-11-20',
	metadata: {
		title: 'DitherTool',
		description:
			'DitherTool is a creative image-effects tool currently under construction.',
		canonicalPath: '/tools/dithertool',
		indexing: 'index'
	}
} satisfies Tool;

export const aetheltool = {
	id: 'aetheltool',
	slug: 'aetheltool',
	name: 'AethelTool',
	summary: 'A creative text-generation tool currently under construction.',
	status: 'planned',
	supportingLibrary: 'aethellib',
	destinations: [],
	publicationState: 'published',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-11-20',
	metadata: {
		title: 'AethelTool',
		description:
			'AethelTool is a creative text-generation tool currently under construction.',
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
	reviewedAt: '2026-11-20',
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
	reviewedAt: '2026-11-20',
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
