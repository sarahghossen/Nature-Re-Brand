import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import AllPets from "./AllPets";

const AdoptionButton = () => {
  const [petSpecies, setPetSpecies] = useState(null);

  return petSpecies === "Cat" || "Dog" || "Bird" || "Rabbit" ? (
    <>
      <div>
        {/* <Link to="adoption/"> */}
        <button onClick={() => setPetSpecies("Cat")}>Cats</button>
        {/* </Link> */}
        <button>Dogs</button>
        <button>Birds</button>
        <button>Rabbits</button>
        <AllPets petSpecies={petSpecies} />
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default AdoptionButton;
