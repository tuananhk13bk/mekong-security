import {
  SET_ORDER_PAPER_BACKGROUND_COLOR
} from '../actions/actionList'

const initState = {
  orderPaperBackgroundColor: ''
}

const orderPaper = (state=initState, action) => {
  switch (action.type) {
    case SET_ORDER_PAPER_BACKGROUND_COLOR:
      return {
        ...state,
        orderPaperBackgroundColor: action.color
      }
    default:
      return state
  }
}

export default orderPaper