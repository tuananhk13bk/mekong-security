import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Vehicle from '../../../../../../public/img/Vehicle.png'
import Logo from '../../../../../../public/img/Logo.png'

const styles = {
  typography: {
    color: '#2196f3',
    fontSize: 13,
    padding: 10,
    wordWrap: 'break-word'
  },
  grid: {
    
    // marginTop: 20,
    // marginBottom: 20,
    // marginLeft: 5,
    // marginRight: 5
  },
  customerLogo: {
    width: 50,
    height: 50
  },
  vehicleLogo: {
    width: 50,
    height: 35
  }
}

class Content extends Component {
  render() {
    const { classes, orderOfThisPaper, children } = this.props
    return (
      <Grid 
        container 
        className={classes.grid}
        alignItems="center"
      >
        <Grid item sm={2} md={2} lg={2} >
          <Typography className={classes.typography}>
            <strong>{orderOfThisPaper.workOrderCode}</strong>
          </Typography>
        </Grid>
        <Grid item sm={1} md={1} lg={1}>
          <Typography className={classes.typography} align="center">
            <img src={Logo} alt="Logo" className={classes.customerLogo} />
          </Typography>
        </Grid>
        <Grid item sm={2} md={3} lg={3}>
          <Typography className={classes.typography}>
            <strong>{orderOfThisPaper.cusFullName}</strong>
            <br/>
            hàng {' '}
            {orderOfThisPaper.productFullName}
          </Typography>
        </Grid>
        <Grid item sm={2} md={2} lg={2} >
          <Typography className={classes.typography}>
            <strong>{orderOfThisPaper.transCoFullName}</strong>
          </Typography>
        </Grid>
        <Grid item sm={2} md={2} lg={2}>
          <Typography className={classes.typography}>
            <strong>{orderOfThisPaper.driverFullName}</strong>
            <br/>
            {orderOfThisPaper.driverIdNum}
          </Typography>
        </Grid>
        <Grid item sm={2} md={2} lg={2}>
          <Typography className={classes.typography}>
            <img src={Vehicle} alt="Vehicle" className={classes.vehicleLogo} />
            <br/>
            {orderOfThisPaper.plateNum}
          </Typography>
        </Grid>
      </Grid>
    )  
  }
}

export default withStyles(styles)(Content)