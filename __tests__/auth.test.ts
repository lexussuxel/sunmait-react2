import axios from "axios";
import { authentication } from "../api/users";
import { AuthActions } from "../store/userReducer";

jest.mock("axios");

describe("authentification", () => {
  it("should dispatch LOG_IN action", async () => {
    const data = { data: true };
    axios.post.mockResolvedValueOnce(data);
    let mockDispatch = jest.fn((x) =>
      expect(x.type).toBe(+AuthActions.LOG_IN.toString()),
    );
    let fn = authentication({ username: "", password: "" });

    await fn(mockDispatch);
  });
  it("should dispatch UNAUTHORIZED action", async () => {
    axios.post.mockRejectedValueOnce(
      new Error("incorrect username or password"),
    );
    let mockDispatch = jest.fn((x) =>
      expect(x.type).toBe(+AuthActions.UNAUTHORIZED.toString()),
    );
    let fn = authentication({ username: "", password: "" });

    await fn(mockDispatch);
  });
});
