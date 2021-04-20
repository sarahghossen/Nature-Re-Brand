import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import SearchBar from "./SearchBar";

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
              <Link to="/">
                <Logo src="/images/FullLogo4.png" />
              </Link>
            </ImgDiv>
            <LinkDiv>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about-us">About Us</StyledLink>
              <StyledLink onClick={() => setPetSpecies(null)} to="/adoption">
                Adoption
              </StyledLink>
              <StyledLink to="/contact-us">Contact Us</StyledLink>
              <WelcomeDiv>
                <Icon src="/images/userIcon.png" />
                <Welcome>WELCOME, {userData.name.toUpperCase()}</Welcome>
                <Button onClick={handleSignOut}>Sign Out</Button>
              </WelcomeDiv>
            </LinkDiv>
          </UserDataDiv>
        </>
      ) : (
        <>
          <UserDataDiv>
            <ImgDiv>
              <Link to="/">
                <Logo src="/images/FullLogo4.png" />
              </Link>
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
        </>
      )}
    </Container>
  );
};

const Container = styled.div``;

const UserDataDiv = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  background-color: var(--third-color);
  width: 100%;
`;

const ImgDiv = styled.div``;
const LinkDiv = styled.div`
  display: flex;
  align-items: center;
`;
const WelcomeDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Welcome = styled.p`
  color: var(--primary-color);
`;

const Logo = styled.img`
  width: 200px;
`;
const Icon = styled.img`
  width: 20px;
  margin-left: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 40px;
  color: var(--primary-color);
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  cursor: pointer;
  &:hover {
    color: var(--yellow-color);
  }
`;

const StyledSignIn = styled(Link)`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid;
  border-color: var(--primary-color);
  color: var(--primary-color);
  padding: 10px 17px 10px 17px;
  margin-left: 40px;
  -webkit-transition: ease-out 0.2s;
  -moz-transition: ease-out 0.2s;
  transition: ease-out 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: inset 150px 0 0 0 var(--yellow-color);
    color: var(--third-color);
  }
`;
export default Header;
