import type { ExternalDestination } from './types';

export const externalDestinations = [
	{
		id: 'ditherlib-source',
		label: 'ditherlib source on GitHub',
		kind: 'source',
		url: 'https://github.com/Downmoto/ditherlib',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30'
	},
	{
		id: 'ditherlib-package',
		label: 'ditherlib on crates.io',
		kind: 'package',
		url: 'https://crates.io/crates/ditherlib',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30'
	},
	{
		id: 'ditherlib-api',
		label: 'ditherlib API reference on docs.rs',
		kind: 'api-reference',
		url: 'https://docs.rs/ditherlib/1.0.0',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30'
	},
	{
		id: 'aethellib-source',
		label: 'aethellib source on GitHub',
		kind: 'source',
		url: 'https://github.com/Downmoto/aethellib',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30'
	},
	{
		id: 'aethellib-package',
		label: 'aethellib on crates.io',
		kind: 'package',
		url: 'https://crates.io/crates/aethellib',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30'
	},
	{
		id: 'aethellib-api',
		label: 'aethellib API reference on docs.rs',
		kind: 'api-reference',
		url: 'https://docs.rs/aethellib/0.10.1',
		owner: 'Arad Fadaei',
		reviewedAt: '2026-10-30'
	}
] satisfies readonly ExternalDestination[];
