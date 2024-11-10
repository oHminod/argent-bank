/**
 * The initial state for the authentication reducer.
 *
 * @type {Object}
 * @property {string|null} token - The authentication token.
 * @property {Object} userData - The user data.
 * @property {string} userData.id - The user ID.
 * @property {string} userData.createdAt - The creation date of the user.
 * @property {string} userData.updatedAt - The last update date of the user.
 * @property {string} userData.email - The user's email address.
 * @property {string} userData.firstName - The user's first name.
 * @property {string} userData.lastName - The user's last name.
 * @property {boolean} rememberMe - Whether the user opted to be remembered.
 */
const initialState = {
  token: null,
  userData: {
    id: "",
    createdAt: "",
    updatedAt: "",
    email: "",
    firstName: "",
    lastName: "",
  },
  rememberMe: false,
};

/**
 * The authentication reducer function.
 *
 * @function
 * @name authReducer
 * @param {Object} state - The current state.
 * @param {Object} action - The action to handle.
 * @param {string} action.type - The type of the action.
 * @param {Object} [action.payload] - The payload of the action.
 * @returns {Object} The new state.
 */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        rememberMe: action.payload.rememberMe,
      };
    case "LOGOUT":
      return initialState;
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
