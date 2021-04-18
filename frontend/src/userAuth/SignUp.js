import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = ({ userData, setUserData }) => {
  const [subStatus, setSubStatus] = useState("idle");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChange = (ev) => {
    setUserData({ ...userData, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("/users", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          setSubStatus("success");
          console.log("the data", data);
          setUserData(data.data);
        }
      });
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
        <SignUpButton onClick={handleSubmit}>Sign Up</SignUpButton>
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
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    box-shadow: inset 150px 0 0 0 var(--third-color);
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

export default SignUp;
