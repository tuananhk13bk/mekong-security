import React, { Component } from 'react'
// import APIs
import DateCompareToCurrent from '../../../utils/DateCompareToCurrent'
// import material-icons
import Warning from '@material-ui/icons/Warning'
import CheckCircle from '@material-ui/icons/CheckCircle'

class ValidationStatusIcon extends Component {
  render() {
    const { inputDate } = this.props
    const dateCompareToCurrent = new DateCompareToCurrent(inputDate)
    const validationStatus = dateCompareToCurrent.compareToCurrent()
    let iconColor
    if (validationStatus === 'WARNING') {
      // yellow
      iconColor = '#fdd835'
    }
    else if (validationStatus === 'EXPIRED') {
      iconColor = 'red'
    } else {
      iconColor = 'green'
    }
    return (
      validationStatus === 'VALID'
        ? <CheckCircle style={{ color: iconColor }} />
        : <Warning style={{ color: iconColor }} />
    )
  }
}

export default ValidationStatusIcon