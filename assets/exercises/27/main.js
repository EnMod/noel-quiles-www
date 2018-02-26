// grab what we need
const itemsBin = document.querySelector('.items')

// set flags for later
// let's add a top value too!
let isDown = false
let startX
let startY
let scrollLeft
let scrollTop

function onStart(e) {
  // set isDown until the mouse is released in onEnd()
  isDown = true

  // set the items bin as active on mousedown
  itemsBin.classList.add('active')

  // set startX to the mouse pos
  // this is for figuring out parallax scroll distance later

  // start pos of mouse =
  // X value from the page boundary - itemsBin's distance from the left side of the page
  // similar for Y

  // storing these values in variables makes it so they stay put
  // this is referred to as "capturing and referencing"
  // the value is "captured" (like taking a snapshot) here, but
  // since this function only runs on mousedown,
  // the values within can be "referenced" safely
  // due to not being recalculated anywhere else
  startX = e.pageX - itemsBin.offsetLeft
  startY = e.pageY + itemsBin.offsetTop
  scrollLeft = itemsBin.scrollLeft
  scrollTop = itemsBin.offsetTop
}

function onLeave() {
  isDown = false
  itemsBin.classList.remove('active')
  itemsBin.style.position = 'relative'
}

function onEnd() {
  isDown = false
  itemsBin.classList.remove('active')
  itemsBin.style.position = 'relative'
}

function onDrag(e) {
  // only do stuff if the mouse is down
  if (!isDown) return

  // prevents usual browser selection stuff on drag
  e.preventDefault()

  // as the mouse moves, record its position in a var
  // basically the same as startX, but it' needs to be updated
  const curX = e.pageX - itemsBin.offsetLeft
  const curY = e.pageY + itemsBin.offsetTop

  // HOT. TIP.: you can log values along with the vars they belong to
  // by logging an object with the vars in it:
  //
  // console.log({curX, curY})
  //
  // would log:
  //
  // Object {curX: 000, curY: 000}

  // update the position of the items in itemsBin
  // to reflect the moouse's position from its initial mousedown

  // first declare how far to scroll the items
  // the ordering is to ensure proper movement on the axes
  const distX = curX - startX
  const distY = curY - startY

  // then scroll the items around
  itemsBin.scrollLeft = scrollLeft - distX
  itemsBin.style.position = 'absolute'
  itemsBin.style.top = distY
  console.log('top: ' + itemsBin.style.offsetTop)
}

itemsBin.addEventListener('mousedown', onStart)
itemsBin.addEventListener('mouseleave', onLeave)
itemsBin.addEventListener('mouseup', onEnd)
itemsBin.addEventListener('mousemove', onDrag)




