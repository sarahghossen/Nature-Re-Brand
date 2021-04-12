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
