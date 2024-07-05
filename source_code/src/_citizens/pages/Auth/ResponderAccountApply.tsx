import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton } from '@ionic/react';

const ResponderAccountApplication = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Apply to be a Responder</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>
                       
                <IonButton mode='ios' expand="block" className="ion-margin-top">Submit Application</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default ResponderAccountApplication;
