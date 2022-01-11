import { createTheme } from '@mui/material/styles';
const arcBlack = '#3e2b47';
const arcWhite = '#EEEEEE';
const hoverWhite = '#F5EEDC';
const highLighter = '#97BFB4';
const defaultGrey = '#E8E1D9';
export default createTheme({
  palette: {
    common: {
      arcBlack: `${arcBlack}`,
      arcWhite: `${arcWhite}`,
      hoverWhite: `${hoverWhite}`,
      primary: `${highLighter}`,
      default: `${defaultGrey}`,
    },
    primary: {
      main: `${arcBlack}`,
    },
    secondary: {
      main: `${arcWhite}`,
    },
    default: {
      main: `${defaultGrey}`,
    },
    hoverColor: {
      main: `${hoverWhite}`,
    },
  },
  typography: {
    tab: {
      color: '#EAEAEA',
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1em',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: `${arcBlack}`,
          color: `${arcWhite}`,
          fontFamily: 'Raleway',
          textTransform: 'none',
          fontWeight: '700',
          fontSize: '1em',
        },
      },
    },
  },
});
