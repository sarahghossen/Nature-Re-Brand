import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "./useMediaQuery";

const Header = ({ setPetSpecies, userData, setUserData }) => {
  const [burger, setBurger] = useState(false);
  let isPageWide = useMediaQuery("(min-width: 900px)");

  const handleAdoptionLink = () => {
    setBurger(!burger);
    setPetSpecies(null);
  };

  const handleSignOut = () => {
    setUserData(null);
    localStorage.removeItem("_id");
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
                <StyledSignIn onClick={handleSignOut} to="sign-in">
                  Sign Out
                </StyledSignIn>
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
    //MOBILE
    <Container>
      {userData ? (
        <>
          <MobileDiv>
            <ImgDiv>
              <Link to="/">
                <Logo src="/images/FullLogo4.png" />
              </Link>
            </ImgDiv>
            <WelcomeMobile>
              <IconMobile src="/images/userIcon.png" />
              {userData.name.toUpperCase()}
            </WelcomeMobile>
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
                  <LinkMobile
                    onClick={() => setBurger(!burger)}
                    onClick={handleSignOut}
                    to="sign-in"
                  >
                    Sign Out
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile onClick={() => setBurger(!burger)} to="/">
                    Home
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile onClick={() => setBurger(!burger)} to="/about-us">
                    About Us
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile onClick={handleAdoptionLink} to="/adoption">
                    Adoption
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile
                    onClick={() => setBurger(!burger)}
                    to="/contact-us"
                  >
                    Contact Us
                  </LinkMobile>
                </LI>
              </UL>
              {/* </Div> */}
            </Nav>
          </MobileDiv>
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
                  <LinkMobile onClick={() => setBurger(!burger)} to="/sign-in">
                    Sign In
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile onClick={() => setBurger(!burger)} to="/">
                    Home
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile onClick={() => setBurger(!burger)} to="/about-us">
                    About Us
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile onClick={handleAdoptionLink} to="/adoption">
                    Adoption
                  </LinkMobile>
                </LI>
                <LI>
                  <LinkMobile
                    onClick={() => setBurger(!burger)}
                    to="/contact-us"
                  >
                    Contact Us
                  </LinkMobile>
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
  width: ${(props) => (props.burger ? "0%" : "100%")};
  transition: 0.5s;
  position: absolute;
  overflow-x: hidden;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9;
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
  z-index: 10;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: var(--third-color);
  &:focus {
    background-color: var(--yellow-color);
  }
`;
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const WelcomeMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: var(--primary-color);
  margin-left: 10vw;
`;
const IconMobile = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LI = styled.li`
  transition: all 0.2s ease;
  padding: 5px;
  text-align: center;
  width: 100vw;
`;

const LinkMobile = styled(Link)`
  text-decoration: none;
  font-size: 35px;
  color: var(--third-color);
  @media (max-width: 900px) {
    font-size: 25px;
  }
  &:focus {
    color: var(--primary-color);
  }
`;
const Container = styled.div``;

const MobileDiv = styled.div`
  background-color: var(--third-color);
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
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
  margin-right: 5px;
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
