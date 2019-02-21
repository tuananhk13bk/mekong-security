const moment = require('moment')

class DateCompareToCurrent {
  constructor(dateInput) {
    this.dateInput = dateInput
  }
  // split date to object with date, month, year key
  splitDate(dateInput) {
    const dateArr = dateInput.split("-")
    const result = {
      day: parseInt(dateArr[0]),
      month: parseInt(dateArr[1]),
      year: parseInt(dateArr[2])
    }
    return result
  // compare date method
  }
  compareToCurrent() {
    const VALID = 'VALID'
    const WARNING = 'WARNING'
    const EXPIRED = 'EXPIRED'

    // convert to object
    const dateInputToObject = this.splitDate(this.dateInput)
    const currentDateToObject = this.splitDate(moment().format('DD-MM-YYYY'))

    if (currentDateToObject.year < dateInputToObject.year) {
      return VALID
    }
    else if (currentDateToObject.year > dateInputToObject.year) {
      return EXPIRED
    }
    else {
      if (currentDateToObject.month < dateInputToObject.month) {
        return VALID
      }
      else if (currentDateToObject.month > dateInputToObject.month) {
        return EXPIRED
      }
      else {
        if (currentDateToObject.day <= dateInputToObject.day) {
          return WARNING
        }
        else return EXPIRED
      }
    }
  }
}

export default DateCompareToCurrent