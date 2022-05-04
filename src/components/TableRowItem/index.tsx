import React from 'react'
import { Link } from 'react-router-dom'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'

import { TableRowItemPropType } from '../../types'

export default function TableRowItem({ country }: TableRowItemPropType) {
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
        <Link to={`/country/${country.id}`}>{country.name.common}</Link>
      </TableCell>
      <TableCell>
        <List>
          {country.languages &&
            Object.entries(country.languages).map((value) => (
              <ListItem key={value[0]}>
                <ListItemText primary={value[1]} />
              </ListItem>
            ))}
        </List>
      </TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell align="right">
        <Button variant="contained">Add</Button>
      </TableCell>
    </TableRow>
  )
}