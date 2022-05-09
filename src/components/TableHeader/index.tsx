import React from 'react'
import Box from '@mui/material/Box'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'

import { CountryType, TableHeaderPropType } from '../../types'

interface HeadCell {
  disablePadding: boolean
  id: keyof CountryType
  label: string
  numeric: boolean
  isSortable: boolean
}

const headCells: HeadCell[] = [
  {
    id: 'flags',
    numeric: false,
    disablePadding: false,
    label: 'Flag',
    isSortable: false,
  },
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Name',
    isSortable: true,
  },
  {
    id: 'languages',
    numeric: false,
    disablePadding: false,
    label: 'Languages',
    isSortable: false,
  },
  {
    id: 'population',
    numeric: true,
    disablePadding: false,
    label: 'Population',
    isSortable: true,
  },
  {
    id: 'region',
    numeric: false,
    disablePadding: false,
    label: 'Region',
    isSortable: false,
  },
  {
    id: 'isInFavourites',
    numeric: false,
    disablePadding: false,
    label: 'Favourites',
    isSortable: false,
  },
]

export default function TableHeader({
  order,
  orderBy,
  onRequestSort,
}: TableHeaderPropType) {
  const createSortHandler =
    (property: keyof CountryType) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id === 'isInFavourites' ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.isSortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
        <TableCell align="right">Details</TableCell>
      </TableRow>
    </TableHead>
  )
}
