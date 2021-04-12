import React from "react";

const initialState = {
  pets: null,
  status: "idle",
};

export default function petReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_PET_INFO": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_PET_INFO": {
      return {
        status: "idle",
        pets: {
          data: action,
        },
      };
    }
    case "RECEIVE_PET_INFO_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}

export const getPetDataArray = (state) => Object.values(state);
