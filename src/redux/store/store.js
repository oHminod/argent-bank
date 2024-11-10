import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

/**
 * Configures and creates the Redux store with the root reducer and persisted state.
 *
 * @function
 * @name configureAppStore
 * @returns {Store} The configured Redux store.
 */
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

/**
 * Subscribes to the store updates and saves the state to local storage if the user has opted to be remembered.
 *
 * @function
 * @name storeSubscribe
 * @returns {void}
 */
store.subscribe(() => {
  const state = store.getState();
  if (state.auth.rememberMe) {
    saveState(state);
  } else {
    localStorage.removeItem("appState");
  }
});

export default store;
