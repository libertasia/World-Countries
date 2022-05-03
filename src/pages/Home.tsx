import React, { useEffect } from 'react'
import { Action } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import CountriesTable from '../components/CountriesTable'
import StickyFooter from '../components/StickyFooter'
import { AppState, CountriesState } from '../types'
import { getCountries } from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()

  const { countries, isLoading, error } = useSelector(
    (state: AppState) => state.countriesData
  )

  useEffect(() => {
    ;(dispatch as ThunkDispatch<CountriesState, void, Action>)(getCountries())
  }, [])

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
        <Typography variant="h2" component="h1" gutterBottom>
          Home page
        </Typography>
        {/* <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography> */}
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        <CountriesTable countries={countries} />
      </Container>
      <StickyFooter />
    </Box>
  )
}
