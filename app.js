const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const marked = require('marked')

// let's get...Contentful *shudder*
const Contentful = require('spike-contentful')
// const locals = {}

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar', md: marked } }
  }),
  postcss: cssStandards(),
  babel: jsStandards()
  // plugins: [
  //   new Contentful({
  //     addDataTo: locals,
  //     accessToken: 'process.env.accessToken',
  //     spaceId: 'process.env.spaceId',
  //     contentTypes: [
  //       {
  //         name: 'posts',
  //         id: '633fTeiMaxxxxxxxxx',
  //       },
  //       {
  //         name: 'authors',
  //         id: '223gTahLaxxxxxxxxx',
  //       }
  //     ]
  //   })
  // ]
}
