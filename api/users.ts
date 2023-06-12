import axios from "axios";
import { LogIn, Unauthorized } from "../store/userReducer";

export function authentication({ password, username }) {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4200/user/auth", {
        password,
        username,
      })
      .then((data) => {
        dispatch(LogIn(data.data));
      }).catch((e)=>{
        dispatch(Unauthorized())
      })
  };
}
