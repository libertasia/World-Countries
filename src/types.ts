// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const LOAD_COUNTRIES_REQUEST = 'LOAD_COUNTRIES_REQUEST'
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS'
export const LOAD_COUNTRIES_FAILURE = 'LOAD_COUNTRIES_FAILURE'

// Enum
export enum DialogType {}
// SignIn = 'signIn',
// SignUp = 'signUp',

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type CountriesActions =
  | LoadCountriesRequestAction
  | LoadCountriesSuccessAction
  | LoadCountriesFailureAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  // dialogOpen: {
  //   [key in DialogType]?: boolean
  // }
}

export type AppState = {
  countriesData: CountriesState
  // ui: UiState,
}

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

export type CountriesState = {
  countries: CountryType[]
  isDataLoaded: boolean
  isLoading: boolean
  error: string
}
