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
          name: 'fullPosts',
          id: 'blogPost',
          filters: {
            order: '-fields.date'
          }
          // template: {
          //   path: 'views/_post.sgr',
          //   output: (post) => { return `views/posts/${post.slug}.html` }
          // }
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
          // TODO: make a category.sgr template that creates pages for each the categories; find a way to add all posts into their respective category.htmls
        }
      ],
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
