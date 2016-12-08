const animateCss = require('animate.css-js')
const Masonry = require('masonry-layout')
const nameTime = 1500
const animationStagger = 300
const titleLine1 = document.querySelector('#title-screen > *')
const titleLine2 = document.querySelector('#title-screen > h3')

const masonryGrid = document.querySelector('.frontendsGrid')

const msnry = new Masonry(masonryGrid, {
  itemSelector: '.car-item',
  columnWidth: 400
})
// Animate the words in #title-screen individually
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
