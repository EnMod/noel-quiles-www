/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess'
import adapterStatic from '@sveltejs/adapter-static'

const config = {
  kit: {
    adapter: adapterStatic()
  },
  preprocess: sveltePreprocess({ postcss: true })
}

export default config
