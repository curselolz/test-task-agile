import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../../../sass/materialStyled'

const HomeContent = ({ item }) => {
  const classes = useStyles()
  const splittedTags = item.tags.join(' ')
  return (
    <Grid key={item._id} item xs={12} sm={3} md={3} lg={3}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {item.price}$
            </Avatar>
          }
          title={item.name}
          subheader={splittedTags}
        />
        <img src={item.picture} alt={item.name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.about}
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </Grid>
  )
}

HomeContent.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    isActive: PropTypes.string,
    price: PropTypes.string,
    picture: PropTypes.string,
    name: PropTypes.string,
    about: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  })
}

export default HomeContent
