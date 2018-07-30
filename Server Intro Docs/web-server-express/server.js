const express = require('express')
const fs = require('fs')
const quoteRouter = require('./quotes')

const app = express()
const PORT = process.env.PORT || 3300

// FUNCTIONS
const diyLogger = (req, res, next) => {
  let now = new Date()
  const { url, method } = req
  const { statusCode } = res
  res.on('finish', () => {
    const duration = new Date() - now
    const log = `${now.toString()}: ${method} ${url} ${statusCode} ${duration} ms`
    console.log(log)
    fs.appendFile('server.log', log + '\n', err => {
      if (err) console.log('Unable to append to server.log.')
    })
  })
  next()
}

// MIDDLEWARE
app.use(express.static(__dirname + '/public'))
app.use(diyLogger)
app.use('/quotes', quoteRouter)

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`)
})
