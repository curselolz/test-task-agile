
const express = require('express')

const route = express.Router()
const data = require('../../data')

/**
  * Route for search value in data
  * @param nameToSearch string with text name
  * @param limit integer number elements on page
  *
*/

route.post('/', (req, res) => {
  const q = req.body.nameToSearch
  const defaultSize = req.body.limit
  let filteredRes = data
    .filter((el) => {
      const currentName = el.name.toLowerCase()
      const currentActive = el.isActive
      return (
        currentName.includes(q.toLowerCase()) &&
        JSON.parse(currentActive) === true
      )
    })
  if (filteredRes.length > defaultSize) {
    filteredRes = filteredRes.slice(0, defaultSize)
  }
  res.json(filteredRes).status(200)
})

module.exports = route
