import { libraries, tools } from './catalogue';
import { externalDestinations } from './external-destinations';
import { fixedPages } from './pages';
import { resources } from './resources';
import { site } from './site';

function assertUnique<T extends { id: string }>(
	items: readonly T[],
	field: string,
	value: (item: T) => string
): void {
	const seen = new Set<string>();
	for (const item of items) {
		const candidate = value(item);
		if (seen.has(candidate)) {
			throw new Error(`${item.id}.${field}: duplicate value ${candidate}`);
		}
		seen.add(candidate);
	}
}

function assertDate(id: string, field: string, value: string): void {
	const parsed = new Date(`${value}T00:00:00Z`);
	if (
		!/^\d{4}-\d{2}-\d{2}$/.test(value) ||
		Number.isNaN(parsed.valueOf()) ||
		parsed.toISOString().slice(0, 10) !== value
	) {
		throw new Error(`${id}.${field}: expected a valid YYYY-MM-DD date`);
	}
}

function assertCanonicalPath(id: string, value: string): void {
	if (
		!value.startsWith('/') ||
		(value !== '/' && value.endsWith('/')) ||
		value.includes('//')
	) {
		throw new Error(
			`${id}.metadata.canonicalPath: expected a canonical internal path`
		);
	}
}

export function validateContent(): void {
	const catalogueRecords = [...tools, ...libraries];
	const records = [...catalogueRecords, ...resources, ...fixedPages];
	const destinationIds = new Set(externalDestinations.map(({ id }) => id));
	const destinationsById = new Map(
		externalDestinations.map((destination) => [destination.id, destination])
	);
	const toolsById = new Map(tools.map((tool) => [tool.id, tool]));
	const librariesById = new Map(
		libraries.map((library) => [library.id, library])
	);

	assertUnique(records, 'id', ({ id }) => id);
	assertUnique(catalogueRecords, 'slug', ({ slug }) => slug);
	assertUnique(resources, 'reference', ({ reference }) => reference);
	assertUnique(
		records,
		'metadata.canonicalPath',
		({ metadata }) => metadata.canonicalPath
	);
	assertUnique(externalDestinations, 'id', ({ id }) => id);
	assertUnique(
		site.navigation.map((item) => ({ ...item, id: `site:${item.label}` })),
		'href',
		({ href }) => href
	);
	assertDate('site', 'reviewedAt', site.reviewedAt);
	assertCanonicalPath('site', site.metadata.canonicalPath);

	for (const record of records) {
		assertDate(record.id, 'reviewedAt', record.reviewedAt);
		assertCanonicalPath(record.id, record.metadata.canonicalPath);
		if (!record.metadata.title.trim())
			throw new Error(`${record.id}.metadata.title: required`);
		if (!record.metadata.description.trim())
			throw new Error(`${record.id}.metadata.description: required`);
		if (
			record.metadata.indexing === 'index' &&
			record.publicationState !== 'published'
		) {
			throw new Error(
				`${record.id}.metadata.indexing: indexable content must be published`
			);
		}
	}

	for (const record of catalogueRecords) {
		for (const destination of record.destinations) {
			if (!destinationIds.has(destination)) {
				throw new Error(
					`${record.id}.destinations: unknown destination ${destination}`
				);
			}
		}
	}

	for (const destination of externalDestinations) {
		assertDate(destination.id, 'reviewedAt', destination.reviewedAt);
		if (
			!destination.url.startsWith('https://') &&
			!destination.url.startsWith('mailto:')
		) {
			throw new Error(`${destination.id}.url: expected HTTPS or mailto`);
		}
	}

	const resourceAssets = resources.flatMap((resource) => resource.assets);
	const resourceSources = resources.flatMap((resource) => [
		...resource.citations,
		...resource.research
	]);
	assertUnique(resourceAssets, 'id', ({ id }) => id);
	assertUnique(resourceSources, 'id', ({ id }) => id);

	for (const resource of resources) {
		if (
			resource.metadata.canonicalPath !== `/resources/${resource.reference}`
		) {
			throw new Error(
				`${resource.id}.metadata.canonicalPath: must match its Resource reference`
			);
		}

		const video = destinationsById.get(resource.videoDestination);
		if (!video || video.kind !== 'video') {
			throw new Error(
				`${resource.id}.videoDestination: expected a known video destination`
			);
		}

		for (const asset of resource.assets) {
			assertDate(asset.id, 'revisionDate', asset.revisionDate);
		}
		for (const correction of resource.corrections) {
			assertDate(resource.id, 'corrections.date', correction.date);
		}

		if (resource.publicationState === 'published') {
			if (resource.metadata.indexing !== 'index') {
				throw new Error(
					`${resource.id}.metadata.indexing: published Resources must be indexable`
				);
			}
			if (resource.assets.length === 0) {
				throw new Error(
					`${resource.id}.assets: published Resources need files`
				);
			}
			for (const asset of resource.assets) {
				if (
					!asset.downloadUrl ||
					!asset.rights.trim() ||
					!asset.licence.trim()
				) {
					throw new Error(
						`${asset.id}: published files need a download, rights, and licence`
					);
				}
			}
		}
	}

	for (const tool of tools) {
		const library = librariesById.get(tool.supportingLibrary);
		if (!library || library.supportingTool !== tool.id) {
			throw new Error(
				`${tool.id}.supportingLibrary: relationship must be reciprocal`
			);
		}
	}

	for (const library of libraries) {
		const tool = toolsById.get(library.supportingTool);
		if (!tool || tool.supportingLibrary !== library.id) {
			throw new Error(
				`${library.id}.supportingTool: relationship must be reciprocal`
			);
		}
		if (library.destinations.length === 0) {
			throw new Error(
				`${library.id}.destinations: at least one destination is required`
			);
		}
	}
}
