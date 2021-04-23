import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Shake from "react-reveal/Shake";

const SignUp = ({ userData, setUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [error, setError] = useState(false);

  // const handleChange = (ev) => {
  //   setUserData({ ...userData, [ev.target.name]: ev.target.value });
  // };

  const handleSignUp = (ev) => {
    ev.preventDefault();

    if (email.includes("@") === false) {
      setErrMessage("not a proper email");
      setError(true);
    } else if (password !== confirmPassword) {
      setErrMessage("passwords dont match");
      setError(true);
    } else {
      fetch("/users", {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setUserData(data.user);
          } else {
            setErrMessage("user already exists");
            setError(true);
          }
        });
    }
  };
  return (
    <Container>
      <SignUpForm>
        <H1>Sign Up</H1>
        <Label>Name</Label>
        <Input
          type="text"
          htmlFor="userName"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Label>Confirm Password</Label>
        <Input
          type="password"
          name="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
        {error ? (
          <Shake>
            <P>{errMessage}</P>
          </Shake>
        ) : (
          <P>{errMessage}</P>
        )}
      </SignUpForm>
      <H2>
        Have an Account?{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "var(--secondary-color)",
          }}
          to="sign-in"
        >
          Sign In!
        </Link>
      </H2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 900px) {
    min-height: 70vh;
  }
`;

const SignUpForm = styled.form`
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

const SignUpButton = styled.button`
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

const P = styled.p`
  font-size: 15px;
  color: red;
  margin-top: 10px;
`;

export default SignUp;
