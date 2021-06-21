/* eslint-disable no-undef */

require('dotenv').config()

const nextConfig = {
  trailingSlash: true,
  env: {
    DATO_TOKEN: process.env.DATO_TOKEN
  },
  images: {
    loader: 'imgix',
    domains: ['www.datocms-assets.com']
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })

    return config
  }
}

module.exports = nextConfig
