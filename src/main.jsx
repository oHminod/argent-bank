import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./utils/routes.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

/**
 * Initializes the React application by rendering the root component into the DOM.
 *
 * @function
 * @name initializeApp
 * @returns {void}
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
