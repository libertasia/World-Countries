import { combineReducers } from 'redux'

import { countriesReducer } from './countries'

export default combineReducers({
  countriesData: countriesReducer,
})
