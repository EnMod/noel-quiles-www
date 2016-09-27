// const mixins = require('postcss-mixins')
// const lost = require('lost')
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
		css = cssStandards({webpack: ctx})
		css.plugins.push(require('lost')(),require('postcss-mixins')())
		return css
	},
	babel: { presets: [jsStandards] }
}
