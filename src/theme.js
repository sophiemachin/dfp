import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#85B09A",
      dark: "#2C514C",
      light: "#9dc0ae",
      darkOverlay: "#789e8b",
      transparent : 'rgb(44, 81, 76, 0.5)'
    },
    secondary: {
      main: "#F39A9D",
      dark: "#7D1128",
    },
  },
  typography: {
    fontFamily : 'Georgia, Times, Times New Roman, serif',
    heroLarge: {
      fontSize: 70,
    },
    heroMedium: {
      fontSize: 50,
    },
    heroSmall: {
      fontSize: 30,
    },
    h1: {
      fontSize: 30,
      paddingBottom: '20px',
      paddingTop: '20px',
    },
    h2: {
      fontSize: 24,
      paddingBottom: '10px',
      paddingTop: '10px',
    },
    h3: {
      fontSize: 20,
      paddingBottom: '5px',
      paddingTop: '5px',
    },
    h4: {
      fontSize: 18,
    },
    h5: {
      fontSize: 14,
    },
  }
});