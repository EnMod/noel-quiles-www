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
          name: 'beats',
          id: 'homeFreshBeat',
          filters: {
            order: '-fields.order'
          }
        },
        {
          name: 'frontends',
          id: 'homeFrontend',
          filters: {
            order: '-fields.order'
          }
        },
        {
          name: 'games',
          id: 'homeGame',
          filters: {
            order: '-fields.order'
          }
        },
        {
          name: 'sections',
          id: 'homeSection',
          filters: {
            order: '-fields.order'
          }
        }
      ],
      json: 'data.json'
    })
  ],
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  vendor: ['assets/twine/**'],
  ignore: ['**/layout.sgr', 'assets/css/_*', 'views/**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({ locals: () => locals }),
  postcss: cssStandards(),
  babel: jsStandards()
}
