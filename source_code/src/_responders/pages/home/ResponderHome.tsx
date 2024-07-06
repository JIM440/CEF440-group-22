import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

// assets
import menuIcon from "../../../assets/icons/menu.svg";
import notificationIcon from "../../../assets/icons/notification.svg";
import AlertIcon from '../components/Alerts';

const ResponderHome: React.FC = () => {

    const router = useIonRouter()
    return (
        <IonPage>
                  <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <AlertIcon />
        </IonToolbar>
      </IonHeader>
            <IonContent className="ion-padding">
                Responder Home Here...
            </IonContent>
        </IonPage>
    );
};

export default ResponderHome;