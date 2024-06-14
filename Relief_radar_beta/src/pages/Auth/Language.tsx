import React from "react";
import {
  IonButton,
  IonItem,
  IonContent,
  IonNavLink,
  IonRadioGroup,
  IonIcon,
  IonRadio,
  IonLabel,
} from "@ionic/react";

import { chevronForward } from "ionicons/icons";
import EnglishIcon from "../../assets/icons/CifGb.svg";
import FrenchIcon from "../../assets/icons/CifFr.svg";
import LanguageImage from "../../assets/images/Language.webp";

import LoginPage from "./Login";

import { useEffect } from "react";

interface ContainerProps {
  setLocale: Function;
  locale: string;
}

const LanguagePage: React.FC<ContainerProps> = ({ locale, setLocale }) => {
  return (
    <IonContent class="ion-padding">
      <div className="main-language-body">
        <div className="select-language">
          <div className="image-explanation">
            <img src={LanguageImage} alt="language" />
            <div className="explanation">
              <h1>Choose your language</h1>
              <p>Select you prefered language below for use within the app</p>
            </div>
          </div>
          <div className="language-section">
            <IonRadioGroup
              value={locale}
              onIonChange={(ev) => {
                setLocale(ev.detail.value);
              }}
            >
              <IonItem
                className={locale == "en-US" ? "active-language-item" : ""}
              >
                <IonIcon slot="start" src={EnglishIcon}></IonIcon>
                <IonRadio value="en-US" aria-label="English">
                  English
                </IonRadio>
              </IonItem>
              <IonItem
                className={locale == "fr-FR" ? "active-language-item" : ""}
              >
                <IonIcon slot="start" src={FrenchIcon}></IonIcon>
                <IonRadio value="fr-FR" aria-label="Francias">
                  Français
                </IonRadio>
              </IonItem>
            </IonRadioGroup>
          </div>
        </div>
        <div className="button-container">
          <IonNavLink routerDirection="forward" component={() => <LoginPage />}>
            <IonButton mode="ios" className="language-procceed-button primary-button">
              <IonLabel>Continue</IonLabel>
              <IonIcon src={chevronForward}></IonIcon>
            </IonButton>
          </IonNavLink>
        </div>
      </div>
    </IonContent>
  );
};

export default LanguagePage;
