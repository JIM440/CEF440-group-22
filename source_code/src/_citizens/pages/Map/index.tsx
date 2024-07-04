import React from "react";

import "./map.css";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonButton,
  IonBadge,
  IonSearchbar,
  IonModal,
  IonLabel,
} from "@ionic/react";

import measureIcon from "../../../assets/icons/GisMeasure.svg";
import earthquakeIcon from "../../../assets/icons/earthquake.svg";
import fireIcon from "../../../assets/icons/fire.svg";
import floodIcon from "../../../assets/icons/flood.svg";
import hurricaneIcon from "../../../assets/icons/hurricane.svg";
import landSlideIcon from "../../../assets/icons/landslide.svg";
import volcanoIcon from "../../../assets/icons/volcano.svg";
import locationIcon from "../../../assets/icons/location.svg";
import { timeOutline } from "ionicons/icons";

import ChatBotButton from "../../../components/Buttons/Ai_bot";

import { FormattedMessage } from "react-intl";

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";

import MapComponent from "../../../modules/map/MapCompnent";

const MapPage = () => {
  const map_modal = useRef<HTMLIonModalElement>(null);

  const data = {
    type: "Fire",
    location: "Sydney, Australia",
    distanceAway: "20 km",
    time: "10:41",
    date: "Jan 01 2026",
    magnitude: 5.5,
    magnitudeScale: "Richter",
    scale: 2,
    mapViewPoint: "../images/GoogleMap.webp",
  };

  const currentLocation = useLocation();

  const [viewHeight, setViewHeight] = useState(window.innerHeight);
  const [isModalOpen, setModalOpen] = useState(true);

  window.addEventListener("resize", () => {
    setViewHeight(window.innerHeight);
  });

  useEffect(() => {}, [viewHeight]);

  return (
    <IonPage className={isModalOpen ? "fadeContent main-map-body" : "main-map-body"}>
      <IonHeader class="ion-no-border"></IonHeader>
      <IonContent fullscreen scrollEvents={false}>
        <div
          style={{ width: "100%", height: "100%" }}
          className={isModalOpen ? "fadeMap" : ""}
        >
          <MapComponent />
        </div>
        <IonModal
          ref={map_modal}
          trigger="open-map-modal"
          initialBreakpoint={355 / viewHeight}
          breakpoints={[0, 355 / viewHeight, 0.75]}
          handleBehavior="cycle"
          isOpen={currentLocation.pathname.includes("/tabs/map")}
          backdropDismiss={false}
          backdropBreakpoint={0.75}
          mode="ios"
          className="map-modal"
          onDidDismiss={() => {
            setModalOpen(false);
          }}
          onWillPresent={() => {
            setModalOpen(true);
          }}
        >
          <IonContent className="ion-padding">
            <div className="map-modal-content-container">
              <div className="brief-disaster-info map-disaster-info">
                <div className="info-division">
                  <IonIcon src={timeOutline} className="time"></IonIcon>
                  <span className="value">{data.time}</span>
                  <span className="data-type">{data.date}</span>
                </div>
                <div className="info-division">
                  <IonIcon src={fireIcon} className="intensity"></IonIcon>
                  <span className="value">
                    {data.magnitude.toString()}&nbsp;
                    {data.magnitudeScale}
                  </span>
                  <span className="data-type">Magnitude</span>
                </div>
                <div className="info-division">
                  <IonIcon src={measureIcon} className="distance"></IonIcon>
                  <span className="value">{data.scale.toString()}km</span>
                  <span className="data-type">Scale</span>
                </div>
              </div>
              <div className="disaster-type-location map-disaster-info">
                <div className="disaster-type">
                  <IonIcon src={fireIcon}></IonIcon>
                  <IonLabel>
                    <FormattedMessage id="Fire" />
                  </IonLabel>
                </div>
                <div className="disaster-location">
                  <IonIcon src={locationIcon}></IonIcon>
                  <IonLabel>Buea, Cameroon</IonLabel>
                </div>
                <div className="disaster-location">
                  <IonIcon src={locationIcon}></IonIcon>
                  <IonLabel>Buea, Cameroon</IonLabel>
                </div>
                <div className="disaster-location">
                  <IonIcon src={locationIcon}></IonIcon>
                  <IonLabel>Buea, Cameroon</IonLabel>
                </div>
              </div>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MapPage;
