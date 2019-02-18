import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
// import actions
import { toggleDialog } from '../../../../actions'
// import from redux
import { bindActionCreators } from 'redux'
// import child components
import ScanDialogContent from './ScanDialogContent'

const styles = theme => ({
  button: {
    fontSize: 11,
    padding: 10,
  },
})

class CreateScanDialog extends Component {
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
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={() => toggleDialog()}
        >
          Quick scan RFID
        </Button>

        <ScanDialogContent/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dialogIsOpen: state.dialog.dialogIsOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleDialog,
                            }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(CreateScanDialog)


