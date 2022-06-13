import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
          padding: '0',
          margin: '0',
        },
        'html, body': {
          outline: 'none',
          background: '#ffffff',
        },
        body: {
          margin: '0 auto',
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100%',
          height: '100%',
        },
        ':focus': {
          outline: 'none',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        minHeight: '24px',
      },
    },
  },
});
export default theme;
