import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  requestPetInfo,
  receivePetInfo,
  receivePetInfoError,
} from "../actions";
import AllPets from "./AllPets";
import { getPetDataArray } from "../reducers/petReducer";

const GenerateAllPets = () => {
  const dispatch = useDispatch();
  const petData = useSelector(getPetDataArray);
  // console.log(petData)

  React.useEffect(() => {
    dispatch(requestPetInfo());
    fetch("/adoption")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receivePetInfo(json));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receivePetInfoError());
      });
  }, []);
  if (petData) {
    console.log("PETS DATA", petData);
  }
  return petData ? (
    <div>
      {petData?.pets?.map((data) => {
        return <AllPets name={data.name} />;
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default GenerateAllPets;
