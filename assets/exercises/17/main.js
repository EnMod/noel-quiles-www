const bands = ['The Postal Service', 'The Strokes', 'Linkin Park', 'Maps & Atlases', 'Death Cab for Cutie', 'Frou Frou', 'Battles', 'P.S. 118', 'An Endless Sporadic', 'A Love Like Pi'];

// grab the `bands` ul for later
const bandsList = document.querySelector('#bands')

// first we need to strip the articles for proper sorting
// not filter them

// strip() takes in a band name and replaces all the articles
function strip(bandName){
  // if a bandName starts with the article,
  // remove it and trim the output
  return bandName.replace(/^(a |the |an )/i, '').trim()
}

// const sortedBands = bands.sort((a, b) => {
  // now we can use the strip here so the strip only happens in the sort
  // that way there are no destructive changes
  // if(strip(a) > strip(b)) {
  //   return 1
  // }
  // return -1

  // or you could be a HOT. SHOT.
  // return strip(a) > strip(b) ? 1 : -1
// })

// OR YOU COULD BE A HOTTER. SHOT. AND PUT IT ALL IN A HOT. LINE.
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1)

// .filter((a, b) => {
//   if(a.match(/A An The/gi))

//   return false
// })

// add the bands to the HTML
// sortedBands.forEach(band => {
//   bandsList.innerHTML += `
//     <li>${band}</li>
//   `
// })

// ...or don't hardcode it
bandsList.innerHTML =
  // map over the array to create a new one, then join() it
  // this will make a big string that can replace the innerHTML at once
  // without piling on `<li></li>`'s forever
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('')
