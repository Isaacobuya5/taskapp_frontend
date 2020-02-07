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

export function logoutMember() {
logoutUser();
return {
  type: types.LOGOUT_USER_SUCCESS
}
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

export function loginMember(email, password) {
  return function(dispatch) {
    return loginUser(email, password)
      .then(user => {
        dispatch(loginMemberAction(user));
        // history.push("/add_task")
      })
      .catch(error => {
        console.log(error);
      });
  };
}
