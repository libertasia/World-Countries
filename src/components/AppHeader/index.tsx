import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import FavoriteIcon from '@mui/icons-material/Favorite'

import SwitchThemeList from '../SwitchThemeList'
import SearchField from '../SearchField'
import { CountriesPropType } from '../../types'
import { ChevronRight } from '@mui/icons-material'
import FavouriteCountriesList from '../FavouriteCountriesList'

const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  isThemesOpen?: boolean
  isFavoritesOpen?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'isThemesOpen' && prop !== 'isFavoritesOpen',
})<AppBarProps>(({ theme, isThemesOpen, isFavoritesOpen }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isThemesOpen &&
    !isFavoritesOpen && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!isThemesOpen &&
    isFavoritesOpen && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(isThemesOpen &&
    isFavoritesOpen && {
    marginLeft: drawerWidth,
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

export default function AppHeader({ countries }: CountriesPropType) {
  const [isThemeListOpen, setIsThemeListOpen] = useState<boolean>(false)

  const [isFavouriteListOpen, setIsFavouriteListOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setIsThemeListOpen(!isThemeListOpen)
  }

  const toggleFavourite = () => {
    setIsFavouriteListOpen(!isFavouriteListOpen)
  }

  const favouriteCountries = countries.filter(
    (country) => country.isInFavourites
  )

  return (
    <>
      <AppBar
        position="absolute"
        isThemesOpen={isThemeListOpen}
        isFavoritesOpen={isFavouriteListOpen}
      >
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open switch theme list"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(isThemeListOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Countries
          </Typography>
          <SearchField />
          <IconButton
            color="inherit"
            aria-label="open favourite countries list"
            onClick={toggleFavourite}
            sx={{
              marginLeft: 'auto',
              ...(isFavouriteListOpen && { display: 'none' }),
            }}
          >
            <Badge badgeContent={favouriteCountries.length} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={isThemeListOpen} anchor="left">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <SwitchThemeList />
      </Drawer>
      <MuiDrawer variant="persistent" open={isFavouriteListOpen} anchor="right">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            px: [1],
          }}
        >
          <IconButton onClick={toggleFavourite}>
            <ChevronRight />
          </IconButton>
        </Toolbar>
        <Divider />
        <FavouriteCountriesList countries={favouriteCountries} />
      </MuiDrawer>
    </>
  )
}
