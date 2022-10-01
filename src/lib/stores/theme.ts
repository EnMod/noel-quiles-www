import { writable } from 'svelte/store'

const theme = writable({
  appearance: 'light',
  scheme: ''
})

export default theme
