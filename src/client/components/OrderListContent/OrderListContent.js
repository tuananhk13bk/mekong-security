import React, { Component } from 'react'
// import from material-ui
import { withStyles } from '@material-ui/core/styles'

// import components
import TabNavigationContainer from '../../containers/OrderListContent/TabNavigation/TabNavigationContainer';
import Footer from '../Footer'
import OrderHeaderContainer from '../../containers/OrderListContent/OrderHeaderContainer'
import OrderPaperContainer from '../../containers/OrderListContent/OrderPaper/OrderPaperContainer'

const styles = theme => ({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1
  },
  footerContainer: {
    marginBottom: theme.spacing.unit * 2
  }
})

class OrderListContent extends Component {

  render() {
    const {
      classes,
      orderArrayToMap
    } = this.props
    return (
      <div className={classes.rootContainer}>
        <div className={classes.mainContent}>
          <OrderHeaderContainer/>
          <TabNavigationContainer/>
          {orderArrayToMap.map(element => {
            return (
              <OrderPaperContainer
                key={element.workOrderCode}
                orderOfThisPaper={element}
              />
            )
          })}
        </div>
        <div className={classes.footerContainer}>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(OrderListContent)