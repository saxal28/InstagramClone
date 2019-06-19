import { loginUser } from "../../services/authService";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
// error
export const LOGIN_ERROR = "LOGIN_ERROR";

export const reduxHandleLogin = loginModel => {
  return async dispatch => {
    //dispatch logging in
    // ^^ TODO: ^^
    const data = await loginUser(loginModel);

    if (data.errorMessage) {
      //dispatch error
      return dispatch({
        type: LOGIN_ERROR,
        payload: data
      });
    }

    return dispatch({
      type: LOGIN_USER,
      payload: data
    });
  };
};

export const reduxHandleLogout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
  };
};
