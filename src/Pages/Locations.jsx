import React from "react";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

const Locations = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 23.8103,
    lng: 90.4125,
  };

  return (
    <div>
      <h1>Location..</h1>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Locations;
