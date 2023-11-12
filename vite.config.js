/** @type {import('vite').UserConfig} */
import { sveltekit } from '@sveltejs/kit/vite'
import sveltePreprocess from 'svelte-preprocess'

const config = {
	plugins: [sveltekit()],
	preprocess: sveltePreprocess({ postcss: true }),
	optimizeDeps: {
		exclude: ['@urql/svelte']
	}
}

export default config
