import {
  SELECT_ORDER_TAB,
  SELECT_RADIO_BUTTON
} from '../actions/actionTypes'

// import constants
import { ORDER_TO_AUTHENTICATE } from '../constants/tabId'

const initState = {
  orderPaperBackgroundColor: '',
  tabIdOnSelect: ORDER_TO_AUTHENTICATE,
  radioButtonOnSelect: ''
}

const orderPaper = (state=initState, action) => {
  switch (action.type) {
    case SELECT_ORDER_TAB:
      return {
        ...state,
        tabIdOnSelect: action.tabId
      }
    case SELECT_RADIO_BUTTON:
      return {
        ...state,
        radioButtonOnSelect: action.radioButtonValue
      }
    default:
      return state
  }
}

export default orderPaper