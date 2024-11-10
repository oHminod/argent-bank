/**
 * Creates an action to log in a user.
 *
 * @function
 * @name login
 * @param {string} token - The authentication token.
 * @param {boolean} rememberMe - Whether the user opted to be remembered.
 * @returns {Object} The action object.
 */
export const login = (token, rememberMe) => {
  return {
    type: "LOGIN",
    payload: { token, rememberMe },
  };
};

/**
 * Creates an action to log out a user.
 *
 * @function
 * @name logout
 * @returns {Object} The action object.
 */
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

/**
 * Creates an action to update user data.
 *
 * @function
 * @name updateUserData
 * @param {Object} userData - The new user data.
 * @returns {Object} The action object.
 */
export const updateUserData = (userData) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: userData,
  };
};
