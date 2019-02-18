import React, { Component } from 'react'
// import from @material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AccountBox from '@material-ui/icons/AccountBox'
import CreditCard from '@material-ui/icons/CreditCard'
import Create from '@material-ui/icons/Create'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
// Import from Redux
import { connect } from 'react-redux'
// Import from React-router
import { Link } from 'react-router-dom'
import { compose } from 'recompose';

const styles = theme => ({
  root: {
  },
  accountIcon: {
    color: theme.palette.primary.light,
    verticalAlign: 'bottom',
    width: 40,
    height: 40
  },
  chip: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.primary.light,
  },
  grid: {
    // height: 199,
    // marginBottom: 24
  }
})

class Header extends Component {

  render() {
    const { rfidCodeOnFind, orderOnSelect, classes } = this.props
    return (
      <div
        className={classes.root}
      >
        <Grid container 
          className={classes.grid}
        >
          <Grid item sm={6}>
            <Typography variant='h5' style={{verticalAlign: "text-bottom"}}>
              Xác thực thông tin
            </Typography>
          </Grid>
          <Grid item sm={6} style={{verticalAlign: 'middle'}}>
            <Typography variant="subtitle2" align='right'  >
              {orderOnSelect.driverFullName}
              <AccountBox 
                className={classes.accountIcon}
              />
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          style={{marginBottom: 24}}
        >
          Trở lại
        </Button>
        
        <Typography variant="subtitle1" style={{marginBottom: 24}}>
          <Chip
            className={classes.chip}
            label={orderOnSelect.workOrderCode}
            avatar={
              <Avatar>
                <Create />
              </Avatar>
            }
            style={{marginRight: 20}}
          />
          <Chip
            className={classes.chip}
            label={orderOnSelect.rfidSysNum}
            avatar={
              <Avatar>
                <CreditCard />
              </Avatar>
            }
          />
        </Typography>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rfidCodeOnFind: state.rfidCodeReducer.rfidCodeOnFind,
    orderOnSelect: state.rfidCodeReducer.orderOnSelect
  }
}

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(Header)