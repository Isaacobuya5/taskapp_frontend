import * as types from "../action.types";
import initialState from "../initialState";
// let user = JSON.parse(localStorage.getItem("validUser"));
// console.log(user);

// const initialState = user ? { loggedIn: true, user } : null;

export const authenticatedUser = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.LOGIN_MEMBER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.user
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};
