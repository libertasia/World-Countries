// Action types
export const LOAD_COUNTRIES_REQUEST = 'LOAD_COUNTRIES_REQUEST'
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS'
export const LOAD_COUNTRIES_FAILURE = 'LOAD_COUNTRIES_FAILURE'
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE'

// Countries
export type CountryType = {
  id: string
  name: {
    common: string
  }
  flags: {
    svg: string
  }
  languages: {
    [key: string]: string
  }
  population: number
  region: string
  isInFavourites: boolean
}

export type CountriesPropType = {
  countries: CountryType[]
}

// Actions
export type CountriesActions =
  | LoadCountriesRequestAction
  | LoadCountriesSuccessAction
  | LoadCountriesFailureAction

export type UiActions = SetFilterValueAction

export type LoadCountriesRequestAction = {
  type: typeof LOAD_COUNTRIES_REQUEST
}

export type LoadCountriesSuccessAction = {
  type: typeof LOAD_COUNTRIES_SUCCESS
  payload: CountriesPropType
}

export type LoadCountriesFailureAction = {
  type: typeof LOAD_COUNTRIES_FAILURE
  payload: {
    msg: string
  }
}

export type SetFilterValueAction = {
  type: typeof SET_FILTER_VALUE
  payload: string
}

// State
export type CountriesState = {
  countries: CountryType[]
  isDataLoaded: boolean
  isLoading: boolean
  error: string
}

export type UiState = {
  filterValue: string
}

export type AppState = {
  countriesData: CountriesState
  ui: UiState
}

// Other Types
export type OrderType = 'asc' | 'desc'

export type TableHeaderPropType = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof CountryType
  ) => void
  order: OrderType
  orderBy: string
}

export type TableRowItemPropType = {
  country: CountryType
}
