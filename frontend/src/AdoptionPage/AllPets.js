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
  console.log(petData, petSpecies);
  return (
    <>
      {petData && petSpecies === null && (
        <>
          <Wrapper>
            <NumberOfPets>
              {/* <SearchBar /> */}
              <H1>All Pets</H1>
            </NumberOfPets>
            <PetData>
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
            </PetData>
          </Wrapper>
        </>
      )}
      {petSpecies && (
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
      )}
      {petData === null && (petSpecies === null || petSpecies === undefined) && (
        <LoadingDiv>
          <LoadingImg src="/images/Loading.gif" />
        </LoadingDiv>
      )}
    </>
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
`;

const PetData = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const NumberOfPets = styled.div`
  padding: 20px;
`;

const LoadingImg = styled.img`
  width: 30%;
`;

const LoadingDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
export default AllPets;
