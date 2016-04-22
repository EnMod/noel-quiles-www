axis            = require 'axis'
rupture         = require 'rupture'
typographic     = require 'typographic'
autoprefixer    = require 'autoprefixer-stylus'
js_pipeline     = require 'js-pipeline'
css_pipeline    = require 'css-pipeline'
lost            = require 'lost'
# browserify      = require 'roots-browserify'

module.exports =
  ignores: ['readme.md', '**/_*', '.gitignore', '.gitattributes', 'ship.*conf',"assets/_imgdev"]

  extensions: [
    js_pipeline(manifest:'jsmanifest.yml', out: 'js/reqs.js')
    css_pipeline(manifest:'cssmanifest.yml', out: 'css/style.css')
  ]

  stylus:
    use: [axis(), rupture(), typographic(), autoprefixer()]
    sourcemap: true

  postcss:
    use: [lost()]

  server:
    clean_urls: true
