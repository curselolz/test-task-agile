const configs = require('./configs')
const express = require('express')
const bodyParser = require('body-parser')
const dataRoute = require('./api/routes/data')
const searchRoute = require('./api/routes/search')

/**
 * Instance of created app
 */
const app = express()

// include for get data from body
app.use(bodyParser.json())

app.use(function (req, res, next) {
  // Allow localhost because of cors
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030')

  // Request methods to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )

  // Request headers to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  )

  // Pass to next layer of middleware
  next()
})

// specify router for url
app.use('/data', dataRoute)
app.use('/search', searchRoute)

app.listen(configs.port)

console.log(`[Server running on ${configs.hostname}:${configs.port}]`)
