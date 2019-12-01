// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// this checks if at least *some*thing (heh heh) is in your array
// takes in a function to do the criteria checking
const isGrown = people.some(person => {
  // use the date object so this code works in the future without issue
  const thisYear = (new Date()).getFullYear()
  if(thisYear - person.year > 17){
    return true
  }
  // or just return the evaluation's result since that's all we're really after here
  // return thisYear - person.year > 17

  // OR you can just be a HOT. SHOT. and forego readability for straight efficiency
  // the following works due to the implicit return granted by the arrow function
  // (please roast me if I misunderstood that)
  // const isGrown = people.some(person => (new Date()).getFullYear() - person.year > 17)
})

// the curlies pass over the variable name to the log, which can be handy
console.log({isGrown})

// Array.prototype.every() // is everyone 19 or older?
// I could just use my code, but I'm going to be a HOT. SHOT. and use Wes's
// using .every() checks if the given function returns true for every item in the array
// if even one item doesn't pass, it returns false
const allGrown = people.every(person => (new Date()).getFullYear() - person.year >= 19)

console.log({allGrown})


// Array.prototype.find()
// Find is like filter, but instead returns the first of the ones you are looking for
// find the comment with the ID of 823423
// takes a criteria check function, returns the item if true
const foundComment = comments.find(comment => comment.id === 823423)

console.log({foundComment})

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

// first, find the index of the comment with ID from above
const commentIndex = comments.findIndex(comment => comment.id === 823423)

// then, remove the comment with that index from the array

// two given ways

// ONE: .splice() it out
// first arg is the index to start at, second arg is how far ahead to cut out
// comments.splice(commentIndex, 1)

// TWO: build a new array containing everything except that item
// this means taking the slice containing everything before the offending item, the slice with everything after, and stitching them together
// each .slice() is an array, so they need to be ...spread into the new array
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
]