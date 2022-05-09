import {
  ADD_TO_FAVOURITES,
  CountriesActions,
  CountriesState,
  LOAD_COUNTRIES_FAILURE,
  LOAD_COUNTRIES_REQUEST,
  LOAD_COUNTRIES_SUCCESS,
  REMOVE_FROM_FAVOURITES,
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
  case ADD_TO_FAVOURITES:
    const countries = [...state.countries]
    const countryIndex = countries.findIndex(
      (item) => item.id === action.payload.country.id
    )
    const favouriteCountry = { ...countries[countryIndex] }
    favouriteCountry.isInFavourites = true
    countries[countryIndex] = favouriteCountry
    return {
      ...state,
      countries: countries,
    }
  case REMOVE_FROM_FAVOURITES:
    const modifiedCountries = [...state.countries]
    const notFavouriteCountryIndex = modifiedCountries.findIndex(
      (item) => item.id === action.payload.country.id
    )
    const notFavouriteCountry = {
      ...modifiedCountries[notFavouriteCountryIndex],
    }
    notFavouriteCountry.isInFavourites = false
    modifiedCountries[notFavouriteCountryIndex] = notFavouriteCountry
    return {
      ...state,
      countries: modifiedCountries,
    }
  default:
    return state
  }
}
