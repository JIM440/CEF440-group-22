import { IonButton } from "@ionic/react";
import React from "react";

import illustration from "../../../../../assets/images/keep-calm.png";

interface ContainerProps {
  nextClick: Function;
}

const WelcomeScreen2: React.FC<ContainerProps> = ({ nextClick }) => {
  function handleClick() {
    nextClick();
  }
  return (
    <div className="welcome-page">
      <div className="welcome-page-screen-container">
        <div className="welcome-page-screen-content">
          <div className="welcome-caption">
            <h1>Keep Calm. Safety first</h1>
            <p>
              Don't panic, get instructions on how to go about disasters and
              also find your way out
            </p>
          </div>
          <div className="welcome-illustration">
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

export default WelcomeScreen2;
