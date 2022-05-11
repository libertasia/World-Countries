import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
//import ListItemText from '@mui/material/ListItemText'

import FavouriteButton from '../FavouriteButton'
import { CountryPropType } from '../../types'
import { Typography } from '@mui/material'

export default function TableRowItem({ country }: CountryPropType) {
  const hrefToCountryPage = `/country/${country.id}`
  return (
    <TableRow key={`country-${country.id}`}>
      <TableCell>
        <Avatar
          alt={`${country.name.common} flag`}
          src={country.flags.svg}
          variant="square"
        />
      </TableCell>
      <TableCell>
        <Typography component={Link} to={hrefToCountryPage} variant="body2">
          {country.name.common}
        </Typography>
      </TableCell>
      <TableCell>
        <List>
          {country.languages ? (
            Object.entries(country.languages).map((value) => (
              <ListItem key={value[0]}>
                <Typography variant="body2">{value[1]}</Typography>
              </ListItem>
            ))
          ) : (
            <Typography variant="body2">DATA MISSING</Typography>
          )}
        </List>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{country.population}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{country.region}</Typography>
      </TableCell>
      <TableCell align="right">
        <FavouriteButton country={country} />
      </TableCell>
      <TableCell align="right">
        <Button variant="contained" component={Link} to={hrefToCountryPage}>
          More
        </Button>
      </TableCell>
    </TableRow>
  )
}
