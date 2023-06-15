import axios from "axios";
import jwt from "jwt-decode";
import { store } from "../store/store";
import { LogOut } from "../store/userReducer";

export async function checkToken() {
  const token = localStorage.getItem("access_token");
  const data = jwt(token || "");
  const refresh_token = localStorage.getItem("refresh_token");
  if (!data && new Date(data.exp * 1000) <= new Date()) {
    await axios
      .get("http://localhost:4200/user/refresh", {
        refresh_token: refresh_token || "",
      })
      .then((data) => {
        localStorage.setItem("access_token", data.data.access_token);
      })
      .catch((e) => {
        store.dispatch(LogOut());
      });
  }
}
