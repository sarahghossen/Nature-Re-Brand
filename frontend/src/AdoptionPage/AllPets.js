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
import SearchBar from "../SearchBar";
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
      {/* <SearchBar /> */}
      <Wrapper>
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
      </Wrapper>
    </>
  ) : petSpecies ? (
    <Wrapper>
      <NumberOfPets>
        {/* <SearchBar /> */}
        <H1>{filteredPets.length + " " + petSpecies}</H1>
      </NumberOfPets>
      <PetData>
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
      </PetData>
    </Wrapper>
  ) : (
    <div></div>
    // <div>Loading...</div>
  );
};

const H1 = styled.h1`
  font-size: 40px;
  color: var(--secondary-color);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: var(--primary-color); */
  /* align-items: center; */
  padding: 30px;
`;

const PetData = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: var(--primary-color); */
  /* align-items: center; */
  /* padding: 30px; */
`;

const NumberOfPets = styled.div``;
export default AllPets;
