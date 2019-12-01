// select all the links on the page, since they're the targets
const links = document.querySelectorAll('a')

// main goal is to draw a span behind each link as the user hovers over it
// logic will include:
// - creating a span with width/height relative to the link hovered
// - inserting the span into the DOM
// - getting location of the current hovered link
// - translate()-ing the span from its current location to this new link,
// whenever the user's mouse enters the links

// first create the span
const hlSpan = document.createElement('span')
hlSpan.classList.add('highlight')

// then add it to the body for summoning later
document.body.append(hlSpan)

// highlight() sizes the span according to a hovered link,
// and then moves the span to said link
function highlight() {

  // getBoundingClientRect() grabs the bounding box of the given element
  const linkRect = this.getBoundingClientRect()

  // the linkRect we ACTUALLY want, featuring negations described below
  // hooray for assigning a bunch of properties to a fresh var through objectssss
  const trueRect = {
    width: linkRect.width,
    height: linkRect.height,
    top: linkRect.top + window.scrollY,
    left: linkRect.left + window.scrollX
  }

  // set the highlight span's height and width
  // it's not a property of the link, it's CSS
  hlSpan.style.width = `${trueRect.width}px`
  hlSpan.style.height = `${trueRect.height}px`

  // use style.transform = translate() to move the span around,
  // in order to take advantage of CSS transition perks like
  // hardware acceleration
  hlSpan.style.transform = `translate(${trueRect.left}px, ${trueRect.top}px)`

  // unfortunately that linkRect.top/left is not the ideal top/left;
  // it doesn't account for adjustments in scrollTop
  // you could
  // - do some math to figure out the offset and
  //   negate it with an opposite value
  // - others he doesn't mention lol
  // for this one we're doing the negation method

  // to do that you add the distance scrolled given by `window`,
  // to the top/left given by linkRect.  See above!
}

// for each link, fire highlight() on mouse entering it
links.forEach(link => {
  link.addEventListener('mouseenter', highlight)
})
