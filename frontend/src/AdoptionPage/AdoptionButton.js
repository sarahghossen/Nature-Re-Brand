import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import AllPets from "./AllPets";

const AdoptionButton = () => {
  const [petSpecies, setPetSpecies] = useState(null);

  return petSpecies === "Cat" || "Dog" || "Bird" || "Rabbit" ? (
    <>
      <div>
        <button onClick={() => setPetSpecies("Cat")}>Cats</button>
        <button onClick={() => setPetSpecies("Dog")}>Dogs</button>
        <button onClick={() => setPetSpecies("Bird")}>Birds</button>
        <button onClick={() => setPetSpecies("Rabbit")}>Rabbits</button>
        <AllPets petSpecies={petSpecies} />
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default AdoptionButton;
