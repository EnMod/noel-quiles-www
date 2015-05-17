axis         	= require 'axis'
rupture      	= require 'rupture'
typographic  	= require 'typographic'
dynamic_content = require 'dynamic-content'
autoprefixer 	= require 'autoprefixer-stylus'
js_pipeline  	= require 'js-pipeline'
css_pipeline 	= require 'css-pipeline'
marked 			= require 'marked'
slugify 		= require 'underscore.string/slugify'

module.exports =
	ignores: ['readme.md', 'gulpfile.js', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

	extensions: [
		js_pipeline(files: 'assets/js/*.ls'),
		css_pipeline(files: 'assets/css/_dev/*.styl')
		dynamic_content()
	]

	stylus:
		use: [axis(), rupture(), typographic(), autoprefixer()]
		sourcemap: true

	'livescript':
		sourcemap: true

	jade:
		pretty: true

	locals:
		markdown: marked
