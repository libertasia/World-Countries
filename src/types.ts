// Action types
export const LOAD_COUNTRIES_REQUEST = 'LOAD_COUNTRIES_REQUEST'
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS'
export const LOAD_COUNTRIES_FAILURE = 'LOAD_COUNTRIES_FAILURE'

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

// State
export type CountriesState = {
  countries: CountryType[]
  isDataLoaded: boolean
  isLoading: boolean
  error: string
}

export type AppState = {
  countriesData: CountriesState
  // ui: UiState,
}
