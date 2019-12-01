// usual grabs before we begin
const nav = document.querySelector('#main')

// of all the Tops, the one that
// denotes distance scrolled from the top of the screen
// is offsetTop
// you can `let` this for reassignment on window resize
// if that's a concern
const navTop = nav.offsetTop

// checker that stickies the nav on scroll
function fixNav() {
  if (window.scrollY >= navTop) {
    // the usual, KISS line
    // nav.style.position = "fixed"

    // or you can be a HOT. SHOT. and adhere to best practices
    // by adding a class
    document.body.style.paddingTop = nav.offsetHeight + 'px'
    document.body.classList.add('fixed-nav')

    // also offset the body by the height of the nav
    // to prevent the instaneous space reclamation
  } else {
    document.body.style.paddingTop = 0
    document.body.classList.remove('fixed-nav')
  }
}

// fixNav() on scroll
window.addEventListener('scroll', fixNav)
