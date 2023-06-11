import { LOGIN_MOCK } from "../utils/constants";

export interface AuthState {
  authState: boolean;
}

const initialState: AuthState = {
  authState: false,
};

export enum AuthActions {
  LOG_IN,
  LOG_OUT,
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
        return { ...state, authState: true };
      }
    }
    case AuthActions.LOG_OUT: {
      return { ...state, authState: false };
    }
    default:
      return state;
  }
};

export const LogIn = (payload: any) => ({ type: AuthActions.LOG_IN, payload });
export const LogOut = () => ({ type: AuthActions.LOG_OUT, payload: {} });
