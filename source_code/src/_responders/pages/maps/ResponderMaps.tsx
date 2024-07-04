import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const ResponderMaps: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Responder Maps</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Responder Maps...
            </IonContent>
        </IonPage>
    );
};

export default ResponderMaps;