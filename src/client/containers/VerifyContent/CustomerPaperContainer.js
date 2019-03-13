import React, { Component, Fragment } from 'react'
// import from Redux
import { connect } from 'react-redux'

import CustomerPaper from '../../components/VerifyContent/CustomerPaper'

class CustomerPaperContainer extends Component {
  render() {
    const { orderOnSelect } = this.props
    return (
      <CustomerPaper orderOnSelect={orderOnSelect} />
    )
  }

}

const mapStateToProps = (state) => {
  const { orderOnSelect } = state.rfid
  return {
    orderOnSelect
  }
}
export default connect(mapStateToProps, null)(CustomerPaperContainer)