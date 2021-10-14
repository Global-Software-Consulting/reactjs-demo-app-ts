import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "../../components/login";

export interface LoginCredentials {
  email: string;
  password: string;
}
const LoginContainer = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (data: LoginCredentials) => {
    console.log(data);
    setLoading(true);
    localStorage.setItem(
      "authToken",
      "ejma01290lalk109019njshaaajjaiaj109109y"
    );
    setLoading(false);
    history.push("/");
  };

  return <Login onSubmit={onSubmit} loading={loading} />;
};

export default LoginContainer;
