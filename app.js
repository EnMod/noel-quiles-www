const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const dotenv = require('dotenv').config()
// const marked = require('marked')

// let's get...Contentful *shudder*
const Contentful = require('spike-contentful')
const locals = {}

module.exports = {
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
            order: 'fields.title'
          }
        },
        {
          name: 'js30info',
          id: 'js30Info'
        }
      ]
    })
  ],
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({ locals: () => locals }),
  postcss: cssStandards(),
  babel: jsStandards()
}
