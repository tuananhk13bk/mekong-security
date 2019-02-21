import {
  READ_RFID_CODE,
  RECEIVE_DATA_FROM_DB,
  SUBMIT_RFID_CODE,
  CHANGE_TEXT_FIELD,
  SELECT_ORDER_TO_VERIFY,
  TOGGLE_DIALOG,
  CLEAR_ALL_RFID_STATE
} from './actionList'

export const readRfidCode = rfidCode => {
  return {
    type: READ_RFID_CODE,
    rfidCode
  }
}

export const receiveDataFromDb = dataFromDb => {
  return {
    type: RECEIVE_DATA_FROM_DB,
    dataFromDb
  }
}

export const submitRfidCode = () => {
  return {
    type: SUBMIT_RFID_CODE,
  }
}

export const changeTextField = (value) => {
  return {
    type: CHANGE_TEXT_FIELD,
    value
  }
}

export const selectOrderToVerify = (orderOfThisPaper) => {
  return {
    type: SELECT_ORDER_TO_VERIFY,
    orderOfThisPaper
  }
}

export const toggleDialog = () => {
  return {
    type: TOGGLE_DIALOG
  }
}

export const clearAllRfidState = () => {
  return {
    type: CLEAR_ALL_RFID_STATE
  }
}