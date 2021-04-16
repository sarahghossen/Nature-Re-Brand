import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignInMessage from "./SignInMessage";

const SignUp = ({ userData, setUserData }) => {
  // const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [subStatus, setSubStatus] = useState("idle");
  // const [success, setSuccess] = useState(false);
  // const successMsg = "Success";

  const handleChange = (ev) => {
    setUserData({ ...userData, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          setSubStatus("success");
        }
      });
  };

  return (
    <div>
      <form onChange={(ev) => handleChange(ev)}>
        <h1>Sign Up</h1>
        <label>Name</label>
        <input type="text" htmlFor="userName" name="name" />
        <label>Email</label>
        <input type="email" htmlFor="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
      <div></div>
    </div>
  );
};

export default SignUp;
