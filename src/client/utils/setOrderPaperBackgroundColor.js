import DateCompareToCurrent from './DateCompareToCurrent'

const setOrderPaperBackgroundColor = (dateToCheckList) => {
  for (let date of dateToCheckList) {
    const dateCompareToCurrent = new DateCompareToCurrent(date)
    const validationStatus = dateCompareToCurrent.compareToCurrent()

    if (validationStatus === 'EXPIRED' || validationStatus === 'WARNING') {
      // yellow color
      return '#fdd835'
      
    } else {
      return 'white'
    }
  }
}

export default setOrderPaperBackgroundColor
