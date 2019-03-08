// Import child reducers
import rfid from './rfid'
import dialog from './dialog'
import orderPaper from './orderPaper'

import { combineReducers } from 'redux'

const root = combineReducers({
  rfid,
  dialog,
  orderPaper
})

export default root