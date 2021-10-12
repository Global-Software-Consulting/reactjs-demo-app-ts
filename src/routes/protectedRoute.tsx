import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
const ProtectedRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    localStorage.token ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};
ProtectedRoute.propTypes = {
  component: PropTypes.element,
};

export default ProtectedRoute;
