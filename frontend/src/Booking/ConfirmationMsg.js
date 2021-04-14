import React from "react";
import styled from "styled-components";

const ConfirmationMsg = () => {
  return (
    <Wrapper>
      <h1>Thank you for booking an Appointment!</h1>
      <p>
        A copy of this confirmation message will also be forwarded to your email
        address.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.p``;

export default ConfirmationMsg;
