import { IonContent, IonHeader, IonPage, IonTitle, IonCardContent, IonIcon, IonCardHeader, IonCard, IonCardTitle, IonButton } from '@ionic/react';
import React from 'react';
import BackBtn from '../../../components/HeaderBack';
import { call } from 'ionicons/icons';

const EmergencyCall: React.FC = () => {
    const responders = [
        {
          name: "Police",
          number: "911", // Adjust based on your emergency police number
          icon: "police-outline", // Optional icon for UI representation (Ionic icon name)
        },
        {
          name: "Fire Department",
          number: "911", // Adjust based on your emergency fire department number
          icon: "flame-outline", // Optional icon for UI representation (Ionic icon name)
        },
        {
          name: "Ambulance",
          number: "911", // Adjust based on your emergency ambulance number
          icon: "medical-outline", // Optional icon for UI representation (Ionic icon name)
        },
        {
          name: "Coast Guard",
          number: "1-800-638-7326", // Adjust based on your emergency Coast Guard number
          icon: "boat-outline", // Optional icon for UI representation (Ionic icon name)
        },
        {
          name: "Poison Control",
          number: "1-800-222-1222", // Adjust based on your emergency Poison Control number
          icon: "skull-outline", // Optional icon for UI representation (Ionic icon name)
        },
        {
          name: "Roadside Assistance",
          number: "Your service provider's number", // Replace with placeholder or user input
          icon: "car-outline", // Optional icon for UI representation (Ionic icon name)
        },
        {
          name: "Animal Control",
          number: "Your local animal control number", // Replace with placeholder or user input
          icon: "paw-outline", // Optional icon for UI representation (Ionic icon name)
        },
        {
          name: "Mental Health Crisis",
          number: "Your local crisis hotline number", // Replace with placeholder or user input
          icon: "sad-outline", // Optional icon for UI representation (Ionic icon name)
        },
      ];
      
      
      
    return (
        <IonPage>
            <IonHeader>
                <BackBtn title='Emergency' />
            </IonHeader>
            <IonContent className="ion-padding">
            <div>
      {responders.map((responder) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {/* <IonCard key={responder.name}>
          <IonCardHeader>
            <IonCardTitle>{responder.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {responder.icon && <IonIcon icon={responder.icon} />}
          </IonCardContent>
          <IonCardTitle>
            <IonButton href={`tel:${responder.number}`}>Call Now</IonButton>
          </IonCardTitle>
        </IonCard> */}


        <div style={{display: 'flex', boxShadow: '0px 0px 0px 4px rgba(0, 0, 0, 0.08)', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.2rem', borderRadius: '10px', padding: '10px 18px'}} className="emergency-call-container">
            <p style={{fontSize: '20px', fontWeight: 500}}>{responder.name} ({responder.number})</p><IonIcon icon={call} color='primary' size='large' />
        </div>
        </div>
      ))}
    </div>
        </IonContent>
        </IonPage>
    );
};

export default EmergencyCall;
