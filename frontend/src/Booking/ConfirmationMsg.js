import React from "react";
import styled from "styled-components";
import Tada from "react-reveal/Tada";

const ConfirmationMsg = () => {
  return (
    <BookingDiv>
      <Tada>
        <Div>
          <H1>Thank you for booking an Appointment!</H1>
          <P>
            A copy of this confirmation message will also be forwarded to your
            email address.
          </P>
        </Div>
      </Tada>
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
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 200vw;
    height: 100vh;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: 60vh;
  background-color: var(--pinkish-color);
  padding: 30px;
  @media (max-width: 900px) {
    width: 60vh;
    height: auto;
    background-color: var(--pinkish-color);
    /* padding: 30px;
    padding-left: 40px; */
  }
`;

const H1 = styled.h1`
  color: var(--secondary-color);
  font-size: 60px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

const P = styled.p`
  font-size: 17px;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

export default ConfirmationMsg;
