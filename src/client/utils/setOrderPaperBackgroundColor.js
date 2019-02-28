import DateCompareToCurrent from './DateCompareToCurrent'

const setOrderPaperBackgroundColor = (dateToCheckList) => {
  if (expiredAndWarning(dateToCheckList)) {
    // yellow color
    return '#fdd835'
  } else {
    return 'white'
  }
}

const expiredAndWarning = (dateToCheckList) => {
  for (let date of dateToCheckList) {
    const dateCompareToCurrent = new DateCompareToCurrent(date)
    const validationStatus = dateCompareToCurrent.compareToCurrent()
    if (validationStatus === 'EXPIRED' || validationStatus === 'WARNING') {
      // yellow color
      return true
    } else {
      return false
    }
  }
}

export default setOrderPaperBackgroundColor
