import React, { useEffect, useState, Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { useParams, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Booking from "../Booking/Booking";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SinglePetPage = ({ setPetSpecies }) => {
  const [petId, setPetId] = useState(undefined);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`/adoption/id/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPetId(data.data);
        });
    }
  }, [id]);

  return petId ? (
    <>
      <Container>
        <Opener>
          <StyledLink onClick={() => setPetSpecies(null)} to="/adoption">
            View All Pets
          </StyledLink>
          <H1>{petId.name}</H1>
          <Popup trigger={<Button>Book an Appointment</Button>} modal nested>
            {(close) => (
              <div>
                <ButtonClose onClick={close}>&times;</ButtonClose>
                <Booking />
              </div>
            )}
          </Popup>
          <H2>Description</H2>
          <PDes>{petId.description}</PDes>
          <Description>
            <P>
              Reference Number: <Bold>{petId._id}</Bold>
            </P>
            <P>
              Species: <Bold2>{petId.species}</Bold2>
            </P>
            <P>
              Age: <Bold3>{petId.age}</Bold3>
            </P>
            <P>
              Breed: <Bold4>{petId.Breed}</Bold4>
            </P>
          </Description>
        </Opener>
        <ImageDiv>
          <Carousel>
            <div>
              <img src={petId.avatarSrc} />
            </div>
            <div>
              <img src={petId.secondImg} />
            </div>
          </Carousel>
        </ImageDiv>
      </Container>
    </>
  ) : (
    <div>Loading.. </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

const Opener = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: 40px;
  padding: 40px;
  background-color: var(--pinkish-color);
  height: 90vh;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageDiv = styled.div`
  width: 20vw;
  height: 90vh;
`;

const StyledLink = styled(Link)`
  margin-bottom: 20px;
  text-decoration: none;
  color: var(--secondary-color);
  font-size: 13px;
`;

const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const PDes = styled.p`
  font-size: 15px;
  /* border-bottom: 1px solid var(--secondary-color); */
  position: relative;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 15px;
  border-bottom: 1px solid var(--secondary-color);
  margin-top: 20px;
  font-weight: bold;
`;

const Bold = styled.span`
  margin-left: 40px;
  color: var(--secondary-color);
`;

const Bold2 = styled.span`
  margin-left: 120px;
  color: var(--secondary-color);
`;

const Bold3 = styled.span`
  margin-left: 150px;
  color: var(--secondary-color);
`;

const Bold4 = styled.span`
  margin-left: 135px;
  color: var(--secondary-color);
`;

const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: 2px solid;
  border-color: var(--secondary-color);
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 20px;
  cursor: pointer;
  width: 250px;
  font-size: 17px;
  transition: all 0.5s ease;
  margin-bottom: 30px;
  &:hover {
    background-color: var(--third-color);
  }
`;
const ButtonClose = styled.button`
  position: absolute;
  color: var(--secondary-color);
  font-size: 40px;
  padding: 1px 10px 1px 10px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: var(--third-color);
  }
`;

export default SinglePetPage;
