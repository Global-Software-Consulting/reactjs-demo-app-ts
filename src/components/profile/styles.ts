import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  roundedCircle: {
    borderRadius: '50%',
  },
  textCenter: {
    textAlign: 'center',
  },
  card: {
    color: '#fff',
    borderRadius: '10px',
    background: `linear-gradient(145deg, ${theme.palette.primary.main} ,  ${theme.palette.primary.light})`,
    boxShadow: `5px 5px 30px  ${theme.palette.primary.main}, -5px -5px 30px ${theme.palette.primary.light}`,
    border: 'none',
    padding: '30px',
  },
  socialButtons: {
    marginTop: '40px',
  },
}));
