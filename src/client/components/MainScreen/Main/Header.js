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
// Import from Redux
import { connect } from 'react-redux'
// Import from React-router
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    const { rfidCodeOnFind, orderOnSelect } = this.props
    return (
      <div>
        <Grid container style={{marginBottom: 24}}>
          <Grid item sm={6}>
            <Typography variant='h5' style={{verticalAlign: "text-bottom"}}>
              Xác thực thông tin
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="subtitle2" align='right' style={{verticalAlign: 'bottom'}} >
              {orderOnSelect.driverFullName}
              <AccountBox style={{verticalAlign: 'bottom'}} />
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
            label={orderOnSelect.workOrderCode}
            avatar={
              <Avatar>
                <Create />
              </Avatar>
            }
            style={{marginRight: 20}}
          />
          <Chip
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

export default connect(mapStateToProps, null)(Header)