const moment = require('moment')

class DateCompareToCurrent {
  constructor(dateInput) {
    this.dateInput = dateInput
    this.daysOfMonthInOrder = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }
  // return days of month
  daysOfMonth(month) {
    return this.daysOfMonthInOrder[month-1]
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
    const dateCurrentToObject = this.splitDate(moment().format('DD-MM-YYYY'))

    if (dateCurrentToObject.year < dateInputToObject.year) {
      // if year is greater, return valid
      return VALID
    }
    else if (dateCurrentToObject.year > dateInputToObject.year) {
      // if year is smaller, return expired
      return EXPIRED
    }
    // check within year
    // within 30 days, return warning
    else {
      if (dateInputToObject.month - dateCurrentToObject.month >= 2) {
        return VALID
      }
      else if (dateInputToObject.month - dateCurrentToObject.month === 1) {
        const daysOfMonthCurrent = this.daysOfMonth(dateCurrentToObject.month)

        const daysRemainCurrent = daysOfMonthCurrent - dateCurrentToObject.day

        console.log(daysRemainCurrent, dateInputToObject.day)

        if (dateInputToObject.day - daysRemainCurrent > 20) {
          return VALID
        } else {
          return WARNING
        }
      }
      else if (dateInputToObject.month - dateCurrentToObject.month === 0) {
        if (dateInputToObject.day >= dateCurrentToObject.day) {
          return WARNING
        }
        else return EXPIRED
      }
      else return EXPIRED
    }
  }
}

export default DateCompareToCurrent