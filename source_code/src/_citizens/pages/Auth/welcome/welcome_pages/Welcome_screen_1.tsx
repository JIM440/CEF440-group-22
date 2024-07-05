import { IonButton } from "@ionic/react";
import React from "react";

import illustration from "../../../../../assets/images/stay-informed.png";

interface ContainerProps {
  nextClick: Function;
}

const WelcomeScreen1: React.FC<ContainerProps> = ({ nextClick }) => {
  function handleClick() {
    nextClick();
  }
  return (
    <div className="welcome-page">
      <div className="welcome-page-screen-container">
        <div className="welcome-page-screen-content">
          <div className="welcome-caption">
            <h1>Stay Disaster Informed</h1>
            <p>
              Know about potential and ongoing disasters and how to protect
              yourself and community
            </p>
          </div>
          <div className="welcome-illustration long-image">
            <img src={illustration} alt="community" />
          </div>
        </div>
        <div className="welcome-action-buttons">
          <IonButton
            mode="ios"
            className="welcome-login primary-button"
            onClick={handleClick}
          >
            Continue
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen1;
