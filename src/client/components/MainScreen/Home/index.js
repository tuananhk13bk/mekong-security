import React, { Component } from 'react'
import Header from './Header'
import OrderPaper from './OrderPaper/'
// import APIs
import getAllOrder from '../../../apis/getAllOrder'
// import actions
import { receiveDataFromDb } from '../../../actions'
// import from redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import from material-ui
import { withStyles } from '@material-ui/core/styles'
// combine multi HOC
import { compose } from 'recompose'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    marginBottom: 10
  }
}

class Home extends Component {

  componentDidMount() {
    const { receiveDataFromDb } = this.props
    getAllOrder()
      .then(data => receiveDataFromDb(data))
  }

  render() {
    const {
      // state
      dataFromDb,
      orderListOnSearch,
      codeOnFind,
      // styles
      classes
    } = this.props
    // const orderArrayToMap = (codeOnFind === '' ? dataFromDb : dataFromDb)
    // console.log(orderArrayToMap)
    let orderArrayToMap
    if (codeOnFind === '') {
      orderArrayToMap = dataFromDb
    } else {
      orderArrayToMap = orderListOnSearch
    }
    return (
      <div >
        <Header/>
        {orderArrayToMap.map(element => {
          return (
            <OrderPaper
              key={element.workOrderCode}
              orderOfThisPaper={element}
            />
          )
        })}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataFromDb: state.rfidCodeReducer.dataFromDb,
    orderListOnSearch: state.rfidCodeReducer.orderListOnSearch,
    codeOnFind: state.rfidCodeReducer.codeOnFind
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({receiveDataFromDb,
                            }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Home)