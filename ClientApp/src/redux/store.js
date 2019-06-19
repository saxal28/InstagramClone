import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./reducers/authReducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    authReducer
  }),
  applyMiddleware(thunk)
);
