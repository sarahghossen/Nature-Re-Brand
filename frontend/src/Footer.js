import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterDiv>
      <Div1>
        <P>© 2014. Centre d'animaux Nature. All Rights Reserved.</P>
        <Link>
          <Icon src="images/instagram.png" />
          <Icon src="images/facebook.png" />
          <Icon src="images/twitter.png" />
        </Link>
        <Button onClick={scrollToTop}>Back to top</Button>
      </Div1>
      <Div2>
        <a
          href="mailto:pointclaire@nature.com"
          style={{
            textDecoration: "none",
            color: "var(--yellow-color)",
          }}
        >
          pointclaire@nature.com
        </a>
        <P>Pointe-Claire (Head Office)</P>
        <P>6361 Transcanada Route #119, Complexe Pointe-Claire</P>
        <P>Pointe-Claire, Quebec, H9R 5A5</P>
        <P>514-694-3291</P>
        <StyledLink to="/contact-us">view all 7 locations</StyledLink>
      </Div2>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--third-color);
  padding: 30px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div2 = styled.div`
  text-align: right;
  @media (max-width: 900px) {
    text-align: left;
    margin-top: 20px;
    & a {
      font-size: 12px;
    }
  }
`;
const P = styled.p`
  color: var(--primary-color);
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

const Icon = styled.img`
  width: 25px;
  margin: 10px;
  @media (max-width: 900px) {
    width: 15px;
    margin: 5px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--yellow-color);
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  background-color: var(--third-color);
  padding: 10px 17px 10px 17px;
  width: 120px;
  cursor: pointer;
  transition: all 0.5s ease;
  @media (max-width: 900px) {
    padding: 5px 10px 5px 10px;
  }
  &:hover {
    background-color: var(--yellow-color);
    color: var(--third-color);
  }
`;

export default Footer;
