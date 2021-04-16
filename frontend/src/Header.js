import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "./actions";

const Header = ({ setPetSpecies, userData, isSignedIn, setIsSignedIn }) => {
  const [subStatus, setSubStatus] = useState("idle");
  const successMsg = "Success";
  // const userState = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.signIn);

  const handleSignOut = (e) => {
    let email = state.email;
    let password = state.password;
    e.preventDefault();

    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 201) {
          dispatch(signOut(json.user));
        } else {
          return window.alert("user does not exist");
        }
      });
  };

  return (
    <div>
      {isSignedIn ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link onClick={() => setPetSpecies(null)} to="/adoption">
            Adoption
          </Link>
          <Link to="/contact-us">Contact Us</Link>
          <p>Welcome back, {userData.userName}</p>
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
