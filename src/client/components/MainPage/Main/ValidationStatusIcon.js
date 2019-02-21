import React from 'react'
// import APIs
import DateCompareToCurrent from '../../../utils/DateCompareToCurrent'
// import material-icons
import Warning from '@material-ui/icons/Warning'
import CheckCircle from '@material-ui/icons/CheckCircle'

export default ({ inputDate }) => {
  const dateCompareToCurrent = new DateCompareToCurrent(inputDate)
  const validationStatus = dateCompareToCurrent.compareToCurrent()
  let iconColor
  if (validationStatus === 'WARNING') {
    iconColor = '#fdd835'
  }
  else if (validationStatus === 'EXPIRED') {
    iconColor = 'red'
  } else {
    iconColor = 'green'
  }

  if (validationStatus === 'VALID') {
    return <CheckCircle style={{ color: iconColor }} />
  } else {
    return <Warning style={{ color: iconColor }} />
  }
}