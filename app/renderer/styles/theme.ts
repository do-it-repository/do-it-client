import { createTheme } from '@mui/material/styles'
import { primaryColor_100 } from '../src/constants/color'

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor_100,
    },
    secondary: {
      main: '#edf2ff',
    },
  },
})
