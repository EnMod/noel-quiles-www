// Checklist:
// [x] find the current sec/min/hour
// [x] rotate each hand x degrees whenever each time unit changes

// // create a variable for the time
// let time = new Time;

// select those hands
const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')


// make a function for updating the time,
// for use in updating the rotation of the hands
function updateTime() {

  // grab the current Date object
  const theTime = new Date();

  // grab the units you need from theTime
  const seconds = theTime.getSeconds();
  const minutes = theTime.getMinutes();
  const hours = theTime.getHours();

  // get degrees from the current unit value
  // multiply by 360 to get the current position on the circle that is
  // the clock
  // add 90 to account for the initial offset that makes the hands
  // look nice
  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = (minutes / 60) * 360;
  const hoursDeg = (hours / 12) * 360;

  // implementing Wes's proposed fix to the "rewind" behavior on 0
  // ...I should probably separate these into separate statements but it works 
  if (secondsDeg == 0 || minutesDeg == 0 || hoursDeg == 0){
    secHand.style.transition = 'none';
    minHand.style.transition = 'none';
    hourHand.style.transition = 'none';
  } else {
    secHand.style.transition = 'all 0.05s cubic-bezier(0, 2.69, 0.35, 1.01)';
    minHand.style.transition = 'all 0.05s cubic-bezier(0, 2.69, 0.35, 1.01)';
    hourHand.style.transition = 'all 0.05s cubic-bezier(0, 2.69, 0.35, 1.01)';
  }

  // change the style of each hand to rotate each to the expected degree,
  // according to the declarations above
  // there's those `${template literals}` again ugh they're so good
  secHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  // now, every time the function executes, each hand will move to 
  // the place they should be on the clock
}

// have the browser update the current time every second
setInterval(updateTime, 1000);