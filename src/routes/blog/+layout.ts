import { get } from 'svelte/store'
import { theme } from '$lib/stores'

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load({ url }) {
  // TODO Set appearance based on preferences
  theme.set({ appearance: get(theme).appearance, scheme: 'writing' })
}
