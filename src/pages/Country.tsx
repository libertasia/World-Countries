import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import StickyFooter from '../components/StickyFooter'
import { AppState } from '../types'
import { resetFilterValue } from '../redux/actions'

export default function Country() {
  const { id } = useParams<{ id: string }>()

  const country = useSelector((state: AppState) =>
    state.countriesData.countries.find((el) => el.id === id)
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetFilterValue())
  })

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
          {country?.name.common}
        </Typography>
      </Container>
      <StickyFooter />
    </Box>
  )
}
