import * as types from "../action.types";
import initialState from "../initialState";

export const buttonReducer = (state = initialState.buttonStatus, action) => {
  switch (action.type) {
    case types.CLICK_BUTTON_STATUS:
      return {
        ...state,
        clicked: true
      };
    case types.CLICK_BUTTON_LOGOUT:
      return {
        ...state,
        clicked: false
      };
    default:
      return state;
  }
};
