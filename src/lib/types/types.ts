export type ImageProps = {
  url: string
  alt?: string
}

// ? TODO do something with this type
export type Theme = {
  appearance: 'light' | 'dark'
  scheme: 'websites' | 'writing' | 'audio' | 'games' | 'neutral' | undefined
}

export type SVGProps = {
  width?: string
  height?: string
}
