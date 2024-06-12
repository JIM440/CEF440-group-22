import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import attachment from "../../assets/icons/attachment.svg";
import send from "../../assets/icons/send.svg";
import React from 'react';
import BackBtn from '../ResponderPanel/HeaderBack';

const TheShit: React.FC = () => {

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
                <BackBtn title='Anouncements' />
            </IonHeader>
            
            <IonContent className="ion-padding">
               <div className="message-container" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
             { messages.map((message, index) => (
              <div key={message.id} className="message" style={{
                borderRadius: '10px', backgroundColor: '#e6f2fd', padding: '0.8rem'
              }}>
                <p style={{margin: '0px', marginBottom: '10px'}}>{message.content}</p>
              </div>
              ))}
                
               </div>
               <IonButton onClick={()=>{
                router.push('/anouncements/x')
               }}>
                Go Back
               </IonButton>
               </IonContent>

            <IonFooter className="message-send-section">
        <IonToolbar>
          <div className="footer-contents">
            <div>
              <IonIcon src={attachment} className="icon" />
            </div>
            <IonInput
              placeholder="Type your message"
              clearInput
              onFocus={() => console.log("Input focused")}
              onBlur={() => console.log("Input blurred")}
            />
            <div>
              <IonIcon src={send} className="icon" />
            </div>
          </div>
        </IonToolbar>
      </IonFooter>
        </IonPage>
    );
};

export default TheShit;