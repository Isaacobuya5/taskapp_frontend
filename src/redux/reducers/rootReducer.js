import { combineReducers } from "redux";
// ensures we persist root reducer
import { persistReducer } from "redux-persist";
// specifying the type of storage we want - local storage
import storage from "redux-persist/lib/storage";

import { taskReducer } from "./taskReducer";
import { memberReducer } from "./memberReducer";
import { authenticatedUser } from "./userReducer";
import { buttonReducer } from "./buttonReducer";
import { errorReducer } from "./errorReducer";

// define a new persist config
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["memberReducer", "errorReducer"]
};

export const rootReducer = combineReducers({
  tasks: taskReducer,
  members: memberReducer,
  currentUser: authenticatedUser,
  buttonStatus: buttonReducer,
  errorStatus: errorReducer
});

// modified version of reducer with persisted capabilities
export default persistReducer(persistConfig, rootReducer);
