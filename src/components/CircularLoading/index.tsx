import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function CircularLoading() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
