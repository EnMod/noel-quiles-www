/* eslint-disable no-undef */
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    postcssPresetEnv({ stage: 0 })
  ]
}
