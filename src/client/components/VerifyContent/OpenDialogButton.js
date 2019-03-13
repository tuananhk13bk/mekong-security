import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    padding: 15,
    width: '100%',
    height: 'auto'
  },
  buttonText: {
    color: theme.palette.primary.light,
    fontWeight: 'bold'
  }
})

class OpenDialogButton extends Component {
  render() {
    const {
      // style
      classes,
      // props from containers
      toggleDialog
    } = this.props
    return (
      <div>
        <Button
        className={classes.button}
        onClick={() => toggleDialog()}
        >
          <Typography 
            className={classes.buttonText}
            variant="h5"
          >
            Sẵn sàng để quẹt thẻ...
          </Typography>
        </Button>
      </div>
    )   
  }
}

export default withStyles(styles)(OpenDialogButton)


