// (I feel like by now you can tell who's who lol, 
// but refer to Wes' starter files for clarity on 
// who's doing the commenting)

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
76
84
78
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// ~~~~~~~~~~~
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// ~~~~~~~~~~~

// filter() executes a function per array item, and returns an array
// values that make the function return true stay, those that make it return false are kicked out
// return false is optional, so go for `return true` conditions so as to not waste CPU

// the below was my usual reasoning in my head, use it for "what not to do" lol
// const the1500s = inventors.filter(function(inventor){
//   if(inventor.year > 1600 && inventor.year < 1500){
//     return false
//   }
//   return true
// })

// ...turns out that wouldn't work anyway what lol
// ES6: Make the function declaration an arrow since it's just a regular, plain function
// to do that, you could change function(inventor) {} to inventor => {}
// AND you can inline the if(conditions){return true} since it's a boolean

const the1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)

// Let's show the results in the console--WAIT
// *drewscanlon.gif* YOU CAN PUT TABLES IN THE CONSOLE????
console.table(the1500s)

// ...man.

// ~~~~~~~~~~~
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// ~~~~~~~~~~~

// OOH OOH I KNOW THIS ONE
const firstLast = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(firstLast)

// ~~~~~~~~~~~
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// ~~~~~~~~~~~

// "But we don't have an age???" Bruh. inventor.passed - inventor.year
// args that go in sort are the items to be compared:
// sort(firstItem, nextItem)

// not doing => since this is WAY more readable to me
// const old2young = inventors.sort(function(a, b){
//   if(a.year > b.year){
//     return 1
//   }
//   return -1
// })
// console.table(old2young)

// ehhhh that's not short enough.  Let's get te-tur...ternerary? Ternary!  
// Reminds me of all those years I mispronounced Fire Emblem's "vulnerary" as "vulnary".

// Ternaries read like:
// Is condition true ? [if so, return this] : [else, return this]
// great for when you have only returns in your if-else
// also can do => notation :D
const old2young = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(old2young)


// ~~~~~~~~~~~
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// ~~~~~~~~~~~

// like sigma notation in math, but for any operation (or really, anything)
// .reduce(function(totalSoFar, currentItem){operations done},initialValue)
const years = inventors.reduce((totalSoFar, inventor) => {
  return totalSoFar + (inventor.passed - inventor.year) 
},0)

console.log(years)

// IF YOU'RE READING THIS WES, 
// the array of inventors in the starter file is different than that in the video...is that intentional?  Email me at contact@noelquiles.com if it is, since I'm curious. Or not ;_;

// ~~~~~~~~~~~
// 5. Sort the inventors by years lived
// ~~~~~~~~~~~
// const yearsLivedSort = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1)
// console.table(yearsLivedSort)

// SECOND TRY. I just had them from youngest to oldest in the initial attempt.
// Honestly my rendition is less palatable to the eye, but the math reads well in my head at least. 
// Buuuuut best practice is to make it read well to OTHER people, isn't it?

const yearsLivedSort = inventors.sort((a, b) => {
  const currentInventor = a.passed - a.year 
  const nextInventor = b.passed - b.year
  return currentInventor > nextInventor ? -1 : 1
})
console.table(yearsLivedSort)

// ~~~~~~~~~~~
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// ~~~~~~~~~~~

// "Shouldn't we use WikiPedia's API...?" Nahhhhh, let's rip it right from the page! 
// const theBoulevardsContainer = document.querySelector('.mw-category')

// YOOO you can call querySelectorAll() on any DOM element? Well well. 
// const theBoulevards = category.querySelectorAll('a')

// that gives us the links in a list...but the list only exposes the tagName lol.
// .map()-ing the list should give us what we need--
// PSYCH, theBoulevards IS A NODELIST. 
// So let's make an array from the list with...Array.from()
// const theBoulevards = Array.from(theBoulevardsContainer.querySelectorAll('a'))

// I want to use innerText since it's WYSIWYG compared to textContent...
// but after reading this I changed my mind: https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/
// chaining can be done on new lines, remember that
// const theDes = theBoulevards
//   .map(boulevard => boulevard.textContent)
//   // this will filter out any street without de in it
//   .filter(street => street.includes('de'))


// ~~~~~~~~~~~
// 7. sort Exercise
// Sort the people alphabetically by last name
// ~~~~~~~~~~~

const a2z = people.sort((a, b) => {
  
  // WAIT. YOU CAN DECLARE AN ARRAY OF VARIABLES?!
  const [lastNameA, firstNameA] = a.split(', ')
  const [lastNameB, firstNameB] = b.split(', ')
  // BRUH.

  // ...then do your typical returnary (GEDDIT???)

  // Is lastNameA ahead of lastNameB alphabetically?
  // if so, put it at the bottom of the list
  return lastNameA > lastNameB ? 1 : -1
})
console.log(a2z)

// ~~~~~~~~~~~
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// ~~~~~~~~~~~

// obj describes the above "data" in this context...?
// adding a second argument of an empty object, so we can store these counts
const vehicles = data.reduce((obj, item) => {
  // first, check if the given item exists yet in this .reduce()
  // if not, set the count of it to 0 so we can tally it up
  if(!obj[item]){
    obj[item] = 0
  }
  // add to the count of the item
  obj[item]++

  // then do it all again
  return obj

}, {})

console.log(vehicles)