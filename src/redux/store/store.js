import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rememberMeMiddleware = () => (next) => (action) => {
  const result = next(action);

  if (action.type === "SET_REMEMBER_ME") {
    const rememberMe = action.payload.rememberMe;
    if (rememberMe) {
      persistor.persist();
    } else {
      persistor.pause();
      persistor.purge();
    }
  }

  return result;
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rememberMeMiddleware),
});

export const persistor = persistStore(store);

// Initially pause the persistor to prevent unintended persistence
persistor.pause();

export default store;
