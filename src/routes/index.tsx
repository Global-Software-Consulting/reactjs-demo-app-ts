import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages';
import Dashboard from '../pages/dashboard';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import ProtectedRoute from './protectedRoute';

function Routes() {
  return (
    <Router>
      <Grid container>
        <CssBaseline />
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          <ProtectedRoute exact path='/' component={Home} />
        </Switch>
      </Grid>
    </Router>
  );
}

export default Routes;
