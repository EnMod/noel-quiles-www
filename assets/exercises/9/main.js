const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// you can use Break on...attribute modifications in devtools
// works a lot like Bookmarks in VS editors

// Regular
console.log('hey')

// Interpolated - template strings before they were cool
console.log('hey %s', 'bro') // 'hey bro'

// Styled - throw a %c in the beginning and the string will be styled according to what styles you pass it
console.log('hey' + '%c big' + ' bro', 'font-size: 50px;') // 'hey bro'

// warning! - this and error give you a stack trace to the erroneous code
console.warn("HEY BRO I'M ON FIRE D:")

// Error :|
console.error("HEY BRO I'm...not actually on fire?")

// Info - fun facts!
console.info("hey bro, did you know you can't lick your elbows with your tongue?")

// Testing - run tests and output any failures directly to console
console.assert(2 + 2 == 'fish', 'NOPE')
console.assert(document.querySelector('p').parentNode != document.querySelector('body'), 'UH IT KIND OF DOES EQUAL BODY')

// clearing - clears the console, useful after doing a bunch then needing clean output
// console.clear()

// Viewing DOM Elements - used to show EVERYTHING that belongs to an element: props, methods, classes, you name it
console.dir(document.querySelector('p'))

// Grouping together - this lets you group logs together by criteria

// lets make some logs from the dogs array
dogs.forEach(dog => {
  // this starts the grouping.  Use groupCollapsed to output them collapsed
  console.group(`${dog.name}`)

  console.log(`${dog.name} woofs at you!`)
  console.log(`${dog.name} tells you he is ${dog.age}.`)
  console.log(`While shocked that ${dog.name} is talking, you realize that ${dog.name}'s body is physically ${dog.age * 7}.`)

  // this ends the grouping
  console.groupEnd(`${dog.name}`)
})

// counting - increments a count per use of this command
console.count('BREAK')
console.count('BREAK')
console.count('BREAK')

// timing - see how long things take
console.time('fetching...')

// let's fetch some data as an example

// we can use the GitHub API for this
fetch('https://api.github.com/users/enmod') // remember this from the typeahead exercise?
  .then(data => data.json())
  .then(data => {
    // insert timeEnd where you want .time() to stop counting
    console.timeEnd('fetching...')
    console.log(data)
  })