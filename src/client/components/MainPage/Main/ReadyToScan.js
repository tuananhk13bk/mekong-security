import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import actions
import { toggleDialog } from '../../../actions';
// import from redux
import { bindActionCreators } from 'redux'
// import child components
import ScanDialogContent from '../Home/OrderPaper/ScanDialogContent'

const styles = theme => ({
  button: {
    padding: 15,
    width: '100%',
    height: 'auto'
  },
  buttonText: {
    color: theme.palette.primary.light,
    fontWeight: 'bold'
  }
})

class ReadyToScan extends Component {
  render() {
    const {
      // style
      classes,
      // state
      // actions
      toggleDialog
    } = this.props
    return (
      <div>
        <Button
        className={classes.button}
        onClick={() => toggleDialog()}
        >
          <Typography 
            className={classes.buttonText}
            variant="h5"
          >
            Sẵn sàng để quẹt thẻ...
          </Typography>
        </Button>

        <ScanDialogContent/>
      </div>
    )   
  }
}

const mapStateToProps = (state) => {
  return {
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleDialog,
                            }, dispatch)
}

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(ReadyToScan)


