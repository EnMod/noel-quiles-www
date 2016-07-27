const mixins = require('postcss-mixins')
const simpleVars = require('postcss-simple-vars')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const sugarss = require('sugarss')
const lost = require('lost')
const es2015 = require('babel-preset-es2015')
const stage2 = require('babel-preset-stage-2')
const Util = require('spike-util')
const jade = require('posthtml-jade')
const md = require('posthtml-md')
const retext = require('posthtml-retext')
const smartypants = require('retext-smartypants')
const postcssImport = require('postcss-import')

module.exports = {
	matchers: {
		html:'**/*.jade',
		css: '**/*.sss'
	},
	postcss: (ctx) => {
		const atImport = postcssImport({ addDependencyTo: ctx })
		return {
			plugins: [atImport, mixins(), simpleVars(), cssnext(), rucksack(), lost()],
			parser: sugarss
		}
	},
	posthtml: (ctx) => {
		const f = Util.filePathFromLoader(ctx).absolute
		return {
			defaults: [
				jade({ filename: f, pretty: true, foo: 'bar' }),
				md(),
				retext([smartypants])
			]
		}
	},
	vendor: 'assets/vendor/**',
	babel: { presets: [es2015, stage2] },
	ignore: ['**/layout.jade', '**/_*', '**/.*']
}
