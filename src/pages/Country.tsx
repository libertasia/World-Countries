import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { visuallyHidden } from '@mui/utils'

import CircularLoading from '../components/CircularLoading'
import CountryCard from '../components/CountryCard'
import StickyFooter from '../components/StickyFooter'
import { AppState, CountriesState } from '../types'
import { getCountryByName, resetFilterValue } from '../redux/actions'

export default function Country() {
  const dispatch = useDispatch()

  const { id } = useParams<{ id: string }>()

  const { isCountryDataLoaded, isLoading, error, country } = useSelector(
    (state: AppState) => state.countriesData
  )

  const countryData = useSelector((state: AppState) =>
    state.countriesData.countries.find((el) => el.id === id)
  )

  useEffect(() => {
    dispatch(resetFilterValue())

    if (!countryData && !isCountryDataLoaded) {
      ;(dispatch as ThunkDispatch<CountriesState, void, Action>)(
        getCountryByName(id?.toLowerCase())
      )
    }
  }, [dispatch, isCountryDataLoaded, countryData, id])

  const countryInfo = !countryData ? country[0] : countryData

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={visuallyHidden}
        >
          Country page
        </Typography>
        {error && <p>{error}</p>}
        {isLoading && <CircularLoading />}
        {countryInfo && <CountryCard country={countryInfo} />}
      </Container>
      <StickyFooter />
    </Box>
  )
}
