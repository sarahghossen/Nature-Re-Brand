import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
          <img />
          <h2>Our Story</h2>
          <p>something</p>
          <button>Read more</button>
        </ButtonDiv>
        <h2>Something something</h2>
        <ButtonDiv>
          <img />
          <h2>Adopt</h2>
          <p>something</p>
          <button>Read more</button>
        </ButtonDiv>
        <ButtonDiv>
          <img />
          <h2>Donate</h2>
          <p>something</p>
          <button>Read more</button>
        </ButtonDiv>
      </ThreeButtonDiv>
      <div>
        <h2>Subscribe To Our Mailing List For The Lastest News!</h2>
        <form>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
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

const ThreeButtonDiv = styled.div``;
const ButtonDiv = styled.div``;

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

export default Homepage;
