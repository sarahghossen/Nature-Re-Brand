import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  //api google map
  return (
    <div>
      <p>© 2014. Centre d'animaux Nature. All Rights Reserved.</p>
      <p>insta icon</p>
      <p>fb icon</p>
      <p>twitter icon</p>
      <p>insta icon</p>
      <div>
        <p></p>
        <p>1500 Avenue Atwater Place Alexis-Nihon </p>
        <p>Westmount, Quebec, H3Z 1X5</p>
        <p>514-846-2190</p>
        <Link to="/contact-us">view all 7 locations</Link>
      </div>
    </div>
  );
};

export default Footer;
