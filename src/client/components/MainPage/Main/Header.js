import React, { Component } from 'react'
// import from @material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AccountBox from '@material-ui/icons/AccountBox'
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
    width: 40,
    height: 40
  },
  accountText: {
    color: theme.palette.primary.light
  },
  chip: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.primary.light,
  },
  grid: {
    marginBottom: 10
  },
  headerTitle: {
    color: theme.palette.primary.light
  },
  accountSpan: {
    display: 'inline-block', 
    verticalAlign: 'middle', 
    marginLeft: 10
  },
})

class Header extends Component {

  render() {
    const { orderOnSelect, classes } = this.props
    return (
      <div
        className={classes.root}
      >
        <Grid container 
          className={classes.grid}
          alignItems="center"
        >
          <Grid item sm={8}>
            <Typography 
              variant='h5'
              className={classes.headerTitle}
            >
              Xác thực thông tin
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography 
              align="right"
              variant="subtitle1"
              className={classes.accountText}
            >
              {orderOnSelect.driverFullName}
              <span
                className={classes.accountSpan}
              >
                <AccountBox className={classes.accountIcon} />
              </span>
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
        </Typography>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rfidCodeOnFind: state.rfid.rfidCodeOnFind,
    orderOnSelect: state.rfid.orderOnSelect
  }
}

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(Header)