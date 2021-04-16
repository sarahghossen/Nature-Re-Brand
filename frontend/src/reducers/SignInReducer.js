const initialState = {
  id: "",
  userName: "",
  email: "",
  password: "",
  isSignedIn: false,
};

export default function signIn(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        ...action.user,
        isSignedIn: true,
      };

    case "SIGN_OUT":
      return { ...state, email: "", password: "", isSignedIn: false };

    default:
      return state;
  }
}

export const signInReducer = (state) => state.isSignedIn;
