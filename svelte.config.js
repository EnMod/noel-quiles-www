/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess'
import adapterStatic from '@sveltejs/adapter-static'

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapterStatic()
  },
  preprocess: sveltePreprocess({ postcss: true })
}

export default config
