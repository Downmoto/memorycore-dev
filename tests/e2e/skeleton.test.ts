import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
	'/',
	'/tools',
	'/tools/dithertool',
	'/tools/aetheltool',
	'/libraries',
	'/libraries/ditherlib',
	'/libraries/aethellib',
	'/resources',
	'/community',
	'/about',
	'/privacy'
];

for (const route of routes) {
	test(`${route} renders the route skeleton`, async ({ page }) => {
		const response = await page.goto(route);

		expect(response?.status()).toBe(200);
		await expect(page.locator('h1')).toHaveCount(1);
		await expect(page.locator('main')).toHaveCount(1);
		await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
		await expect(
			page.getByRole('navigation', { name: 'Primary' }).first()
		).toBeVisible();
		await expect(page.getByRole('contentinfo')).toBeVisible();

		const findings = await new AxeBuilder({ page }).analyze();
		expect(findings.violations).toEqual([]);
	});
}

test('no-JavaScript navigation exposes every primary destination', async ({
	browser
}) => {
	const context = await browser.newContext({
		javaScriptEnabled: false,
		viewport: { width: 390, height: 844 }
	});
	const page = await context.newPage();
	await page.goto('/');

	await page.getByText('Menu', { exact: true }).click();
	for (const label of [
		'Tools',
		'Libraries',
		'Resources',
		'About',
		'Community'
	]) {
		await expect(
			page.getByRole('link', { name: label, exact: true }).last()
		).toBeVisible();
	}

	await context.close();
});

test('unknown routes use the error response', async ({ page }) => {
	const response = await page.goto('/missing-page');

	expect(response?.status()).toBe(404);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(
		'Page unavailable'
	);
	await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
		'content',
		'noindex, follow'
	);
	await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
});

test('sitemap includes published indexable routes', async ({ request }) => {
	const response = await request.get('/sitemap.xml');
	const sitemap = await response.text();

	expect(response.status()).toBe(200);
	expect(sitemap).toContain(
		'<loc>https://www.memorycore.dev/tools/dithertool</loc>'
	);
	expect(sitemap).not.toContain(
		'<loc>https://www.memorycore.dev/resources</loc>'
	);
	expect(sitemap).not.toContain(
		'<loc>https://www.memorycore.dev/privacy</loc>'
	);
});
