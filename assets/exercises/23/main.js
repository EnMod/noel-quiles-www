// the constructor for text-to-speech message instances
// each instance is referred to as an "utterance"
const msg = new SpeechSynthesisUtterance()

// holding for the voices we can use
let voices = []

// where the voice options will go
const voicesDropdown = document.querySelector('[name="voice"]')

// the sliders and textarea (aka all of the options for the speech)
// and my HOT.SHOT.ULTRA. checkbox
const options = document.querySelectorAll('[type="range"], [name="text"]')
const restartBox = document.querySelector('[name="restart"]')

// buttons
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

// on page load,
// set the textarea's text content to be the default for new utterances
// this is necessary because without a default choice
// it will just not work on initial click

// select it using its name attribute, grab its value
// since it doesn't really need an ID or class in this exercise
msg.text = document.querySelector('[name="text"]').value

// speechSynthesis is the global variable for text-to-speech audible speech instances
// has methods like speak(utterance) which play back an utterance
// the below replenishes the voice array whenever options change
// this is because a new voice set needs to be created to accomodate changed options
// Ex.: Voice A is not the same as "Voice A with 0.5 range",
// JS thinks of that second one as like Voice A2
// so we should rewrite voices[] using these new ones

function populateVoices() {
  // speechSynthesis.getVoices() returns all of its built-in voices
  voices = this.getVoices()

  // wipe the dropdown
  voicesDropdown.innerHTML = ''

  // for each voice, throw it in the dropdown
  // voices.forEach(voice => {
  //   // each voice will have a value of its name,
  //   // label of the same plus the language it's in
  //   voicesDropdown.innerHTML += `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
  // })

  // or be a HOT. SHOT. and just make it equal to the result of a map().join()
  voicesDropdown.innerHTML = voices
    // also you can use a filter() before the map to filter out non-english voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('')

}

// now to assign a new voice when we pick it from the dropdown
// YEAH I NAMED THIS ONE SOUNDLY AND ATTACHED IT BEFORE WES DID!
// score one for fledgling ability to plan ahead when JS coding
function setVoice() {
  // to properly set a voice, we have to dig for its props in voices[]
  // then use its name and match it to the value of what's in the dropdown options
  // if it matches, set it as the voice of our utterance!
  msg.voice = voices.find(voice => voice.name === this.value)
  toggle()
}

// next up: change the voice that is playing whenever you change voices
function toggle() {
  // stop the voice currently playing
  speechSynthesis.cancel()

  // then start it again
  // HOT.SHOT.: if restart is true, restart the voice playing
  // HOT.SHOT.ULTRA.: if the checkbox with the name "restart" is checked,
  // set restart to true, otherwise it's false
  if (document.querySelector('[name="restart"]').checked) {
    speechSynthesis.speak(msg)
  }
}

function setOption() {
  // to update the msg's options, set the value selected with the option name as the key,
  // to the value of that option as it is now
  msg[this.name] = this.value

  // then, reset the voice
  toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
// voicesDropdown.addEventListener('change', changeVoice)

// for the options, let's add event listeners so
// when they change they update the utterance's props according to which option it is
options.forEach(option => option.addEventListener('change', setOption))

// on click of the speak button, toggle()
speakButton.addEventListener('click', toggle)

restartBox.checked = true

// on click of the stop button, toggle() but be sure to uncheck the restart box
function stopEtttttt() {
  restartBox.checked = false
  toggle()
}
stopButton.addEventListener('click', stopEtttttt)

// the below speaks a given utterance whenever we change voices in the application
