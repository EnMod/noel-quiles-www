// code here

const excerpts = document.querySelectorAll('.excerpt')

excerpts.forEach(item => {
  let newItem = Microtext.truncate(item.innerText,150)
  item.innerText = newItem
})
