import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles'

let allThemes : Array<PaletteMode>=['light', 'dark']
export const themes = allThemes.map((mode: PaletteMode) => {
  
  return createTheme(
    {
      palette: {
        mode,
        primary: {
          main: mode === 'light' ? 'rgb(24,119,242)' : 'rgb(45,136,255)'
        },
        background: {
          default: mode === 'light' ? '#fff' : 'rgb(24,25,26)'
        },       
      },

      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI'
        ].join(',')
      }
    },
    {
      typography: {
        h1: { fontSize: '2em' },
        h2: { fontSize: '1.5em' },
        h3: { fontSize: '1.3em' },
        h5: { fontSize: '0.8em' },
        h6: { fontSize: '0.7em' },
        button: {
          textTransform: 'none',
          background: mode === 'light' ? '#fff' : '#rgb(45,136,255)',
          color: mode === 'light' ? '#000' : '#fff'
        }
      }
    }
  )
})
