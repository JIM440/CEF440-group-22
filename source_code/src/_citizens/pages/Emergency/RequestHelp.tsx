import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import BackBtn from '../../../components/HeaderBack';

const RequestHelp: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <BackBtn title='Request Help' />
            </IonHeader>
            <IonContent className="ion-padding">
                Request Help Content and Method
            </IonContent>
        </IonPage>
    );
};

export default RequestHelp;