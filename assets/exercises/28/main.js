// grab what we need

// the speed bar wrapper
const speed = document.querySelector('.speed')

// the speed bar itself
const bar = document.querySelector('.speed-bar')

// the video itself
const video = document.querySelector('.flex')

// handles adjusting the speed of playback
function speedChange(e) {
  // get the mouse position within the div
  // position on page - offset of the div from the top of page
  // again, this is to ensure the mouseY calculates from
  // the top of `speed`
  const mouseY = e.pageY - this.offsetTop

  // percentage decimal for later
  const percDec = mouseY / this.offsetHeight

  // set speed multiplier range
  const speedMin = 0.4
  const speedMax = 4

  // make a percentage for calculating
  // where in the range the viewer is
  const speedPerc = Math.round(percDec * 100) + '%'

  // find the playback rate from speedPerc and the range
  // just like min-max ranging in earlier work
  const rate = percDec * (speedMax - speedMin) + speedMin

  // set the bar height to this value to fill the div
  bar.style.height = speedPerc

  // change the value shown on the bar to reflect the change
  bar.textContent = rate.toFixed(1) + 'x'

  // finally, update the playback rate
  video.playbackRate = rate
}

// speedChange() on mousemove
// attaches to wrapper div because the size of the bar itself is too variable
speed.addEventListener('mousemove', speedChange)
