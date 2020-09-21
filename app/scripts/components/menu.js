/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useCallback, useState, useRef } from 'react'
import debounce from 'lodash/debounce'
import store from '../store'

const Menu = () => {
  const { searchData } = store
  /**
   * Ref hook for functional component
   * @memberof Menu
   */
  const searchInput = useRef()

  const handler = useCallback(
    debounce((event) => searchData(event), 1100),
    []
  )
  /**
   * Clear function
   * @memberof Menu
   */
  const clear = () => {
    searchData('')
    searchInput.current.value = ''
  }

  /**
   * Handle search input with debounce function
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  const onChange = (event) => {
    const value = event.target.value
    if (value.length >= 3 || value.length === 0) {
      handler(value)
    }
  }
  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  const [showingSearch, showSearchContainer] = useState(false)
  const toggleShow = () => showSearchContainer(!showingSearch)
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  const clearInputSearch = () => {
    clear()
    toggleShow()
  }

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            <a href="#" className="nav-item">
              HOLIDAY
            </a>
            <a href="#" className="nav-item">
              WHAT&apos;S NEW
            </a>
            <a href="#" className="nav-item">
              PRODUCTS
            </a>
            <a href="#" className="nav-item">
              BESTSELLERS
            </a>
            <a href="#" className="nav-item">
              GOODBYES
            </a>
            <a href="#" className="nav-item">
              STORES
            </a>
            <a href="#" className="nav-item">
              INSPIRATION
            </a>

            <a href="#" onClick={(e) => toggleShow()}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <div className={(showingSearch ? 'showing ' : '') + 'search-container'}>
        <input type="text" onChange={(e) => onChange(e)} ref={searchInput} />
        <button type="button" onClick={() => clearInputSearch()}>
          <i className="material-icons close">close</i>
        </button>
      </div>
    </header>
  )
}
// Export out the React Component
export default Menu
