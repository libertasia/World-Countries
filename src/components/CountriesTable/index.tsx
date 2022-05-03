import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'

import { CountriesPropType } from '../../types'

export default function CountriesTable({ countries }: CountriesPropType) {
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Languages</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Region</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((country) => (
              <TableRow key={`country-${country.id}`}>
                <TableCell>
                  <Avatar
                    alt={`${country.name.common} flag`}
                    src={country.flags.svg}
                    variant="square"
                  />
                </TableCell>
                <TableCell>
                  <Link to={`/country/${country.id}`}>
                    {country.name.common}
                  </Link>
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
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}
