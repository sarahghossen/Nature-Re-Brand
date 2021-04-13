import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import AdoptionPage from "./AdoptionPage";

const Pet = ({ name, id, avatarSrc, gender, age }) => {
  return (
    <>
      <div>
        <Img src={avatarSrc} />
        <p>{gender}</p>
        <p>{age}</p>
        <p>{name}</p>
      </div>
    </>
  );
};

const Img = styled.img`
  width: 200px;
`;

export default Pet;
