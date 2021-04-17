import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <HomeDiv>
      {/* <BackgroundImg src="images/dog_header.png" /> */}
      <H1>Welcome</H1>
      <WelcomeDiv>
        <BigP>
          In a world that is becoming more impersonal and stressful, we offer
          our customers a friendly place where you will find a great selection
          of pet products and a friendly and helpful staff.
        </BigP>
      </WelcomeDiv>
      <ServeDiv>
        <H2>Here to serve you better!</H2>
        <P>
          To serve you better, we have 7 branches in the greater Montreal and
          Laval area, with a wide selection of products, accessories and foods,
          not only for dogs and cats, but also for small animals, birds,
          reptiles and fish ! We also believe that we have a responsibility
          towards our community.
        </P>
        <ServeImgDiv>
          <ServeImg src="" />
        </ServeImgDiv>
      </ServeDiv>
      <AdoptDiv>
        <H2>Adopt Today</H2>
        <P>
          Indeed, we are sad to see the number of abandoned dogs and cats that
          are euthanized every day. That's why we took the initiative to focus
          on adoption and to help rescues and shelters in our community and
          beyond, to find families for the thousands of abandoned and unwanted
          animals. Come visit us at one of Nature Pet Centers and let us help
          you take care of your new family member.
        </P>
      </AdoptDiv>
      <div>
        <img />
        <h2>Our Story</h2>
        <p>something</p>
        <button>Read more</button>
      </div>
      <h2>Something something</h2>
      <div>
        <img />
        <h2>Adopt</h2>
        <p>something</p>
        <button>Read more</button>
      </div>
      <div>
        <img />
        <h2>Donate</h2>
        <p>something</p>
        <button>Read more</button>
      </div>
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
  background-size: 100vw;
`;

const WelcomeDiv = styled.div``;

const ServeDiv = styled.div``;

const AdoptDiv = styled.div``;

const ServeImgDiv = styled.div``;

const ServeImg = styled.img``;

const H1 = styled.h1`
  font-size: 50px;
`;

const H2 = styled.h2``;

const P = styled.p``;

const BigP = styled.p``;

export default Homepage;
