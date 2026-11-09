import type { Resource } from './types';

export const resources: readonly Resource[] = [
	{
		id: 'resource-syntax-preview',
		reference: 'syntax-of-defining-syntax-preview',
		code: 'R/001',
		title: 'The syntax of defining syntax',
		titleLines: ['The syntax', 'of defining', 'syntax'],
		summary:
			'How formal grammars turn the rules of a language into material that can be inspected, discussed, and built from.',
		category: 'Language systems',
		symbol: '::=',
		videoDestination: 'memorycore-youtube',
		assets: [
			{
				id: 'syntax-preview-script',
				name: 'Production script',
				description:
					'A sample narration record showing how reviewed scripts will appear.',
				type: 'Script',
				format: 'PDF',
				size: '184 KB',
				revision: 'Preview 1',
				revisionDate: '2026-11-08',
				rights: 'MemoryCore-authored preview',
				licence: 'Unpublished'
			},
			{
				id: 'syntax-preview-diagram',
				name: 'Grammar anatomy',
				description:
					'A sample vector diagram comparing terminals, rules, and repetition.',
				type: 'Original diagram',
				format: 'SVG',
				size: '92 KB',
				revision: 'Preview 1',
				revisionDate: '2026-11-08',
				rights: 'MemoryCore-authored preview',
				licence: 'Unpublished'
			},
			{
				id: 'syntax-preview-captions',
				name: 'English captions',
				description:
					'A sample timed-caption record for the eventual published video.',
				type: 'Caption file',
				format: 'VTT',
				size: '16 KB',
				revision: 'Preview 1',
				revisionDate: '2026-11-08',
				rights: 'MemoryCore-authored preview',
				licence: 'Unpublished'
			}
		],
		citations: [
			{
				id: 'citation-rfc-5234',
				title: 'Augmented BNF for Syntax Specifications: ABNF',
				description: 'D. Crocker and P. Overell · RFC 5234 · January 2008',
				kind: 'Standard · Definition',
				url: 'https://www.rfc-editor.org/rfc/rfc5234'
			},
			{
				id: 'citation-xml-specification',
				title: 'Extensible Markup Language (XML) 1.0',
				description: 'W3C Recommendation · Public grammar examples',
				kind: 'Standard · Notation',
				url: 'https://www.w3.org/TR/xml/'
			}
		],
		research: [
			{
				id: 'research-crafting-interpreters',
				title: 'Crafting Interpreters',
				description:
					'A practical continuation into grammars, recursive descent, and working parsers.',
				kind: 'Parsing',
				url: 'https://craftinginterpreters.com/'
			},
			{
				id: 'research-gnu-bison',
				title: 'GNU Bison manual',
				description:
					'A technical reference for grammar declarations and parser generation.',
				kind: 'Specification',
				url: 'https://www.gnu.org/software/bison/manual/'
			}
		],
		relationships: [
			{
				id: 'related-aetheltool',
				name: 'AethelTool',
				description:
					'Rule-based creative software for corpus-consuming text generation.',
				href: '/tools/aetheltool'
			},
			{
				id: 'related-aethellib',
				name: 'aethellib',
				description: 'The open-source foundation planned to power AethelTool.',
				href: '/libraries/aethellib'
			}
		],
		rightsStatement:
			'This preview demonstrates the Resource template. No downloadable files are published from this record.',
		corrections: [],
		publicationState: 'preview',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-11-08',
		metadata: {
			title: 'The syntax of defining syntax · Resource preview',
			description:
				'Preview the catalogue-driven MemoryCore Resource page template.',
			canonicalPath: '/resources/syntax-of-defining-syntax-preview',
			indexing: 'noindex'
		}
	}
];

export function getResource(reference: string): Resource | undefined {
	return resources.find((resource) => resource.reference === reference);
}
