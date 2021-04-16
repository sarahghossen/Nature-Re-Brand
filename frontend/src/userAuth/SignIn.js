import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const SignIn = () => {
  // const [success, setSuccess] = useState(false);
  // const [subStatus, setSubStatus] = useState("idle");
  // const [errMessage, setErrMessage] = useState("");
  // const successMsg = "Success";

  // const handleChange = (ev) => {
  //   setUserData({ ...userData, [ev.target.name]: ev.target.value });
  //   setErrMessage("");
  // };

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   setSubStatus("pending");

  //   fetch("/users/login", {
  //     method: "POST",
  //     body: JSON.stringify(userData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { status, error } = data;
  //       if (status === 201) {
  //         setSuccess(true);
  //       }
  //     });
  // };
  return (
    <>
      <div>
        <form>
          <h1>Sign In</h1>
          <label>Email</label>
          <input type="email" htmlFor="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <button>Login</button>
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
