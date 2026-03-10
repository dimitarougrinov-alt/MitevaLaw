'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1B3050',
      light: '#2A4B75',
      dark: '#102038',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5299C8',
      light: '#79BCE0',
      dark: '#3478A8',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#EFF3F8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111C2D',
      secondary: '#3E577A',
    },
    divider: '#C8D6E8',
  },

  typography: {
    fontFamily: 'var(--font-dm-sans), sans-serif',
    h1: {
      fontFamily: 'var(--font-cormorant), serif',
      fontSize: '3.75rem',
      fontWeight: 500,
      lineHeight: 1.08,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: 'var(--font-cormorant), serif',
      fontSize: '2.875rem',
      fontWeight: 500,
      lineHeight: 1.12,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'var(--font-cormorant), serif',
      fontSize: '2.125rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: 'var(--font-cormorant), serif',
      fontSize: '1.625rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: 'var(--font-cormorant), serif',
      fontSize: '1.375rem',
      fontWeight: 500,
      lineHeight: 1.35,
    },
    h6: {
      fontFamily: 'var(--font-cormorant), serif',
      fontSize: '1.2rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: 'var(--font-dm-sans), sans-serif',
      fontSize: '1.0625rem',
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: 'var(--font-dm-sans), sans-serif',
      fontSize: '0.9375rem',
      lineHeight: 1.65,
    },
    subtitle1: {
      fontFamily: 'var(--font-dm-sans), sans-serif',
      fontSize: '1.0625rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: 'var(--font-dm-sans), sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    overline: {
      fontFamily: 'var(--font-dm-sans), sans-serif',
      letterSpacing: '0.18em',
      fontWeight: 500,
      fontSize: '0.7rem',
    },
    caption: {
      fontFamily: 'var(--font-dm-sans), sans-serif',
      fontSize: '0.8125rem',
    },
    button: {
      fontFamily: 'var(--font-dm-sans), sans-serif',
      fontWeight: 500,
      letterSpacing: '0.04em',
    },
  },

  shape: {
    borderRadius: 2,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '2px',
          padding: '10px 28px',
          fontSize: '0.875rem',
          letterSpacing: '0.04em',
          transition: 'all 0.2s ease',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        sizeLarge: {
          padding: '13px 40px',
          fontSize: '0.9375rem',
        },
        sizeSmall: {
          padding: '7px 18px',
          fontSize: '0.8125rem',
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 20px rgba(27,48,80,0.22)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `,
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #C8D6E8',
          borderRadius: '2px',
          transition: 'all 0.25s ease',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(27,48,80,0.09)',
            transform: 'translateY(-3px)',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #C8D6E8',
          borderRadius: '2px !important',
          marginBottom: '8px',
          overflow: 'hidden',
          '&:before': { display: 'none' },
          '&.Mui-expanded': {
            borderColor: '#1B3050',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '4px 20px',
          minHeight: '56px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#C8D6E8',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontWeight: 500,
          borderRadius: '2px',
        },
      },
    },
  },
});

export default theme;
