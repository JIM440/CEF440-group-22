import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import BackBtn from '../../../components/HeaderBack';

const ResponderReportUpdate: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <BackBtn title="Updates" />
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTextarea
          autoGrow={true}
          mode="md"
          label="Updates"
          placeholder="Updates"
          fill="outline"
          labelPlacement="floating"
          className='text-area-input text-area-large'
        />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.8rem',
        }}
      >
        <IonButton fill="outline" color="dark">
          Cancel
        </IonButton>
        <IonButton mode='ios' className='primary-button' >Submit</IonButton>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default ResponderReportUpdate;
