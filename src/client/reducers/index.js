// Import child reducers
import rfidCodeReducer from './rfidCodeReducer'
import dialog from './dialog'
import orderPaper from './orderPaper'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  rfidCodeReducer,
  dialog,
  orderPaper
})

export default rootReducer