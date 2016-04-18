axis         	  = require 'axis'
rupture      	  = require 'rupture'
typographic  	  = require 'typographic'
dynamic_content = require 'dynamic-content'
autoprefixer 	  = require 'autoprefixer-stylus'
js_pipeline		  = require 'js-pipeline'
css_pipeline	  = require 'css-pipeline'
lost            = require 'lost'

module.exports =
	ignores: ['readme.md', '**/_*', '.gitignore', '.gitattributes', 'ship.*conf']

	extensions: [
		js_pipeline(manifest:'jsmanifest.yml', out: 'js/reqs.js', minify: true, hash: false)
		js_pipeline(files: 'assets/js/*.ls', out: 'js/main.js', minify: true, hash: false)
		css_pipeline(manifest:'cssmanifest.yml', out: 'css/style.css', minify: false, hash: false)
		dynamic_content()
	]

	stylus:
		use: [axis(), rupture(), typographic(), autoprefixer()]

	postcss:
	  use: [lost()]