import React, { Component } from 'react'
import { connect } from 'react-redux'
// import actions
import { toggleDialog } from '../../actions';
// import from redux
import { bindActionCreators } from 'redux'
// import child components
import OpenDialogButton from '../../components/VerifyContent/OpenDialogButton'

class OpenDialogButtonContainer extends Component {
  render() {
    const {
      // actions
      toggleDialog
    } = this.props
    return (
      <div>
        <OpenDialogButton toggleDialog={toggleDialog}/>
      </div>
    )   
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleDialog,
                            }, dispatch)
}

export default connect(null, mapDispatchToProps)(OpenDialogButtonContainer)


