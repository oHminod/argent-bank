import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();
  if (state.auth.rememberMe) {
    saveState(state);
  } else {
    localStorage.removeItem("appState");
  }
});

export default store;
