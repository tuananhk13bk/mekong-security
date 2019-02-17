import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import React Router component
import { Link } from 'react-router-dom'
// import socket.io-client
import openSocket from 'socket.io-client';
// listen event is emitted from server
const socket = openSocket('http://localhost:8000');
// Import actions
import { readRfidCode, 
         receiveDataFromDb, 
         changeTextField,
         submitRfidCode } from '../actions'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Combine multi HOC
import { compose } from 'recompose'
// router
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
// import APIs
import getAllOrder from '../apis/getAllOrder'


const styles = theme => ({
  form: {
    padding: 40,
    width: 300
  },
  // input: {
  //   marginBottom: 40,
  // },
  button: {
    align:'center'
  }
})

class WaitScreen2 extends Component {
  componentDidMount() {
    const { readRfidCode, receiveDataFromDb } = this.props
    socket.on('data', data => readRfidCode(data.toUpperCase()))
    getAllOrder()
      .then(data => receiveDataFromDb(data))
  }

  handleSubmit(event) {
    const { valueInTextFieldIsFound, submitRfidCode, history } = this.props
    if (valueInTextFieldIsFound) {
      submitRfidCode(),
      history.push('/main')
    }
    else {
      event.preventDefault()
    }
  }

  render() {
    const { 
      // state
      rfidCodeOnFind,
      valueInTextFieldIsFound,
      // action
      changeTextField,
      //styles
      classes
    } = this.props
    let errorMessage
    if (rfidCodeOnFind === "") {
      errorMessage = ""
    }
    if (rfidCodeOnFind !== "") {
      if (!valueInTextFieldIsFound) {
        errorMessage = "*Không tìm thấy"
      }
      else {
        errorMessage = ""
      }
    }
    return (
      <div>
        <Dialog
          open
        >          
          <form 
            className={classes.form}
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <TextField
                autoFocus
                autoComplete='off'
                variant="outlined"
                margin="dense"
                id="name"
                label="MÃ RFID CODE"
                placeholder="Nhập tại đây"
                fullWidth
                value={rfidCodeOnFind.toUpperCase()}
                onChange={(event) => changeTextField(event.target.value)}
              />
            <br/>
            <Typography color="secondary" style={{marginBottom: 30}}>
              {errorMessage}
            </Typography>
            <Typography align='center'>
              <Button 
                color="primary"
                variant="contained"
                // component={Link}
                // to="/main"
                onClick={() => this.handleSubmit()}
              >
                Tìm kiếm
              </Button>
              <Button 
                color="primary"
                variant="contained"
                // Router function, back to previous page
                component={Link}
                to="/"
              >
                Trở lại
              </Button>
            </Typography>
          </form>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rfidCodeOnFind: state.rfidCodeReducer.rfidCodeOnFind,
    valueInTextFieldIsFound: state.rfidCodeReducer.valueInTextFieldIsFound
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({readRfidCode,
                             receiveDataFromDb,
                             changeTextField,
                             submitRfidCode
                            }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withRouter
)(WaitScreen2)