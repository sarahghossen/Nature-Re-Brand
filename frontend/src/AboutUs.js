import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <AboutDiv>
      <H1Div>
        <Fade left>
          <H1>About Us</H1>
          <BigP>
            Since first opening our doors in 1985, Nature Pet Centers has always
            been considered as leaders in the Pet Industry.
          </BigP>
        </Fade>
      </H1Div>
      <AboutDiv2>
        <AboutUsDiv3>
          <H2>Giving A Chance</H2>
          <P>
            As of September 2014, we has decided to take a huge step forward and
            further our leadership skills in being the first and only Pet Store
            chain in Quebec to stop selling puppies and kittens. Our focus and
            initiatives are solely in Rescue and Adoption and helping out the
            Shelters within our community and abroad in finding homes for the
            thousands of unwanted and abandoned pets. When adopting a Dog or Cat
            from Nature Pet Centers, you are not just saving ''a'' life, you are
            giving a chance and opening the door to many more. We want to be
            part of the solution, and adopting is one of the best ways of
            helping, and end pet homelessness and abandonment. All of our Dogs
            and Cats in adoption are also spayed and neutered because we want to
            fight against pet overpopulation as well. Aside from Pet Adoption,
            we offer Pet Grooming, as well as complete lines of products not
            only for Dog and Cat lovers, but for the Small Animal, Bird, Reptile
            and Fish enthusiasts. We pride ourselves in being Pet Experts with
            passionate, skilled and dedicated staff. Our main goal is to find
            you and your family exactly what you are looking for, a happy and
            healthy pet, offer the best advice and care possible, in a warm and
            friendly atmosphere. At Nature Pet Centers, we’re not just Animal
            Lovers.
          </P>
          <H3>
            Are you ready to see our adorable animals available for adoption?
            They're waiting for you!
          </H3>
          <ViewButton onClick={scrollToTop} to="/adoption">
            View Now
          </ViewButton>
        </AboutUsDiv3>
        <ImgDiv>
          <Img src="images/birdBlob.png" />
        </ImgDiv>
      </AboutDiv2>
    </AboutDiv>
  );
};

const AboutDiv = styled.div`
  background-image: url("/images/AboutUs_header.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  @media (max-width: 900px) {
    background-size: 170vw;
  }
`;

const AboutDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;
const AboutUsDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin-left: 10vw;
  margin-right: 10vw;
  @media (max-width: 900px) {
    width: 80vw;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const H1Div = styled.div`
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

const ImgDiv = styled.div``;

const Img = styled.img`
  width: 350px;
`;

const ViewButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid;
  width: 115px;
  border-color: (--secondary-color);
  color: var(--secondary-color);
  padding: 8px 15px 8px 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: var(--third-color);
  }
`;

const P = styled.p`
  color: var(--third-color);
  font-size: 15px;
  margin-bottom: 20px;
`;

const BigP = styled.p`
  font-size: 17px;
  color: var(--third-color);
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

const H1 = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: var(--third-color);
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

const H2 = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  color: var(--secondary-color);
  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

const H3 = styled.h3`
  font-size: 19px;
  margin-bottom: 30px;
  color: var(--secondary-color);
`;

export default AboutUs;
