import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import HandAndCard from '../assets/HandAndCard.png'
// import React Router components
import { Link } from 'react-router-dom'

const styles = {
  root: {
    padding: 20,
  },
  typography: {
    marginBottom: 20,
  },
  image: {
    width: '60%',
    height: '60%'
  }
}

class WaitScreen1 extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open
        >
          <form className={classes.root}>
            <Typography className={classes.typography} align="center">
              <img className={classes.image} src={HandAndCard} alt="hand-and-card" />
            </Typography>
            <Typography className={classes.typography} color="primary" variant="h4" align="center">
              !! Sẵn sàng đọc thẻ !!
            </Typography>
            <Typography align='center'>
              <Button 
                color="primary" 
                autoFocus
                variant="contained"
                // Router function
                component={Link}
                to="/next"
              >
                Nhập mã RFID
              </Button>
            </Typography>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(WaitScreen1)