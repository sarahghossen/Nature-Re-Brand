import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
// import MapStyles from "./MapStyles";
import locations from "./locations.json";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 45.50169,
  lng: -73.567253,
};
const options = {
  //   styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const MapAPI = () => {
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
        zoom={10}
        center={center}
        options={options}
      >
        {locations.map((location) => {
          return (
            <Marker
              key={location.feature.id}
              position={{
                lat: location.geometry.coordinates[0],
                lng: location.geometry.coordinates[1],
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default MapAPI;
