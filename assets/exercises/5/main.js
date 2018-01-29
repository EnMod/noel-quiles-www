// lol whoops Wes, if we're selecting the panels themselves this is the way to go
const panels = document.querySelectorAll('.panel')

// open up those panels by adding the `open` class
function open(){
  this.classList.toggle('open')
}

// bring the words in by adding the `active` class to the main panel
// the css takes care of selecting the right words to move, we don't have to worry about that with JS
// (that's real neato)
function bringWordsIn(e){
  
  // since there will multiple transitions (font, flex) ending, we'll focus on flex-grow
  // "but browser support! safari reports flex-grow but others report flex!" then do this, bro:
  // if the propertyName of the event watched for (in this case, transitionend) has the word 'flex' in it,
  // THEN you can toggle active
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('active')
  } 
}

// bind a click listener to each panel, and fire the open() on click
panels.forEach(panel => panel.addEventListener('click', open))
panels.forEach(panel => panel.addEventListener('transitionend', bringWordsIn))