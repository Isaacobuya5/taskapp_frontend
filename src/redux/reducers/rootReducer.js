import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { memberReducer } from "./memberReducer";
import { authenticatedUser } from "./userReducer";
import { buttonReducer } from "./buttonReducer";
import { errorReducer } from "./errorReducer";

export const rootReducer = combineReducers({
  tasks: taskReducer,
  members: memberReducer,
  currentUser: authenticatedUser,
  buttonStatus: buttonReducer,
  errorStatus: errorReducer
});
