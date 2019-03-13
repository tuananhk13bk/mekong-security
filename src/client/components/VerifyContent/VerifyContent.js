import React, { Component } from 'react'
// import from @material-ui
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CustomerPaperContainer from '../../containers/VerifyContent/CustomerPaperContainer'
import DriverPaperContainer from '../../containers/VerifyContent/DriverPaperContainer'
import TransportPaperContainer from '../../containers/VerifyContent/TransportPaperContainer'
import VerifyContentHeaderContainer from '../../containers/VerifyContent/VerifyContentHeaderContainer'
import OpenDialogButtonContainer from '../../containers/VerifyContent/OpenDialogButtonContainer'
import Footer from '../Footer'
// import child component
import DialogContainer from '../../containers/VerifyContent/DialogContainer'

const styles = theme => ({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  bodyContainer: {
    flex: 1
  },
  footerContainer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  }
})

class VerifyContent extends Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.rootContainer}>
        <div className={classes.bodyContainer}>
          <VerifyContentHeaderContainer />
          <Grid 
            container style={{flexGrow: 1}} spacing={24} >
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <CustomerPaperContainer />
              <DriverPaperContainer />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={7}>
              <TransportPaperContainer />
              <OpenDialogButtonContainer />
            </Grid>
          </Grid>
        </div>
        <div className={classes.footerContainer}>
          <Footer/>
        </div>
        <DialogContainer/>
      </div>
    )
  }
}

export default withStyles(styles)(VerifyContent)