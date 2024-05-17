import React from "react";
import GoogleMapReact from "google-map-react";

export function Map() {
  const defaultProps = {
    center: {
      lng: 106.91560992322273,
      lat: 47.924810973922185,
    },
    zoom: 14,
  };

  function handleChange({ center }: any) {
    console.log({ center });
  }

  return (
    <div
      style={{ height: "693px", width: "630px" }}
      className="rounded-md overflow-hidden relative"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBa1zpk8lYSXy-do4zKtbDZ0M3HqkrRkeM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={handleChange}
      ></GoogleMapReact>

      <div className="absolute w-10 h-10 rounded-full border-2  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center text-black shadow">
        +
      </div>
    </div>
  );
}
