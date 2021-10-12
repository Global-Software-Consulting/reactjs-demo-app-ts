import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

function Routes() {
  return (
    <Router>
      <Grid container>
        <CssBaseline />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Grid>
    </Router>
  );
}

export default Routes;
