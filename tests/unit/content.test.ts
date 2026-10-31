import { describe, expect, it } from 'vitest';

import { validateContent } from '../../src/lib/content/validate.server';

describe('content', () => {
	it('satisfies the website content contracts', () => {
		expect(validateContent).not.toThrow();
	});
});
