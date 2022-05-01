/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: sveltePreprocess({ postcss: true })
}

export default config
