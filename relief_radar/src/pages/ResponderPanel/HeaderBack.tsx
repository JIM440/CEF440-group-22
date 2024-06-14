import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

interface BackBtnProps {
  title: string; // Required title for the back button
  onClick?: () => void; // Optional callback function for custom navigation logic
}

const BackBtn: React.FC<BackBtnProps> = ({ title, onClick }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          {onClick ? (
            <IonBackButton color='dark'>{title}</IonBackButton>
          ) : (
            <IonBackButton color='dark'>{title}</IonBackButton>
          )}
        </IonButtons>
        <span style={{marginLeft: "25%", fontSize: '18px'}}>{title}</span>
         </IonToolbar>
    </IonHeader>
  );
};

export default BackBtn;
