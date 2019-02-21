import React, { Component } from 'react'
// import from @material-ui
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// import from Redux
import { connect } from 'react-redux'
// Import logo
import Logo from '../../../assets/Logo.png'
//
import { compose } from 'recompose'

const styles = theme => ({
  paper: {
    padding: 15,
    height: 'auto',
  },
  typographyBold: {
    fontWeight: 'bold',
    color: theme.palette.primary.light
  },
  typography: {
    color: theme.palette.primary.light
  },
  companyLogo: {
    width: 80,
    height: 80
  }
})

class CustomerPaper extends Component {
  render() {
    const { classes, orderOnSelect } = this.props
    return (
      <Paper className={classes.paper} >
        <Grid container>
          <Grid item sm={4}>
            <img src={Logo} alt="Logo" className={classes.companyLogo}/>
          </Grid>
          <Grid item sm={8}>
            <Typography 
              className={classes.typographyBold}
              variant="subtitle2"
            >
              {orderOnSelect.cusFullName ? orderOnSelect.cusFullName : 'CTY XNK Cuu Tuong'}
            </Typography> 
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <Grid item sm={6} xs={6}>
            <Typography 
              className={classes.typography}
              variant="subtitle2"
            >
              Mặt hàng:
            </Typography>
          </Grid>
          <Grid item sm={6} xs={6}>
            <Typography 
              className={classes.typography}
              variant="subtitle2"
            >
              {orderOnSelect.productFullName ? orderOnSelect.productFullName : 'Test' }
            </Typography>
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <Grid item sm={6} xs={6}>
            <Typography 
              className={classes.typography}
              variant="subtitle2"
            >
              Số lượng:
            </Typography>
          </Grid>
          <Grid item sm={6} xs={6}>
            <Typography 
              className={classes.typography}
              variant="subtitle2"
            >
              {orderOnSelect.amount ? orderOnSelect.amount : 'Test' }
            </Typography>
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <Grid item sm={6} xs={6}>
            <Typography 
              className={classes.typography}
              variant="subtitle2"
            >
              Loại hàng:
            </Typography>
          </Grid>
          <Grid item sm={6} xs={6}>
            <Typography 
              className={classes.typography}
              variant="subtitle2"
            >
              {orderOnSelect.itemType ? orderOnSelect.itemType : 'Test' }
            </Typography>
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <Grid item sm={6} xs={6}>
            <Typography 
              className={classes.typography}
              variant="subtitle2"
            >
              Trạng thái:
            </Typography>
          </Grid>
          <Grid item sm={6} xs={6}>
            <Typography 
              className={classes.typography}
              variant="subtitle2"
            >
              {orderOnSelect.status ? orderOnSelect.status : 'Test' }
            </Typography>
          </Grid>
        </Grid>
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