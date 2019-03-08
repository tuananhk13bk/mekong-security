import {
  READ_RFID_CODE,
  RECEIVE_DATA_FROM_DB,
  SUBMIT_RFID_CODE,
  CHANGE_TEXT_FIELD,
  SELECT_ORDER_TO_VERIFY,
  CLEAR_ALL_RFID_STATE
} from '../actions/actionTypes'
// import my ultility
import DataProcess from '../utils/DataProcess'

const initState = {
  codeOnFind: '',
  valueInTextFieldIsFound: false,
  rfidCodeList: [],
  workOrderCodeList: [],
  dataFromDb: [],
  orderListOnSearch: [],
  orderOnSelect: {
    workOrderCode: '',
    rfidSysNum: '',
    cusFullName: '',
    productFullName: '',
    amount: '',
    unit: '',
    productType: '',
    status: '',
    driverFullName: '',
    driverIdNum: '',
    driverIdExpdate: '',
    driverLicNum: '',
    driverLicExpdate: '',
    fireFightingCertNum: '',
    fireFightingExpdate: '',
    transCoFullName: '',
    plateNum: '',
    ownerFullName: '',
    vehicleRegCertNum: '',
    vehicleRegCertExpdate: '',
    chemicalTransLicNum: '',
    chemicalTransLicExpdate: '',
    assuranceExpdate: '',
    vehicleInspectationCertExpdate: ''
  }
}

const rfid = (state=initState, action) => {
  switch (action.type) {
    case READ_RFID_CODE:
      return {
        ...state,
        codeOnFind: action.rfidCode
      }
    case RECEIVE_DATA_FROM_DB:
      return {
        ...state,
        dataFromDb: action.dataFromDb,
        rfidCodeList: DataProcess.getCodeList(action.dataFromDb, 'rfidSysNum'),
        workOrderCodeList: DataProcess.getCodeList(action.dataFromDb, 'workOrderCode')
      }
    case SUBMIT_RFID_CODE:
      return {
        ...state,
        orderOnSelect: DataProcess.mergeTwoObject(
          {},
          state.orderOnSelect,
          DataProcess.filterOrderOnSelected(state.dataFromDb, state.codeOnFind)
        )
      }
    
    case SELECT_ORDER_TO_VERIFY:
      return {
        ...state,
        orderOnSelect: DataProcess.mergeTwoObject(
          state.orderOnSelect,
          action.orderOfThisPaper
        )
      }

    case CHANGE_TEXT_FIELD:
      return {
        ...state,
        codeOnFind: action.value,
        valueInTextFieldIsFound: state.rfidCodeList.includes(action.value),
        orderListOnSearch: DataProcess.filterAllOrderOnSearch(state.dataFromDb, action.value)
      }
    case CLEAR_ALL_RFID_STATE:
      return DataProcess.mergeTwoObject(state, initState)
    default:
      return state
  }
}

export default rfid