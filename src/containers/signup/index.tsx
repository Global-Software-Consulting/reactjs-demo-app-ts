import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Signup from "../../components/signup";

export interface SignupCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
const SignupContainer = (): JSX.Element => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: SignupCredentials) => {
    console.log(data);
    setLoading(true);
    localStorage.setItem(
      "authToken",
      "ejma01290lalk109019njshaaajjaiaj109109y"
    );
    setLoading(false);
    history.push("/");
  };

  return <Signup onSubmit={onSubmit} loading={loading} />;
};
export default SignupContainer;
