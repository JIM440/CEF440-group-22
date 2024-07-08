import { IonButton, IonIcon, IonHeader, IonBackButton } from "@ionic/react";
import React from "react";

import illustration from "../../../../../assets/images/join_community.png";

const GetStartedScreen: React.FC = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-page-screen-container">
        <div className="welcome-page-screen-content">
          <div className="welcome-caption">
            <h1>Join Forces. Fight Disaster</h1>
            <p>
              Be part of a large civilian community to help fight against
              disasters and it's impacts
            </p>
          </div>
          <div className="welcome-illustration">
            <img src={illustration} alt="community" />
          </div>
        </div>
        <div className="welcome-action-buttons">
          <IonButton
            mode="ios"
            className="welcome-signup primary-button"
            routerLink="/index/logintype"
          >
            Get Started
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default GetStartedScreen;
