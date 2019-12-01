// grab what we need
const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')

// a variable to inject randomness and prevent some dupes
// by preventing the last hole from appearing for a bit
let lastHole

// the score
let score = 0

// the game over flag
let gameOver = false

// returns a random time from the provided range of times
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

// returns a random hole from the provided list
function randomHole(holes) {
  // get a random hole index from multiplying the number of holes
  // times a random number
  // as always, round it to an integer since random() is a float
  const hole = Math.floor(Math.random() * holes.length)

  // grab the picked hole from the `holes` nodelist
  const holePicked = holes[hole]

  // if it's the lastHole, pick another random hole
  if (holePicked === lastHole) {
    // uses return to stop the current run of the function
    // and runs it again
    return randomHole(holes)
  }

  // mark the picked hole as being the last one picked
  lastHole = holePicked

  // export the picked hole
  return holePicked
}

// pops the moles out of a random hole for a random time
function spawnMole() {
  const time = randomTime(200, 1000)
  const hole = randomHole(holes)
  console.log(this)
  // use CSS to animate the mole up
  hole.classList.add('up')

  // and after the random time, animate them down
  setTimeout(() => {
    hole.classList.remove('up')

    // run again afterward to pop up another mole
    // if game isn't over
    if (!gameOver) spawnMole()
  }, time)

}

function startGame() {
  score = 0
  scoreBoard.textContent = 0
  gameOver = false
  spawnMole()

  // set gameOver to true after 10s
  setTimeout(() => gameOver = true, 10000)
}

function whack(e) {
  // if the user is cheating (their "click" is untrusted)
  if (!e.isTrusted) return

  // update the score and the scoreboard
  score++
  // send the mole back underground
  // hey @wesbos, this is incorrect in the video
  this.parentNode.classList.remove('up')
  scoreBoard.textContent = score

}

moles.forEach(mole => mole.addEventListener('click', whack))

// TODO: LocalStorage high-score board
// TODO: Difficulties
