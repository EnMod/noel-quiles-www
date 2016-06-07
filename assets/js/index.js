// include libs
// const $ = require('jquery')
const animateCss = require('animate.css-js')
const Vue = require('vue')
// const letterify = require('letterify')

// include Vue single-file components
const frontends = require('/home/enmod/Documents/github/noelquiles.com/components/frontends.vue')
const games = require('/home/enmod/Documents/github/noelquiles.com/components/games.vue')
const stories = require('/home/enmod/Documents/github/noelquiles.com/components/stories.vue')
const freshbeats = require('/home/enmod/Documents/github/noelquiles.com/components/freshbeats.vue')
const contact = require('/home/enmod/Documents/github/noelquiles.com/components/contact.vue')

// initialize Vue with above components
new Vue({
	el: 'body',
	components: {
		frontends,
		games,
		stories,
		freshbeats,
		contact
	}
});

// init vars for animation
const nameTime = 1500
const animationStagger = 300
const titleLine1 = document.querySelector('#title-screen > *')
const titleLine2 = document.querySelector('#title-screen > h3')

// Animate the words in #title-screen individually
animateCss.animate(titleLine1, {
	animationName: 'slideInUp',
	duration: nameTime
})

// Animate the words in "Developer of..." individually while that's happening
animateCss.animate(titleLine2, {
	animationName: 'slideInUp',
	duration: nameTime
})
