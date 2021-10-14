import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useStyles } from './styles';
import Paper from '@mui/material/Paper';
import './index.css';

const Profile = () => {
  const classes = useStyles();
  return (
    <Grid container component={Paper} className={classes.root}>
      <Grid item xs={12} sm={12} md={12} component='main'>
        <Grid container justifyContent='center'>
          <Grid className={classes.card}>
            <Grid className={classes.textCenter}>
              <img
                src='https://i.imgur.com/stD0Q19.jpg'
                alt='profile.jpg'
                width='100'
                className={classes.roundedCircle}
              />
              <Typography variant='h3'> Maria Smantha </Typography>
              <Typography component='span'>Android Developer</Typography>

              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography variant='h5'>Projects </Typography>
                  <Typography component='span'>10</Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography variant='h5'>Projects </Typography>
                  <Typography component='span'>10</Typography>
                </Grid>
              </Grid>
              <hr className='line' />
              <Typography component='small' className='mt-4'>
                I am an android developer working at google Inc at california,
                USA
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Profile;
