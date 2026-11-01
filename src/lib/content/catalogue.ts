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
	documentedVersion: '1.0.0',
	summary:
		'An open-source image-effects and dithering library that powers DitherTool.',
	maturity: 'stable',
	supportingTool: 'dithertool',
	destinations: ['ditherlib-source', 'ditherlib-package', 'ditherlib-api'],
	publicationState: 'published',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-10-30',
	metadata: {
		title: 'ditherlib',
		description:
			'Explore ditherlib, the open-source image-effects and dithering foundation for DitherTool.',
		canonicalPath: '/libraries/ditherlib',
		indexing: 'index'
	}
} satisfies Library;

export const aethellib = {
	id: 'aethellib',
	slug: 'aethellib',
	name: 'aethellib',
	crate: 'aethellib',
	documentedVersion: '0.10.1',
	summary:
		'An open-source foundation for rule-based, corpus-consuming random text generation.',
	maturity: 'pre-release',
	supportingTool: 'aetheltool',
	destinations: ['aethellib-source', 'aethellib-package', 'aethellib-api'],
	publicationState: 'published',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-10-30',
	metadata: {
		title: 'aethellib',
		description:
			'Explore aethellib, the open-source text-generation foundation planned for AethelTool.',
		canonicalPath: '/libraries/aethellib',
		indexing: 'index'
	}
} satisfies Library;

export const libraries = [ditherlib, aethellib] satisfies readonly Library[];
