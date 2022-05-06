import { combineReducers } from 'redux'

import { countriesReducer } from './countries'
import { uiReducer } from './ui'

export default combineReducers({
  countriesData: countriesReducer,
  ui: uiReducer,
})
