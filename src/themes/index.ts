import { Theme } from '@mui/material'
import { blueTheme } from './blueTheme'
import { purpleTheme } from './purpleTheme'
import { greenTheme } from './greenTheme'
import { redTheme } from './redTheme'

const themeMap: { [key: string]: Theme } = {
  blueTheme,
  purpleTheme,
  greenTheme,
  redTheme,
}

export function themeCreator(theme: string): Theme {
  return themeMap[theme]
}
