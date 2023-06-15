import axios from "axios";
import { LogIn, Unauthorized } from "../store/userReducer";

export function authentication({ password, username }) {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4200/user/login", {
        password,
        username,
      })
      .then((data) => {
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("refresh_token", data.data.refresh_token);
        dispatch(
          LogIn({
            access_token: data.data.access_token,
            refresh_token: data.data.refresh_token,
          }),
        );
      })
      .catch((e) => {
        // alert(e.response.statusText);
        dispatch(Unauthorized());
      });
  };
}

export function signUp({
  username,
  password,
  repPassword,
  lastName,
  firstName,
  age,
}) {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4200/user/signup", {
        username,
        password,
        repPassword,
        lastName,
        firstName,
        age,
      })
      .then((data) => {
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("refresh_token", data.data.refresh_token);
        dispatch(
          LogIn({
            access_token: data.data.access_token,
            refresh_token: data.data.refresh_token,
          }),
        );
      })
      .catch((e) => {
        // alert(e.response.statusText);
        dispatch(Unauthorized());
      });
  };
}
