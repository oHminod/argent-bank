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
