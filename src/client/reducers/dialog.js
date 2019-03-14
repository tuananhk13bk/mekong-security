import {
  TOGGLE_DIALOG,
  CHANGE_RFID_CODE_TEXT_FIELD,
  CHANGE_RFID_READER_CODE_TEXT_FIELD,
  EMIT_SUBMIT_RFID_ERROR
} from '../actions/actionTypes'

const initState = {
  dialogIsOpen: false,
  rfidCodeInTextField: '',
  rfidReadercodeInTextField: '',
  errorOnSubmit: false
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
        rfidCodeInTextField: action.value,
      }

    case CHANGE_RFID_READER_CODE_TEXT_FIELD:
      return {
        ...state,
        rfidReadercodeInTextField: action.value,
      }
    case EMIT_SUBMIT_RFID_ERROR:
      return {
        ...state,
        errorOnSubmit: true
      }
    default:
      return state
  }
}

export default dialog