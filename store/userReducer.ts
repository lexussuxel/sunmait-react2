import { LOGIN_MOCK } from "../utils/constants";

export interface AuthState {
  authState: boolean;
  error: boolean;
}

const initialState: AuthState = {
  authState: false,
  error: false,
};

export enum AuthActions {
  LOG_IN,
  LOG_OUT,
  UNAUTHORIZED,
}

type ReducerAction = {
  type: AuthActions;
  payload: any;
};

export const authReducer = (
  state: AuthState = initialState,
  action: ReducerAction,
): AuthState => {
  switch (action.type) {
    case AuthActions.LOG_IN: {
      if (action.payload) {
        return { ...state, authState: true, error: false };
      }
    }
    case AuthActions.LOG_OUT: {
      return { ...state, authState: false };
    }
    case AuthActions.UNAUTHORIZED: {
      return { ...state, authState: false, error: true };
    }
    default:
      return state;
  }
};

export const LogIn = (payload: any) => ({ type: AuthActions.LOG_IN, payload });
export const LogOut = () => ({ type: AuthActions.LOG_OUT, payload: {} });
export const Unauthorized = () => ({
  type: AuthActions.UNAUTHORIZED,
  payload: {},
});
