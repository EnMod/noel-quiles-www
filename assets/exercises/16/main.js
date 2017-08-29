const hero = document.querySelector('.hero')
const heroText = hero.querySelector('h1')

// var for calculating distance to push the shadow
const pushVal = 100

// draws the shadow itself
function shadow(e) {
  // get the boundaries of where to draw
  // We're gonna be a HOT. SHOT. and set both boundaries in one line!

  // this lets you set multiple props of an object as vars
  // use the props as keys, and desired vars as values,
  // and equate the whole thing to what you're getting the props from
  const {offsetWidth: width, offsetHeight: height} = hero

  // now let's grab the cursor position
  // HOT. SHOT.
  let {offsetX: x, offsetY: y} = e

  // since the children of the object will get in the way,
  // we have to take them out of the picture

  // if the thing being listened for isn't what's currently being hovered over,
  // add how far in from the top and left the thing being hovered over is,
  // to the reported value
  // this, in essence, takes it out of the measurement
  if(this !== e.target){
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  // distance to push the shadow
  // (mouse position / the width of the listened element () * pushVal) - (pushVal / 2)
  // ensures a range between pushVal/2 and -pushVal/2 for push distance
  const xPush = Math.round((x / width * pushVal) - (pushVal / 2))
  const yPush = Math.round((y / height * pushVal) - (pushVal / 2))

  // now actually push the shadow around
  // and GO CRAZY
  heroText.style.textShadow = `
    ${-xPush}px ${-yPush}px 0 rgba(5,55,255,0.7),
    ${xPush}px ${yPush}px 0 rgba(250,55,255,0.7),
    ${-yPush}px ${-xPush}px 0 rgba(120,70,255,0.7),
    ${yPush}px ${xPush}px 0 rgba(200,30,111,0.7)
  `
}

// shadow() on mousemove
hero.addEventListener('mousemove', shadow)
