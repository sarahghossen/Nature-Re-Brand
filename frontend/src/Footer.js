import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  //api google map
  return (
    <FooterDiv>
      <Div1>
        <P>© 2014. Centre d'animaux Nature. All Rights Reserved.</P>
        <Icon src="images/instagram.png" />
        <Icon src="images/facebook.png" />
        <Icon src="images/twitter.png" />
      </Div1>
      <Div2>
        <P>info@nature.com</P>
        <P>1500 Avenue Atwater Place Alexis-Nihon </P>
        <P>Westmount, Quebec, H3Z 1X5</P>
        <P>514-846-2190</P>
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
`;
const Div1 = styled.div`
  margin-right: 150px;
`;
const Div2 = styled.div`
  text-align: right;
`;
const P = styled.p`
  color: var(--primary-color);
`;

const Icon = styled.img`
  width: 25px;
  margin: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--yellow-color);
`;

export default Footer;
