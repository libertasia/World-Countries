import React from 'react'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import { ListItem } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { ListItemText } from '@mui/material'
import { Box } from '@mui/material'

import { CountriesPropType } from '../../types'
import FavouriteButton from '../FavouriteButton'

export default function FavouriteCountriesList({
  countries,
}: CountriesPropType) {
  return (
    <List sx={{ width: '240px' }}>
      {countries.length > 0 ? (
        countries.map((country) => (
          <ListItem sx={{ display: 'flex' }}>
            <ListItemIcon>
              <Avatar
                alt={`${country.name.common} flag`}
                src={country.flags.svg}
                variant="square"
              />
            </ListItemIcon>
            <MuiLink
              component={Link}
              to={`/country/${country.id}`}
              variant="body2"
              color="inherit"
              underline="hover"
            >
              {country.name.common}
            </MuiLink>
            <Box sx={{ ml: 'auto' }}>
              <FavouriteButton country={country} />
            </Box>
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText>The list is empty.</ListItemText>
          <SentimentDissatisfiedIcon color="primary" />
        </ListItem>
      )}
    </List>
  )
}
