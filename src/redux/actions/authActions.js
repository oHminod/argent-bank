export const login = (token, userData, rememberMe) => {
  return {
    type: "LOGIN",
    payload: { token, userData, rememberMe },
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
