import { theme } from '$lib/stores/theme'
import { derived } from 'svelte/store'

// Exploratory example of a derived store
export const themeClass = derived(theme, ($theme) => {
  return `${$theme.mode} ${$theme.scheme}`
})
