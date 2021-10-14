import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({ component, ...rest }: any): JSX.Element => {
  const routeComponent = (props: any) =>
    !localStorage.authToken ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default PublicRoutes;
