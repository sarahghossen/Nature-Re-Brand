import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AllPets = ({ name, id, avatarSrc, gender, age }) => {
  console.log();
  return (
    <div>
      <Img src={avatarSrc} />
      <p>{gender}</p>
      <p>{age}</p>
      <p>{name}</p>
    </div>
  );
};

const Img = styled.img`
  border: 2px solid black;
  width: 200px;
  height: 200px;
`;

export default AllPets;
