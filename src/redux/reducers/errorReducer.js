import * as types from "../action.types";
import initialState from "../initialState";

export const errorReducer = (state = initialState.errors, action) => {
  switch (action.type) {
    case types.CATCH_ERROR_SUCCESS:
      return {
        ...state,
        exists: true,
        message: action.message
      };
    case types.HANDLE_ERROR_SUCCESS:
      return {
        ...state,
        exists: false,
        message: ""
      };
    default:
      return state;
  }
};
