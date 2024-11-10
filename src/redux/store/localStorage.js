/**
 * Loads the persisted state from local storage.
 *
 * @function
 * @name loadState
 * @returns {Object|undefined} The persisted state or undefined if no state is found.
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("loadState error", err);
    return undefined;
  }
};

/**
 * Saves the current state to local storage.
 *
 * @function
 * @name saveState
 * @param {Object} state - The current state to be saved.
 * @returns {void}
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("saveState error", err);
  }
};
