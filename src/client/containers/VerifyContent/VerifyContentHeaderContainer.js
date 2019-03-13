import React, { Component } from 'react'
// Import from Redux
import { connect } from 'react-redux'
// Import from React-router
import { withRouter } from 'react-router'

import { compose } from 'recompose'

import Header from '../../components/VerifyContent/Header'

class VerifyContentHeaderContainer extends Component {

  render() {
    const { orderOnSelect, history } = this.props
    return (
      <Header 
        history={history}
        orderOnSelect={orderOnSelect}/>      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rfidCodeOnFind: state.rfid.rfidCodeOnFind,
    orderOnSelect: state.rfid.orderOnSelect
  }
}

export default compose(
  connect(mapStateToProps, null),
  withRouter
)(VerifyContentHeaderContainer)