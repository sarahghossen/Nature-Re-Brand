import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AdoptionBanner = () => {
  return (
    <AdoptionDiv>
      {/* <BackgroundImg src="images/dog_header.png" /> */}
      <WelcomeDiv>
        <H1>Adoption</H1>
        <BigP>
          Here you will find information on available pets through our{" "}
          <Link
            to="contact-us"
            style={{
              textDecoration: "none",
              color: "var(--secondary-color)",
            }}
          >
            7 stores
          </Link>{" "}
          in the Greater Montreal and Laval area.
        </BigP>
      </WelcomeDiv>
    </AdoptionDiv>
  );
};

const AdoptionDiv = styled.div`
  background-image: url("/images/adoption_header.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100vw;
  @media (max-width: 900px) {
    background-size: 170vw;
  }
`;

const WelcomeDiv = styled.div`
  width: 35vw;
  height: 80vh;
  margin-left: 200px;
  padding-top: 100px;
  @media (max-width: 900px) {
    margin-left: 30px;
    padding-top: 20px;
    width: 65vw;
    height: 45vh;
  }
`;

const BigP = styled.p`
  font-size: 17px;
  color: var(--third-color);
  @media (max-width: 900px) {
    font-size: 13px;
    margin-right: 10px;
  }
`;

const H1 = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: var(--third-color);
  margin-bottom: 20px;
  line-height: 1;
  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

export default AdoptionBanner;
