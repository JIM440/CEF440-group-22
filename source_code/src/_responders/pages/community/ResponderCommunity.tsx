import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React,{useContext} from 'react';

import { createUser } from '../../../services/AuthService/auth';
import { userContext } from '../../../context/UserContext';
import { handleCreateUser } from '../../../services/AuthService/auth';

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

const ResponderCommunity: React.FC = () => {

    const {user,setUser} = useContext(userContext)


    const registerUser = async () => {
        try {
            await handleCreateUser();
            console.log('successs');

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












// import React, { useState,useContext } from 'react';
// import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
// import {
//   IonButtons,
//   IonContent,
//   IonHeader,
//   IonIcon,
//   IonPage,
//   IonTitle,
//   IonToolbar,
//   IonInput,
//   IonLabel,
//   IonButton,
//   IonTextarea,
//   IonSelect,
//   IonSelectOption,
// } from "@ionic/react";

// import '../Page.css'
// import { chevronBack, chevronForward } from "ionicons/icons";
// import BackBtn from "../../../components/HeaderBack";
// import { storage } from '../../../config/firebase';
// import { userContext } from '../../../context/UserContext';
// import { addDoc, collection, getDocs, deleteDoc, updateDoc ,DocumentData, DocumentReference, serverTimestamp} from "firebase/firestore";
// import { db } from '../../../config/firebase';


// const ReportDisasterPage: React.FC = () => {
//   const [step, setStep] = useState(0);
//   const { user, setUser } = useContext(userContext);

//   const [telephone, setTelephone] = useState('');
//   const [location, setLocation] = useState('');
//   const [disasterType, setDisasterType] = useState('');
//   const [description, setDescription] = useState('');
//   const [evidenceFile, setEvidenceFile] = useState<File | null>(null);
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [urlToUpload, setUrlToUpload] = useState('')

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setEvidenceFile(file);
//     if (file) {
//       setImageUrl(URL.createObjectURL(file));

//       const imageRef = ref(storage, `reports-images/${new Date().toISOString()}`);
//       const data = await uploadBytes(imageRef, evidenceFile!);
//       const downloadUrl = await getDownloadURL(data.ref);
//       setUrlToUpload(downloadUrl);
//     } else {
//       setImageUrl(null);
//     }
//   };

//   const reportDisaster = async (collectionName: string, reportInfo:object): Promise<DocumentReference>  => {
//     try {
//       const result = await addDoc(collection(db, collectionName), {
//         ...reportInfo,
//         timestamp:serverTimestamp()
//       })
//         return result
//     } catch (error) {
//         console.error(error)
//         throw error
//     }
//   }
  

//  const submitReport = async () => {
//   const report = {
//     telephone,
//     location,
//     disasterType,
//     description,
//     image: urlToUpload,
//     userId: user.email,
//   };

//   try {
//     const result = await reportDisaster('reported-disasters', report);
//     console.log('Success reporting disaster', result);

//     setTelephone('');
//     setLocation('');
//     setDisasterType('');
//     setDescription('');
//     setEvidenceFile(null);
//     setImageUrl(null);
//     setUrlToUpload('');

//     setStep(0);
//   } catch (error) {
//     console.log('Error reporting disaster:', error);
//   }
// };

