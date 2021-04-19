import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
// import AdoptionPage from "./AdoptionPage";

const Pet = ({ name, id, avatarSrc, gender, age }) => {
  return (
    <>
      <StyledLink to={`adoption/${id}`}>
        <PetDiv>
          <ImgDiv>
            <Img src={avatarSrc} />
          </ImgDiv>
          <PetText>
            <P>•{gender}</P>
            <P>•{age}</P>
            <P>•{name}</P>
          </PetText>
        </PetDiv>
      </StyledLink>
    </>
  );
};

const PetDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ebe4ca;
  /* padding: 20px; */
  margin: 20px;
  height: 320px;
  /* border-radius: 30px; */
`;

const PetText = styled.div`
  display: flex;
`;

const ImgDiv = styled.div`
  height: 270px;
  width: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 30px 30px 0px 0px; */
`;

const Img = styled.img`
  width: 365px;
  transition: transform 0.3s;
  &:hover {
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const P = styled.p`
  font-size: 16px;
  color: var(--secondary-color);
  margin: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Pet;
