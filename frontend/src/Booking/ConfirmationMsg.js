import React from "react";
import styled from "styled-components";

const ConfirmationMsg = () => {
  return (
    <BookingDiv>
      <Div>
        <H1>Thank you for booking an Appointment!</H1>
        <P>
          A copy of this confirmation message will also be forwarded to your
          email address.
        </P>
      </Div>
    </BookingDiv>
  );
};

const BookingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(76, 118, 78, 0.8); */
  background-color: rgba(25, 39, 26, 0.8);
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: 60vh;
  background-color: var(--pinkish-color);
  padding: 30px;
`;

const H1 = styled.h1`
  color: var(--secondary-color);
  font-size: 60px;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 17px;
`;

export default ConfirmationMsg;
