import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Homepage = () => {
  return (
    <HomeDiv>
      {/* <BackgroundImg src="images/dog_header.png" /> */}
      <WelcomeDiv>
        <H1>Welcome To Nature!</H1>
        <BigP>
          In a world that is becoming more impersonal and stressful, we offer
          our customers a friendly place where you will find a great selection
          of pet products and a friendly and helpful staff.
        </BigP>
      </WelcomeDiv>
      <ServeDiv>
        <ServeImgDiv>
          <ServeImg src="images/catBlob.png" />
        </ServeImgDiv>
        <ServeText>
          <H2>Adopt Today</H2>
          <P>
            To serve you better, we have 7 branches in the greater Montreal and
            Laval area, with a wide selection of products, accessories and
            foods, not only for dogs and cats, but also for small animals,
            birds, reptiles and fish ! We also believe that we have a
            responsibility towards our community.
          </P>
          <P>
            Indeed, we are sad to see the number of abandoned dogs and cats that
            are euthanized every day. That's why we took the initiative to focus
            on adoption and to help rescues and shelters in our community and
            beyond, to find families for the thousands of abandoned and unwanted
            animals. Come visit us at one of Nature Pet Centers and let us help
            you take care of your new family member.
          </P>
        </ServeText>
      </ServeDiv>
      <ThreeButtonDiv>
        <ButtonDiv>
          <ButtonImg src="images/buttonIconStory.png" />
          <H2>Our Story</H2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </P>
          <ButtonReadMore to="/about-us">Read more</ButtonReadMore>
        </ButtonDiv>
        <ButtonDiv>
          <ButtonImg src="images/buttonIconAdopt.png" />
          <H2>Adopt</H2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </P>
          <ButtonReadMore to="/adoption">Read more</ButtonReadMore>
        </ButtonDiv>
        <ButtonDiv>
          <ButtonImg src="images/buttonIconDonate.png" />
          <H2Fix>Donate</H2Fix>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </P>
          <ButtonReadMore>Read more</ButtonReadMore>
        </ButtonDiv>
      </ThreeButtonDiv>
      <SubscribeDiv>
        <H2>Subscribe To Our Mailing List For The Lastest News!</H2>
        <Form>
          <Input type="email" placeholder="Email Address" />
          <SubscribeButton type="submit">Subscribe</SubscribeButton>
        </Form>
      </SubscribeDiv>
    </HomeDiv>
  );
};

const HomeDiv = styled.div`
  background-image: url("/images/dog_header.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  /* width: 100vw; */
`;

const WelcomeDiv = styled.div`
  width: 35vw;
  height: 80vh;
  margin-left: 200px;
  padding-top: 100px;
`;

const ServeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  /* margin-top: 200px; */
`;

const ServeText = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin-left: 10vw;
  margin-right: 10vw;
`;

const ServeImg = styled.img`
  width: 400px;
`;

const ThreeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80vw;
  margin-top: 100px;
  margin-bottom: 100px;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  margin: 10px;
  /* border: 1px solid var(--primary-color);
  border-radius: 30px; */
`;
const ButtonImg = styled.img`
  width: 80px;
  margin-bottom: 20px;
`;

const ButtonReadMore = styled(Link)`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid;
  border-color: (--secondary-color);
  color: var(--secondary-color);
  padding: 8px 15px 8px 15px;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  cursor: pointer;
  &:hover {
    box-shadow: inset 150px 0 0 0 var(--third-color);
  }
`;

const H1 = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: var(--secondary-color);
  margin-bottom: 20px;
  line-height: 1;
`;

const H2 = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  color: var(--secondary-color);
`;

const H2Fix = styled.h2`
  font-size: 30px;
  margin-bottom: 55px;
  color: var(--secondary-color);
`;

const P = styled.p`
  color: var(--third-color);
  font-size: 15px;
  margin-bottom: 20px;
`;

const BigP = styled.p`
  font-size: 17px;
  color: var(--third-color);
`;

const ServeImgDiv = styled.div``;

const SubscribeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  height: 300px;
`;

const SubscribeButton = styled.button`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid;
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  background-color: var(--primary-color);
  padding: 10px 17px 10px 17px;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  cursor: pointer;
  &:hover {
    box-shadow: inset 150px 0 0 0 var(--third-color);
  }
`;

const Form = styled.form``;

const Input = styled.input`
  padding: 10px;
  outline: none;
  width: 300px;
`;

export default Homepage;
