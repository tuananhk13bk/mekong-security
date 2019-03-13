import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit*3
  }
})

class OrderPaper extends Component {
  render() {
    const {
      classes,
      // props from parent
      backgroundColor,
      cardContent
    } = this.props
    return (
      <Card 
        className={classes.card}
        style={{ background: backgroundColor }}
      >
        {cardContent}
      </Card>
    )
  }
}

export default withStyles(styles)(OrderPaper)