import React, { Component } from 'react'
// import from @material-ui
import Grid from '@material-ui/core/Grid'
import CustomerPaper from './CustomerPaper'
import DriverPaper from './DriverPaper'
import TransportPaper from './TransportPaper'
import Header from './Header'

class VerifyContent extends Component {

  render() {
    return (
      <div>
        <Header />
        <Grid container style={{flexGrow: 1}} spacing={24} >
          <Grid item xs={12} sm={6}>
            <CustomerPaper />
            <DriverPaper />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TransportPaper />
          </Grid>
        </Grid>
      </div>
      
    )
  }
}

export default VerifyContent