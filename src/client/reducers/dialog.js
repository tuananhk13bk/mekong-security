import {
  TOGGLE_DIALOG,
  CHANGE_RFID_CODE_TEXT_FIELD,
  CHANGE_RFID_READER_CODE_TEXT_FIELD,
  SUBMIT_RFID
} from '../actions/actionTypes'

const initState = {
  dialogIsOpen: false,
  rfidCodeInTextField: '',
  rfidReadercodeInTextField: '',
  rfidSubmitError: false
}

const dialog = (state=initState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        dialogIsOpen: !state.dialogIsOpen
      }

    case CHANGE_RFID_CODE_TEXT_FIELD:
      return {
        ...state,
        rfidCodeInTextField: action.value
      }

    case CHANGE_RFID_READER_CODE_TEXT_FIELD:
      return {
        ...state,
        rfidReadercodeInTextField: action.value
      }

    case SUBMIT_RFID:
      return {
        ...state,
        
      }
    default:
      return state
  }
}

export default dialog