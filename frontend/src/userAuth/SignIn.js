import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
const SignIn = ({ userData, setUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  console.log(email);

  const handleSignIn = (e) => {
    e.preventDefault();
    email.includes("@") === false && setErrMessage("Invalid email or password");

    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.status === "success") {
          setUserData(data.user);
        } else {
          setErrMessage("Invalid email or password");
        }
      });
  };
  return (
    <>
      <Container>
        <SignInForm>
          <H1>Sign In</H1>
          <Label>Email</Label>
          <Input
            type="email"
            htmlFor="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignInButton onClick={handleSignIn}>Login</SignInButton>
          <p>{errMessage}</p>
        </SignInForm>
        <SignUpDiv>
          <H2>
            Don't Have an Account?{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "var(--secondary-color)",
              }}
              to="sign-up"
            >
              Sign up!
            </Link>
          </H2>
        </SignUpDiv>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const SignInForm = styled.form`
  box-shadow: 0 0 10px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 15px;
  color: var(--third-color);
`;

const Input = styled.input`
  border: 1px solid var(--secondary-color);
  padding: 10px;
  outline: none;
  width: 300px;
  margin-bottom: 10px;
`;

const SignUpDiv = styled.div``;

const SignInButton = styled.button`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  background-color: var(--primary-color);
  padding: 10px 17px 10px 17px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: var(--third-color);
  }
`;

const H1 = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-size: 15px;
  color: var(--third-color);
`;

export default SignIn;
