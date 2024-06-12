import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  useIonRouter,
} from '@ionic/react';
import React from 'react';
import BackBtn from '../ResponderPanel/HeaderBack';
import './Announcements.css';

const TheShit: React.FC = () => {
  const router = useIonRouter();

  const messages = [
    {
      id: 1,
      sender: 'Emergency Services',
      timestamp: new Date(),
      content:
        'Evacuation underway for residents near the Central Park fire. Please follow instructions from emergency personnel.',
      severity: 'High',
    },
    {
      id: 2,
      sender: 'Red Cross',
      timestamp: new Date(Date.now() - 3600000), // One hour ago
      content:
        'Donation centers are open at City Hall and Central Library. We urgently need water, blankets, and non-perishable food items.',
      severity: 'Medium',
    },
    {
      id: 3,
      sender: 'Community Shelter',
      timestamp: new Date(Date.now() - 7200000), // Two hours ago
      content:
        'The Community Shelter at the School Gymnasium is now open to displaced residents. Please bring identification and any necessary medications.',
      severity: 'Low',
    },
    {
      id: 4,
      sender: 'Power Company',
      timestamp: new Date(),
      content:
        'Power outages are expected in the affected area. Crews are working to restore power as quickly as possible.',
      severity: 'Medium',
    },
    {
      id: 5,
      sender: 'Department of Transportation',
      timestamp: new Date(Date.now() - 1800000), // Half hour ago
      content:
        'Roads surrounding the fire are closed. Please use alternate routes and avoid the area.',
      severity: 'High',
    },
    {
      id: 6,
      sender: 'Local News Station',
      timestamp: new Date(Date.now() - 5400000), // One and a half hours ago
      content:
        'Live updates on the Central Park fire are available on our website and social media channels.',
      severity: 'Low',
    },
    {
      id: 7,
      sender: 'Community Volunteer Group',
      timestamp: new Date(),
      content:
        'We are organizing a volunteer effort to assist with relief operations. If you can help, please contact us at [phone number] or [email address].',
      severity: 'Medium',
    },
    {
      id: 8,
      sender: 'Animal Shelter',
      timestamp: new Date(Date.now() - 21600000), // Six hours ago
      content:
        'The Animal Shelter is accepting lost or displaced pets. Please bring any necessary documentation for your pet.',
      severity: 'Medium',
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <BackBtn title="Anouncements" />
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="message-container">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <p>{message.content}</p>
            </div>
          ))}
        </div>
      </IonContent>

      <IonFooter class="ion-padding-horizontal">
        <p style={{ textAlign: 'center'}}>
          Only <span style={{ color: '#1e7fdb' }}>Emergency Responders</span>{' '}
          can send announcements.
        </p>
      </IonFooter>
    </IonPage>
  );
};

export default TheShit;
