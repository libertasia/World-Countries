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
import BackgroundImage from '../assets/images/undraw_traveling_re_weve.svg'

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
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          mt: 8,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            backgroundImage: `url(${BackgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.3,
          },
        }}
        maxWidth="lg"
      >
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
