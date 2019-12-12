const withPlugins = require("next-compose-plugins")
const withCSS = require("@zeit/next-css")

require("dotenv").config()

const nextConfig = {
  exportTrailingSlash: true,
  env: {
    DATO_TOKEN: process.env.DATO_TOKEN
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    })

    return config
  }
}

module.exports = withPlugins([[withCSS]], nextConfig)
