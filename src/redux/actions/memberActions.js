import * as types from "../action.types";
import { saveMember, loginUser, logoutUser } from "../../api/membersApi";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export function addNewMemberAction(member) {
  return {
    type: types.ADD_MEMBER_SUCCESS,
    member
  };
}

export function loginMemberAction(user) {
  return {
    type: types.ADD_MEMBER_SUCCESS,
    user
  };
}

export function logoutMemberAction() {
  return {
    type: types.LOGOUT_USER_SUCCESS
  };
}

export function buttonClickedAction() {
  return {
    type: types.CLICK_BUTTON_STATUS
  };
}

export function buttonClickedLogout() {
  return {
    type: types.CLICK_BUTTON_LOGOUT
  };
}

export function handleErrors(message) {
  return {
    type: types.HANDLE_ERROR_SUCCESS,
    message
  };
}

// thunk for adding a new member
export function addNewMember(member) {
  return function(dispatch) {
    return saveMember(member)
      .then(() => {
        dispatch(addNewMemberAction(member));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

// thunk for login
export function loginMember(email, password) {
  return function(dispatch) {
    return loginUser(email, password)
      .then(user => {
        console.log(user);
        dispatch(loginMemberAction(user.user));
        dispatch(buttonClickedAction());
        // history.push("/add_task")
      })
      .catch(error => {
        dispatch(handleErrors(error));
        console.log("Error handled");
      });
  };
}

// thunk for logout
export function logoutMember() {
  return function(dispatch) {
    return logoutUser()
      .then(() => {
        dispatch(logoutMemberAction());
      })
      .catch(error => {
        console.log(error);
      });
  };
}
