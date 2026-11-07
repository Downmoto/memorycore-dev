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

test('small-screen menu opens, closes, and navigates', async ({ page }) => {
	const cspErrors: string[] = [];
	page.on('console', (message) => {
		if (
			message.type() === 'error' &&
			message.text().includes('Content Security Policy')
		) {
			cspErrors.push(message.text());
		}
	});
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');
	await expect(
		page.locator('meta[http-equiv="content-security-policy"]')
	).toHaveAttribute('content', /script-src[^;]*'sha256-/);

	const trigger = page.getByRole('button', { name: 'Menu' });
	await trigger.click();
	await expect(page.getByRole('menu')).toBeVisible();
	await expect(page.getByRole('menuitem')).toHaveCount(5);

	await page.keyboard.press('Escape');
	await expect(page.getByRole('menu')).toBeHidden();
	await expect(trigger).toBeFocused();

	await trigger.click();
	await page.getByRole('menuitem', { name: 'Tools' }).click();
	await expect(page).toHaveURL('/tools');
	expect(cspErrors).toEqual([]);
});

test('footer logo link only covers the mark', async ({ page }) => {
	await page.goto('/tools');
	const link = page
		.getByRole('contentinfo')
		.getByRole('link', { name: 'MemoryCore home' });
	const linkBounds = await link.boundingBox();
	const logo = link.locator('img');
	const logoBounds = await logo.boundingBox();

	expect(linkBounds).not.toBeNull();
	expect(logoBounds).not.toBeNull();
	expect(
		await logo.evaluate((image) => (image as HTMLImageElement).naturalWidth)
	).toBeGreaterThan(0);
	expect(logoBounds!.height).toBeGreaterThan(0);
	expect(linkBounds!.width).toBeLessThanOrEqual(logoBounds!.width + 2);
});

test('header links use the website Consumer colour', async ({ page }) => {
	await page.goto('/');
	const headerLink = page
		.locator('.desktop-navigation')
		.getByRole('link', { name: 'Tools' });
	const footerLink = page
		.getByRole('contentinfo')
		.getByRole('link', { name: 'Tools' });

	expect(
		await headerLink.evaluate((element) => getComputedStyle(element).color)
	).toBe(
		await footerLink.evaluate((element) => getComputedStyle(element).color)
	);
});

test('footer theme toggle applies and persists the selected theme', async ({
	page
}) => {
	await page.goto('/tools');
	const themeToggle = page.getByRole('button', { name: 'Dark mode' });

	await expect(themeToggle).toHaveAttribute('aria-pressed', 'true');
	await themeToggle.click();
	await expect(page.locator('html')).toHaveAttribute('data-mc-theme', 'light');
	await expect(
		page.getByRole('contentinfo').locator('.footer-logo')
	).toHaveAttribute('data-appearance', 'default');

	await page.reload();
	await expect(themeToggle).toHaveAttribute('aria-pressed', 'false');
	await expect(page.locator('html')).toHaveAttribute('data-mc-theme', 'light');
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
