import { IonButtons, IonIcon, IonButton, useIonRouter } from '@ionic/react';
import React from 'react';
import notificationIcon from "../../../assets/icons/notification.svg";


const AlertIcon: React.FC = () => {
    const router = useIonRouter()

    return (
        <IonButtons slot="end" className="notification">
        <IonButton
          onClick={() => {
            router.push("/alerts");
          }}
          mode="md"
        >
          <IonIcon src={notificationIcon}></IonIcon>
          <div className="pulse-container"></div>
        </IonButton>
      </IonButtons>
    );
};

export default AlertIcon;