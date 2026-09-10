import { error } from '@sveltejs/kit';
import { projects } from '$lib/projects';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const project = projects[params.project];

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
};
