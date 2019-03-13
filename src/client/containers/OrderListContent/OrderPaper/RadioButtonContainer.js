import React, { Component } from 'react';
// import from redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import actions
import { selectRadioButton } from '../../../actions'
import RadioButton from '../../../components/OrderListContent/OrderPaper/RadioButton'

class RadioButtonContainer extends Component {

  render() {
    const {
      // states
      radioButtonOnSelect,
      // props from parent
      workOrderCode
    } = this.props
    return (
      <RadioButton
        radioButtonOnSelect={radioButtonOnSelect}
        workOrderCode={workOrderCode}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { radioButtonOnSelect } = state.orderPaper
  return {
    radioButtonOnSelect
  }
}

export default connect(mapStateToProps)(RadioButtonContainer)