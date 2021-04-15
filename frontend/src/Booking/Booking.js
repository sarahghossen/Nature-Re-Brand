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
  const [bookingData, setBookingData] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [subStatus, setSubStatus] = useState("idle");
  const [errMessage, setErrMessage] = useState("");
  const successMsg = "Success";

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
      <h1>Form</h1>
      <form onChange={(ev) => handleChange(ev)} disabled={disabled}>
        <label>Full Name</label>
        <input type="text" htmlFor="Fname" name="fullName" />
        <label>Email</label>
        <input type="email" htmlFor="email" name="Email" />
        <label>Phone Number</label>
        <input type="number" htmlFor="phone number" name="phoneNumber" />
        <label>Address</label>
        <input type="address" htmlFor="address" name="Address" />
        <label>City</label>
        <input type="text" htmlFor="city" name="City" />
        <label>Province</label>
        <input type="text" htmlFor="province" name="Province" />
        <label>Postal Code</label>
        <input type="text" htmlFor="postal code" name="postalCode" />
        <p>Book a time:</p>
        <DatePicker
          placeholderText="Select Training Day"
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mmaa"
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
          name="Date"
        />
        <p>Are there any children living in your home?</p>
        <label>
          <input type="radio" value="yes" name="Children" />
          Yes
        </label>
        <label>
          <input type="radio" value="no" name="Children" />
          No
        </label>
        <p>Do you currently have one or more animals at home?</p>
        <label>
          <input type="radio" value="yes" name="Animals" />
          Yes
        </label>
        <label>
          <input type="radio" value="no" name="Animals" />
          No
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {subStatus === "error" && <ErrorMsg>{errMessage}</ErrorMsg>}
    </BookingDiv>
  ) : (
    <ConfirmationMsg bookingData={bookingData} />
  );
};

const BookingDiv = styled.div`
  background-color: yellow;
`;

export default Booking;
