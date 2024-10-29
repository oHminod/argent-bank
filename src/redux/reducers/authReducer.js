const initialState = {
  token: null,
  userData: {
    firstName: "",
    lastName: "",
  },
  rememberMe: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        userData: action.payload.userData,
        rememberMe: action.payload.rememberMe,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        userData: { firstName: "", lastName: "" },
        rememberMe: false,
      };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
