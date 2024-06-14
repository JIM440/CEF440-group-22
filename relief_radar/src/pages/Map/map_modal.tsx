import React, { useRef, useState } from "react";
import {
 
} from "@ionic/react";

type JsonObject = {
  type: string;
  location: string;
  distanceAway: string;
  time: string;
  date: string;
  magnitude: number;
  magnitudeScale: string;
  scale: number;
  mapViewPoint: string;
};

interface ContainerProps {
  data: JsonObject;
}

const MapModal: React.FC<ContainerProps> = ({ data }) => {
  const {
    type,
    location,
    distanceAway,
    time,
    date,
    magnitude,
    magnitudeScale,
    scale,
    mapViewPoint,
  } = data;
  

  return (
    
  );
};

export default MapModal;
