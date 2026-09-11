import { error } from '@sveltejs/kit';
import { projects } from '$lib/projects';
import type { PageServerLoad } from './$types';

const githubOwner = 'Downmoto';
const githubApiVersion = '2022-11-28';

const resolveRelativeUrls = (html: string, repository: string) => {
	const rawBase = `https://raw.githubusercontent.com/${githubOwner}/${repository}/master/`;
	const githubBase = `https://github.com/${githubOwner}/${repository}`;

	return html
		.replace(/src="(?!https?:|data:|\/)([^"]+)"/g, `src="${rawBase}$1"`)
		.replace(/href="(?!https?:|#|\/)([^"]+)"/g, (_match, path: string) => {
			const cleanPath = path.replace(/^\.\//, '');
			const view = cleanPath.endsWith('/') ? 'tree' : 'blob';
			return `href="${githubBase}/${view}/master/${cleanPath}"`;
		});
};

export const load: PageServerLoad = async ({ fetch, params, setHeaders }) => {
	const project = projects[params.project];

	if (!project || project.kind !== 'repository') {
		error(404, 'Documentation not found');
	}

	const response = await fetch(
		`https://api.github.com/repos/${githubOwner}/${project.slug}/readme`,
		{
			headers: {
				Accept: 'application/vnd.github.html+json',
				'User-Agent': 'memorycore.dev',
				'X-GitHub-Api-Version': githubApiVersion
			}
		}
	);

	if (!response.ok) {
		return { readmeHtml: null, repository: project };
	}

	setHeaders({
		'cache-control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400'
	});

	return {
		readmeHtml: resolveRelativeUrls(await response.text(), project.slug),
		repository: project
	};
};
