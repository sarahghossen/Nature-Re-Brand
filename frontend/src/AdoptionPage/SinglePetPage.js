import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Booking from "../Booking";

const SinglePetPage = () => {
  const [petId, setPetId] = useState(undefined);
  let { id } = useParams();

  useEffect(() => {
    fetch("/adoption/id/" + id)
      .then((res) => res.json())
      .then((data) => {
        setPetId(data.data);
      });
  }, [id]);

  return petId ? (
    <Div>
      <Link to="/adoption">View All Pets</Link>
      <h1>{petId.name}</h1>
      <Popup trigger={<button>Book an Appointment</button>} modal nested>
        {(close) => (
          <div>
            <button onClick={close}>&times;</button>
            <Booking />
          </div>
        )}
      </Popup>
      <h1>Description</h1>
      <p>{petId.description}</p>
      <p>Reference Number: {petId._id}</p>
      <p>Species: {petId.species}</p>
      <p>Age: {petId.age}</p>
      <p>Breed: {petId.Breed}</p>
      <img src={petId.avatarSrc} />
      <img src={petId.secondImg} />
    </Div>
  ) : (
    <div>Loading.. </div>
  );
};

const Div = styled.div``;

export default SinglePetPage;
