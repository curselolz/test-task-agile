/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React, { useEffect } from 'react'
import store from '../store'
import { observer } from 'mobx-react'
import Grid from '@material-ui/core/Grid'
import HomeContent from './Home/HomeContent'
import HomeHeader from './Home/HomeHeader'

const Home = () => {
  /**
   * Run fetch data on mount component
   * @memberof Home
   *
   */
  useEffect(() => {
    const { fetchData } = store
    fetchData()
  }, [])
  const { items, searchedItems } = store
  return (
    <section id="home">
      <div className="content">
        {searchedItems.length > 0 && (
          <HomeHeader resItems={searchedItems} items={items} />
        )}
        <Grid container spacing={2}>
          {searchedItems.map((el) => (
            <HomeContent key={el._id} item={el} />
          ))}
        </Grid>
      </div>
    </section>
  )
}
// Export out the React Component with implement observer
export default observer(Home)
