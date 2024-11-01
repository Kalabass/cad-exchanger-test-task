import { createTheme } from '@mui/material';
import { BREAKPOINTS } from './breakpoints';

const COLORS = {
  textPrimary: '#333333',
  textSecondary: '#666666',
  coolBlue: '#88bceb',
  coolPurple: '#7474C9',
  coolTeal: '#61adc8',
  coolWhite: '#ffffff',
  error: '#DA1E28',
};

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      accentPurple: string;
      accentBlue: string;
      accentTeal: string;
    };
  }
  interface PaletteOptions {
    custom: {
      accentPurple: string;
      accentBlue: string;
      accentTeal: string;
    };
  }
}

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
    custom: {
      accentBlue: COLORS.coolBlue,
      accentPurple: COLORS.coolPurple,
      accentTeal: COLORS.coolTeal,
    },
    common: {
      white: COLORS.coolWhite,
    },
    error: {
      main: COLORS.error,
    },
    background: {
      default: COLORS.coolWhite,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,

    h1: {
      color: COLORS.coolWhite,
      fontWeight: 600,
      fontSize: '4.25rem',
      [`@media (max-width:${BREAKPOINTS.sm}px)`]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      color: COLORS.coolWhite,
      fontWeight: 600,
      fontSize: '3.25rem',
      [`@media (max-width:${BREAKPOINTS.sm}px)`]: {
        fontSize: '2rem',
      },
    },
    h3: {
      color: COLORS.coolWhite,
      fontWeight: 600,
      fontSize: '2.25rem',
    },

    caption: {
      fontSize: '0.75rem',
      [`@media (min-width:${BREAKPOINTS.xl}px)`]: {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      [`@media (min-width:${BREAKPOINTS.xl}px)`]: {
        fontSize: '1.5rem',
      },
    },
    button: {
      textTransform: 'none',
      [`@media (min-width:${BREAKPOINTS.xl}px)`]: {
        fontSize: '21px',
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 8,
  breakpoints: {
    values: {
      ...BREAKPOINTS,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: COLORS.coolPurple,
            },
            '&.Mui-error fieldset': {
              borderColor: 'red',
            },
            '& input::placeholder': {
              color: '#888',
              opacity: 1,
            },
            '&.Mui-error input::placeholder': {
              color: 'red',
            },
            '& textarea::placeholder': {
              color: '#888',
              opacity: 1,
            },
            '&.Mui-error textarea::placeholder': {
              color: 'red',
            },
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
    },
  },
});

export { muiTheme };
