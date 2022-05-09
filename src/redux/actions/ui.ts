import { SET_FILTER_VALUE, SetFilterValueAction } from '../../types'

export function SetFilterValue(filterValue: string): SetFilterValueAction {
  return {
    type: SET_FILTER_VALUE,
    payload: {
      filterValue,
    },
  }
}
