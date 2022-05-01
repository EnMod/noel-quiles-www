/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess'
import adapterVercel from '@sveltejs/adapter-vercel'

const config = {
  kit: {
    adapter: adapterVercel()
  },
  preprocess: sveltePreprocess({ postcss: true })
}

export default config
