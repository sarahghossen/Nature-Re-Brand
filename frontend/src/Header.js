import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signOut } from "./actions";

const Header = ({ setPetSpecies, userData, setUserData }) => {
  const handleSignOut = () => {
    setUserData(null);
  };

  return (
    <div>
      {userData ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link onClick={() => setPetSpecies(null)} to="/adoption">
            Adoption
          </Link>
          <Link to="/contact-us">Contact Us</Link>
          <p>Welcome back, {userData.name}</p>
          <div>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        </>
      ) : (
        <div>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link onClick={() => setPetSpecies(null)} to="/adoption">
            Adoption
          </Link>
          <Link to="/contact-us">Contact Us</Link>
          <div>
            <Link to="/sign-in">Sign In</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
