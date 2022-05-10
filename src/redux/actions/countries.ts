import axios from 'axios'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import {
  LOAD_COUNTRIES_FAILURE,
  LOAD_COUNTRIES_REQUEST,
  LOAD_COUNTRIES_SUCCESS,
  LOAD_COUNTRY_BY_NAME_REQUEST,
  LOAD_COUNTRY_BY_NAME_SUCCESS,
  LOAD_COUNTRY_BY_NAME_FAILURE,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  CountriesPropType,
  LoadCountriesSuccessAction,
  LoadCountriesRequestAction,
  LoadCountriesFailureAction,
  LoadCountryByNameRequestAction,
  LoadCountryByNameSuccessAction,
  LoadCountryByNameFailureAction,
  AddToFavouritesAction,
  RemoveFromFavouritesAction,
  CountriesState,
  CountryType,
} from '../../types'

export function loadCountriesRequest(): LoadCountriesRequestAction {
  return {
    type: LOAD_COUNTRIES_REQUEST,
  }
}

export function loadCountriesSuccess(
  payload: CountriesPropType
): LoadCountriesSuccessAction {
  return {
    type: LOAD_COUNTRIES_SUCCESS,
    payload,
  }
}

export function loadCountriesFailure(msg: string): LoadCountriesFailureAction {
  return {
    type: LOAD_COUNTRIES_FAILURE,
    payload: {
      msg,
    },
  }
}

export function loadCountryByNameRequest(): LoadCountryByNameRequestAction {
  return {
    type: LOAD_COUNTRY_BY_NAME_REQUEST,
  }
}

export function loadCountryByNameSuccess(
  payload: CountriesPropType
): LoadCountryByNameSuccessAction {
  return {
    type: LOAD_COUNTRY_BY_NAME_SUCCESS,
    payload,
  }
}

export function loadCountryByNameFailure(
  msg: string
): LoadCountryByNameFailureAction {
  return {
    type: LOAD_COUNTRY_BY_NAME_FAILURE,
    payload: {
      msg,
    },
  }
}

export function addToFavourites(country: CountryType): AddToFavouritesAction {
  return {
    type: ADD_TO_FAVOURITES,
    payload: {
      country,
    },
  }
}

export function removeFromFavourites(
  country: CountryType
): RemoveFromFavouritesAction {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: {
      country,
    },
  }
}

export function getCountries() {
  return async function (
    dispatch: ThunkDispatch<CountriesState, void, Action>
  ) {
    dispatch(loadCountriesRequest())
    try {
      const res = await axios.get('https://restcountries.com/v3.1/all')
      const countriesData = res.data.map((obj: any) => ({
        ...obj,
        isInFavourites: false,
        id: obj.name.common,
      }))
      dispatch(loadCountriesSuccess(countriesData))
    } catch (error: any) {
      if (error.response.status === 404) {
        dispatch(loadCountriesFailure('Resourse is not found'))
        return
      }
      dispatch(loadCountriesFailure('Something went wrong'))
    }
  }
}

export function getCountryByName(name: any) {
  return async function (
    dispatch: ThunkDispatch<CountriesState, void, Action>
  ) {
    dispatch(loadCountryByNameRequest())
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
      const countriesData = res.data.map((obj: any) => ({
        ...obj,
        isInFavourites: false,
        id: obj.name.common,
      }))
      dispatch(loadCountryByNameSuccess(countriesData))
    } catch (error: any) {
      if (error.response.status === 404) {
        dispatch(loadCountryByNameFailure('Resourse is not found'))
        return
      }
      dispatch(loadCountryByNameFailure('Something went wrong'))
    }
  }
}
