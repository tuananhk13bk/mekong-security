import {
  RECEIVE_DATA_FROM_DB,
  CHANGE_TEXT_FIELD,
  SELECT_ORDER_TO_VERIFY,
  TOGGLE_DIALOG,
  CLEAR_ALL_RFID_STATE,
  SELECT_ORDER_TAB,
  SELECT_RADIO_BUTTON,
  CHANGE_RFID_CODE_TEXT_FIELD,
  CHANGE_RFID_READER_CODE_TEXT_FIELD,
  SUBMIT_RFID
} from './actionTypes'

export const receiveDataFromDb = dataFromDb => {
  return {
    type: RECEIVE_DATA_FROM_DB,
    dataFromDb
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

export const selectOrderTab = (tabId) => {
  return {
    type: SELECT_ORDER_TAB,
    tabId
  }
}

export const selectRadioButton = (radioButtonValue) => {
  return {
    type: SELECT_RADIO_BUTTON,
    radioButtonValue
  }
}

export const changeRfidCodeTextField = (value) => {
  return {
    type: CHANGE_RFID_CODE_TEXT_FIELD,
    value
  }
}

export const changeRfidReaderCodeTextField = (value) => {
  return {
    type: CHANGE_RFID_READER_CODE_TEXT_FIELD,
    value
  }
}

export const submitRfid = () => {
  return {
    type: SUBMIT_RFID
  }
}