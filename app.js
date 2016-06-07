const mixins = require('postcss-mixins')
const simpleVars = require('postcss-simple-vars')
const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const sugarss = require('sugarss')
const lost = require('lost')

module.exports = {
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    vue: {
        postcss:{
            plugins: [mixins, simpleVars, cssnext, rucksack, lost],
            options: {
                parser: sugarss
            }
        },
        autoprefixer: false
    },
    postcss: {
        plugins: [mixins, simpleVars, cssnext, rucksack, lost],
        parser: sugarss
    },
    babelConfig: { presets: ['es2015', 'stage-2'] },
    ignore: ['**/layout.jade', '**/_*', '**/.*']
}
