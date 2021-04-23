import React from "react";
import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid;
  border-color: 2px solid;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  padding: 10px 17px 10px 17px;
  margin-left: 30px;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  cursor: pointer;
  &:hover {
    box-shadow: inset 150px 0 0 0 var(--third-color);
  }
  &:disabled {
    color: white;
    background-color: grey;
    border: 1px solid grey;
    cursor: not-allowed;
  }
  &:disabled:hover {
    color: white;
    background-color: grey;
    border: 1px solid grey;
  }
`;

export default Button;
