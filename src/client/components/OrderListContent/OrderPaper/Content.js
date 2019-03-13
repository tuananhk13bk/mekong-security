import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Vehicle from '../../../assets/img/Vehicle.png'
import Logo from '../../../assets/img/Logo.png'
// import constants
import { ORDER_TO_REASSIGN } from '../../../constants/tabId'

import RadioButtonContainer from '../../../containers/OrderListContent/OrderPaper/RadioButtonContainer'


const styles = {
  typography: {
    color: '#2196f3',
    fontSize: 13,
    padding: 10,
    wordWrap: 'normal'
  },
  typographyBigLineHeight: {
    color: '#2196f3',
    fontSize: 13,
    padding: 10,
    wordWrap: 'normal',
    lineHeight: '200%',
    textAlign: 'center'
  },
  grid: {

  },
  gridItem: {
    display: 'flex',
  },
  customerLogo: {
    width: 50,
    height: 50
  },
  vehicleLogo: {
    width: 50,
    height: 35,
  },
  radioButtonSpan: {
    display: 'inline-block',
    verticalAlign: 'middle'
  }
}

class Content extends Component {
  render() {
    const { classes, orderOfThisPaper, children, tabIdOnSelect } = this.props
    return (
      <Grid 
        container 
        className={classes.grid}
        alignItems="center"
      >
        <Grid item sm={2} md={2} lg={2} >
          <Typography className={classes.typographyBigLineHeight}>
            <strong>{orderOfThisPaper.workOrderCode}</strong>
            <br/>
            <span style={{color: 'green', fontWeight: 'bold'}}>
              {orderOfThisPaper.status}
            </span>
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
        <Grid 
          className={classes.gridItem}
          item sm={2} md={2} lg={2}>
          <Typography className={classes.typography}>
            <img src={Vehicle} alt="Vehicle" className={classes.vehicleLogo} />
            <br/>
            {orderOfThisPaper.plateNum}
          </Typography>
          {tabIdOnSelect === ORDER_TO_REASSIGN
           ? <RadioButtonContainer workOrderCode={orderOfThisPaper.workOrderCode} />
           : null
          }
          
        </Grid>
      </Grid>
    )  
  }
}

export default withStyles(styles)(Content)