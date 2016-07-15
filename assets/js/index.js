const $ = require('jquery')
const animateCss = require('animate.css-js')

const nameTime = 1500
const animationStagger = 300
const titleLine1 = document.querySelector('#title-screen > *')
const titleLine2 = document.querySelector('#title-screen > h3')

// Animate the words in #title-screen individually
animateCss.animate(titleLine1, {
	animationName: 'slideInUp',
	duration: nameTime,
	stagger:animationStagger
})

// Animate the words in "Developer of..." individually while that's happening
animateCss.animate(titleLine2, {
	animationName: 'slideInUp',
	duration: nameTime,
	stagger:250
})
