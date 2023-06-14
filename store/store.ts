import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { authReducer, AuthState } from "./userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = {
  auth: AuthState;
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
