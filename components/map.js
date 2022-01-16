import { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { useSelector, useDispatch } from "react-redux";

function Map() {
  const { latitudeValue, longitudeValue } = useSelector(
    (state) => state.eightpage
  );

  const [viewport, setViewport] = useState({
    latitude: latitudeValue,
    longitude: longitudeValue,
    zoom: 13.5,
    width: 900,
    height: 900,
    pitch: 70,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/roomforrent/ckxskj6cb84ct15o4dh7qyr44"}
      mapboxApiAccessToken={
        "pk.eyJ1Ijoicm9vbWZvcnJlbnQiLCJhIjoiY2t3a2JueTF1MHh0aTJ3cXY0bjNocmZsZCJ9.jXzlIrtHZT-hz7KYydJixw"
      }
      {...viewport}
      onViewportChange={(newView) => setViewport(newView)}
    ></ReactMapGL>
  );
}

export default Map;
