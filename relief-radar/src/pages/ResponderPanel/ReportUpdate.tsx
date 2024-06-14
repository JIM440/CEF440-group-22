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
import BackBtn from './HeaderBack';

const ReportUpdate: React.FC = () => {
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
          value={`Firefighters have contained the blaze to the building's eastern wing. No additional injuries reported since the la Structural integrity of neighboring buildings appears stable at this time, but further assessment is needed.`}
        />
      </IonContent>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          padding: '1rem',
        }}
      >
        <IonButton fill="outline" color="dark">
          Cancel
        </IonButton>
        <IonButton >Submit</IonButton>
      </div>
    </IonPage>
  );
};

export default ReportUpdate;
