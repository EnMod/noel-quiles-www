// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2) // => 100 100

// buuuut what if we change `age`?

age = 200
console.log(age, age2) // => 200 100

// `age` changes but `age2` does not.
// That's because when age2 is initially set, it is set to age *at the time of assignment*.
// setting `age` again doesn't reassign `age2`, therefore it stays as is.

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team) // => ['Wes', 'Sarah', 'Ryan', 'Poppy'], ['Wes', 'Sarah', 'Ryan', 'Poppy']

// You might think we can just do something like this:
team[3] = 'Lux'

// however what happens when we update that array?
console.log(team) // => ['Wes', 'Sarah', 'Ryan', 'Lux']
console.log(players) // => ['Wes', 'Sarah', 'Ryan', 'Lux']

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// copy-paste the entire contents of the array (which is what slice() does with no args)
const team2 = players.slice()

// or create a new array and concat the old one in
const team3 = [].concat(players)

// or use the new ES6 Spread (takes iterables and puts all items in where the iterables are being spread)
const team4 = [...players]

// or make a new Array.from(theOtherArray)
const team5 = Array.from(players)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Noel Quiles',
  age: 2500
}

// and think we make a copy:
// const captain = person
// captain.number = 99

// this will add a number prop to the original `person` and set to 99
// so more references D:

// how do we take a copy instead?

// we use Object.assign({objectTo: 'copy to'}, objectToCopyFrom, {propsTo: 'add/change from objectToCopyFrom'})
const captain = Object.assign({}, person, {number: 99})
console.log(captain) // => Object {name: 'Noel Quiles', age: 2500, number: 99}
console.log(person) // => Object {name: 'Noel Quiles', age: 2500}

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const onlineMe = {
  name: 'EnMod',
  age: 2500,
  social: {
    github: '@EnMod',
    twitter: '@NoelQuiles'
  }
}

// 1 level deep means anything in social or deeper can't be cloned
// soooo what you want to do is either find and use a dedicated deepClone function,
// or this:

const myClone = JSON.parse(JSON.stringify(onlineMe))

// this first turns the object into JSON,
// then uses JSON.parse() to turn it right back into an object
