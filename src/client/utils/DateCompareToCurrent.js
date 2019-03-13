const moment = require('moment')

class DateCompareToCurrent {
  constructor(dateInput) {
    this.dateInput = dateInput
  }

  checkInputIsNull = () => {
    if (this.dateInput) {
      return false
    } else { 
      return true
    }
  }
  // return days of month
  getDaysOfMonth(month, year) {
    return new Date(year, month, 0).getDate()
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
    if (this.checkInputIsNull()) return EXPIRED
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
    // within 20 days, return warning
    else {
      if (dateInputToObject.month - dateCurrentToObject.month >= 2) {
        
        return VALID
      }
      
      else if (dateInputToObject.month - dateCurrentToObject.month === 1) {
        
        const { month, year } = dateCurrentToObject
        const daysOfMonthCurrent = this.getDaysOfMonth(year, month)
        
        const daysRemainCurrent = Math.abs(daysOfMonthCurrent - dateCurrentToObject.day)
        console.log(daysOfMonthCurrent, daysRemainCurrent)
        console.log(dateInputToObject.day + daysRemainCurrent)
        if (dateInputToObject.day + daysRemainCurrent > 20) {
          
          return VALID
        } else {
          
          return WARNING
        }
      } else if (dateInputToObject.month - dateCurrentToObject.month === 0) {
        
        if (dateInputToObject.day >= dateCurrentToObject.day) {
          return WARNING
        } else {
          return EXPIRED
        }
      } else {
        
        return EXPIRED
      }
    }
  }
}

export default DateCompareToCurrent