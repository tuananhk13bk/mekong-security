import React, { Component } from 'react'
// Import from Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import actions
import { changeTextField } from '../../actions'
// combine multi HOC
import { compose } from 'recompose'

import Header from '../../components/OrderListContent/Header'

class OrderHeaderContainer extends Component {

  render() {
    const { codeOnFind, orderOnSelect, changeTextField } = this.props
    return (
      <Header 
        codeOnFind={codeOnFind}
        orderOnSelect={orderOnSelect}
        changeTextField={changeTextField}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    codeOnFind: state.rfid.codeOnFind,
    orderOnSelect: state.rfid.orderOnSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeTextField,
                            }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHeaderContainer)