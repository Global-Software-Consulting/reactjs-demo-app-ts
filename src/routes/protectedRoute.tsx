import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../containers/layout';
const ProtectedRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    localStorage.token ? (
      <Layout>{React.createElement(component, props)}</Layout>
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default ProtectedRoute;
