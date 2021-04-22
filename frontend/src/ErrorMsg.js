import React from "react";
import styled from "styled-components";

const ErrorMsg = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  padding: 15px;
  font-size: 15px;
  color: red;
  @media (max-width: 900px) {
    padding: 5px;
    width: 80vw;
    font-size: 12px;
    margin-top: -25px;
  }
`;

export default ErrorMsg;
