// Note: any time you see me talking to myself I'm vocalizing reasons for code replaced by that in the video

// ---------------------------
// Where are things happening?
// ---------------------------

// I saw the player.qS() selection and think it's the better way, but I wanted to see if document.qS for everything would still perform

const video = document.querySelector('.player__video')
const progressBar = document.querySelector('.progress')
const progressFilled = document.querySelector('.progress__filled')
const sliders = document.querySelectorAll('.player__slider')
// const buttons = document.querySelectorAll('.player__button')
// better yet...why not just select the skip buttons here instead of doing a conditional check later like I planned to? Duh.
const skips = document.querySelectorAll('[data-skip]')
const playButton = document.querySelector('.player__button.toggle')
const fullscreen = document.querySelector('.fullscreener')

// ---------------------
// Are there any states?
// ---------------------

// mouse is down
let mousedown = false



// --------------------------
// What things are happening?
// --------------------------

// Video properties matching slider names change when the slider values change
function sliderLogic() {
  video[this.name] = this.value
}

// progress bar updates as the video proceeds
function progressUpdate() {

  // style the filled progress bar width according to the current time
  const progressPercent = (video.currentTime / video.duration) * 100
  progressFilled.style.flexBasis = `${progressPercent}%`
}

// the video is scrubbed through when the progress bar is clicked/dragged on
function scrub(e) {

  // `e` tells you SO MUCH, including at what point in 2D space you click on an element
  // like the canvas, offsetX tells us where we clicked relative to the item clicked on
  // sooo we can use that to determine how to update the time of the video
  // the percentage at which you click times the whole video duration gives us the new time to set the video to
  // that percentage is calculated from the width at which you clicked, divided by the progress bar's width
  const scrubbedTime = (e.offsetX / progressBar.offsetWidth) * video.duration
  video.currentTime = scrubbedTime
}

// skip buttons skip the video forward or backward
function skipLogic() {

  // add the skip value to the time
  // since the skip value is a string, you have to make it into a number, otherwise things won't work (as I found the hard way)
  // Wes wants to turn it into a float, and I'm inclined to agree
  video.currentTime += parseFloat(this.dataset.skip)
}

// play/pause button plays/pauses the video
function playPause() {

  // if currentTime > 0, it's not paused, and it hasn't ended yet, the video is playing
  // if that's the case, pause it
  // otherwise, play it
  // (video.currentTime > 0 && !video.paused && !video.ended) ? video.pause() : video.play()
  
  // this covers those extra use cases...but why bother when all you really need is whther it's paused or not?
  // hydrate and get good sleep, kids.
  (!video.paused) ? video.pause() : video.play()
  
}

// play button changes because the video gets paused
// doing it this way covers any and all use cases of the video being paused since you aren't tied to a specific event, like the buttons being clicked on
// INSIGHTFUL. :bow: :bow: :bow:
function updatePlayButton() {
  
  // pick an icon to update the button with
  // if the video is clicked while paused, replace with the play button
  // otherwise, use the pause button
  const icon = this.paused ? '⏵' : '⏸'

  // replace the content of the button with the icon
  playButton.textContent = icon
}

// fullscreen button makes the video go fullscreen
function fullScreen() {
  // only works in chrome, it was late and I needed sleep badly
  // also removes all our hard work temporarily... ;_;
  video.webkitRequestFullScreen()
}

// ----------------------------
// When do these things happen?
// ----------------------------

// skipLogic() when any of the skip buttons are clicked
skips.forEach(skipButton => {
  skipButton.addEventListener('click', skipLogic)
})

// sliderLogic() when any of the sliders are changed
// also listens for mousemove to update the value in realtime
// (that's real neato)
sliders.forEach(slider => {
  slider.addEventListener('change', sliderLogic)
  slider.addEventListener('mousemove', sliderLogic)
})
document.querySelector('selector')
// playPause() when the play button is clicked
// OR the video
video.addEventListener('click', playPause)
playButton.addEventListener('click', playPause)

// updatePlayButton() when the video plays/pauses
video.addEventListener('play', updatePlayButton)
video.addEventListener('pause', updatePlayButton)

// progressUpdate() when the video progresses
// makes more semantic sense to me to use that instead of 'timeupdate'
video.addEventListener('progress', progressUpdate)

// scrub() when the progress bar is clicked/dragged on
// mousemove listener handles updating on drag
// other mouse behavior listeners update the mousedown state
progressBar.addEventListener('click', scrub)
// if mouse is down, while the mouse moves, THEN scrub.  Scrubbing on mousemove otherwise is kinda wasteful
// this syntax allows a function to run if the preceeding variable is true
// however, doing it this way is not normal behavior, so the e isn't passed along as it should.  This means that needs to be done manually
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e))
progressBar.addEventListener('mousedown', () => mousedown = true)
progressBar.addEventListener('mouseup', () => mousedown = false)

// fullScreen() when the fullscreen button is clicked
fullscreen.addEventListener('click', fullScreen)