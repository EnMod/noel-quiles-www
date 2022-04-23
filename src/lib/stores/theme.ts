import { writable } from 'svelte/store'

export const theme = writable({
  mode: 'light',
  scheme: ''
})
