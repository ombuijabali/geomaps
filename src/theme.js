import { createTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#008081', // Teal
      light: '#33a3a3',
      dark: '#005959',
      lighter: alpha('#008081'),
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
}); 