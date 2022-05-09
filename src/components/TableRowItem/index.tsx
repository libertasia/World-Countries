import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import FavouriteButton from '../FavouriteButton'
import { CountryPropType } from '../../types'

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
        <Link to={hrefToCountryPage}>{country.name.common}</Link>
      </TableCell>
      <TableCell>
        <List>
          {country.languages
            ? Object.entries(country.languages).map((value) => (
              <ListItem key={value[0]}>
                <ListItemText primary={value[1]} />
              </ListItem>
            ))
            : 'DATA MISSING'}
        </List>
      </TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>{country.region}</TableCell>
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
