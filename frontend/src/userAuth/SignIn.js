import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import SignUp from "./SignUp";
// import { signIn } from "../actions";

const SignIn = ({ userData, setUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          setUserData(data.user);
        } else {
          return window.alert("user does not exist");
        }
      });
  };
  return (
    <>
      <div>
        <form>
          <h1>Sign In</h1>
          <label>Email</label>
          <input
            type="email"
            htmlFor="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Login</button>
        </form>
      </div>
      <div>
        <h1>
          Don't Have an Account? <Link to="sign-up">Sign up!</Link>
        </h1>
      </div>
    </>
  );
};

export default SignIn;
