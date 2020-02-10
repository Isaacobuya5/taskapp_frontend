import { createStore, applyMiddleware } from "redux";
// allows our browser to cache our store dependin on confiuration options
import { persistStore } from "redux-persist";

import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

// const middlewares = [logger];
const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of our store
export const persistor = persistStore(store);

export default { store, persistor };
