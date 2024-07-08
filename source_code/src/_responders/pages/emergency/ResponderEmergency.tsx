import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonButton,
  IonLabel,
  useIonRouter,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import menuIcon from '../../../assets/icons/menu.svg';
import { chevronForward } from 'ionicons/icons';
import { FormattedMessage } from 'react-intl';
import AlertIcon from '../components/Alerts';
import './ResponderEmergency.css';

const ResponderEmergency = () => {
  const router = useIonRouter();
  const [helpRequests, setHelpRequests] = useState<DocumentData[]>([]);

  useEffect(() => {
    const helpRequestsCollection = collection(db, 'help-request');
    const unsubscribe = onSnapshot(
      helpRequestsCollection,
      (snapshot) => {
        const requestsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHelpRequests(requestsData);
      },
      (error) => {
        console.error('Error fetching help requests:', error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton>
              <IonIcon src={menuIcon}></IonIcon>
            </IonMenuButton>
          </IonButtons>
          <IonTitle>
            <FormattedMessage id="Help Requests" />
          </IonTitle>
          <AlertIcon />
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="help-requests-container">
          {helpRequests.map((request) => (
            <div key={request.id} className="help-requests-card">
              <img src={request.image} alt="evidence" />
              <div className="user-details">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-10px' }}>
                    <h4 style={{ color: 'var(--ion-color-contrast)' }}>{request.userId}</h4>
                    <span>5 mins ago</span>
                  </div>
                  <p>{request.description}</p>
                  <div className="btn-link">
                    <IonButton
                      mode="ios"
                      fill="clear"
                      slot="start"
                      onClick={() => {
                        router.push(`/responder/emergency/requests_detail/${request.id}`);
                      }}
                    >
                      <IonLabel>View Details</IonLabel>
                      <IonIcon src={chevronForward}></IonIcon>
                    </IonButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ResponderEmergency;
