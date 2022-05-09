// Action types
export const LOAD_COUNTRIES_REQUEST = 'LOAD_COUNTRIES_REQUEST'
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS'
export const LOAD_COUNTRIES_FAILURE = 'LOAD_COUNTRIES_FAILURE'
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

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
  | AddToFavouritesAction
  | RemoveFromFavouritesAction

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
