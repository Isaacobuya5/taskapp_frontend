import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { memberReducer } from "./memberReducer";
import { authenticatedUser } from "./userReducer";

export const rootReducer = combineReducers({
  tasks: taskReducer,
  members: memberReducer,
  users: authenticatedUser
});
