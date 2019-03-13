import React, { Component, Fragment } from 'react'
// import from Redux
import { connect } from 'react-redux'

import TransportPaper from '../../components/VerifyContent/TransportPaper'

class TransportPaperContainer extends Component {
  render() {
    const { orderOnSelect } = this.props
    return (
      <TransportPaper orderOnSelect={orderOnSelect} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orderOnSelect: state.rfid.orderOnSelect
  }
}
export default connect(mapStateToProps, null)(TransportPaperContainer)