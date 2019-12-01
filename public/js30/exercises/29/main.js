// grab what we need
const timers = document.querySelectorAll('[data-time]')
const timeLeftBox = document.querySelector('.display__time-left')
const timeEndBox = document.querySelector('.display__end-time')

// set a var for the countdown logic
let countdown;

// does the actual display of time provided in s
function displayTimeLeft(secs) {
  // do usual math on the secs,
  // then FLOOR IT to get whole nums for times
  const mins = Math.floor(secs / 60)
  const hours = Math.floor(mins / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 4)

  // after that's figured out, how many of each do we have left here?
  const secondsRemaining = secs % 60
  const minutesRemaining = mins % 60
  const hoursRemaining = hours % 24
  const daysRemaining = days % 7
  const monthsRemaining = months % 4

  // the ternary bits are for 0 padding at different counts
  // the logic is: if timeRemaining is less than 10,
  // pad it with a 0.  If not, do nothing there
  // timeDisplayValue = `${daysRemaining < 10 ? '0' : ''}${daysRemaining}:${hoursRemaining < 10 ? '0' : ''}${hoursRemaining}:${minutesRemaining < 10 ? '0' : ''}${minutesRemaining}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`

  // buuuut let's walk for a minute
  timeDisplayValue = `${hoursRemaining < 10 ? '0' : ''}${hoursRemaining}:${minutesRemaining < 10 ? '0' : ''}${minutesRemaining}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`
  timeLeftBox.textContent = timeDisplayValue

  // let's also update the tab title so the user can keep...tabs on the timer
  document.title = timeDisplayValue

}

// takes in a value in s and configures the onscreen timer with it
function timer(secs) {
  // stop any running countdowns
  clearInterval(countdown)

  // record timer start time in ms
  // captures that time so it's basically unusable for any real-time updating
  const start = Date.now()

  // set end time equal to start time plus secs given
  // multiply secs by 1000
  // in order to normalize the units involved to ms
  const end = start + secs * 1000

  // display the time remaining
  displayTimeLeft(secs)
  displayEndTime(end)

  // display time left every update period (doing seconds in this case)
  countdown = setInterval(() => {
    // re-runs Date.now() to ensure the time it's reading from is accurate in real-time
    const timeLeft = Math.round((end - Date.now()) / 1000)
    if (timeLeft < 0) {
      // don't just `return`, since that's like if you muted a loud jet engine
      // it's still burning fuel but you can't hear it, and that's a problem

      // to end this interval, assign it to a var and have it clear itself
      // on this condition
      clearInterval(countdown)
      timeLeftBox.textContent = `Happy New Year!`
      return
    }
    displayTimeLeft(timeLeft)
  }, 1000)
}

// shows a real-time "be back by..." point
function displayEndTime(finishTime) {
  // format the given finishTime with the Date() function
  // so we can use it to construct our time values
  // reason we're doing this with Date is
  // it's not like we have to recalculate the values every second
  const endData = new Date(finishTime)
  const hour = endData.getHours()
  const min = endData.getMinutes()
  // logic contains fixes for 12hr time
  timeEndBox.textContent = `Be back by ${hour > 12 ? hour - 12 : hour}:${min < 10 ? 0 : ''}${min}`
}

// runs an appropriate timer according to what is clicked or set
function startCountdown() {
  // parse the given secs on `this` in case a float is provided
  const secs = parseInt(this.dataset.time)
  timer(secs)
}

// startCountdown() using the datasets on the buttons, when they are clicked
timers.forEach(timer => timer.addEventListener('click', startCountdown))

// WHOA you can access `name`d elements as if they were members of the document object...which they are.
// So that makes sense lol but you just never think of these things normally, unless you're a HOT. SHOT. like Wes

// that said, the form on the page has an input for custom minutes
// here's how we go about making that happen

function customMinutes(e) {
  // prevent data leakage into the URL
  e.preventDefault()

  // get mins value from input
  // again dat object.member notation;
  // the input named `minutes` is a child of `customForm` (`this`),
  // so it's a `member` of it in the DOM
  const mins = this.minutes.value

  // convert to secs
  const secs = mins * 60
  timer(secs)

  // clear the box on submit
  this.reset()
}

document.customForm.addEventListener('submit', customMinutes)
