import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonCardContent,
  IonIcon,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonButton,
} from '@ionic/react';
import React from 'react';
import BackBtn from '../../../components/HeaderBack';
import { call } from 'ionicons/icons';

const EmergencyCall: React.FC = () => {
  const responders = [
    {
      name: 'Police',
      number: '911', 
      icon: 'police-outline',
    },
    {
      name: 'Fire Department',
      number: '118',
      icon: 'flame-outline',
    },
    {
      name: 'Ambulance',
      number: '684',
      icon: 'medical-outline',
    },
    {
      name: 'Coast Guard',
      number: '326',
      icon: 'boat-outline',
    },
    {
      name: 'Poison Control',
      number: '222',
      icon: 'skull-outline',
    },
    {
      name: 'Roadside Assistance',
      number: "000",
      icon: 'car-outline',
    },
    {
      name: 'Animal Control',
      number: '098',
      icon: 'paw-outline',
    },
    {
      name: 'Mental Health Crisis',
      number: '568',
      icon: 'sad-outline',
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <BackBtn title="Emergency" />
      </IonHeader>

      <IonContent className="ion-padding">
        <div>
          {responders.map((responder) => (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div          className="emergency-call-container"
              >
                <p>
                  {responder.name} ({responder.number})
                </p>
                <IonIcon icon={call} color="primary" size="large" />
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EmergencyCall;
