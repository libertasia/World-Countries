import React, { useEffect } from 'react'
import { Action } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import AppHeader from '../components/AppHeader'
import CountriesTable from '../components/CountriesTable'
import StickyFooter from '../components/StickyFooter'
import { AppState, CountriesState } from '../types'
import { getCountries } from '../redux/actions'
import { getFilteredCountries } from '../helpers'

export default function Home() {
  const dispatch = useDispatch()

  const { countries, isDataLoaded, isLoading, error } = useSelector(
    (state: AppState) => state.countriesData
  )

  const { filterValue } = useSelector((state: AppState) => state.ui)

  useEffect(() => {
    if (!isDataLoaded) {
      ;(dispatch as ThunkDispatch<CountriesState, void, Action>)(getCountries())
    }
  }, [dispatch, isDataLoaded])

  const filteredCountries = getFilteredCountries(countries, filterValue)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppHeader countries={countries} />
        <Container
          component="main"
          maxWidth="lg"
          sx={{
            mt: 8,
            mb: 2,
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Home page
          </Typography>
          {error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
          <CountriesTable countries={filteredCountries} />
        </Container>
      </Box>
      <StickyFooter />
    </Box>
  )
}
