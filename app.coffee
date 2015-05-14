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
	output: '../../../../Documents/GitHub/enmod.github.io'
	extensions: [
		js_pipeline(files: 'assets/js/*.ls'),
		css_pipeline(files: 'assets/css/_dev/*.styl')
		dynamic_content()
		contentful
			access_token: '76275053106dd00f9d6b1d7753106672ab873201bca607d43807de36a702cc97'
			space_id: 'pq1w2pzu5o4q'
			content_types:
				blog_posts:
					id: '2wKn6yEnZewu2SCCkus4as'
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