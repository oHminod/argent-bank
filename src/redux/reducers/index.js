import { combineReducers } from "redux";
import authReducer from "./authReducer";
import rememberMeReducer from "./rememberMeReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Only persist the auth reducer
};

const rootReducer = combineReducers({
  auth: authReducer,
  rememberMe: rememberMeReducer,
});

export default persistReducer(persistConfig, rootReducer);
