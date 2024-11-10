import { combineReducers } from "redux";
import authReducer from "./authReducer";

/**
 * Combines all the reducers into a single root reducer.
 *
 * @function
 * @name rootReducer
 * @returns {Function} The combined reducer function.
 */
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
