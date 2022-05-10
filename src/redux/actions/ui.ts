import {
  SET_FILTER_VALUE,
  RESET_FILTER_VALUE,
  SetFilterValueAction,
  ResetFilterValueAction,
} from '../../types'

export function setFilterValue(filterValue: string): SetFilterValueAction {
  return {
    type: SET_FILTER_VALUE,
    payload: {
      filterValue,
    },
  }
}

export function resetFilterValue(): ResetFilterValueAction {
  return {
    type: RESET_FILTER_VALUE,
  }
}
