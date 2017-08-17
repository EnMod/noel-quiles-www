// first, select what you need to watch
// then listen for specific changes instead of doing a mess of conditions
// finally, act when certain things are what you're looking for

// select all list items (preface the selection with .inbox since, in other apps, this list won't be the only thing on the page)
const items = document.querySelectorAll(".inbox input[type='checkbox']")

// set some vars for use later
let checkedLast

// function to house logic applied to the checks
function checkMeister(e){
  // state of checking for a range to select when shift-clicking
  // are you in between the first and last items checked? Currently, no
  let inBetween = false

  // if checked while shift (keycode: 16) is down
  // (if .shiftKey exists that means the key was held down)
  // AND the box is being checked 
  if (e.shiftKey && this.checked) {
    // then check everything between checkedNow and checkedLast
    
    // loop over each of the items, and take the first and last checked in the list
    // this loop is structured this way so whether `checkedLast` is above or below `this` in vertical position in the markup, `inBetween` can still be set properly due to forEach() moving down the list in sequence.
    items.forEach(item => {
      // if the current item in the loop is what was just clicked,
      // OR it's what was clicked before that
      if (item === this || item === checkedLast) {
        // then flip the inBetween switch
        inBetween = !inBetween
      }

      // now, do stuff while in between `this` and `checkedLast`
      if (inBetween) {
        item.checked = true
      }
    })

    // set inBetween to true after you hit the first checked box, then false again after the second checked box
  }

  // set this clicked box to be the last one checked
  checkedLast = this
}

// add event listeners to all of them so checkMeister can run on check or change
// 'click' works with keyboard presses too...go figure
items.forEach(item => item.addEventListener('click', checkMeister))
// make a function to run on item click that checks inputs, then shift-selects those between initial and destination

