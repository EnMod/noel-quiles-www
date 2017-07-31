// COOL IT'S THE MEAT OF THE FREECODECAMP TWITCH APP
// BUT THIS TIME YOU'RE ACTUALLY *TAUGHT* HOW TO DO IT

// Wes: 1, FCC: 0

// First off, in order to get the data we'll be working with, we will grab it from Wes's City API (TM)

// Let's define the API endpoint
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

// Then, we'll need to put it into an easier form to work with (an array)
// We start by declaring that array
const cities = []

// then, time to fetch() that data

// fetch() doesn't return threats, it returns PROMISES.
// (...threats being the data you'd expect to get from an endpoint using other means)

// to get to the JSON, first you fetch(the data)
fetch(endpoint)
  // .then(you fish the JSON out of the prototype of the response by calling its .JSON() method)
  .then(resp => resp.json())
  // .then(you can do what you want with it)
  // in this case, we put the data into the `cities` array by ...spreading the data into it
  // "why not just let cities = [] instead of making it const?"
  // I mean you could, but since the array will remain constant it's a best practice to define it as such
  // sooooo just spread the data into it since regularly .push()-ing data will make the data its own item
  // spread "fills" the array with what's in data 
  .then(data => cities.push(...data))

// Now that we have all this data, let's make it so when the user types, the list filters according to the input and shows matches
// to do that, we run a display function during input, which will take in the contents of the input box and use them to filter the cities, as handled by matchMaker() 
function matchMaker(whatToMatch, cities){

  // let's just return the results of the filtering here
  // place is a city in the array
  return cities.filter(place => {

    // oh hey look it's just like the Twitch app's RegEx problem that I had to google forever
    // ...basically, you can't use variables in a RegEx expression without creating a constructed RegEx first
    const regex = new RegExp(whatToMatch, 'gi')

    // with that out of the way, does the current place match anything in the input?
    // if input matches the city or state, return it 
    return place.city.match(regex) || place.state.match(regex)
  })
}

// before we run anything on the input, let's give it a name:
const searchInput = document.querySelector('.search')

// let's also give the city display box a name since we'll need to work with it later
const searchSuggestions = document.querySelector('.suggestions')

// "...Or just go to your nearest stackOverflow" mysides.jpg
// anyway, here's a numbers-into-numbers-with-commas converter for displayMatches()
// (the name is really "comma'd number")
function commadNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
}

// displayMatches runs on input
function displayMatches() {
  
  // the array of places that match the input is equal to what the matchMaker(returns)
  // uses the value of the input box as whatToMatch
  const matchArray = matchMaker(this.value, cities)

  // since the matchArray is, well, an array, we can .map() it
  // this will output what we will be filling the suggestions box with
  const searchResults = matchArray.map(place => {

    // to get those nice highlights, we'll need to do more RegExp-ing
    // first, match what's in the search box
    const regex = new RegExp(this.value,'gi')

    // then, replace the matching string in the city/state in the suggestions with the same, highlighted
    const cityHl = place.city.replace(regex, `<span class='hl'>${this.value}</span>`)
    const stateHl = place.city.replace(regex, `<span class='hl'>${this.value}</span>`)

    // use those AMAZING literals to construct each result
    // dig into the place object and fish out those vars we need
    return `
      <li>
        <span class='name'>${cityHl}, ${stateHl}</span>
        <span class='population'>${commadNumber(place.population)}</span>
      </li>
    `
  // don't forget to join up the array at the end
  }).join('')

  // slap that HTML onto the suggestions box
  searchSuggestions.innerHTML = searchResults
}


// finally, when the input contents change, displayMatches()
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
