const container = document.getElementById('quotes')
const getQuotesButton = document.getElementById('get-quotes')
const createQuoteForm = document.getElementById('create-quote')

const appendQuote = quote => {
  const blockquote = document.createElement('blockquote')
  const deleteButton = document.createElement('button')
  deleteButton.setAttribute(
    'data-quote',
    quote.name.replace(/\s+/g, '-').toLowerCase()
  )
  deleteButton.textContent = 'Delete'
  blockquote.textContent = `"${quote.text}" — ${quote.name} `
  blockquote.appendChild(deleteButton)
  container.appendChild(blockquote)
}

getQuotesButton.addEventListener('click', () => {
  // Fetch the quotes from http://localhost:3300/quotes here!
  // Use the appendQuote function in the promise/then callback
  fetch('http://localhost:3300/quotes')
    .then(res => res.json())
    .then(res => res.map(r => appendQuote(r)))
    .catch(error => console.log(error))
})

createQuoteForm.addEventListener('submit', event => {
  event.preventDefault()
  const formData = new FormData(createQuoteForm)
  const newQuote = {}
  for ([key, value] of formData.entries()) {
    newQuote[key] = value
  }
  console.log(newQuote)
  fetch('http://localhost:3300/quotes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newQuote)
  })
    .then(res => res.json())
    .then(res => appendQuote(res))
    .catch(err => console.log(err))
})

container.addEventListener('click', event => {
  const clickedEl = event.target
  if (clickedEl.tagName === 'BUTTON') {
    const name = clickedEl.getAttribute('data-quote')
    fetch(`http://localhost:3300/quotes/${name}`, {
      method: 'DELETE'
    })
      .then(() => {
        const blockquote = clickedEl.parentNode
        blockquote.parentNode.removeChild(blockquote)
      })
      .catch(err => console.log(err))
  }
})
