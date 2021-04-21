import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useMediaQuery } from "./useMediaQuery";

const Header = ({ setPetSpecies, userData, setUserData }) => {
  const [burger, setBurger] = useState(false);
  let isPageWide = useMediaQuery("(min-width: 900px)");
  const handleSignOut = () => {
    setUserData(null);
  };

  return isPageWide ? (
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
                <StyledSignIn onClick={handleSignOut}>Sign Out</StyledSignIn>
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
  ) : (
    <Container>
      {userData ? (
        <>
          <Nav>
            <ImgDiv>
              <Link to="/">
                <Logo src="/images/FullLogo4.png" />
              </Link>
            </ImgDiv>
            <Div>
              <Input />
              <Span></Span>
              <Span></Span>
              <Span></Span>
              <UL>
                <LI to="/">Home</LI>
                <LI to="/about-us">About Us</LI>
                <LI onClick={() => setPetSpecies(null)} to="/adoption">
                  Adoption
                </LI>
                <LI to="/contact-us">Contact Us</LI>
                <WelcomeDivMobile>
                  <Icon src="/images/userIcon.png" />
                  <Welcome>WELCOME, {userData.name.toUpperCase()}</Welcome>
                  <StyledSignIn onClick={handleSignOut}>Sign Out</StyledSignIn>
                </WelcomeDivMobile>
              </UL>
            </Div>
          </Nav>
        </>
      ) : (
        <>
          <MobileDiv>
            <ImgDiv>
              <Link to="/">
                <Logo src="/images/FullLogo4.png" />
              </Link>
            </ImgDiv>
            <ButtonDiv>
              <Burger
                onClick={() => {
                  setBurger(!burger);
                }}
              ></Burger>
            </ButtonDiv>
            <Nav burger={burger}>
              {/* <Div> */}
              <UL>
                <LI>
                  <LinkMobile to="/sign-in">Sign In</LinkMobile>
                </LI>
                <LI>
                  <LinkMobile to="/">Home</LinkMobile>
                </LI>
                <LI>
                  <LinkMobile to="/about-us">About Us</LinkMobile>
                </LI>
                <LI>
                  <LinkMobile
                    onClick={() => setPetSpecies(null)}
                    to="/adoption"
                  >
                    Adoption
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile to="/contact-us">Contact Us</LinkMobile>
                </LI>
              </UL>
              {/* </Div> */}
            </Nav>
          </MobileDiv>
        </>
      )}
    </Container>
  );
};

//MOBILE

const Nav = styled.nav`
  transform: ${(props) =>
    props.burger ? "translateX(0%)" : "translateX(100%)"};
  transition-duration: 1s;
  position: absolute;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--yellow-color);
`;
const Burger = styled.button`
  background-image: url("/images/burger.png");
  text-decoration: none;
  background-size: cover;
  width: 60px;
  height: 60px;
  border: none;
  z-index: 2;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: var(--primary-color);
  &:hover {
    background-color: var(--yellow-color);
  }
`;
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Div = styled.div``;
const Input = styled.input``;
const Span = styled.span``;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LI = styled.li`
  transition: all 0.2s ease;
  padding: 5px;
  width: 100vw;
  text-align: center;
  &:hover {
    background-color: var(--primary-color);
  }
`;

const LinkMobile = styled(Link)`
  text-decoration: none;
  font-size: 35px;
  color: var(--third-color);
`;
const Container = styled.div``;
const WelcomeDivMobile = styled.div``;
const MobileDiv = styled.div`
  background-color: var(--third-color);
  display: flex;
`;

//DESKTOP

const UserDataDiv = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--third-color);
  width: 100%;
`;

const ImgDiv = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;
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
