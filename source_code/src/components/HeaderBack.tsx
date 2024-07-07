import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

interface BackBtnProps {
  title: string; // Required title for the back button
  onClick?: () => void; // Optional callback function for custom navigation logic
}

const BackBtn: React.FC<BackBtnProps> = ({ title, onClick }) => {
  return (
    <IonHeader class='ion-no-border'>
      <IonToolbar>
        <IonButtons slot="start">
          {onClick ? (
            <IonBackButton color='dark'>{title}</IonBackButton>
          ) : (
            <IonBackButton color='dark'>{title}</IonBackButton>
          )}
        </IonButtons>
        <span style={{ marginLeft: '-24px', fontSize: '20px', fontWeight: '700', width: '100%', display: 'inline-block', textAlign: 'center'}}>{title}</span>
         </IonToolbar>
    </IonHeader>
  );
};

export default BackBtn;
