axis         	  = require 'axis'
rupture      	  = require 'rupture'
typographic  	  = require 'typographic'
dynamic_content = require 'dynamic-content'
autoprefixer 	  = require 'autoprefixer-stylus'
js_pipeline		  = require 'js-pipeline'
css_pipeline	  = require 'css-pipeline'
lost            = require 'lost'
rimraf          = require 'rimraf'

module.exports =
	ignores: ['readme.md', '**/_*', '.gitignore', '.gitattributes', 'ship.*conf', 'bower.json']

	extensions: [
		js_pipeline(manifest:'jsmanifest.yml', out: 'js/reqs.js', minify: true, hash: false)
		js_pipeline(files: 'assets/js/*.ls', out: 'js/main.js', minify: true, hash: false)
		css_pipeline(manifest:'cssmanifest.yml', out: 'css/style.css', minify: true, hash: false)
		dynamic_content()
	]

	stylus:
		use: [axis(), rupture(), typographic(), autoprefixer()]

	postcss:
	  use: [lost()]

	after: ->
    rimraf('public/libs', (err) ->
      if err
        console.warn err
    )
    rimraf('public/bower_components', (err) ->
      if err
        console.warn err
    )