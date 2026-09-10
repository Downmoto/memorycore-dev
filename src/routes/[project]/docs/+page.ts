import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { project } = await parent();

	if (project.kind !== 'repository') {
		error(404, 'Documentation not found');
	}

	return { project };
};
