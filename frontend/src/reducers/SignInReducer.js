const initialState = {
  user: null,
  // id: "",
  // userName: "",
  // email: "",
  // password: "",
  // isSignedIn: false,
};

export default function signIn(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "SIGN_IN":
      return {
        // ...state,
        user: action.user,
        // isSignedIn: true,
      };

    case "SIGN_OUT":
      return { user: null };

    default:
      return state;
  }
}

// export const signInReducer = (state) => state.user;
