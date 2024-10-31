const initialState = false;

const rememberMeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REMEMBER_ME":
      return action.payload.rememberMe;
    default:
      return state;
  }
};

export default rememberMeReducer;
