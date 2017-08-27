const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const dotenv = require('dotenv').config()
const datejs = require('datejs')
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
          name: 'fullPosts',
          id: 'blogPost',
          filters: {
            order: '-fields.date'
          },
          template: {
            path: 'views/templates/post.sgr',
            output: (post) => { return `${post.fields.slug}.html` }
          }
        },
        {
          name: 'indexPosts',
          id: 'blogPost',
          filters: {
            order: '-fields.date',
            limit: 10
          }
        },
        {
          name: 'categories',
          id: 'blogCategory',
          filters: {
            order: 'fields.order'
          }
        }
      ]
    })
  ],
  // devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*','**/JavaScript30_source', 'readme.md', 'yarn.lock'],
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
