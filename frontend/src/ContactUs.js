import React from "react";
import styled from "styled-components";
import MapAPI from "./GoogleMaps/MapAPI";
import Fade from "react-reveal/Fade";

const ContactUs = () => {
  return (
    <ContactUsDiv>
      <H1Div>
        <Fade left>
          <H1>Contact Us</H1>
          <BigP>
            Have any questions? Call or email us during our opening hours at any
            one of our stores!
          </BigP>
        </Fade>
      </H1Div>
      <BigDiv>
        <MapDiv>
          <MapAPI />
        </MapDiv>
        <LocationsDiv>
          <Location>
            <H2>Pointe-Claire (Head Office)</H2>
            <P>6361 Transcanada Route #119</P>
            <P>Complexe Pointe-Claire,</P>
            <P>Pointe-Claire, Quebec, H9R 5A5</P>
            <P>
              <a
                href="mailto:pointclaire@nature.com"
                style={{
                  textDecoration: "none",
                  color: "var(--secondary-color)",
                  fontWeight: "bold",
                }}
              >
                pointclaire@nature.com
              </a>
            </P>
            <P>Tel 514-694-3291</P>
          </Location>
          <Location>
            <H2>Anjou</H2>
            <P>6200 L.H.Lafontaine boulevard</P>
            <P>Anjou, Quebec, H1M 1S8</P>
            <P>
              <a
                href="mailto:anjou@nature.com"
                style={{
                  textDecoration: "none",
                  color: "var(--secondary-color)",
                  fontWeight: "bold",
                }}
              >
                anjou@nature.com
              </a>
            </P>
            <P>Tel 514-353-7611</P>
          </Location>
          <Location>
            <H2>Boisbriand</H2>
            <P>3204 des Grandes Tourelles avenue</P>
            <P>Boisbriand, Quebec, J7H 0A2</P>
            <P>
              <a
                href="mailto:boisbriand@nature.com"
                style={{
                  textDecoration: "none",
                  color: "var(--secondary-color)",
                  fontWeight: "bold",
                }}
              >
                boisbriand@nature.com
              </a>
            </P>
            <P>Tel 450-430-0096</P>
          </Location>
          <Location>
            <H2>Lasalle</H2>
            <P>8350 Newman boulevard</P>
            <P>Lasalle, Quebec, H8N 1X9</P>
            <P>
              <a
                href="mailto:lasalle@nature.com"
                style={{
                  textDecoration: "none",
                  color: "var(--secondary-color)",
                  fontWeight: "bold",
                }}
              >
                lasalle@nature.com
              </a>
            </P>
            <P>Tel 514-363-3221</P>
          </Location>
          <Location>
            <H2>Laval</H2>
            <P>1600 Le Corbusier boulevard</P>
            <P>Laval, Quebec, H7S 1Y9</P>
            <P>
              <a
                href="mailto:laval@nature.com"
                style={{
                  textDecoration: "none",
                  color: "var(--secondary-color)",
                  fontWeight: "bold",
                }}
              >
                laval@nature.com
              </a>
            </P>
            <P>Tel 450-687-5710</P>
          </Location>
          <Location>
            <H2>Sainte-Dorothee</H2>
            <P>960 Chemin Dessertes</P>
            <P>Ste-Dorothee Mega Center,</P>
            <P>Ste-Dorothee, Quebec, H7X 3S9</P>
            <P>
              <a
                href="mailto:saintedorothee@nature.com"
                style={{
                  textDecoration: "none",
                  color: "var(--secondary-color)",
                  fontWeight: "bold",
                }}
              >
                saintedorothee@nature.com
              </a>
            </P>
            <P>Tel 450-689-4080</P>
          </Location>
          <Location>
            <H2>Westmount</H2>
            <P>1500 Atwater avenue</P>
            <P>Alexis-Nihon Plaza,</P>
            <P>Westmount, Quebec, H3Z 1X5</P>
            <P>
              <a
                href="mailto:westmount@nature.com"
                style={{
                  textDecoration: "none",
                  color: "var(--secondary-color)",
                  fontWeight: "bold",
                }}
              >
                westmount@nature.com
              </a>
            </P>
            <P>Tel 514-846-2190</P>
          </Location>
        </LocationsDiv>
      </BigDiv>
    </ContactUsDiv>
  );
};

const ContactUsDiv = styled.div`
  background-image: url("/images/ContactUs_header.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  @media (max-width: 900px) {
    background-size: 170vw;
  }
`;

const LocationsDiv = styled.div`
  @media (max-width: 900px) {
    margin-top: -90vh;
  }
`;

const Location = styled.div`
  margin-bottom: 20px;
`;

const MapDiv = styled.div`
  @media (max-width: 900px) {
    visibility: hidden;
  }
`;

const H1Div = styled.div`
  width: 35vw;
  height: 80vh;
  margin-left: 200px;
  padding-top: 100px;
  @media (max-width: 900px) {
    margin-left: 30px;
    padding-top: 20px;
    width: 55vw;
    height: 45vh;
  }
`;

const BigDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const BigP = styled.p`
  font-size: 17px;
  color: var(--third-color);
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

const H1 = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: var(--third-color);
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

const H2 = styled.h2``;

const P = styled.p`
  font-size: 13px;
`;
export default ContactUs;
