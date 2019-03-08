import React, { Component } from 'react'
import Header from './Header'
import OrderPaper from './OrderPaper/'
// import APIs
import readAllOrder from '../../../apis/readAllOrder'
// import actions
import { receiveDataFromDb } from '../../../actions'
// import from redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import from material-ui
import { withStyles } from '@material-ui/core/styles'
// combine multi HOC
import { compose } from 'recompose'

const styles = theme => ({
})

class Home extends Component {

  componentDidMount() {
    const { receiveDataFromDb } = this.props
    readAllOrder()
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
    dataFromDb: state.rfid.dataFromDb,
    orderListOnSearch: state.rfid.orderListOnSearch,
    codeOnFind: state.rfid.codeOnFind
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