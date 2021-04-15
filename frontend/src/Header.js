import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ setPetSpecies }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link onClick={() => setPetSpecies(null)} to="/adoption">
        Adoption
      </Link>
      <Link to="contact-us">Contact Us</Link>
    </div>
  );
};

export default Header;
