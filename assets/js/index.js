const animateCss = require('animate.css-js')
const nameTime = 1500
const animationStagger = 300
const titleLine1 = document.querySelector('div#title-screen > h1')
const titleLine2 = document.querySelector('div#title-screen > h3')
const items = document.querySelector('div#stage-select')

// Animate the words in #title-screen
animateCss.animate(titleLine1, {
  animationName: 'slideInUp',
  duration: nameTime,
  stagger: animationStagger
})

// Animate the words in "Developer of..." individually while that's happening
animateCss.animate(titleLine2, {
  animationName: 'slideInUp',
  duration: nameTime,
  stagger: 250
})

animateCss.animate(items, {
  animationName: 'slideInUp',
  duration: nameTime,
  stagger: animationStagger
})
