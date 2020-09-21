const express = require('express')
const route = express.Router()
const data = require('../../data')

/**
  * Route for get all default elements
  *
*/
route.get('/', (req, res) => {
  res.send(data)
})

module.exports = route
