import { createStore, combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";

export default createStore(
  combineReducers({
    authReducer
  })
);
