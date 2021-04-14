import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    fetch("/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBooking(data.data);
      });
  }, []);

  return (
    <BookingDiv>
      <h1>Form</h1>
      <form>
        <label>Full Name</label>
        <input type="text" for="Fname" />
        <label>Email</label>
        <input type="email" for="email" />
        <label>Phone Number</label>
        <input type="number" for="phone number" />
        <label>Address</label>
        <input type="address" for="address" />
        <label>City</label>
        <input type="text" for="city" />
        <label>Province</label>
        <input type="text" for="province" />
        <label>Postal Code</label>
        <input type="text" for="postal code" />
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
        />
        <p>Are there any children living in your home?</p>
        <input type="radio" />
        <label>Yes</label>
        <input type="radio" />
        <label>No</label>
        <p>Do you currently have one or more animals at home?</p>
        <input type="radio" />
        <label>Yes</label>
        <input type="radio" />
        <label>No</label>
        <button>Submit</button>
      </form>
    </BookingDiv>
  );
};

const BookingDiv = styled.div`
  background-color: yellow;
`;

export default Booking;
