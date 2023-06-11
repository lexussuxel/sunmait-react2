import axios from "axios";
import { LogIn } from "../store/userReducer";

export function authentication({ password, username }) {
  return (dispatch) => {
    axios
      .post("http://localhost:4200/user/auth", {
        password,
        username,
      })
      .then((data) => {
        dispatch(LogIn(data.data));
      });
  };
}
