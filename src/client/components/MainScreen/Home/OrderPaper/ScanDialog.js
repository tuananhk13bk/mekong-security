import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import pictures
import WarningPicture from '../../../../assets/Warning.png'
import { toggleDialog } from '../../../../actions';

const styles = {

}

class ScanDialog extends Component {
  render() {
    const {
      // style
      classes,
      // state
      dialogIsOpen,
      // actions
      toggleDialog
    } = this.props
    return (
      <Dialog
        open={dialogIsOpen}
        onClose={() => toggleDialog()}
      >
        <Typography>
          <img src={WarningPicture} alt="Warning Picture" />
          scanning
          <br/>
          RFID31
        </Typography>
      </Dialog>
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
)(ScanDialog)


