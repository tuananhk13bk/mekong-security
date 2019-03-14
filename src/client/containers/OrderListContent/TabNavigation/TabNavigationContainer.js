import React from 'react';
// import from redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//import actions
import { selectOrderTab, receiveDataFromDb } from '../../../actions'
// import API
import {
  readAllOrder,
  updateRfidSysNumInRfid
} from '../../../apis'
// import constants
import { ORDER_TO_AUTHENTICATE, ORDER_TO_REASSIGN, ORDER_TO_RETURN } 
from '../../../constants/tabId'
import { TODAY_DATE } from '../../../constants/today'

import { APPROVED, AUTHENTICATED, COMPLETED, IN_PROGRESS, INCOMPLETED, RETURNED } 
from '../../../constants/orderStatusId'

import TabNavigation from '../../../components/OrderListContent/TabNavigation/TabNavigation'

class TabNavigationContainer extends React.Component {

  handleChange = async(event, index) => {
    const { selectOrderTab, receiveDataFromDb } = this.props
    selectOrderTab(index)
    if (index === ORDER_TO_AUTHENTICATE) {
      const approvedList = await readAllOrder(APPROVED, INCOMPLETED, TODAY_DATE)

      receiveDataFromDb(approvedList)
    }
    if (index === ORDER_TO_REASSIGN) {
      const reassignList = await readAllOrder(AUTHENTICATED, IN_PROGRESS, TODAY_DATE)
      receiveDataFromDb(reassignList)
    }
    if (index === ORDER_TO_RETURN) {
      const returnedList = await readAllOrder(COMPLETED, RETURNED, TODAY_DATE)
      receiveDataFromDb(returnedList)
    }
  };

  

  render() {
    const {
      // states
      tabIdOnSelect,
      // styles
      classes
    } = this.props;

    return (
      <TabNavigation 
        tabIdOnSelect={tabIdOnSelect}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { tabIdOnSelect } = state.orderPaper
  const { orderOnSelect } = state.rfid
  return {
    tabIdOnSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectOrderTab,
    receiveDataFromDb
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigationContainer);