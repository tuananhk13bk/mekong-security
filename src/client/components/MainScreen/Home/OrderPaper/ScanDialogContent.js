import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
// import actions
import { toggleDialog } from '../../../../actions'
// import from redux
import { bindActionCreators } from 'redux'
// import pictures
import WarningPicture from '../../../../assets/Warning.png'

const styles = theme => ({
  typography: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 200,
    marginRight: 200
  },
})

class ScanDialogContent extends Component {
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
      <div>
        <Dialog
          open={dialogIsOpen}
          onClose={() => toggleDialog()}
        >
          <Typography 
            className={classes.typography} 
            color="primary"
            variant="h6"
            >
            <img src={WarningPicture} alt="Warning Picture" />
            <br/>
            Scanning
            <br/>
            RFID31
          </Typography>
        </Dialog>
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
)(ScanDialogContent)


