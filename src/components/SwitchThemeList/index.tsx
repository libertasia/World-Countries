import React, { useContext } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import { purple, blue, green, red } from '@mui/material/colors'

import { ThemeContext } from '../../CustomThemeProvider'

const themesList = [
  {
    name: 'purpleTheme',
    backgroundColor: purple[500],
    avatarLabel: 'P',
    avatarText: 'Purple',
  },
  {
    name: 'blueTheme',
    backgroundColor: blue[500],
    avatarLabel: 'B',
    avatarText: 'Blue',
  },
  {
    name: 'greenTheme',
    backgroundColor: green[500],
    avatarLabel: 'G',
    avatarText: 'Green',
  },
  {
    name: 'redTheme',
    backgroundColor: red[500],
    avatarLabel: 'R',
    avatarText: 'Red',
  },
]

export default function SwitchThemeList() {
  const setThemeName = useContext(ThemeContext)

  return (
    <List>
      {themesList.map((theme) => (
        <ListItemButton
          key={theme.name}
          onClick={() => setThemeName(theme.name)}
        >
          <ListItemIcon>
            <Avatar sx={{ bgcolor: theme.backgroundColor }} variant="square">
              {theme.avatarLabel}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary={theme.avatarText} />
        </ListItemButton>
      ))}
    </List>
  )
}
