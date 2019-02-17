import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// import from Redux
import { connect } from 'react-redux'
// combine multi HOC
import { compose } from 'recompose'
// import picture
import DriverPicture from '../../../assets/DriverPicture.png'

const styles = {
  paper: {
    padding: 15,
    marginTop: 24,
    height: 300
  },
  img: {
    width: 100,
    height: 100
  }
}

class DriverPaper extends Component {
  render() {
    const { classes, orderOnSelect } = this.props
    return (
      <Paper className={classes.paper} >
        <Grid container >
          <Grid item xs={5}>
            <img 
              className={classes.img}
              src={DriverPicture} 
              alt="DriverPicture" 
            />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle2" >
              <strong>{orderOnSelect.driverFullName}</strong>
              <hr />
              CMND: {' '} {orderOnSelect.driverIdNum}
              <hr />
              Ngày hết hạn: {' '} {orderOnSelect.driverIdExpdate}
            </Typography>
          </Grid>
        </Grid>
        <hr/>
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={8}>
              <Typography>
                Bằng lái số:
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography>
                {orderOnSelect.driverLicNum} 
              </Typography>
            </Grid>
          </Grid>
          <hr/>
        </Typography>
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={8}>
              <Typography>
                Ngày hết hạn:
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography>
                {orderOnSelect.driverLicExpdate}
              </Typography>
            </Grid>
          </Grid>
          <hr/>
        </Typography>
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={8}>
              <Typography>
                Giấy chứng nhận huấn luyện 
                <br/>
                nghiệp vụ phòng cháy chữa cháy:
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography>
                {orderOnSelect.fireFightingCertNum}
              </Typography>
            </Grid>
          </Grid>
          <hr/>
        </Typography>
        <Typography variant="subtitle2">
          <Grid container>
            <Grid item sm={8}>
              <Typography>
                Ngày hết hạn:
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography>
                {orderOnSelect.fireFightingExpdate}
              </Typography>
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
)(DriverPaper)