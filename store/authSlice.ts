import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { LOGIN_MOCK } from "../utils/constants";

export interface AuthState {
  authState: boolean;
}

const initialState: AuthState = {
  authState: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogIn(state, action) {
      const { username, password } = action.payload;
      if (username == LOGIN_MOCK.username && password == LOGIN_MOCK.password) {
        state.authState = true;
      }
    },
    LogOut(state, action) {
      state.authState = false;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { LogIn, LogOut } = authSlice.actions;

export default authSlice.reducer;
