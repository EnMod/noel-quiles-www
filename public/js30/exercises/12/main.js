// an array of pressed keys, to be checked to see if it's the right sequence
const keysPressed = []

// a code that will be checked against the contents of the above array
// const code = 'noelrocks'

// buuuuut...why not just do the actual Konami code?
// format it as an array because splicing like Wes does actually works, due to taking into account lengths and not hardcoded values
// trying to use Wes's method with a loooong string out the gate is not viable 
// this is because of the existence of keys with more than one letter to describe them, which screws up the key total we are getting with keysPressed.length later on
const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a','Enter']

// set starting lives for Contra NES, you'll see below
let lives = 4

// the console is updated to let the user know they just got 30 lives
// just like in Contra where the code originated
function give30Lives(e){
  
  // add the keys pressed to the array called...keysPressed
  keysPressed.push(e.key)
  
  // trim the array down from the end to ensure you only capture the code you're looking for (11 keys), denoted by the length of the code's array and that of keysPressed so far
  // negative in the first arg makes it so the index search starts from the end, not the beginning; this seems to be for best practices when trimming strings like this
  keysPressed.splice(-code.length - 1, keysPressed.length - code.length)
  
  // if keysPressed post-splice ever equals the code, give the user 30 lives
  // string the arrays by joining, for comparison...for some reason comparing the arrays directly doesn't do anything (?)
  // TODO figure out why
  if (keysPressed.join() == code.join()) {
    
    // make things ~sparkle~
    cornify_add()

    // add 30 lives to the user's count
    lives += 30

    // then, let the user know what just happened
    document.querySelector('#cornifycount').textContent = `You just got 30 lives! Lives total: ${lives}`

  }
}

// give30Lives() when the user enters the Konami code anywhere in the window
window.addEventListener('keyup', give30Lives)