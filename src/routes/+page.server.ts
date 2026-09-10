import type { PageServerLoad } from './$types';

const visitCookieName = 'memorycore-visited';
const visitCookieValue = 'true';
const visitCookieMaxAgeSeconds = 60 * 60 * 24 * 365;

export const load: PageServerLoad = ({ cookies, url }) => {
	const hasVisited = cookies.get(visitCookieName) === visitCookieValue;

	if (!hasVisited) {
		cookies.set(visitCookieName, visitCookieValue, {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			maxAge: visitCookieMaxAgeSeconds
		});
	}

	return {
		hasVisited,
		skipIntro: url.searchParams.has('skip')
	};
};
