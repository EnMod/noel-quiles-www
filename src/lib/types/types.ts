export type ImageProps = {
  url: string
  alt?: string
}

// ? TODO do something with this type
export type Theme = {
  mode: 'light' | 'dark'
  scheme: 'websites' | 'writing' | 'audio' | 'games' | 'neutral' | undefined
}
