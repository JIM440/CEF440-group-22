import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

// assets
import menuIcon from "../../../assets/icons/menu.svg";
import notificationIcon from "../../../assets/icons/notification.svg";

const ResponderHome: React.FC = () => {

    const router = useIonRouter()
    return (
        <IonPage>
                  <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton>
              <IonIcon src={menuIcon}></IonIcon>
            </IonMenuButton>
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
          <IonButtons slot="end" className="notification">
            <IonButton
              onClick={() => {
                router.push("/responder/alerts");
              }}
              mode="md"
            >
              <IonIcon src={notificationIcon}></IonIcon>
              <div className="pulse-container"></div>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
            <IonContent className="ion-padding">
                Responder Home Here...
            </IonContent>
        </IonPage>
    );
};

export default ResponderHome;