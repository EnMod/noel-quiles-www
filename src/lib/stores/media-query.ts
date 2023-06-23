/**
 * Handy bit of code from Yann Bougaret. Thanks for sharing!
 * https://medium.com/@ricciutipaolo/how-to-check-for-media-queries-in-svelte-with-usemediaquery-604f14190035
 *
 * Modified to include an `if (browser) check due to the usage of `window` here
 */

import { readable } from 'svelte/store'
import { browser } from '$app/environment'

export const media = {
  'tablet-up': '(min-width: 768px)'
}

export const mediaQuery = (query: string) => {
  if (browser) {
    let matcher = window.matchMedia(media[query])
    return readable(matcher.matches, (set) => {
      const update = (m) => set(m.matches)
      matcher.addEventListener('change', update)
      return () => matcher.removeEventListener('change', update)
    })
  }
}
