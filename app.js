const mixins = require('postcss-mixins')
const simpleVars = require('postcss-simple-vars')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const sugarss = require('sugarss')
const lost = require('lost')

module.exports = {
  postcss: {
    plugins: [mixins, simpleVars, cssnext, rucksack, lost],
    parser: sugarss
  },
  babelConfig: { presets: ['es2015', 'stage-2'] },
  locals: { foo: 'bar' },
  ignore: ['**/layout.jade', '**/_*', '**/.*']
}
