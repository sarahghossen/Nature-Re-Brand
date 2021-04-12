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
  const state = useSelector((state) => state);
  const petData = useSelector(getPetDataArray);
  //   const [pets, setPets] = useState([]);
  //   console.log(petData)

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
  //   if (petData) {
  //     console.log(petData[0].pets.data.pets.data);
  //   }
  return petData ? (
    <div>
      {petData[0].pets.data.pets.data.map((data) => {
        return <p>{data.name}</p>;
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

// const GenerateAllPets = () => {
//   const [pets, setPets] = useState([]);
//   const state = useSelector((state) => state);
//   const petData = useSelector(getPetDataArray);
//   //   console.log(petData)

//   React.useEffect(() => {
//     fetch("/adoption")
//       .then((res) => res.json())
//       .then((data) => {
//         setPets(data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   // console.log(petData);
//   return (
//     <div>
//       {pets.map((data) => {
//         return <p>{data.name}</p>;
//       })}
//     </div>
//   );
// };

export default GenerateAllPets;
