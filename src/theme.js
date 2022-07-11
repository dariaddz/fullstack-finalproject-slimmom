import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9B9FAA',
      dark: '#212121',
    },
    secondary: {
      main: '#FC842D',
    },
    background: {
      main: '#FFFFFF',
      darker: '#F0F1F3',
      dark: '#264061',
      modal: 'rgba(33, 33, 33, 0.12)',
    },
  },
  typography: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
    },
  },
  MuiInput: {
    MuiButton: {
      style: {
        // Name of the slot
        // Some CSS
        color: '#000000',

      },
    },
  }
});
