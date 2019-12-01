// bruh no Mac here ;_;

// grab the speed and arrow of compass.
const speed = document.querySelector('.speed-value')
const arrow = document.querySelector('.arrow')

// grab the location in real-time
// run code every time this updates
navigator.geolocation.watchPosition((data) => {
  // update the speed value with
  // speed data from the coords object
  speed.textContent = data.coords.speed
  arrow.style.transform = `rotate(${data.coords.heading}deg)`
  // if the user doesn't allow use of geolocation, let them know you want it
}, (err) => {
  console.error(err)
  alert("Can't do anything because SOMEONE didn't allow access to their location.")
})

