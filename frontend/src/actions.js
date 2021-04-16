export const requestPetInfo = () => ({
  type: "REQUEST_PET_INFO",
});

export const receivePetInfo = (pets) => ({
  type: "RECEIVE_PET_INFO",
  pets,
});

export const receivePetInfoError = () => ({
  type: "RECEIVE_PET_INFO_ERROR",
});

export const signIn = (user) => ({
  type: "SIGN_IN",
  user,
});

export const signUp = (user) => ({
  type: "SIGN_UP",
  user,
});

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
