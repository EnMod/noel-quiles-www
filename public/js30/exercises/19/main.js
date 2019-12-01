// it's webcam time here on JavaScript30!
// I'm your host, IDK How To Do Anything With A Webcam Through Canvas Yet!

const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')

// Round 1: Getting the Video Feed From The Cam
function getVid() {
  // tell the media navigator to grab the video from the user media device
  // and not the audio
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    // getUserMedia() returns a mediaStream Promise
    // we're gonna turn that stream into a URL of video source data
    // so the video player can say "ohhhh yeah I can play that"
    // since an object is an object and not video data

    // similar to how image embeds in Twine work;
    // image needs to be converted to base64-encoded source data
    // before being referenced by a source
    .then(localMediaStream => {
      // to do that, we create an object URL out of the mediaStream object
      video.src = window.URL.createObjectURL(localMediaStream)
      // then we play the video
      video.play()
      // this works because the video is constantly being updated by its source
      // (since it's live video)
    })
    // if an error is thrown (thus rejecting the promise altogether) then
    // we need to catch it
    // .catch(error in question => {function to handle it})
    .catch(err => {
      console.error(`ABORT ABORT! HERE'S WHY: `, err)
    })
}

// Round 2: Rendering The Video Feed to a Canvas
function paintToCanvas() {
  // to get the stills, we need the full area of the video frame
  const width = video.videoWidth
  const height = video.videoHeight

  // then create the canvas to be rendered to
  // make sure it's the same size as your still so you don't have weird aspect/size issues
  canvas.width = width
  canvas.height = height

  // now set it such that every 16ms it renders a frame to canvas
  setInterval(() => {
    // get the canvas 2d context as var'd above
    // and draw an image on it covering the whole surface of the canvas

    // .drawImage(source, origin, point, width, heightOfCanvas)
    ctx.drawImage(video, 0, 0, width, height)

    // `let`'s grab the image's pixel data for manipulation below in Round 4
    // again, go for the whole canvas surface area
    let pixels = ctx.getImageData(0, 0, width, height)

    // pixels is now a BIG array featuring RGBA data for
    // EVERY
    // SINGLE
    // PIXEL
    // on the canvas

    // you can apply the effects here
    // they take in the original pixel data as input,
    // and by virtue of equaling itself,
    // replace the canvas pixels with the new filtered pixels as output
    // pixels = redEffect(pixels)
    // pixels = rgbSplit(pixels)
    pixels = chromaKey(pixels)

    // you could also make a ghosting effect with:
    // ctx.globalAlpha = 0.1
    // finally, put those filtered pixels back onto the canvas at the origin point
    ctx.putImageData(pixels, 0, 0)
  }, 16)
}

// Round 3: Grab Stills from the Feed and Throw Them in a Gallery
function grabStill() {
  // shutter sound
  // currentTime of the snap is 0 to reset the playing of it per click
  snap.currentTime = 0
  snap.play()

  // let's grab the image data so we can throw it in a gallery file
  // we'll throw it into a mimetyped dataURL for use
  const data = canvas.toDataURL('image/jpeg')

  // then use that data to construct download links
  const link = document.createElement('a')
  link.href = data
  // this sets the filename of the download
  // in case it would otherwise be ridiculous
  link.setAttribute('download', 'handsome')
  link.innerHTML = `<img src='${data}' alt='ayy' />`
  // finally, push this link to the start of the strip
  // by adding it to it before the 'first child' or first link
  strip.insertBefore(link, strip.firstChild)
}

// Round 4: Filters
function redEffect(pixels) {
  // loop over allllllllllll pixels and do stuff to them
  // Since it's a Unit8ClampedArray,
  // pixels doesn't have the usual methods like map()
  // or usual props like length (instead, its `data` has that length)
  // gotta for-loop over it like the good old days

  // is incremented by 4 since we'll be handling RGBA per-pixel,
  // and the logic only works if done this way
  for (let i = 0; i < pixels.data.length; i = i + 4) {
    // grab the RGBA data from the array
    // again, only works if you increment by 4
    // because there aren't neat sub-arrays here
    pixels.data[i + 0] = pixels.data[i + 0] + 100
    pixels.data[i + 1] = pixels.data[i + 1] - 50
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5
    pixels.data[i + 3] = pixels.data[i + 3] + 0
  }
  return pixels
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i = i + 4) {
    // for this, use the color of the pixels to the far left and far right
    // to paint after- and fore-images of red/green
    pixels.data[i - 150] = pixels.data[i + 0]
    pixels.data[i + 100] = pixels.data[i + 1]
    pixels.data[i - 150] = pixels.data[i + 2]
  }
  return pixels
}

function chromaKey(pixels) {
  // holds min/max of the key range
  const levels = {}

  // grabs the slider input data
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value
  })

  for (let i = 0; i < pixels.data.length; i = i + 4) {
    // assign the data to vars this time for brevity
    red = pixels.data[i + 0]
    green = pixels.data[i + 1]
    blue = pixels.data[i + 2]
    alpha = pixels.data[i + 3]

    // if all values are within acceptable ranges, disable the pixel
    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      pixels.data[i + 3] = 0
    }
  }
  return pixels
}

// getVid() launches the feed capture by running the above function
getVid()

// let's allow the canvas to become active
// as long as there's a feed coming in from a webcam
// paintToCanvas() fires as soon as the video broadcasts that it can play
video.addEventListener('canplay', paintToCanvas)
