import React from 'react'
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import { ListItem } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { ListItemText } from '@mui/material'

import { CountriesPropType } from '../../types'
import FavouriteButton from '../FavouriteButton'

export default function FavouriteCountriesList({
  countries,
}: CountriesPropType) {
  return (
    <List sx={{ width: '240px' }}>
      {countries.length > 0 ? (
        countries.map((country) => (
          <ListItem>
            <ListItemIcon>
              <Avatar
                alt={`${country.name.common} flag`}
                src={country.flags.svg}
                variant="square"
              />
            </ListItemIcon>
            <ListItemText primary={country.name.common} />
            <FavouriteButton country={country} />
          </ListItem>
        ))
      ) : (
        <ListItem>The list is empty.</ListItem>
      )}
    </List>
  )
}
