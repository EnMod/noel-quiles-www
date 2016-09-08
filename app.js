const mixins = require('postcss-mixins')
const simpleVars = require('postcss-simple-vars')
const lost = require('lost')
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-latest')
const pageId = require('spike-page-id')
module.exports = {
	devtool: 'source-map',
	matchers: {
		html: '*(**/)*.sgr',
		css: '*(**/)*.sss'
	},
	ignore: ['**/layout.sgr', '**/_*', '**/.*'],
	reshape: (ctx) => {
		return htmlStandards({
			webpack: ctx,
			locals: { pageId: pageId(ctx), foo: 'bar' }
		})
	},
	postcss: (ctx) => {
		return {
			cssStandards({webpack: ctx}),
			plugins: [mixins(), lost()]
		}
	},
	babel: { presets: [jsStandards] }
}
