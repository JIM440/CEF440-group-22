import { IonPage, IonButton, IonLabel, IonHeader, IonIcon } from "@ionic/react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination]);

import "../Auth.css";
import "./welcome.css";

import { chevronForward } from "ionicons/icons";
import logo from "../../../../assets/images/logo-white.svg";

import GetStartedScreen from "./welcome_pages/GetStarted";
import WelcomeScreen2 from "./welcome_pages/Welcome_screen_2";
import WelcomeScreen1 from "./welcome_pages/Welcome_screen_1";

const WelcomeScreen: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();

  function nextClick() {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }

  return (
    <IonPage className="welcome-screens">
      <IonHeader className="welcome-direction-control">
        <div className="logo-section">
          <img className="welcome-logo" src={logo} />
          <span>ReliefRadar</span>
        </div>
        <IonButton
          mode="ios"
          className="welcome-control-button"
          routerLink="/index/logintype"
        >
          <IonLabel className="label"> Skip</IonLabel>
          <IonIcon src={chevronForward}></IonIcon>
        </IonButton>
      </IonHeader>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <WelcomeScreen1 nextClick={nextClick} />
        </SwiperSlide>
        <SwiperSlide>
          <WelcomeScreen2 nextClick={nextClick} />
        </SwiperSlide>
        <SwiperSlide>
          <GetStartedScreen />
        </SwiperSlide>
      </Swiper>
    </IonPage>
  );
};

export default WelcomeScreen;
