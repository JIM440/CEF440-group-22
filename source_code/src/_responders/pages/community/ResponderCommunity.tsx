import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const ResponderCommunity: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Responder Community</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Responder Community...
            </IonContent>
        </IonPage>
    );
};

export default ResponderCommunity;