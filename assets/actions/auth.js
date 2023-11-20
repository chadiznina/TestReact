import { LOGIN_SUCCESS, LOGOUT } from "./type";
import AuthService from "../services/authService";

export const login = (user) => (dispatch) => {
  return AuthService.logIn(user).then(
    (response) => {
      if (response.status === "success") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: response.user },
        });
        return response; // Simply return the response
      }
    },
    (error) => {
      const message = error.toString();
      // Handle the error or dispatch an error action if needed
      console.error('Login failed:', error);
      return Promise.reject(message); // Reject the promise with the error message
    }
  );
};

// Your logout action creator remains unchanged
export const logout = () => (dispatch) => {
  return AuthService.logOut().then((response) => {
    if (response.status === "success") {
      dispatch({
        type: LOGOUT,
      });
      return response;
    }
  });
};