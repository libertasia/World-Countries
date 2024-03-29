import React from 'react'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

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
        <MuiLink
          component={Link}
          to={hrefToCountryPage}
          variant="body2"
          color="inherit"
          underline="hover"
        >
          {country.name.common}
        </MuiLink>
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
