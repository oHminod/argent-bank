export const login = (token, rememberMe) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN",
      payload: { token },
    });
    dispatch({
      type: "SET_REMEMBER_ME",
      payload: { rememberMe },
    });
  };
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
  dispatch({ type: "SET_REMEMBER_ME", payload: { rememberMe: false } });
};

export const updateUserData = (userData) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: userData,
  };
};
