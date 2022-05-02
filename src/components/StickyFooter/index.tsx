import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'© '}
      {new Date().getFullYear()}
      {' Anastasiia Erokhina.'}
    </Typography>
  )
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: '<baseline-position>',
        }}
      >
        <Copyright />
        <Link color="inherit" href="https://github.com/libertasia">
          <GitHubIcon />
        </Link>
      </Container>
    </Box>
  )
}
