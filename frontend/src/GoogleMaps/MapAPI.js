import React, { useState } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import MapStyles from "./MapStyles";
import locations from "./locations.json";

const libraries = ["places"];
const mapContainerStyle = {
  width: "60vw",
  height: "80vh",
  marginRight: "40px",
  outline: "none",
};
const center = {
  lat: 45.50169,
  lng: -73.567253,
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const MapAPI = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
      >
        {locations.map((store) => {
          return (
            <Marker
              style={{
                outline: "none",
                border: "none",
              }}
              key={store.feature.id}
              position={{
                lat: store.geometry.coordinates[0],
                lng: store.geometry.coordinates[1],
              }}
              onClick={() => {
                setSelectedStore(store);
              }}
              icon={{
                url: "/images/naturePin.png",
                scaledSize: new window.google.maps.Size(40, 55),
              }}
            />
          );
        })}

        {selectedStore && (
          <InfoWindow
            style={{
              border: "none",
              outline: "none",
            }}
            position={{
              lat: selectedStore.geometry.coordinates[0],
              lng: selectedStore.geometry.coordinates[1],
            }}
            onCloseClick={() => {
              setSelectedStore(null);
            }}
          >
            <Div>
              <H2>{selectedStore.feature.location}</H2>
              <p>{selectedStore.feature.address}</p>
              <p>{selectedStore.feature.email}</p>
              <p>{selectedStore.feature.telNumber}</p>
            </Div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

const Div = styled.div`
  width: 10vw;
`;

const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

export default MapAPI;
