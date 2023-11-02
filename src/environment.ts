import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Environment, Preferences } from './types/preferences';

const environment: Environment = {
  'themes': {
    'dev': createTheme({
        palette: {
          primary: {
            main: '#0A1F32',
          },
          secondary: {
            main: '#2D384A',
          },
          warning:  {
            main: '#344756',
          },
          info:  {
            main: '#D2D2D2',
          },
          success: {
            main: '#2D384A',
          },
          error: {
            main: '#FF4C2B',
          },
        }
    }),
    'stage': createTheme({
      palette: {
        primary: {
          main: '#0A1F32',
        },
        secondary: {
          main: '#2D384A',
        },
        warning:  {
          main: '#344756',
        },
        info:  {
          main: '#D2D2D2',
        },
        success: {
          main: '#2D384A',
        },
        error: {
          main: '#FF4C2B',
        },
      }
  }),
    'prod': createTheme({
      palette: {
        primary: {
          main: '#0A1F32',
        },
        secondary: {
          main: '#2D384A',
        },
        warning:  {
          main: '#344756',
        },
        info:  {
          main: '#D2D2D2',
        },
        success: {
          main: '#2D384A',
        },
        error: {
          main: '#FF4C2B',
        },
      }
  }),
  },
  'preferences': {

  }
}

export default environment;
