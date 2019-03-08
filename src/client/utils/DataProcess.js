import convertVietnamese from './convertVietnamese'

class DataProcess {
  // Filter order on selected
  static filterOrderOnSelected = (arrayInput, conditionValue) => {
    const arrayFiltered = arrayInput.filter(element => element.rfidSysNum === conditionValue)
    // Destructuring to object [{}] => {}
    return arrayFiltered[0]
  }

  static getCodeList = (arrayInput, conditionValue) => {
    let codeList = []
    arrayInput.forEach(element => {
      codeList.push(element[conditionValue])
    })
    return codeList
  }

  static filterAllOrderOnSearch = (arrayInput, conditionValue) => {
    const result = arrayInput.filter(element => {
      return (
        convertVietnamese(element.workOrderCode)
          .includes(convertVietnamese(conditionValue))
        ||
        convertVietnamese(element.transCoFullName)
          .includes(convertVietnamese(conditionValue))
        ||
        convertVietnamese(element.cusFullName)
          .includes(convertVietnamese(conditionValue))
        ||
        convertVietnamese(element.productFullName)
          .includes(convertVietnamese(conditionValue))
        ||
        convertVietnamese(element.driverFullName)
          .includes(convertVietnamese(conditionValue))
        ||
        convertVietnamese(element.driverIdNum)
          .includes(convertVietnamese(conditionValue))
        ||
        convertVietnamese(element.plateNum)
          .includes(convertVietnamese(conditionValue))
      )
    })
    return result
  }
  // map obj2 to obj1
  static mergeTwoObject = (obj1, obj2) => {
    return Object.assign({}, obj1, obj2)
  }
}

export default DataProcess