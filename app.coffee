axis            = require 'axis'
rupture         = require 'rupture'
typographic     = require 'typographic'
dynamic_content = require 'dynamic-content'
autoprefixer    = require 'autoprefixer-stylus'
js_pipeline     = require 'js-pipeline'
css_pipeline    = require 'css-pipeline'
lost            = require 'lost'
# browserify      = require 'roots-browserify'

module.exports =
  ignores: ['readme.md', '**/_*', '.gitignore', '.gitattributes', 'ship.*conf', 'bower.json']

  extensions: [
    js_pipeline(manifest:'jsmanifest.yml', out: 'js/reqs.js')
    js_pipeline(files: 'assets/js/*.ls', out: 'js/main.js')
    css_pipeline(manifest:'cssmanifest.yml', out: 'css/style.css')
    dynamic_content()
  ]

  stylus:
    use: [axis(), rupture(), typographic(), autoprefixer()]
    sourcemap: true

  postcss:
    use: [lost()]

  server:
    clean_urls: true
