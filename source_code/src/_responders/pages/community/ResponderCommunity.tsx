import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React,{useContext} from 'react';

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

const ResponderCommunity: React.FC = () => {

    const {user,setUser} = useContext(userContext)


    const registerUser = async () => {
        try {
            await createUser(users[2])
            console.log('successs');

            setUser(users[1])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Responder Community</IonTitle>
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