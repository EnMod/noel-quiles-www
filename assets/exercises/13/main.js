// ---------------------------
// Where are things happening?
// ---------------------------

const slides = document.querySelectorAll('.slide-in')

// ---------------------
// Are there any states?
// ---------------------


// --------------------------
// What things are happening?
// --------------------------

// the images slide in on scroll
// the scroll event gets called TOO. MUCH. by default,
// so bear in mind this will be passed to debounce before the below logic is executed
function slideIn(e) {

  slides.forEach(slide => {
    // if the image is ~50% visible, do the thing
    // LET'S DO SOME MATH

    // first, grab the distance scrolled from the top
    // window.scrollY

    // next, get the bottom point of the viewport such that there's a 'bottom egde' to work with
    // bottomEdge = window.scrollY + window.innerHeight

    // then, get the middle of the image
    // (this is our target point for making the sliding in happen for this exercise)
    // slide.offsetHeight/2

    // finally, calc a pixel distance to start sliding the images in
    // doing it this way allows us to set this value even if the vars involved are moving targets
    const slideInAt = (window.scrollY + window.innerHeight) - slide.height/2

    // cool! so...how about scrolling down to up?

    // you'll want to get the height of the image first
    // to get that bottom value while moving,
    // grab the distance it is from the top,
    // and add its height value
    const imageBottom = slide.offsetTop + slide.height

    // now, we'll have to check for if the image is currently half-shown
    const halfShown = slideInAt > slide.offsetTop

    // and if it's not scrolled past
    const notScrolledPast = window.scrollY < imageBottom

    // sooo...if those are true, then do the thing
    if (halfShown && notScrolledPast) {
      // do the thing
      slide.classList.add('active')
    } else {
      // otherwise, make them inactive
      slide.classList.remove('active')
    }
  })
}

// ensures a function is run, at maximum, at certain time intervals and not all the time
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


// ----------------------------
// When do these things happen?
// ----------------------------

// slideIn() when the window is scrolled
// since its frequency of execution is being slowed down by debounce(),
// that needs to wrap it here
window.addEventListener('scroll', debounce(slideIn))
