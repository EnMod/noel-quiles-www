const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')

// default `items` to empty if there is nothing in localStorage, otherwise populate from localStorage
const items = JSON.parse(localStorage.getItem('items')) || []


function addItem(e){
  // prevent default behavior of what this fires on,
  // namely the add items button
  e.preventDefault()

  // item name var for later
  // since we're firing this on the form, `this` is the form
  const itemText = (this.querySelector('[name=item]')).value

  // let's make the item to be added
  const item = {
    itemText,

    // checked/taco'd?
    done: false
  }

  // put the item into the array
  items.push(item)

  // repopulates the list once adding is done
  populateList(items, itemList)

  // but how does the list of items persist on page load?  Through local storage!

  // stringify `items` so the browser knows what's good,
  // then store it in the 'items' key in localStorage for persistence
  localStorage.setItem('items', JSON.stringify(items))

  // clears the form
  this.reset()
}

// this populates the list itself

// takes in an array of items and puts them in a place
function populateList(tapas = [], tapasList){

  // loops over the array and outputs HTML per item in it,
  // into a new array

  // YO YOU CAN PUT TERNERARIES IN VARIABLES IN TEMPLATE LITERALS
  // STOP THE PRESSES
  tapasList.innerHTML = tapas.map((tapa, i) => {
    return `
    <li>
    <input type='checkbox' data-index=${i} id='item${i}' ${tapa.done ? 'checked' : ''} />
    <label for='item${i}'>${tapa.text}</label>
    </li>
    `
  }).join('')
}

// runs when toggle is over, to mark it done
function toggleDone(e){
  // oh look, more jQuery-turned ES6, this time it's .is()
  if(!e.target.matches('input')) return

  // grab the clicked element
  const elem = e.target
  const index = elem.dataset.index

  // flip the corresponding item.done in `items`
  items[index].done = !items[index].done

  // update the 'items' key and repopulate
  localStorage.setItem('items'. JSON.stringify(items))
  populateList()
}

// 'click'? Nah, because what if there's another thing that happens that
// can't do a click, but completes the action?

// nah, to make sure we get it all, we listen for submit
addItems.addEventListener('submit', addItem)

// on list click, toggleDone
// through event delegation, this only runs on clicking the items we want
// , within a parent element
itemsList.addEventListener('click', toggleDone)

// also, on load we'll populate the list with what's in localStorage
populateList(items, itemsList)
