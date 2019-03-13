import React, { Component } from 'react'
// import from Redux
import { connect } from 'react-redux'
// combine multi HOC

import DriverPaper from '../../components/VerifyContent/DriverPaper'

class DriverPaperContainer extends Component {
  render() {
    const { orderOnSelect } = this.props
    return (
      <DriverPaper orderOnSelect={orderOnSelect} />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    orderOnSelect: state.rfid.orderOnSelect
  }
}
export default connect(mapStateToProps, null)(DriverPaperContainer)