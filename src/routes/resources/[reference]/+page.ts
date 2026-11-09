import { error } from '@sveltejs/kit';
import { getResource, resources } from '../../../lib/content/resources';

export function entries() {
	return resources
		.filter(({ publicationState }) =>
			['preview', 'published'].includes(publicationState)
		)
		.map(({ reference }) => ({ reference }));
}

export function load({ params }: { params: { reference: string } }) {
	const resource = getResource(params.reference);

	if (
		!resource ||
		!['preview', 'published'].includes(resource.publicationState)
	) {
		error(404, 'Resource not found');
	}

	return { resource };
}
