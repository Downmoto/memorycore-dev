import type { FixedPage } from './types';

export const pages = {
	tools: {
		id: 'tools',
		name: 'Tools',
		summary: 'Some ideas need their own tools.',
		publicationState: 'published',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30',
		metadata: {
			title: 'Tools',
			description:
				'Explore MemoryCore creative software for image transformation and generated language.',
			canonicalPath: '/tools',
			indexing: 'index'
		}
	},
	libraries: {
		id: 'libraries',
		name: 'Libraries',
		summary: 'Good software starts with good foundations.',
		publicationState: 'published',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30',
		metadata: {
			title: 'Libraries',
			description:
				'Explore the open-source Rust libraries powering MemoryCore creative software.',
			canonicalPath: '/libraries',
			indexing: 'index'
		}
	},
	resources: {
		id: 'resources',
		name: 'Resources',
		summary:
			'Open companion material for MemoryCore videos and technical work.',
		publicationState: 'published',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30',
		metadata: {
			title: 'Resources',
			description:
				'Find open companion files, sources, and research for MemoryCore videos.',
			canonicalPath: '/resources',
			indexing: 'noindex'
		}
	},
	community: {
		id: 'community',
		name: 'Community',
		summary:
			'A place for thoughtful discussion about MemoryCore tools, libraries, and creative practice.',
		publicationState: 'published',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30',
		metadata: {
			title: 'Community',
			description:
				'Learn about the MemoryCore community and its approach to creative and technical discussion.',
			canonicalPath: '/community',
			indexing: 'index'
		}
	},
	about: {
		id: 'about',
		name: 'About',
		summary:
			'MemoryCore creates authored creative software and the open-source systems beneath it.',
		publicationState: 'published',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30',
		metadata: {
			title: 'About',
			description:
				'Learn about MemoryCore, its approach to creative software, and its founder.',
			canonicalPath: '/about',
			indexing: 'index'
		}
	},
	privacy: {
		id: 'privacy',
		name: 'Privacy',
		summary: 'The privacy structure for the redesigned MemoryCore website.',
		publicationState: 'preview',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30',
		metadata: {
			title: 'Privacy',
			description:
				'Review the current privacy implementation boundaries for the MemoryCore website.',
			canonicalPath: '/privacy',
			indexing: 'noindex'
		}
	}
} satisfies Record<string, FixedPage>;

export const fixedPages = Object.values(pages);
