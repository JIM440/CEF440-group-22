import { IonButton, IonContent, IonFooter, IonHeader, IonPage, useIonRouter } from '@ionic/react';
import React from 'react';
import BackBtn from '../../../components/HeaderBack';
import './Announcements.css'

const Announcements: React.FC = () => {

  const router = useIonRouter()

  const messages = [
    {
      id: 1,
      sender: "Emergency Services",
      timestamp: new Date(),
      content: "Evacuation underway for residents near the Central Park fire. Please follow instructions from emergency personnel.",
      severity: "High",
    },
    {
      id: 2,
      sender: "Red Cross",
      timestamp: new Date(Date.now() - 3600000), // One hour ago
      content: "Donation centers are open at City Hall and Central Library. We urgently need water, blankets, and non-perishable food items.",
      severity: "Medium",
    },
    {
      id: 3,
      sender: "Community Shelter",
      timestamp: new Date(Date.now() - 7200000), // Two hours ago
      content: "The Community Shelter at the School Gymnasium is now open to displaced residents. Please bring identification and any necessary medications.",
      severity: "Low",
    },
    {
      id: 4,
      sender: "Power Company",
      timestamp: new Date(),
      content: "Power outages are expected in the affected area. Crews are working to restore power as quickly as possible.",
      severity: "Medium",
    },
    {
      id: 5,
      sender: "Department of Transportation",
      timestamp: new Date(Date.now() - 1800000), // Half hour ago
      content: "Roads surrounding the fire are closed. Please use alternate routes and avoid the area.",
      severity: "High",
    },
    {
      id: 6,
      sender: "Local News Station",
      timestamp: new Date(Date.now() - 5400000), // One and a half hours ago
      content: "Live updates on the Central Park fire are available on our website and social media channels.",
      severity: "Low",
    },
    {
      id: 7,
      sender: "Community Volunteer Group",
      timestamp: new Date(),
      content: "We are organizing a volunteer effort to assist with relief operations. If you can help, please contact us at [phone number] or [email address].",
      severity: "Medium",
    },
    {
      id: 8,
      sender: "Animal Shelter",
      timestamp: new Date(Date.now() - 21600000), // Six hours ago
      content: "The Animal Shelter is accepting lost or displaced pets. Please bring any necessary documentation for your pet.",
      severity: "Medium",
    },
  ];
  
  
    return (
        <IonPage>
            <IonHeader>
                <BackBtn title='Announcements' />
            </IonHeader>
            
            <IonContent className="ion-padding">
               <div className="message-container">
             { messages.map((message, index) => (
<div className="group-card" key={message.id}>
      <div className="group-header">
        <div className="group-name-parent">
        <div className="group-initials">
          <p>FM</p>
        </div><div className="group-name">{ name}</div>
        </div>

              <p className="group-date">June 03</p>
      </div>

      <div className="group-description">
      {message.content}
      </div>
    </div>
              ))}

               </div>
               </IonContent>

            <IonFooter class='ion-padding-horizontal'>
        <p style={{textAlign: 'center'}}>Only <span style={{color: '#1e7fdb'}}>Emergency Responders</span> can send messages in this community.</p>
      </IonFooter>
        </IonPage>
    );
};

export default Announcements;