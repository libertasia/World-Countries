import React, { PropsWithChildren, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'

import { themeCreator } from './themes'

interface CustomThemeProviderProps {
  children: any
}

export const ThemeContext = React.createContext((themeName: string): void => {})

const CustomThemeProvider: React.FC<
  PropsWithChildren<CustomThemeProviderProps>
> = ({ children }) => {
  // Read current theme from localStorage
  const curThemeName = localStorage.getItem('appTheme') || 'blueTheme'

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(curThemeName)

  // Get the theme object by theme name
  const theme = themeCreator(themeName)

  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
