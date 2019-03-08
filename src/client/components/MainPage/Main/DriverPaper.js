import React, { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// import from Redux
import { connect } from 'react-redux'
// combine multi HOC
import { compose } from 'recompose'
// import picture
import DriverPicture from '../../../../../public/img/DriverPicture.png'
// import child components
import ValidationStatusIcon from './ValidationStatusIcon'

const styles = theme => ({
  paper: {
    padding: 15,
    marginTop: 24,
    height: 'auto'
  },
  img: {
    width: 100,
    height: 100
  },
  typographyBold: {
    fontWeight: 'bold',
    color: theme.palette.primary.light
  },
  typography: {
    color: theme.palette.primary.light
  },
  iconSpan: {
    display: 'inline-block', 
    verticalAlign: 'middle', 
    marginRight: 10,
    marginLeft: 10
  },
  gridContainer: {
    alignItems: 'center'
  }
})

class DriverPaper extends Component {
  render() {
    const { classes, orderOnSelect } = this.props
    const driverAttributeList = [
      ["Bằng lái số", null, orderOnSelect.driverLicNum],
      [
        "Ngày hết hạn", 
        <ValidationStatusIcon inputDate={orderOnSelect.driverLicExpdate}/>,
        orderOnSelect.driverLicExpdate
      ],
      [
        "Giấy chứng nhận huấn luyện nghiệp vụ phòng cháy chữa cháy",
        null,
        orderOnSelect.fireFightingCertNum
      ],
      [
        "Ngày hết hạn",
        <ValidationStatusIcon inputDate={orderOnSelect.driverLicExpdate} />,
        orderOnSelect.fireFightingExpdate
      ]
    ]
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
            <Grid container>
              <Grid item sm={12}>
                <Typography
                  className={classes.typographyBold}
                  variant="subtitle2"
                >
                  {orderOnSelect.driverFullName}
                </Typography>
              </Grid>
            </Grid>
            <hr/>
            <Grid container>
              <Grid item sm={5} >
                <Typography className={classes.typography}>
                  CMND
                </Typography>
              </Grid>
              {/* space between */}
              <Grid item sm={2}></Grid>
              <Grid item sm={5} >
                <Typography className={classes.typography}>
                  {orderOnSelect.driverIdNum}
                </Typography>
              </Grid>
            </Grid>
            <hr/>
            <Grid container alignItems="center">
              <Grid item sm={12} md={5} >
                <Typography className={classes.typography}>
                  Ngày hết hạn
                </Typography>
              </Grid>
              <Grid item sm={2} md={2} >
                <ValidationStatusIcon inputDate={orderOnSelect.driverIdExpdate} />
              </Grid>
              <Grid item sm={10} md={5} >
                <Typography className={classes.typography}>
                  {orderOnSelect.driverIdExpdate}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {driverAttributeList.map((element, index) => (
          <Fragment key={index}>
            <hr/>
            <Grid container className={classes.gridContainer}>
              <Grid item sm={7}>
                <Typography className={classes.typography}>
                  {element[0]}
                </Typography>
              </Grid>
              <Grid item sm={2}>
                {element[1]}
              </Grid>
              <Grid item sm={3}>
                <Typography className={classes.typography}>
                  {element[2]}
                </Typography>
              </Grid>
            </Grid>
          </Fragment>
        ))}
      </Paper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    orderOnSelect: state.rfid.orderOnSelect
  }
}
export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(DriverPaper)