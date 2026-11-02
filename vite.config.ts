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
					'form-action': ['self'],
					'img-src': ['self', 'data:'],
					'object-src': ['none'],
					'script-src': ['self'],
					'style-src': ['self']
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
