import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FullLogo from "./Images/FullLogo.png";
import LogoImg from "./Images/LogoImg.png";
import Button from "./Button";

const Header = ({ setPetSpecies, userData, setUserData }) => {
  const handleSignOut = () => {
    setUserData(null);
  };

  return (
    <Container>
      {userData ? (
        <>
          <UserDataDiv>
            <ImgDiv>
              <Logo src={FullLogo} />
            </ImgDiv>
            <LinkDiv>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about-us">About Us</StyledLink>
              <StyledLink onClick={() => setPetSpecies(null)} to="/adoption">
                Adoption
              </StyledLink>
              <StyledLink to="/contact-us">Contact Us</StyledLink>
              <p>Welcome,{userData.name}</p>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </LinkDiv>
          </UserDataDiv>
        </>
      ) : (
        <UserDataDiv>
          <ImgDiv>
            <Logo src={FullLogo} />
          </ImgDiv>
          <LinkDiv>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about-us">About Us</StyledLink>
            <StyledLink onClick={() => setPetSpecies(null)} to="/adoption">
              Adoption
            </StyledLink>
            <StyledLink to="/contact-us">Contact Us</StyledLink>
            <StyledSignIn to="/sign-in">Sign In</StyledSignIn>
          </LinkDiv>
        </UserDataDiv>
      )}
    </Container>
  );
};

const Container = styled.div``;

const UserDataDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ImgDiv = styled.div``;
const LinkDiv = styled.div``;

const Logo = styled.img`
  width: 250px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 30px;
`;

const StyledSignIn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: 2px solid;
  border-color: (--primary-color);
  color: var(--primary-color);
  padding: 10px 17px 10px 17px;
  margin-left: 30px;
  /* background-color: var(--secondary-color); */
  cursor: pointer;
  &:hover {
  }
`;
export default Header;
