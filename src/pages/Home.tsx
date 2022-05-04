import React, { useEffect } from 'react'
import { Action } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import AppHeader from '../components/AppHeader'
import CountriesTable from '../components/CountriesTable'
import StickyFooter from '../components/StickyFooter'
import { AppState, CountriesState } from '../types'
import { getCountries } from '../redux/actions'

const mdTheme = createTheme()

export default function Home() {
  const dispatch = useDispatch()

  const { countries, isDataLoaded, isLoading, error } = useSelector(
    (state: AppState) => state.countriesData
  )

  useEffect(() => {
    if (!isDataLoaded) {
      ;(dispatch as ThunkDispatch<CountriesState, void, Action>)(getCountries())
    }
  }, [dispatch, isDataLoaded])

  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppHeader />
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
            <CountriesTable countries={countries} />
          </Container>
        </Box>
        <StickyFooter />
      </Box>
    </ThemeProvider>
  )
}
