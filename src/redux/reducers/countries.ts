import {
  CountriesActions,
  CountriesState,
  LOAD_COUNTRIES_FAILURE,
  LOAD_COUNTRIES_REQUEST,
  LOAD_COUNTRIES_SUCCESS,
} from '../../types'

const initialState: CountriesState = {
  countries: [],
  isDataLoaded: false,
  isLoading: false,
  error: '',
}

export function countriesReducer(
  state = initialState,
  action: CountriesActions
) {
  switch (action.type) {
  case LOAD_COUNTRIES_REQUEST:
    return {
      ...state,
      isLoading: true,
    }
  case LOAD_COUNTRIES_SUCCESS:
    return {
      ...state,
      countries: action.payload,
      isLoading: false,
      isDataLoaded: true,
    }
  case LOAD_COUNTRIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload.msg,
    }
  default:
    return state
  }
}
