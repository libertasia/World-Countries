// Action types
export const LOAD_COUNTRIES_REQUEST = 'LOAD_COUNTRIES_REQUEST'
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS'
export const LOAD_COUNTRIES_FAILURE = 'LOAD_COUNTRIES_FAILURE'
export const LOAD_COUNTRY_BY_NAME_REQUEST = 'LOAD_COUNTRY_BY_NAME_REQUEST'
export const LOAD_COUNTRY_BY_NAME_SUCCESS = 'LOAD_COUNTRY_BY_NAME_SUCCESS'
export const LOAD_COUNTRY_BY_NAME_FAILURE = 'LOAD_COUNTRY_BY_NAME_FAILURE'
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE'
export const RESET_FILTER_VALUE = 'RESET_FILTER_VALUE'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

// Countries
export type CountryType = {
  id: string
  name: {
    common: string
    official: string
  }
  flags: {
    svg: string
  }
  languages: {
    [key: string]: string
  }
  capital: string
  unMember: boolean
  population: number
  region: string
  borders: {
    [key: string]: string
  }
  isInFavourites: boolean
}

export type CountryPropType = {
  country: CountryType
}

export type CountriesPropType = {
  countries: CountryType[]
}

// Actions
export type CountriesActions =
  | LoadCountriesRequestAction
  | LoadCountriesSuccessAction
  | LoadCountriesFailureAction
  | LoadCountryByNameRequestAction
  | LoadCountryByNameSuccessAction
  | LoadCountryByNameFailureAction
  | AddToFavouritesAction
  | RemoveFromFavouritesAction

export type UiActions = SetFilterValueAction | ResetFilterValueAction

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

export type LoadCountryByNameRequestAction = {
  type: typeof LOAD_COUNTRY_BY_NAME_REQUEST
}

export type LoadCountryByNameSuccessAction = {
  type: typeof LOAD_COUNTRY_BY_NAME_SUCCESS
  payload: CountriesPropType
}

export type LoadCountryByNameFailureAction = {
  type: typeof LOAD_COUNTRY_BY_NAME_FAILURE
  payload: {
    msg: string
  }
}

export type AddToFavouritesAction = {
  type: typeof ADD_TO_FAVOURITES
  payload: {
    country: CountryType
  }
}

export type RemoveFromFavouritesAction = {
  type: typeof REMOVE_FROM_FAVOURITES
  payload: {
    country: CountryType
  }
}

export type SetFilterValueAction = {
  type: typeof SET_FILTER_VALUE
  payload: {
    filterValue: string
  }
}

export type ResetFilterValueAction = {
  type: typeof RESET_FILTER_VALUE
}

// State
export type CountriesState = {
  countries: CountryType[]
  country: CountryType[]
  isDataLoaded: boolean
  isCountryDataLoaded: boolean
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
