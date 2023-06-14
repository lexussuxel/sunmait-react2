import axios from "axios";

export async function getCards(search: string) {
  return await axios.get("http://localhost:4200/cards", {
    params: {
      search: search,
    },
  });
}
