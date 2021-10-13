import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import ProtectedRoute from './protectedRoute';
import PublicRoutes from './publicRoute';
import Home from '../pages';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Signup from '../pages/signup';
import NotFound from '../pages/page404';
import Profile from '../pages/profile';

function Routes() {
  return (
    <Router>
      <Grid container>
        <CssBaseline />
        <Switch>
          <PublicRoutes exact path='/login' component={Login} />
          <PublicRoutes exact path='/signup' component={Signup} />
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <ProtectedRoute exact path='/counter' component={Home} />
          <ProtectedRoute exact path='/' component={Dashboard} />
          <Route exact path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </Grid>
    </Router>
  );
}

export default Routes;
