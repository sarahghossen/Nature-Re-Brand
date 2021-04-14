import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
// import AdoptionPage from "./AdoptionPage";

const Pet = ({ name, id, avatarSrc, gender, age }) => {
  return (
    <>
      <StyledLink to={`adoption/${id}`}>
        <div>
          <Img src={avatarSrc} />
          <p>{gender}</p>
          <p>{age}</p>
          <p>{name}</p>
        </div>
      </StyledLink>
    </>
  );
};

const Img = styled.img`
  width: 200px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Pet;
