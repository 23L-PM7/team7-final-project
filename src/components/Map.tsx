import ReactMapGL from "react-map-gl";
import { useState } from "react";

export function Map1({ searchResult }: any) {
  const [viewport, setViewPort]: any = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  // const coordinates = searchResult.map(result:any=>({

  // }))
  return (
    <ReactMapGL
      mapboxAccessToken="pk.eyJ1IjoiYW1nYWxhbmJhYXRhcjg4OCIsImEiOiJjbHc3ejQ3MmcwcG40Mm1vYndmaHJtZzd0In0.0ipGcBrXnQUDLHt6YVblNg"
      mapStyle={process.env.mapBox_key}
      {...viewport}
      onViewportChange={(nextViewport: any) => setViewPort(nextViewport)}
    ></ReactMapGL>
  );
}
