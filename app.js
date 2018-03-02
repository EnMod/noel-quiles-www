const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const dotenv = require('dotenv').config()
const sugarml = require('sugarml')
const sugarss = require('sugarss')

const SpikeDatoCMS = require('spike-datocms')
const locals = {}

module.exports = {
  plugins: [
    new SpikeDatoCMS({
      addDataTo: locals,
      token: process.env.datoRO,
      models: [
        { type: 'interface' },
        { type: 'game' },
        { type: 'word' },
        { type: 'sound' },
        { type: 'section' }
      ],
      json: 'data.json'
    })
  ],
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  vendor: ['assets/twine/**'],
  ignore: ['**/layout.sgr', 'assets/css/_*', 'views/**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({ 
    parser: sugarml,
    locals: () => locals 
  }),
  postcss: cssStandards({
    parser: sugarss  
  }),
  babel: jsStandards()
}
