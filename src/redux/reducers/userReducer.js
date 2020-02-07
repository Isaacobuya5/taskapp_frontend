import * as types from "../action.types";
// import initialState from "../initialState";
let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : null;

export const authenticatedUser = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_MEMBER_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
      case types.LOGOUT_USER_SUCCESS:
      return {};
    default:
      return state;
  }
};
