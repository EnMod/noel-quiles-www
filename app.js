const htmlStandards = require("reshape-standard")
const cssStandards = require("spike-css-standards")
const jsStandards = require("spike-js-standards")
const pageId = require("spike-page-id")
const dotenv = require("dotenv").config()
const sugarml = require("sugarml")
const sugarss = require("sugarss")

const SpikeDatoCMS = require("spike-datocms")
const locals = {}

module.exports = {
  plugins: [
    new SpikeDatoCMS({
      addDataTo: locals,
      token: process.env.datoRO,
      models: [{ type: "exercise" }, { type: "info" }]
      // json: "data.json"
    })
  ],
  matchers: {
    html: "*(**/)*.sgr",
    css: "*(**/)*.sss"
  },
  vendor: ["assets/ex/**"],
  ignore: [
    "**/layout.sgr",
    "assets/css/_*",
    "views/**/_*",
    "**/.*",
    "README.md",
    "CHANGELOG.md",
    "yarn*"
  ],
  reshape: htmlStandards({
    parser: sugarml,
    locals: () => locals
  }),
  postcss: cssStandards({
    parser: sugarss
  }),
  babel: jsStandards()
}
