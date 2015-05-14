axis         	= require 'axis'
rupture      	= require 'rupture'
typographic  	= require 'typographic'
contentful 		= require 'roots-contentful'
dynamic_content = require 'dynamic-content'
autoprefixer 	= require 'autoprefixer-stylus'
js_pipeline  	= require 'js-pipeline'
css_pipeline 	= require 'css-pipeline'
marked 			= require 'marked'
slugify 		= require 'underscore.string/slugify'

module.exports =
	ignores: ['readme.md', 'gulpfile.js', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

	extensions: [
		js_pipeline(files: 'assets/js/*.ls', out: 'js/main.js', minify: true, hash: true),
		css_pipeline(files: 'assets/css/_dev/*.styl', out: 'css/style.css', minify: true, hash: true)
	]

	stylus:
		use: [axis(), rupture(), typographic(), autoprefixer()]