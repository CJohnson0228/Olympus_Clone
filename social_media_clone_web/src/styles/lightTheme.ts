import { ThemeProps } from './ThemeTypes'
import { calcContrast } from './ThemeHooks'

export const lightTheme: ThemeProps = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1540,
  },
  colors: {
    common: {
      black: '#000000',
      white: '#ffffff',
      paper: '#dddddd',
      background: '#eeeeee',
      text: '#121212',
    },
    primary: {
      100: "#d7eeff",
      200: "#afddff",
      300: "#88cbff",
      400: "#60baff",
      500: "#38a9ff",
      600: "#2d87cc",
      700: "#226599",
      800: "#164466",
      900: "#0b2233"
    },
    secondary: {
      100: "#e5def3",
      200: "#cbbde7",
      300: "#b09cda",
      400: "#967bce",
      500: "#7c5ac2",
      600: "#63489b",
      700: "#4a3674",
      800: "#32244e",
      900: "#191227"
    },
    tertiary: {
      100: "#ffdfd8",
      200: "#ffbfb0",
      300: "#ff9e89",
      400: "#ff7e61",
      500: "#ff5e3a",
      600: "#cc4b2e",
      700: "#993823",
      800: "#662617",
      900: "#33130c"
    },
    grey: {
      100: '#C5C8D0',
      200: '#ACAFB6',
      300: '#92969C',
      400: '#5E6368',
      500: '#494D53',
      600: '#34373E',
      700: '#2D2F36',
      800: '#25272D',
      900: '#1B1C1F',
    },
    warning: {
      100: "#ffdbdb",
      200: "#ffb8b8",
      300: "#ff9494",
      400: "#ff7171",
      500: "#ff4d4d",
      600: "#cc3e3e",
      700: "#992e2e",
      800: "#661f1f",
      900: "#330f0f",
    },
    caution: {
      100: "#fbf8e8",
      200: "#f7f1d1",
      300: "#f4eabb",
      400: "#f0e3a4",
      500: "#ecdc8d",
      600: "#bdb071",
      700: "#8e8455",
      800: "#5e5838",
      900: "#2f2c1c",
    },
    note: {
      100: "#f3f0ee",
      200: "#e7e2dc",
      300: "#dcd3cb",
      400: "#d0c5b9",
      500: "#c4b6a8",
      600: "#9d9286",
      700: "#766d65",
      800: "#4e4943",
      900: "#272422",
    },
    success: {
      100: "#eaf3ea",
      200: "#d5e7d4",
      300: "#c1dabf",
      400: "#accea9",
      500: "#97c294",
      600: "#799b76",
      700: "#5b7459",
      800: "#3c4e3b",
      900: "#1e271e",
    },
    getContrastText: (hexColor: string) => {
      const blackContrast = calcContrast(hexColor, '#222222')
      const whiteContrast = calcContrast(hexColor, '#DDDDDD')
      if (blackContrast > whiteContrast) {
        return '#222222'
      } else {
        return '#DDDDDD'
      }
    } 
  },
  spacing: (value) => {
    const newValue = value * 8
    return ( newValue + 'px' )
  },
  shadows: {
    text: {
      100: '1px 1px 1px #000000aa',
      200: '2px 2px 2px #000000aa',
      300: '3px 3px 3px #000000aa',
      400: '4px 4px 4px #000000aa',
      500: '5px 5px 5px #000000aa',
      600: '6px 6px 6px #000000aa',
      700: '7px 7px 7px #000000aa',
      800: '8px 8px 8px #000000aa',
      900: '9px 9px 9px #000000aa',
    },
    box: {
      100: '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001f',
      200: '0px 2px 4px -1px #00000033, 0px 4px 5px 0px #00000024, 0px 1px 10px 0px #0000001f',
      300: '0px 4px 5px -2px #00000033, 0px 7px 10px 1px #00000024, 0px 2px 16px 1px #0000001f',
      400: '0px 6px 6px -3px #00000033, 0px 10px 14px 1px #00000024, 0px 4px 18px 3px #0000001f',
      500: '0px 7px 8px -4px #00000033, 0px 13px 19px 2px #00000024, 0px 5px 24px 4px #0000001f',
      600: '0px 8px 10px -5px #00000033, 0px 16px 24px 2px #00000024, 0px 6px 30px 5px #0000001f',
      700: '0px 9px 12px -6px #00000033, 0px 19px 29px 2px #00000024, 0px 7px 36px 6px #0000001f',
      800: '0px 10px 14px -6px #00000033, 0px 22px 35px 3px #00000024, 0px 8px 42px 7px #0000001f',
      900: '0px 11px 15px -7px #00000033, 0px 24px 38px 3px #00000024, 0px 9px 46px 8px #0000001f',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '6rem',
    },
    h2: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '3.75rem',
    },
    h3: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '3rem',
    },
    h4: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '2.125rem',
    },
    h5: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
    },
    body1: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: '"Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  }
}
