import { createStore, applyMiddleware, } from "redux";
import thunk from "redux-thunk";
import { INITIAL_STATE } from "../redux/initialState";
import { rootReducer } from "../redux/reducers/rootReducer";

export const configureStore = () => {
 return createStore(
rootReducer,
applyMiddleware(thunk)
)
};

