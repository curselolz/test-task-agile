import React from 'react'
import PropTypes from 'prop-types'
import { defaultPerPage } from '../../configs'

const HomeHeader = ({ resItems, items }) => {
  return (
    <h1>
      {`Displaying ${resItems.length} of ${items.length} total results, limit by ${defaultPerPage}`}
    </h1>
  )
}

HomeHeader.propTypes = {
  resItems: PropTypes.array,
  items: PropTypes.array
}

export default HomeHeader
