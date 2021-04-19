import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMsg from "./ErrorMsg";
import ConfirmationMsg from "./ConfirmationMsg";
import { errorMessages } from "./errorMessages";

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookingData, setBookingData] = useState({
    fullName: "",
    Email: "",
    phoneNumber: "",
    Address: "",
    City: "",
    Province: "",
    postalCode: "",
    Date: "",
    Children: "",
    Animals: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [subStatus, setSubStatus] = useState("idle");
  const [errMessage, setErrMessage] = useState("");
  const successMsg = "Success";
  let checkDisabled =
    bookingData.fullName === "" ||
    bookingData.Email === "" ||
    bookingData.phoneNumber === "" ||
    bookingData.Address === "" ||
    bookingData.City === "" ||
    bookingData.Province === "" ||
    bookingData.postalCode === "" ||
    bookingData.Date === "" ||
    bookingData.Children === "" ||
    bookingData.Animals === "";

  const handleChange = (ev) => {
    setBookingData({ ...bookingData, [ev.target.name]: ev.target.value });
    setErrMessage("");
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSubStatus("pending");

    fetch("/booking", {
      method: "POST",
      body: JSON.stringify(bookingData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { status, error } = data;
        if (status === "success") {
          setSuccess(true);
          setSubStatus("confirmed");
          console.log(successMsg);
        } else if (error) {
          setSubStatus("error");
          setErrMessage(errorMessages[error]);
          console.log(errorMessages[error]);
        }
      });
  };

  return subStatus !== "confirmed" ? (
    <BookingDiv>
      <Div>
        <H1>Form</H1>
        <Form onChange={(ev) => handleChange(ev)} disabled={disabled}>
          <Label>Full Name</Label>
          <Input type="text" htmlFor="Fname" name="fullName" />
          <Label>Email</Label>
          <Input type="email" htmlFor="email" name="Email" />
          <Label>Address</Label>
          <Input type="address" htmlFor="address" name="Address" />
          <Div2>
            <Label style={{ marginRight: "10px" }}>Phone Number</Label>
            <Input type="number" htmlFor="phone number" name="phoneNumber" />
            <Label style={{ marginLeft: "10px", marginRight: "10px" }}>
              City
            </Label>
            <Input type="text" htmlFor="city" name="City" />
            <Label style={{ marginLeft: "10px", marginRight: "10px" }}>
              Province
            </Label>
            <Input type="text" htmlFor="province" name="Province" />
          </Div2>
          <Div3>
            <Label style={{ marginRight: "10px" }}>Postal Code</Label>
            <Input type="text" htmlFor="postal code" name="postalCode" />
            <Label style={{ marginLeft: "10px", marginRight: "10px" }}>
              Book a time
            </Label>
            <DatePicker
              style={{
                border: "none",
                outline: "none",
              }}
              placeholderText="Appointment Date"
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mmaa"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={(date) => {
                setEndDate(date);
                setBookingData({ ...bookingData, Date: date });
              }}
            />
          </Div3>
          <P>Are there any children living in your home?</P>
          <Label>
            <Input type="radio" value="yes" name="Children" />
            Yes
          </Label>
          <Label>
            <input type="radio" value="no" name="Children" />
            No
          </Label>
          <p>Do you currently have one or more animals at home?</p>
          <Label>
            <Input type="radio" value="yes" name="Animals" />
            Yes
          </Label>
          <Label>
            <Input type="radio" value="no" name="Animals" />
            No
          </Label>
          <Button disabled={checkDisabled} onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        {subStatus === "error" && <ErrorMsg>{errMessage}</ErrorMsg>}
      </Div>
    </BookingDiv>
  ) : (
    <ConfirmationMsg bookingData={bookingData} />
  );
};

const BookingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(76, 118, 78, 0.8); */
  background-color: rgba(25, 39, 26, 0.8);
`;

const Div = styled.div`
  width: 60vw;
  height: 90vh;
  background-color: var(--pinkish-color);
  padding: 30px;
`;

const Div2 = styled.div`
  display: flex;
`;
const Div3 = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 15px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  margin-bottom: 10px;
`;

const H1 = styled.h1`
  color: var(--secondary-color);
  font-size: 40px;
`;

const P = styled.p`
  font-size: 15px;
`;

const Margin = styled.span`
  margin-right: 10px;
`;

const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid;
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  padding: 10px;
  cursor: pointer;
  width: 150px;
  font-size: 15px;
  transition: all 0.5s ease;
  margin-bottom: 30px;
  &:hover {
    background-color: var(--third-color);
  }
  &:disabled {
    color: white;
    background-color: lightgrey;
    border: 1px solid lightgrey;
    cursor: not-allowed;
  }
  &:disabled:hover {
    color: white;
    background-color: lightgrey;
    border: 1px solid lightgrey;
  }
`;

export default Booking;
