import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
// import actions
import { toggleDialog,
         changeTextField,
         clearAllRfidState  
       } from '../../../../actions'
// import from redux
import { bindActionCreators } from 'redux'
// import pictures
import WarningPicture from '../../../../assets/Warning.png'
// import APIs
import updateOrderStatus from '../../../../apis/updateOrderStatus'
// import from react router
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  typography: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 200,
    marginRight: 200
  },
})

class ScanDialogContent extends Component {

  handleSubmitRfid() {
    const { orderOnSelect, clearAllRfidState, history, toggleDialog } = this.props
    let updateValue
    if (orderOnSelect.status === 'Check-in') {
      updateValue = {
        status: 'Check-out'
      } 
    } else {
      updateValue = {
        status: 'Check-in'
      }
    }
    updateOrderStatus(orderOnSelect.workOrderCode, updateValue),
    clearAllRfidState()
    history.push('/'),
    toggleDialog()
  }

  render() {
    const {
      // style
      classes,
      // state
      dialogIsOpen,
      codeOnFind,
      orderOnSelect,
      // actions
      toggleDialog,
      changeTextField,
    } = this.props
    return (
      <div>
        <Dialog
          open={dialogIsOpen}
          onClose={() => toggleDialog()}
        >
          <Typography 
            className={classes.typography} 
            color="primary"
            variant="h6"
            >
            <img src={WarningPicture} alt="Warning Picture" />
            
            Scanning
            <br/>
            RFID31
          </Typography>
          <LinearProgress/>
          <form>
            <TextField
              value={codeOnFind.toUpperCase()}
              onChange={(event) => changeTextField(event.target.value)}
            >

            </TextField>
            <Button
              onClick={() => this.handleSubmitRfid()}
            >
              Submit
            </Button>
            {codeOnFind === (orderOnSelect.rfidSysNum || "")
              ? null
              : <Typography>
                  Khong tim thay
                </Typography>
            }
          </form>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dialogIsOpen: state.dialog.dialogIsOpen,
    codeOnFind: state.rfidCodeReducer.codeOnFind,
    valueInTextFieldIsFound: state.rfidCodeReducer.valueInTextFieldIsFound,
    orderOnSelect: state.rfidCodeReducer.orderOnSelect,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleDialog,
                              changeTextField,
                              clearAllRfidState

                            }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withRouter
)(ScanDialogContent)


