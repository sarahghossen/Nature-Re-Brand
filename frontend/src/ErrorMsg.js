import React from "react";
import styled from "styled-components";

const ErrorMsg = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  border: 2px solid red;
  padding: 15px;
  font-size: 15px;
  color: red;
`;

export default ErrorMsg;
