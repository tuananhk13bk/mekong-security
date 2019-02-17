// Import child reducers
import rfidCodeReducer from './rfidCodeReducer'
import dialog from './dialog'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  rfidCodeReducer,
  dialog
})

export default rootReducer