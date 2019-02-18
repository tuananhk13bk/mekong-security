import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Content from './Content'
// Import actions
import { selectOrderToVerify } from '../../../../actions'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Combine multi HOC
import { compose } from 'recompose'
// import components
import CreateScanRfidDialog from './CreateScanRfidDialog'

const styles = {
  card: {
    marginBottom: 15
  }
}

class OrderPaper extends Component {
  render() {
    const { // style
            classes, 
            // props from parent
            orderOfThisPaper,
            // actions
            selectOrderToVerify
          } = this.props
    // already checkout
    if (orderOfThisPaper.status.toLowerCase().replace(/-| /g, "") === 'checkout') {
      const backgrounColor = '#F1EA7F'
      return (
        <Card 
          // condition style
          style={{ background: backgrounColor }}
          // class
          className={classes.card}
        >
          <Content orderOfThisPaper={orderOfThisPaper} />
        </Card>
      )
    }
    // already checkin
    else if (orderOfThisPaper.status.toLowerCase().replace(/-| /g, "") === 'checkin') {
      const backgrounColor = null
      return (
        <Card 
          // condition style
          style={{ background: backgrounColor }}
          // class
          className={classes.card}
        >
          <Content orderOfThisPaper={orderOfThisPaper}>
            <CreateScanRfidDialog />
          </Content>
        </Card>
      )
    }
    // not checkin
    else {
      const backgrounColor = null
      return (
        <Card 
          // condition style
          style={{ background: backgrounColor }}
          // class
          className={classes.card}
        >
          <CardActionArea
            component={Link}
            to="/main"
            onClick={()=> selectOrderToVerify(orderOfThisPaper)}
          >
            <Content orderOfThisPaper={orderOfThisPaper} />
          </CardActionArea>
        </Card>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectOrderToVerify }, dispatch)
}

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(OrderPaper)