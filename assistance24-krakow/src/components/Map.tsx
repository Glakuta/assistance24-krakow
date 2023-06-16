"use client";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

type Props = {};

const containerStyle = {
  maxwidth: "1000px",
  height: "400px",
};

const center = {
  lat: 50.049683,
  lng: 19.944544,
};

const Map = (props: Props) => {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCrNV9GVKnON8t2S3kZUfZf4QunS3TpZb0">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
