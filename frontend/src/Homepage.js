import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Homepage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <HomeDiv>
      <WelcomeDiv>
        <Fade left>
          <H1>Welcome To Nature!</H1>
          <BigP>
            In a world that is becoming more impersonal and stressful, we offer
            our customers a friendly place where you will find a great selection
            of pet products and a friendly and helpful staff.
          </BigP>
        </Fade>
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
        <Fade bottom>
          <ButtonDiv>
            <ButtonImg src="images/buttonIconStory.png" />
            <H2>Our Story</H2>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </P>
            <ButtonReadMore onClick={scrollToTop} to="/about-us">
              Read more
            </ButtonReadMore>
          </ButtonDiv>
          <ButtonDiv>
            <ButtonImg src="images/buttonIconAdopt.png" />
            <H2>Adopt</H2>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </P>
            <ButtonReadMore onClick={scrollToTop} to="/adoption">
              Read more
            </ButtonReadMore>
          </ButtonDiv>
          <ButtonDiv>
            <ButtonImg
              src="images/buttonIconDonate.png"
              style={{ marginTop: "25px" }}
            />
            <H2>Donate</H2>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </P>
            <ButtonReadMore>Read more</ButtonReadMore>
          </ButtonDiv>
        </Fade>
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

const ServeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;

const ServeText = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin-left: 10vw;
  margin-right: 10vw;
  @media (max-width: 900px) {
    width: 80vw;
    text-align: center;
  }
`;

const ServeImg = styled.img`
  width: 350px;
  overflow-x: hidden;
`;

const ThreeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80vw;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
const ButtonDiv = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
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
  cursor: pointer;
  transition: all 0.5s ease;
  margin-bottom: 30px;
  &:hover {
    background-color: var(--third-color);
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

const H2 = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  color: var(--secondary-color);
  @media (max-width: 900px) {
    font-size: 25px;
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

const ServeImgDiv = styled.div``;

const SubscribeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  height: 300px;
  @media (max-width: 900px) {
    height: 250px;
    text-align: center;
    padding: 5px;
  }
`;

const SubscribeButton = styled.button`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  background-color: var(--primary-color);
  padding: 10px 17px 10px 17px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: var(--third-color);
  }
`;

const Form = styled.form``;

const Input = styled.input`
  border: 2px solid var(--secondary-color);
  padding: 10px;
  outline: none;
  width: 300px;
  @media (max-width: 900px) {
    width: 250px;
  }
`;

export default Homepage;
