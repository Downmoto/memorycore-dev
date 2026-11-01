import type { RequestHandler } from './$types';
import { libraries, tools } from '../../lib/content/catalogue';
import { fixedPages } from '../../lib/content/pages';
import { site } from '../../lib/content/site';

export const prerender = true;

export const GET: RequestHandler = () => {
	const records = [
		{
			metadata: site.metadata,
			reviewedAt: site.reviewedAt,
			publicationState: 'published'
		},
		...tools,
		...libraries,
		...fixedPages
	].filter(
		({ metadata, publicationState }) =>
			metadata.indexing === 'index' && publicationState === 'published'
	);

	const urls = records
		.map(
			({ metadata, reviewedAt }) =>
				`<url><loc>${site.canonicalOrigin}${metadata.canonicalPath}</loc><lastmod>${'updatedAt' in metadata ? metadata.updatedAt : reviewedAt}</lastmod></url>`
		)
		.join('');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{
			headers: { 'content-type': 'application/xml; charset=utf-8' }
		}
	);
};
