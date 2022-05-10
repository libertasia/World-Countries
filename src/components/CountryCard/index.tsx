import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { grey } from '@mui/material/colors'

import { CountryPropType } from '../../types'

export default function CountryCard({ country }: CountryPropType) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '288px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: grey[100],
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: '100%' }}
        image={country.flags.svg}
        alt={`${country.name.common} flag`}
      />
      <CardContent>
        <Typography component="h2" variant="h5">
          {country.name.common}
        </Typography>
        <Typography component="h3" variant="subtitle1">
          {country.name.official}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent>
        <Typography component="p" variant="body1">
          Region: {country.region}
        </Typography>
        <Typography component="p" variant="body1">
          Capital: {country.capital ? country.capital : 'Data missing'}
        </Typography>
        <Typography component="p" variant="body1">
          UNmember: {country.unMember ? 'yes' : 'no'}
        </Typography>
        <Typography component="p" variant="body1">
          Borders:{' '}
          {!country.borders
            ? 'Data missing'
            : Object.entries(country.borders)
              .map((e) => e[1])
              .join(', ')}
        </Typography>
      </CardContent>
    </Card>
  )
}
