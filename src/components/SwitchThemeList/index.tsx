import React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import { purple, blue, green, red } from '@mui/material/colors'

export default function SwitchThemeList() {
  return (
    <List>
      <ListItemButton>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: purple[500] }} variant="square">
            P
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Purple" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: blue[500] }} variant="square">
            B
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Blue" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: green[500] }} variant="square">
            G
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Green" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: red[500] }} variant="square">
            R
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Red" />
      </ListItemButton>
    </List>
  )
}
