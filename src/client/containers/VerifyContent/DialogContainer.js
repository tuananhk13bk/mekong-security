import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
// import actions
import { toggleDialog,
         clearAllRfidState,
         changeRfidCodeTextField,
         changeRfidReaderCodeTextField  
       } from '../../actions'
// import from redux
import { bindActionCreators } from 'redux'
// import APIs
import {
  readValidRfidByRfidCode,
  createRfidSysNumOfOrder,
  updateOrderStatus,
  createRfidEvent,
  updateRfidSysNumInRfid
} from '../../apis/'
// import utils
import { generateRfidSysNum } from '../../utils/'
// import constants
import { AUTHENTICATED } from '../../constants/orderStatusId'
import { TODAY_DATETIME } from '../../constants/today'
// import from react router
import { withRouter } from 'react-router-dom'

// import components
import DialogContent from '../../components/VerifyContent/DialogContent'

class DialogContainer extends Component {

  handleSubmitRfid = async () => {
    const {
      history,
      // states
      rfidCodeInTextField,
      rfidReadercodeInTextField,
      orderOnSelect,
      // action
      toggleDialog
    } = this.props
    const rfidCode = await readValidRfidByRfidCode(rfidCodeInTextField)
    if (!rfidCode) {
      // throw error
      console.log('error')
    } else {
      const rfidSysNum = generateRfidSysNum(orderOnSelect.workOrderCode)
      // CREATE rfid_sys_num of work_order
      await createRfidSysNumOfOrder(orderOnSelect.workOrderCode, rfidSysNum)
      // UPDATE rfid_sys_num in rfid
      await updateRfidSysNumInRfid(rfidCode, rfidSysNum, true)
      // UPDATE work_order with status_id === AUTHENTICATED
      await updateOrderStatus(orderOnSelect.workOrderCode, AUTHENTICATED)
      // CREATE rfid_events
      await createRfidEvent(rfidCodeInTextField, rfidReadercodeInTextField, TODAY_DATETIME)
      
      toggleDialog()
      setTimeout(() => {
        history.push('/')
      }, 500);
    }
    // clearAllRfidState()
    // history.push('/')
    // toggleDialog()
  }

  render() {
    const {
      // state
      dialogIsOpen,
      orderOnSelect,
      rfidCodeInTextField,
      rfidReadercodeInTextField,
      // actions
      toggleDialog,
      changeRfidCodeTextField,
      changeRfidReaderCodeTextField
    } = this.props
    return (
      <DialogContent
        dialogIsOpen={dialogIsOpen}
        orderOnSelect={orderOnSelect}
        rfidCodeInTextField={rfidCodeInTextField}
        rfidReadercodeInTextField={rfidReadercodeInTextField}

        toggleDialog={toggleDialog}
        handleSubmitRfid={this.handleSubmitRfid}
        changeRfidCodeTextField={changeRfidCodeTextField}
        changeRfidReaderCodeTextField={changeRfidReaderCodeTextField}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dialogIsOpen: state.dialog.dialogIsOpen,
    orderOnSelect: state.rfid.orderOnSelect,

    rfidCodeInTextField: state.dialog.rfidCodeInTextField,
    rfidReadercodeInTextField: state.dialog.rfidReadercodeInTextField
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleDialog,
    clearAllRfidState,
    changeRfidCodeTextField,
    changeRfidReaderCodeTextField  
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DialogContainer)


