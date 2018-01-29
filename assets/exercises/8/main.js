// wanna do something to something in the DOM?  You gotta grab it!
const canvas = document.querySelector('#draw')

// now to get the context, the "where" of our eventual drawing
// specifically, we want 2D since that's what we're working with
const ctx = canvas.getContext('2d')

// set the canvas's width and height to that of the window so we can draw EVERYWHERE
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// next, let's define some base settings for the line
// properties for lines in the canvas are set on the context

// color of the stroke.  Cool, da?
ctx.strokeStyle = '#C001DA'

// what shape the line is constructed of
ctx.lineJoin = 'round'

// what the end of lines looks like
ctx.lineCap = 'round'

// how big lines are
ctx.lineWidth = 50

// set an image editor-style blend mode
// TODO Make a ton of in-browser controls for all options like this
// ctx.globalCompositeOperation =

// to do stuff while drawing, we need properties

// "is it drawing?""
let isDrawing = false

// position (X)
let lastX = 0

// position (Y)
let lastY = 0

// line hue for hsl() later
let hue = 0

// lineWidth adjustment direction (currently "positive")
let direction = true

// All those `let`s are because those values will be updated later.  REMEMBER.

// now let's make it move!
// this function will eventually be called whenever the mouse moves on the canvas
// it takes in an event
function draw(e) {
  // if no drawing is happening, just return now and skip the rest
  if(!isDrawing) return
  
  // assign a new hue

  // if hue hit 360 on the last call, reset it
  if(hue == 360){
    hue = 0
  } 
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  
  // start drawing a line!
  ctx.beginPath()

  // start point
  ctx.moveTo(lastX, lastY)

  // end point
  ctx.lineTo(e.offsetX, e.offsetY)
  
  // make it so
  ctx.stroke()

  // update the position states to where the mouse just was
  lastX = e.offsetX
  lastY = e.offsetY

  // increment the hue by 1
  hue++

  // code for increasing lineWidth to a point, then bringing it back down
  // if the lineWidth reaches half of the hue (meaning the hue is halfway through a color cycle), or goes below 0 when on the way down, then flip the adjustment direction to "negative"
  if(ctx.lineWidth >= 180 || ctx.lineWidth <= 1){
    // set the direction to the opposite of what it is currently.  So set direction to not-itself
    direction = !direction
  }

  // if going "positive", increment ctx.lineWidth
  //  otherwise, decrement it
  (direction == true) ? ctx.lineWidth++ : ctx.lineWidth--  
}

// is this what a finite state machine is in game programming?
// tweet me with confirmation/denial if you like: @NoelQuiles

// while mouse is down, there's drawing happening
// putting the event above draw() for some pre-draw() checks and updates
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true

  // on mouse down reset the origin point of draw() to the mouse position
  lastX = e.offsetX
  lastY = e.offsetY
})

// while mouse is moving, run the draw function
canvas.addEventListener('mousemove', draw)

// while mouse is up or off-canvas, no drawing is happening
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)