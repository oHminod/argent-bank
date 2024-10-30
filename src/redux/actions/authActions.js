export const login = (token, rememberMe) => {
  return {
    type: "LOGIN",
    payload: { token, rememberMe },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const updateUserData = (userData) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: userData,
  };
};
