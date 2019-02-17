import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Warning from '@material-ui/icons/Warning'
// import from Redux
import { connect } from 'react-redux'
// combine multi HOC
import { compose } from 'recompose'
// Import logo
import Logo from '../../../assets/Logo.png'

const styles = {
  paper: {
    padding: 15,
    height: '80%'
  }
}

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
          <Grid item sm={6}>
            <img src={Logo} alt="Logo" style={{width: '100', height: '100'}} />
          </Grid>
          <Grid item sm={6}>
            <Typography>
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
                  <Warning/>
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