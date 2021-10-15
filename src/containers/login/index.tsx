import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "../../components/login";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { login } from "../../redux/actions/auth";
import { LoginCredProps } from "../../interfaces";

const LoginContainer = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: LoginCredProps) => {
    setLoading(true);
    const response = await dispatch(login(data));
    if (response.success) {
      history.push("/");
    } else {
      setLoading(false);
    }
  };

  return <Login onSubmit={onSubmit} loading={loading} />;
};

export default LoginContainer;
