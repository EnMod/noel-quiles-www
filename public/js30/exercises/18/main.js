// let's get the total length of time for all vids on the page!

// grab all the times in the page by
// querying everything with a data-time attribute
// returns a nodelist that we have to
// turn into an array in order to map or reduce it
const vidLengths = Array.from(document.querySelectorAll('[data-time]'))

// map()s times[] into an array containing
// the contents of each time attribute,
// then map()s THAT into an array of minute/second sets
const seconds = vidLengths
  .map(vidLength => vidLength.dataset.time)
  .map(vidTime => {
    // use a split() to get the mins and secs apart into sub-arrays for later math
    // followed by a map() to turn the strings into nums
    const [mins, secs] = vidTime.split(':').map(parseFloat)
    // return each sub-array of vidTime as the mins * 60 plus the secs
    // to get the total secs for sorting out later
    return (mins * 60) + secs
  })
  // finally, take the total amount of secs starting with item 1
  // and continuously add the next item's secs
  .reduce((total, vidTimeInSecs) => total + vidTimeInSecs)

// time to dice it up into proper values for display

let secsLeft = seconds

// Math.floor() the decimal off the end of the hours value here
// since we are only after whole hours (there are 3600 seconds in 1 hour)
const hours = Math.floor(secsLeft / 3600)

// modulo the seconds left to find remainder of secs after dividing by 3600
secsLeft = secsLeft % 3600 // => 3538

// now for mins
const mins = Math.floor(secsLeft / 60)
secsLeft = secsLeft % 60

// finally, secs, which is just secsLeft at this point
// now we join them all up into a string and print it
console.log([hours, mins, secsLeft].join(':'))
