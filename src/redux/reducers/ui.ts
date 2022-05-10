import {
  SET_FILTER_VALUE,
  RESET_FILTER_VALUE,
  UiActions,
  UiState,
} from '../../types'

const initialState: UiState = {
  filterValue: '',
}

export function uiReducer(state = initialState, action: UiActions) {
  switch (action.type) {
  case SET_FILTER_VALUE:
    return {
      ...state,
      filterValue: action.payload.filterValue,
    }
  case RESET_FILTER_VALUE:
    return {
      ...state,
      filterValue: '',
    }
  default:
    return state
  }
}
