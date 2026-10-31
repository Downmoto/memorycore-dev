import type { Site } from './types';

export const site = {
	name: 'MemoryCore',
	tagline: 'Creative tools for unusual work',
	canonicalOrigin: 'https://www.memorycore.dev',
	owner: 'Arad Fadaei',
	reviewedAt: '2026-10-30',
	metadata: {
		title: 'MemoryCore',
		description:
			'MemoryCore creates commercial creative software and the open-source libraries powering it.',
		canonicalPath: '/',
		indexing: 'index'
	},
	navigation: [
		{ label: 'Tools', href: '/tools' },
		{ label: 'Libraries', href: '/libraries' },
		{ label: 'Resources', href: '/resources' },
		{ label: 'About', href: '/about' },
		{ label: 'Community', href: '/community', prominent: true }
	]
} satisfies Site;
