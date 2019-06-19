import {
  getUserFromStorage,
  saveUserToStorage,
  deleteUserFromStorage
} from "../../services/localStorageService";
import { LOGIN_USER, LOGOUT_USER } from "../actions/authActions";

const currentUser = getUserFromStorage();
const initialState = currentUser ? { loggedIn: true, user: currentUser } : {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return handleLoginUser(state, action);
    case LOGOUT_USER:
      return handleLogoutUser();
    default:
      return {
        ...state
      };
  }
};

function handleLoginUser(state, action) {
  const user = action.payload;
  saveUserToStorage(user);

  return {
    ...state,
    user,
    loggedIn: true
  };
}

function handleLogoutUser() {
  deleteUserFromStorage();
  return {
    user: {},
    loggedIn: false
  };
}
