import { writable } from 'svelte/store'

const theme = writable({
  mode: 'light',
  scheme: ''
})

export default theme
