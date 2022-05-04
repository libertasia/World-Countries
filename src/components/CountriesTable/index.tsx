import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

import TableHeader from '../TableHeader'
import TableRowItem from '../TableRowItem'
import { CountriesPropType, CountryType, OrderType } from '../../types'
import { stableSort, getComparator } from '../../helpers'

export default function CountriesTable({ countries }: CountriesPropType) {
  const [order, setOrder] = React.useState<OrderType>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof CountryType>('id')
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof CountryType
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

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
      <Table size="medium">
        <colgroup>
          <col width="10%" />
          <col width="30%" />
          <col width="20%" />
          <col width="15%" />
          <col width="15%" />
          <col width="10%" />
        </colgroup>
        <TableHeader
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {stableSort<CountryType>(countries, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((country) => (
              <TableRowItem country={country} />
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
