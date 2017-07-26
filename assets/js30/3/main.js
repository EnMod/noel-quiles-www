// #Goals
// [] select the inputsonscreen
// [] make them update the css vars when the inputs are changed by user input

// select those inputs
// I gueeeeesss having the .controls in there is a best practice...
// but shouldn't this be good? let me know!
const inputs = document.querySelectorAll('input')

// now let's make a function that handles manipulating
// the image (I'm so clever)
function manipulateImage (){
  
  // instead of fishing out the attribute with jQuery (eww),
  // we will fish it out with our BARE HANDS in the inputs' datasets
  // an element's dataset is an object containing 
  // all of its data-attributes and values

  // using `this` because this function will be called in a
  // listener attached to the inputs, so they are `this`

  // "BUT WHAT IF DATA-SUFFIX IS UNDEFINED?!" 
  // chill.  Use `|| ''` to give it the option of adding emptiness
  // if there's no suffix
  // (this is REALLLLL neato)
  const suffix = this.dataset.suffix || '';

  // now that we have a suffix, let's update the css vars
  // set them using the name attribute since those -- will make JS do this: D:
  
  // this will occur on the JS name for :root : documentElement
  
  // also because vars are weird we just have to straight up set them,
  // instead of the usual updating with `.style = 'thing'`

  // jQuery Killer: .style.setProperty() is .css()
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

}

// to do this right we'll have to listen for when each of the
// inputs changes, and to do that we can loop over the NodeList
// output'd by `inputs` , attaching a listener to each one

// "But it's not an array!" NodeLists can still be forEach()'d so there

// ohhhh...so a => declaration as shown by Wes goes like:

// forEach([each item] => [usual use of an argument within a function])

// as if it was:
// function thing ([each item]){
//   [usual use of an argument within a function]
// }

// but [each item] is technically not an argument according to MDN...
// K. 

// (Not quite wrapping my head around => still, hmu if you want to explain)
inputs.forEach(input => input.addEventListener('change', manipulateImage));

// for "real-time" frequency of updates, throw a mousemove listener on there
// that way you get updates on drag as opposed to just on drop
inputs.forEach(input => input.addEventListener('mousemove', manipulateImage));