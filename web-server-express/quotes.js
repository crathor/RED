const express = require('express')
const bp = require('body-parser')

const router = express.Router()

// VARIABLES
let quotes = [
  {
    name: 'Fred Brooks',
    text: 'Nine people can’t make a baby in a month.'
  },
  {
    name: 'Paul Ford',
    text: 'A computer is a clock with benefits.'
  },
  {
    name: 'Linus Torvalds',
    text: 'Talk is cheap. Show me the code.'
  }
]

const getAuthorQuotes = (req, res) => {
  const { name } = req.params
  console.log(name)
  const slug = name.replace(/\s+/g, '-').toLowerCase()

  const authorQuotes = quotes.filter(
    quote => slug === quote.name.replace(/\s+/g, '-').toLowerCase()
  )
  if (authorQuotes.length === 0) {
    res.status(404).json("that person isn't quote worthy")
  } else res.send(authorQuotes)
}

// ROUTES
router
  .route('/')
  .get((req, res) => res.send(quotes))
  .post(bp.json(), (req, res) => {
    const newQuote = req.body
    console.log(newQuote)
    quotes = [...quotes, newQuote]
    res.status(201).send(newQuote)
    // Add your new quote to the quotes array
    // Then send back a 201 status
    // And also send the new quote as JSON in the response
  })

router
  .route('/:name')
  .get(getAuthorQuotes)
  .delete((req, res) => {
    // Remove the quote from the quotes array
    // Send back the 200 status with the response
    quotes = quotes.filter(
      quote =>
        quote.name.replace(/\s+/g, '-').toLowerCase() !==
        req.params.name.replace(/\s+/g, '-').toLowerCase()
    )
    res.sendStatus(200)
  })

module.exports = router
