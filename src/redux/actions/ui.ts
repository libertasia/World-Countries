import { SET_FILTER_VALUE, SetFilterValueAction } from '../../types'

export function SetFilterValue(payload: string): SetFilterValueAction {
  return {
    type: SET_FILTER_VALUE,
    payload,
  }
}
