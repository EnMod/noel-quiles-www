// I guess this works?  Don't know since I use WSL for running my dev servers
// The system sees it as a VM kinda, so it doesn't treat it as localhost
// Therefore, it runs as an "insecure" endpoint
// I'm too stubborn to just use the included browser-sync lol so I trust the results,
// they make enough sense in the video

// setting a fail-safe for browser support:
// webkitSpeechRecognition for Chrome,
// window.SpeechRecognition for Firefox
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// this instances a new SpeechRecognition()
const recog = new SpeechRecognition()

// this allows the recognition to spit out results in real-time,
// rather than waiting for the speaker to stop
recog.interimResults = true

const words = document.querySelector('.words')

// First, create an element to contain the speech,
// namely a p tag for this exercise
let speech = document.createElement('p')

// Finally, add the speech to .words
words.appendChild(speech)

// create and add strings based on the event variable e
// when there is a speech result created after the speaker stops
// unbinds itself afterward (?)
recog.addEventListener('result', e => {

  // create an array due to map() being efficient for Wes's solution
  // could also use `for transcript of results` if you wanted, returning a new array
  const transcript = Array.from(e.results)

    // then map over it
    // each sub-item in the results gets ITS first sub-item turned into an array,
    // then THAT itself is turned into an array
    // that makes the strings found ready to be join()'d into a single string
    .map(result => result[0])
    .map(resultSub => resultSub.transcript)
    .join('')

  // add the text to the paragraghs added to .words
  speech.textContent = transcript

  // check the event variable to see if the current item isFinal
  // if it is, let a new speech container be added
  if (e.results[0].isFinal) {
    speech = document.createElement('p')

    // Finally, add the speech to .words
    words.appendChild(speech)
  }

  // HOT. SHOT. stuff ahead
  // includes('thing') returns whether a string has 'thing' in it
  // for example, if the transcript had 'how cool'
  if (transcript.includes('how cool')) {
    // the page could reply accordingly
    alert('Cooler than Freddie Jackson sippin a milkshake in a snowstorm')
  }
  console.log(transcript)
})

// every time the speaker stops, restart the recognition
// don't use () here, finally realized why:
// using () will run the function as-is, asap
// We want this run on demand,so all we do is give it a name.
recog.addEventListener('end', recog.start)

// this starts
recog.start()
