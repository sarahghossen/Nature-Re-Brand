import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import AllPets from "./AllPets";

const AdoptionButton = ({ petSpecies, setPetSpecies }) => {
  return petSpecies === "Cat" || "Dog" || "Bird" || "Rabbit" ? (
    <>
      <ButtonDiv>
        <Button onClick={() => setPetSpecies("Cat")}>Cats</Button>
        <Button onClick={() => setPetSpecies("Dog")}>Dogs</Button>
        <Button onClick={() => setPetSpecies("Bird")}>Birds</Button>
        <Button onClick={() => setPetSpecies("Rabbit")}>Rabbits</Button>
      </ButtonDiv>
      <AllPets petSpecies={petSpecies} />
    </>
  ) : (
    <LoadingDiv>
      <LoadingImg src="/images/Loading.gif" />
    </LoadingDiv>
  );
};

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 20px;
  border-bottom: 1px solid var(--primary-color);
  background-color: white;
  font-weight: bold;
  color: var(--primary-color);
  cursor: pointer;
  outline: none;
  font-size: 15px;
  &:focus {
    color: var(--secondary-color);
    border-bottom: 3px solid var(--secondary-color);
    outline: none;
  }
  &:hover {
    color: var(--secondary-color);
    border-bottom: 3px solid var(--secondary-color);
    outline: none;
  }
`;

const LoadingImg = styled.img`
  width: 30%;
`;

const LoadingDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export default AdoptionButton;
