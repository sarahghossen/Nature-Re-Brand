import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

const Header = ({ setPetSpecies }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link>About Us</Link>
      <Link onClick={() => setPetSpecies(null)} to="/adoption">
        Adoption
      </Link>
      <Link>Contact Us</Link>
    </div>
  );
};

export default Header;
