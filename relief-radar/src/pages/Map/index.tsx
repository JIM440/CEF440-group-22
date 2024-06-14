import React from "react";

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
} from "@ionic/react";

import measureIcon from "../../assets/icons/GisMeasure.svg";
import earthquakeIcon from "../../assets/icons/earthquake.svg";
import fireIcon from "../../assets/icons/fire.svg";
import floodIcon from "../../assets/icons/flood.svg";
import hurricaneIcon from "../../assets/icons/hurricane.svg";
import landSlideIcon from "../../assets/icons/landslide.svg";
import volcanoIcon from "../../assets/icons/volcano.svg";
import locationIcon from "../../assets/icons/location.svg";
import { timeOutline } from "ionicons/icons";

import ChatBotButton from "../../components/Buttons/Ai_bot";

import { FormattedMessage } from "react-intl";

import { useRef } from "react";

const MapPage = () => {
  const map_modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <IonHeader class="ion-no-border"></IonHeader>
      <IonContent>
        <ChatBotButton />
        <IonModal
          ref={map_modal}
          trigger="open-map-modal"
          isOpen={true}
          initialBreakpoint={0.25}
          breakpoints={[0.25, 0.5, 0.75]}
          backdropDismiss={false}
          backdropBreakpoint={0.5}
        >
          <IonContent>
            <div className="main-map-modal-container" >
              <div className="brief-disaster-info">
                <div className="info-division">
                  <IonIcon src={timeOutline} className="time"></IonIcon>
                  <span className="value">time</span>
                  <span className="data-type">date</span>
                </div>
                <div className="info-division">
                  <IonIcon src={fireIcon} className="intensity"></IonIcon>
                  <span className="value">value</span>
                  <span className="data-type">Magnitude</span>
                </div>
                <div className="info-division">
                  <IonIcon src={measureIcon} className="distance"></IonIcon>
                  <span className="value">10km</span>
                  <span className="data-type">Scale</span>
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
