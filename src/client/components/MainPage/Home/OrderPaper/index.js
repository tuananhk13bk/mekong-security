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
// import utils
import setOrderPaperBackgroundColor from '../../../../utils/setOrderPaperBackgroundColor'

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit*3
  }
})

class OrderPaper extends Component {
  render() {
    const { // style
            classes, 
            // props from parent
            orderOfThisPaper,
            // actions
            selectOrderToVerify
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
    const backgroundColor = setOrderPaperBackgroundColor(dateToCheckList)
    // not Authenticated
    return (
      <Card 
        className={classes.card}
        style={{ background: backgroundColor }}
      >
        <CardActionArea
          component={Link}
          to="/main"
          onClick={()=> selectOrderToVerify(orderOfThisPaper)}
        >
          <Content 
            orderOfThisPaper={orderOfThisPaper} 
          />
        </CardActionArea>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectOrderToVerify }, dispatch)
}

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(OrderPaper)