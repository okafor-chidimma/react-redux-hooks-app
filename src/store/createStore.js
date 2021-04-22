import { createStore } from "redux";
import { foodReducer } from "../reducers/foodReducer";

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export const createReduxStore = () => {
  const store = createStore(foodReducer, enableReduxDevTools);
  return store;
};
