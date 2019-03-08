import {
  TOGGLE_DIALOG
} from '../actions/actionTypes'

const initState = {
  dialogIsOpen: false
}

const dialog = (state=initState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        dialogIsOpen: !state.dialogIsOpen
      }
    default:
      return state
  }
}

export default dialog