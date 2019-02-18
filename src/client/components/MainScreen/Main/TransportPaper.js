import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Warning from '@material-ui/icons/Warning'
// import from Redux
import { connect } from 'react-redux'
// combine multi HOC
import { compose } from 'recompose'
// Import images
import Transport from '../../../assets/Transport.png'

const styles = theme => ({
  paper: {
    padding: 15,
    height: 500
  },
  warningIcon: {
    color: theme.palette.secondary.light,
    width: 30,
    height: 30
  },
  transportImg: {
    width: 250,
    height: 150,
    marginBottom: 10
  },
  grid: {
    verticalAlign: 'middle'
  },
  typographyBold: {
    fontWeight: 'bold'
  }
})

class TransportPaper extends Component {
  render() {
    const { classes, orderOnSelect } = this.props
    const certificateExpDateList = [
      ['Chứng nhận đăng kí xe', orderOnSelect.vehicleRegCertExpdate],
      ['Giấy phép vận chuyển hóa chất', orderOnSelect.chemicalTransLicExpdate],
      ['Bảo hiểm xe', orderOnSelect.assuranceExpdate],
      ['Đăng kiểm xe', orderOnSelect.vehicleInspectationCertExpdate]
    ]
    return (
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item sm={12} lg={4}>
            <img src={Transport} alt="Logo" className={classes.transportImg} />
          </Grid>
          <Grid item sm={12} lg={8}>
            <Typography
              className={classes.typographyBold}
            >
              {orderOnSelect.transCoFullName ? orderOnSelect.transCoFullName : 'CT van tai Toan Cau'}
            </Typography>
            <hr/>
            <Typography>
              {orderOnSelect.plateNum ? orderOnSelect.plateNum : '54S - 55577'}
            </Typography>
            <hr/>
            <Typography>
              Chủ xe: {orderOnSelect.ownerFullName}
            </Typography>
          </Grid>
        </Grid>
        {certificateExpDateList.map(([title, date]) => (
          <div key={title}>
            <hr/>
            <Grid container>
              <Grid item sm={6}>
                <Typography>
                  {title}
                </Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography align='center'>
                  <Warning
                    className={classes.warningIcon}
                  />
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography>
                  {date}
                </Typography>
              </Grid>
            </Grid>
          </div>
        ))}
        
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
)(TransportPaper)