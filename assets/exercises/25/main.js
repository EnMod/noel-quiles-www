// grab what we need
const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

// JS event propagation (similar to resolution in other parlances)
// works a lot like a lightening strike:

// first, the electricity maps out its channel from the source to the destination
// (first, the browser captures events in nodes on its way
// from the top of the DOM to the element that activated the event)

// then, the lightening surge retraces that channel all the way back up to the source
// (then, the browser fires the event callback on all valid captured events thus far,
// starting with the activated element and ending with the top of the DOM)

// see also "the stack" in Wizards of the Coast trading card games:
// cards played in order in response to each other are put on a stack,
// which resolves from the latest card played and works its way to the oldest
// once the last card in the exchange is played

// to reverse the order in which propagation takes place,
// make `capture` `true` in your listeners

// when fired, logs the classList of whatever it's attached to
function logText(e) {
  console.log(this.classList.value)

  // want to stop event propagation?  Just say so!
  e.stopPropagation()
}

// logText() on click of the body
document.body.addEventListener('click', logText)

// logText() on click of the shapes in the center
divs.forEach(div => div.addEventListener('click', logText))

// logText() ONCE then unbind the event listener on click
// this is what the `once` option does
button.addEventListener('click', logText, { once: true })



