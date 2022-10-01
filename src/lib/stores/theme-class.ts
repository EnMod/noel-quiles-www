import theme from '$lib/stores/theme'
import { derived } from 'svelte/store'

/**
 * Exploratory example of a derived store
 */
const themeClass = derived(theme, ($theme) => {
  return `${$theme.appearance} ${$theme.scheme}`
})

export default themeClass
