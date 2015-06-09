axis         	= require 'axis'
rupture      	= require 'rupture'
typographic  	= require 'typographic'
dynamic_content = require 'dynamic-content'
autoprefixer 	= require 'autoprefixer-stylus'
js_pipeline		= require 'js-pipeline'
css_pipeline	= require 'css-pipeline'
lost			= require 'lost'

module.exports =
	ignores: ['readme.md', '**/_*', '.gitignore']

	extensions: [
		js_pipeline(files: 'assets/js/*.ls', out: 'js/main.js', minify: true, hash: false),
		css_pipeline(files: 'assets/css/*.styl', out: 'css/style.css', minify: true, hash: false)
		dynamic_content()
	]

	stylus:
		use: [axis(), rupture(), typographic(), autoprefixer()]

	postcss:
	    use: [lost()]