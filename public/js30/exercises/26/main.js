// grab what we need
// Just so I remember:
// `>` selectors get the first-level descendants
// of the preceding element, not the first child
// as I thought before.
const triggers = document.querySelectorAll('.cool > li')
const dropBg = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.nav')

// HOT. TIP.:
// make functions that handle behaviors,
// not execute specific actions
function handleEnter() {
  // adds a class that puts the triggered li into the visible objects
  // check the CSS for details
  this.classList.add('trigger-enter')

  // adds a class that transitions the li into view after 150ms
  // this is to offset it showing so the transition from div to div can finish
  // before the dropdown contents show up

  // reason being: you can't transition both display and opacity at once,
  // and if you try to, display will supersede

  // uses an arrow function so
  // 'this' is inherited from the parent,
  // instead of from `Window`
  // (see his ES6 course for more on this)

  // also dat HOT. SHOT. one-liner syntax
  setTimeout(() => {
    // don't add the active class unless this has been triggered
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active')
    }
    // or be a HOT. SHOT. and use command-line syntax
    // this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active')
    // problem for me is, for some reason
    // the command-line syntax is just as prone to having the div content be revealed
    // as not having the conditional at all. Strange...
  }, 150)

  // now for the dropdown background
  // first, declare it's open
  dropBg.classList.add('open')

  // then, grab the dropdown in the hovered li
  const dropdown = this.querySelector('.dropdown')

  // grab the dropdown's bounding box
  const dropRect = dropdown.getBoundingClientRect()

  // and also that of the nav since it could move due to DOM manipulation
  const navRect = nav.getBoundingClientRect()

  // use this data to construct an object
  // with values for styling the moving dropdown background,
  // to fit with the nav items as they become visible

  // contains the dimensions as appearing in dropRect
  const itemProps = {
    height: dropRect.height,
    width: dropRect.width,
    // subtract the navRect's `top/left` to ensure
    // any adjustments in nav position are accounted for dynamically
    top: dropRect.top - navRect.top,
    left: dropRect.left + navRect.left
  }

  // finally, resize the dropdown
  // hmmm...maybe I can ask about why he used setProperty and not this

  // For Day 26: Stripe Follow Along Dropdown, why use...
  background.style.setProperty('width', `${coords.width}px`)
  background.style.setProperty('height', `${coords.height}px`)
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)

  // instead of...
  background.style.width = `${coords.width}px`
  background.style.height = `${coords.height}px`
  background.style.transform = `translate(${coords.left}px, ${coords.top}px)`

  // for changing the background div's size?
  // Is it just personal preference? Because it seems to work the same on my end

}
function handleLeave() {
  this.classList.remove('trigger-enter')
  setTimeout(() => this.classList.remove('trigger-enter-active'), 150)
  dropBg.classList.remove('open')
}


triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', handleEnter)
  trigger.addEventListener('mouseleave', handleLeave)
})
