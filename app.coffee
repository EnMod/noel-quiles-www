axis         	= require 'axis'
rupture      	= require 'rupture'
typographic  	= require 'typographic'
contentful 		= require 'roots-contentful'
dynamic_content = require 'dynamic-content'
autoprefixer 	= require 'autoprefixer-stylus'
# livescript   	= require 'LiveScript'
js_pipeline  	= require 'js-pipeline'
css_pipeline 	= require 'css-pipeline'
marked 			= require 'marked'
slugify 		= require 'underscore.string/slugify'

module.exports =
	ignores: ['readme.md', 'gulpfile.js', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']
	output: mainsitedevdir
	extensions: [
		js_pipeline(files: 'assets/js/*.ls'),
		css_pipeline(files: 'assets/css/_dev/*.styl')
		dynamic_content()
		contentful
			access_token: my_access_token
			space_id: space_key
			content_types:
				blog_posts:
					id: posts_key
					name: 'posts'
					template: 'views/_post.jade'
					path: (e) -> "bleigposts/#{e.date}/#{slugify(e.title)}"
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
		# post: contentful