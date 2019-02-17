import React, { Component } from 'react'
// import from @material-ui
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { sizing } from '@material-ui/system'
// import from Redux
import { connect } from 'react-redux'
// Import logo
import Logo from '../../../assets/Logo.png'
//
import { compose } from 'recompose'

const styles = {
  paper: {
    padding: 15,
    height: 250,
  }
}

class CustomerPaper extends Component {
  render() {
    const { classes, orderOnSelect } = this.props
    return (
      <Paper className={classes.paper} >
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={4}>
              <img src={Logo} alt="Logo" style={{width: '40px', height: '40px'}}/>
            </Grid>
            <Grid item sm={8}>
              {orderOnSelect.cusFullName ? orderOnSelect.cusFullName : 'CTXNK Cuu Tuong'}
            </Grid>
          </Grid>
        </Typography>
        <hr />
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={6} xs={6}>
              Mặt hàng:
            </Grid>
            <Grid item sm={6} xs={6}>
              {orderOnSelect.productFullName ? orderOnSelect.productFullName : 'Test' }
            </Grid>
          </Grid>
        </Typography>
        <hr />
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={6} xs={6}>
              Số lượng:
            </Grid>
            <Grid item sm={6} xs={6}>
              {orderOnSelect.amount ? orderOnSelect.amount : 'Test' }
            </Grid>
          </Grid>
        </Typography>
        <hr />
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={6} xs={6}>
              Loại hàng:
            </Grid>
            <Grid item sm={6} xs={6}>
              {orderOnSelect.itemType ? orderOnSelect.itemType : 'Test' }
            </Grid>
          </Grid>
        </Typography>
        <hr />
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={6} xs={6}>
              Trạng thái:
            </Grid>
            <Grid item sm={6} xs={6}>
              {orderOnSelect.status ? orderOnSelect.status : 'Test' }
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    orderOnSelect: state.rfidCodeReducer.orderOnSelect
  }
}
export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(CustomerPaper)