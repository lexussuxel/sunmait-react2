import axios from "axios";
import { checkToken } from "./checkTokenMiddleware";

export async function getCards(search: string) {
  await checkToken();
  const token = localStorage.getItem("access_token");
  return await axios
    .get("http://localhost:4200/cards", {
      params: {
        search: search,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      alert(e.response.statusText);
    });
}
