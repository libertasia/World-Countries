import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { CountryPropType } from '../../types'

export default function CountryCard({ country }: CountryPropType) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={country.flags.svg}
        alt={`${country.name.common} flag`}
      />
      <CardContent>
        <Typography component="div" variant="h5">
          {country.name.common}
        </Typography>
      </CardContent>
    </Card>
  )
}
