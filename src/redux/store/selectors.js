/**
 * Selects the authentication token from the state.
 *
 * @function
 * @name getToken
 * @param {Object} state - The Redux state.
 * @returns {string} The authentication token.
 */
export const getToken = (state) => state.auth.token;

/**
 * Selects the user data from the state.
 *
 * @function
 * @name getUserData
 * @param {Object} state - The Redux state.
 * @returns {Object} The user data.
 */
export const getUserData = (state) => state.auth.userData;
