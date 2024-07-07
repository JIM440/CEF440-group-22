import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, useIonRouter } from '@ionic/react';
import React,{useContext} from 'react';

import './Community.css'

import menuIcon from "../../../assets/icons/menu.svg";
import plus from '../../../assets/icons/plus.svg'


import AlertIcon from '../components/Alerts';

const ResponderCommunity: React.FC = () => {
  const router = useIonRouter()


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
            </IonContent>

            <div className='add-alert community' onClick={()=>{
          router.push('/responder/forum/new')
        }}>
          <IonIcon icon={plus} />
        </div>
        </IonPage>
    );
}

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

