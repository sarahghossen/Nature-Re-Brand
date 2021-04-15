import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  requestPetInfo,
  receivePetInfo,
  receivePetInfoError,
} from "../actions";
import Pet from "./Pet";
import { getPetDataArray } from "../reducers/petReducer";
// import AdoptionPage from "./AdoptionPage";

const AllPets = ({ petSpecies }) => {
  const dispatch = useDispatch();
  const petData = useSelector(getPetDataArray);
  const [filteredPets, setFilteredPets] = useState([]);
  // console.log(petSpecies);

  useEffect(() => {
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

  useEffect(() => {
    fetch(`/adoption/${petSpecies}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredPets(data.data);
        // console.log("data", data.data);
      });
  }, [petSpecies]);

  // if (petData) {
  //   console.log("PETS DATA", petData);
  // }
  return petData && petSpecies === null ? (
    <>
      <div>
        {petData?.pets?.map((data) => {
          return (
            <>
              <Pet
                key={data._id}
                avatarSrc={data.avatarSrc}
                name={data.name}
                species={data.species}
                gender={data.gender}
                age={data.age}
                id={data._id}
              />
            </>
          );
        })}
      </div>
    </>
  ) : petSpecies ? (
    <div>
      <h1>{filteredPets.length + " " + petSpecies}</h1>
      {filteredPets.map((data) => {
        return (
          <>
            <Pet
              key={data._id}
              avatarSrc={data.avatarSrc}
              name={data.name}
              species={data.species}
              gender={data.gender}
              age={data.age}
              id={data._id}
            />
          </>
        );
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default AllPets;
