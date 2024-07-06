import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AlertIcon from '../components/Alerts';

const ResponderEmergency: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Emergency</IonTitle>
                    <AlertIcon />
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Responder Emergency Page...
            </IonContent>
        </IonPage>
    );
};

export default ResponderEmergency;