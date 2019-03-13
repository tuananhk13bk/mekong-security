import React, { Component } from 'react'
import moment from 'moment'
// import APIs
import { readAllOrder } from '../../apis'
// import actions
import { receiveDataFromDb } from '../../actions'
// import from redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import constants
import { APPROVED, INCOMPLETED } 
from '../../constants/orderStatusId'
import { TODAY_DATE } from '../../constants/today'

import OrderListContent from '../../components/OrderListContent/OrderListContent'

class OrderListContentContainer extends Component {

  componentDidMount() {
    const {
      // actions
      receiveDataFromDb
    } = this.props
    readAllOrder(APPROVED, INCOMPLETED, TODAY_DATE)
      .then(data => receiveDataFromDb(data))
  }

  render() {
    const {
      // state
      dataFromDb,
      orderListOnSearch,
      codeOnFind,
    } = this.props
    let orderArrayToMap
    if (codeOnFind === '') {
      orderArrayToMap = dataFromDb
    } else {
      orderArrayToMap = orderListOnSearch
    }
    return (
      <OrderListContent orderArrayToMap={orderArrayToMap}/>
    )
  }
}

const mapStateToProps = (state) => {
  const { dataFromDb, orderListOnSearch, codeOnFind } = state.rfid
  const { tabIdOnSelect } = state.orderPaper
  return {
    dataFromDb,
    orderListOnSearch,
    codeOnFind,
    tabIdOnSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({receiveDataFromDb,
                            }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContentContainer)