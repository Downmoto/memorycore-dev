import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			csp: {
				mode: 'hash',
				directives: {
					'default-src': ['self'],
					'base-uri': ['self'],
					'font-src': ['self', 'data:'],
					'form-action': ['self'],
					'img-src': ['self', 'data:'],
					'object-src': ['none'],
					'script-src': ['self'],
					'script-src-attr': [
						'unsafe-hashes',
						'sha256-7dQwUgLau1NFCCGjfn9FsYptB6ZtWxJin6VohGIu20I='
					],
					'style-src': ['self'],
					'style-src-attr': ['unsafe-inline']
				}
			},
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			extensions: ['.svelte', '.svx'],
			preprocess: [mdsvex({ extensions: ['.svx'] })],
			paths: {
				relative: false
			}
		})
	]
});
