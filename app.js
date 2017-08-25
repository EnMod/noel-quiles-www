const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const dotenv = require('dotenv').config()
const datejs = require('datejs')

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
          },
          json:'data.json'
          // template: {
          //   path: 'views/templates/cats.sgr',
          //   output: (cat) => { return `categories/${cat.fields.slug}.html` }
          // }
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
