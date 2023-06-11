import axios from "axios";

export function getCards(search: string) {
  return axios.get("http://localhost:4200/cards", {
    params: {
      search: search,
    },
  });
}
