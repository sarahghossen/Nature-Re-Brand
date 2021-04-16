import React from "react";
import styled from "styled-components";

const SignInMessage = ({ userData }) => {
  return (
    <Wrapper>
      <h1>Welcome {userData.name}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.p``;

export default SignInMessage;
