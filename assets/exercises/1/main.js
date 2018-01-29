// I followed along and built more or less exactly as shown in the video, so the JS below is 
// a final cleanup along with commentary

// the idea is: if key x is pressed, do the following with the div/elements associated with key x
// - play the sound associated with that key 
// - play a little animation showing the kit area for that key glowing for an instant
// - scale up the element for the instant mentioned above


// let's set up the code to play the sound
function playIt (e) {
  
  // in this case, conveniently, the keycode we need to find out what key is being pressed
  // is in the built-in event object!
  // let's access it: e.keyCode
  // ---
  // next thing: playing the sound and doing stuff according to the keycode;
  // ---
  // all the data-attributes in the HTML correspond to a `keyCode` value in `e`
  // so to store the selected audio element according to that value, we'll
  // select it using the basic document.querySelector (since we only need one at a time),
  // targeting an element with a data-key that matches that keyCode.
  // 
  // Don't just 'string' + var + 'string', that's so 2013! 
  // Get with the ES6 program! Use a template string!
  // 
  // ES6: const for the old-school declaration of something you want to store and
  // not update entirely later on.  Perfect for one-time wonders
  // 
  // ES6: `template strings` are formatted with `backticks` instead of "quotes", 
  // and can use ${template literals} instead of " + concat'd variables + " 
  // as we're used to with ES5. a lot cleaner and more concise
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

  // but wait!  What if you press a key that doesn't match?  Won't that throw errors?
  // Just stop the function if the audio variable ends up being null;
  if (!audio){
    return;
  }

  // now that you have the audio element (since if the code reaches this 
  // point there has to be audio) you can play the audio!;

  // first set it to the start of the file on press, that way it doesn't wait 
  // for the previous press to finish before playing the current press
  audio.currentTime = 0;

  // then play
  audio.play();

  // now for the animations!

  // first, the glow of the full box.  Select it based on the keyCode
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  // then, add the effect class to the key
  // remember jQ's .{x}Class() ? YOU DON'T NEED THAT SHIT.
  // just do .classList.{x}()
  key.classList.add('playing');

}

// why won't the effect go away in playIt()???  Because you didn't remove it silly!
// Once the effect ends, remove the class.  How to tell?  listen for transitionEnd.

// on transitionend we'll be removing the class, so that logic goes here
// since `e` is a builtin object for events happening to elements, 
// we can just grab it directly
function removeTransition(e) {

  // if the event property is not a transform, don't worry about it as only that 
  // transform is of concern 
  if (e.propertyName !== 'transform') return;

  // once a transitionend is indeed heard on the transform, remove the effect class
  this.classList.remove('playing');
}

// now to bind that logic to the keys so it executes on transitionend 
// given that we want to listen to any key on the page, we'll want to select them all 
const allKeys = document.querySelectorAll('.key');

// on keydown of anything pressed, execute playIt()
window.addEventListener('keydown',playIt);

// finally, for the effect cleanup listener, you can't do the following because allKeys is an array, 
// and the array isn't what's transitioning, it's the items in it
// allKeys.addEventListener('transitionend',function(e){
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   key.classList.remove('playing');
// });

// so instead, do a forEach to bind to everything in the array, much like .map(),
// but since we don't need an array to be returned we don't need .map()

// ES6: the thing in the () is an arrow function, like the usual function declaration
// but without this, arguments, super, or new.target 
// (more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
allKeys.forEach(key => key.addEventListener('transitionend',removeTransition));
