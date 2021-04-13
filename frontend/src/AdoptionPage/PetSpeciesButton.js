import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

const PetSpeciesButton = () => {
  const [petSpecies, setPetSpecies] = useState();
  const [error, setError] = useState();
  const { species } = useParams();

  useEffect(() => {
    fetch(`/adoption/${species}`)
      .then((res) => res.json())
      .then((data) => {
        setPetSpecies(data);
      })
      .catch((err) => setError(err));
  }, []);

  return petSpecies ? (
    <>
      <div>
        <button to="adoption/Cat">Cats</button>
        <button>Dogs</button>
        <button>Birds</button>
        <button>Rabbits</button>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default PetSpeciesButton;
