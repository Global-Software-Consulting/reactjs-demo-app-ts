import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    !localStorage.token ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default PublicRoutes;
