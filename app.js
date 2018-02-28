const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const dotenv = require('dotenv').config()

const Contentful = require('spike-contentful')
const locals = {}

module.exports = {
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  vendor: 'assets/exercises/**',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  plugins: [
    new Contentful({
      addDataTo: locals,
      accessToken: process.env.accessToken,
      spaceId: process.env.spaceId,
      contentTypes: [
        {
          name: 'js30exercises',
          id: 'js30Exercise',
          filters: {
            order: 'fields.order'
          }
        },
        {
          name: 'js30info',
          id: 'js30Info'
        }
      ]
    })
  ],
  reshape: htmlStandards({
    root: 'views/',
    parser: sugarml,
    locals: () => locals
  }),
  postcss: cssStandards({
    parser: sugarss
  }),
  babel: jsStandards()
}
