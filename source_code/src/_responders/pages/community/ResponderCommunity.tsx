import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon } from '@ionic/react';
import React,{useContext} from 'react';

import menuIcon from "../../../assets/icons/menu.svg";
import { createUser } from '../../../services/AuthService/auth';
import { userContext } from '../../../context/UserContext';


const users = [
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    password: "securepassword123",
    telephone: "123-456-7890",
    language: "English",
    photo: "path/to/photo1.jpg",
    role: "volunteer",
    locations: ["New York", "Los Angeles"],
    forums: ["disaster-preparedness", "community-support"]
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    password: "mypassword",
    telephone: "987-654-3210",
    language: "Spanish",
    photo: "path/to/photo2.jpg",
    role: "non-volunteer",
    locations: ["Chicago", "New York"],
    forums: ["disaster-recovery", "first-aid"]
  },
  {
    name: "npm run dev",
    email: "npmRun@gmail.com",
    password: "098765",
    telephone: "987-654-3210",
    language: "English",
    photo: "path/to/photo2.jpg",
    role: "volunteer",
    locations: ["Cameroon", "New York"],
    forums: ["fire fighters", "first-aid"]
  }
];

import { handleCreateGuide } from '../../../services/controllers/Guide';
import AlertIcon from '../components/Alerts';

const ResponderCommunity: React.FC = () => {

    const {user,setUser} = useContext(userContext)


    const registerUser = async () => {
        try {
            await handleCreateGuide();
            console.log('successs');

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
            <IonMenuButton>
              <IonIcon src={menuIcon}></IonIcon>
            </IonMenuButton>
          </IonButtons>
                    <IonTitle>Community</IonTitle>
                    <AlertIcon />
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Responder Community...


               <button onClick={registerUser}>register</button>
                {
                    <div>
                        {user.email}
                   </div>
               }
            </IonContent>
        </IonPage>
    );
};

export default ResponderCommunity;