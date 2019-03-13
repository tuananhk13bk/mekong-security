import React, { Component } from 'react'
import { withRouter } from 'react-router'
import CardActionArea from '@material-ui/core/CardActionArea'
// Import actions
import { selectOrderToVerify, selectRadioButton } from '../../../actions'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Combine multi HOC
import { compose } from 'recompose'
// import utils
import { setOrderPaperBackgroundColor } from '../../../utils'
// import constants
import { ORDER_TO_AUTHENTICATE, ORDER_TO_REASSIGN } from '../../../constants/tabId'

import Content from '../../../components/OrderListContent/OrderPaper/Content'

import OrderPaper from '../../../components/OrderListContent/OrderPaper/OrderPaper'

class OrderPaperContainer extends Component {

  handleClickAuthenticate = () => {
    const { history, selectOrderToVerify, orderOfThisPaper } = this.props
    selectOrderToVerify(orderOfThisPaper)
    history.push('/main')
  }

  render() {
    const {
      // props from parent
      orderOfThisPaper,
      // state
      tabIdOnSelect,
      // actions
      selectRadioButton
    } = this.props
    const dateToCheckList = [
      orderOfThisPaper.driverIdExpdate,
      orderOfThisPaper.driverLicExpdate,
      orderOfThisPaper.fireFightingExpdate,
      orderOfThisPaper.vehicleRegCertExpdate,
      orderOfThisPaper.chemicalTransLicExpdate,
      orderOfThisPaper.assuranceExpdate,
      orderOfThisPaper.vehicleInspectationCertExpdate
    ]
    let backgroundColor
    let cardContent
    if (tabIdOnSelect === ORDER_TO_AUTHENTICATE) {
      backgroundColor = setOrderPaperBackgroundColor(dateToCheckList)
      cardContent = (
        <CardActionArea
          onClick={this.handleClickAuthenticate}
        >
          <Content 
            orderOfThisPaper={orderOfThisPaper} 
          />
        </CardActionArea>
      )
    } else if (tabIdOnSelect === ORDER_TO_REASSIGN) {
      backgroundColor = 'white'
      cardContent = (
        <CardActionArea
          onClick={() => selectRadioButton(orderOfThisPaper.workOrderCode)}
        >
          <Content
            tabIdOnSelect={tabIdOnSelect}
            orderOfThisPaper={orderOfThisPaper}
          ></Content>
        </CardActionArea>
      )

      // ORDER_TO_RETURN
    } else {
      backgroundColor = 'white'
      cardContent = (
        <Content 
          tabIdOnSelect={tabIdOnSelect}
          orderOfThisPaper={orderOfThisPaper} 
        />
      )
    }

    return (
      <OrderPaper
        backgroundColor={backgroundColor}
        cardContent={cardContent}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { tabIdOnSelect } = state.orderPaper
  return {
    tabIdOnSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectOrderToVerify,
    selectRadioButton
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(OrderPaperContainer)