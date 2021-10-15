import { AppDispatch } from "../store";
import API from "../../utils/axiosConfig";
import { LoginCredProps, UserProps } from "../../interfaces";
import { loginSuccess } from "../reducers/auth";

export const login =
  (data: LoginCredProps) => async (dispatch: AppDispatch) => {
    try {
      const response = await API.get("/auth");
      let users: Array<UserProps> = response.data as Array<UserProps>;
      users = users.filter(
        (item) => item.email === data.email && item.password === data.password
      );
      console.log(users);
      if (users.length > 0) {
        console.log({ user: users[0] });

        dispatch(loginSuccess(users[0]));
        return { success: "true", data: users[0] };
      }

      console.log({ response, data: response.data });
      return { success: "false", data: null };
    } catch (error) {
      console.log({ error });
      return { success: "false", data: null };
    }
  };
