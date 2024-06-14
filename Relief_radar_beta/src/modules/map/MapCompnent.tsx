import React from "react";
import { createRoot } from "react-dom/client";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

const MapDisplay = () => (
  <APIProvider
    apiKey={"AIzaSyBkHVQJaf2VOkiJo-W6NSiS-yxL2oWsdKo"}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <Map
      defaultZoom={13}
      defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log(
          "camera changed:",
          ev.detail.center,
          "zoom:",
          ev.detail.zoom
        )
      }
    ></Map>
  </APIProvider>
);

export default MapDisplay;
