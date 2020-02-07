import * as types from "../action.types";
import initialState from "../initialState";

export const memberReducer = (state = initialState.members, action) => {
  switch (action.type) {
    case types.ADD_MEMBER_SUCCESS:
      return [...state, { ...action.member }];
    default:
      return state;
  }
};
