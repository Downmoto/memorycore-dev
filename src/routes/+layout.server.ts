import { validateContent } from '../lib/content/validate.server';

export function load() {
	validateContent();
	return {};
}
