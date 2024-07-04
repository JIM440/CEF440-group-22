import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonButton,
  IonToggle,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonBackButton,
} from "@ionic/react";

import backIcon from "../../../../assets/icons/back.svg";
import EnglishIcon from "../../../../assets/icons/CifGb.svg";
import FrenchIcon from "../../../../assets/icons/CifFr.svg";

import "../../Page.css";
import "../menuPages.css";

import { FormattedMessage } from "react-intl";

import { useEffect, useState, useRef } from "react";
import { History } from "history";

interface ContainerProps {
  history: History;
  darkMode: boolean;
  setDarkTheme: Function;
  locale: string;
  setLocale: Function;
}

const SettingPage: React.FC<ContainerProps> = ({
  history,
  darkMode,
  setDarkTheme,
  locale,
  setLocale,
}) => {
  const handleToggle = (event: CustomEvent) => {
    setDarkTheme(event.detail.checked);
    var colorMode = event.detail.checked ? "dark" : "light";
    setDarkTheme(colorMode);
  };

  /*Code below controls Language Modal*/

  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  /*language modal controller ends here*/

  return (
    <IonPage className="Settings-main-container">
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle className="header-title">
            <FormattedMessage id="Settings" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              <FormattedMessage id="Settings" />
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="setting-list">
          <IonItemGroup>
            <IonItemDivider mode="ios">
              <IonLabel>
                <FormattedMessage id="general" />
              </IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonToggle checked={darkMode} onIonChange={handleToggle}>
                <FormattedMessage id="dark_mode" />
              </IonToggle>
            </IonItem>
            <IonItem mode="ios" id="open-modal">
              <IonLabel>
                <FormattedMessage id="language" />
              </IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider mode="ios">
              <IonLabel>
                <FormattedMessage id="notification" />
              </IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel mode="ios">Bangladesh</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel mode="ios">Belarus</IonLabel>
            </IonItem>
          </IonItemGroup>
        </div>

        <IonModal
          ref={modal}
          trigger="open-modal"
          initialBreakpoint={0.4}
          breakpoints={[0, 0.4]}
          mode="ios"
        >
          <div className="modal-content">
            <IonLabel>
              <FormattedMessage id="language" />
            </IonLabel>
            <IonRadioGroup
              value={locale}
              onIonChange={(ev) => {
                setLocale(ev.detail.value);
              }}
            >
              <IonItem>
                <IonIcon slot="start" src={EnglishIcon}></IonIcon>
                <IonRadio value="en-US" aria-label="English">
                  English
                </IonRadio>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" src={FrenchIcon}></IonIcon>
                <IonRadio value="fr-FR" aria-label="Francias">
                  Français
                </IonRadio>
              </IonItem>
            </IonRadioGroup>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default SettingPage;
