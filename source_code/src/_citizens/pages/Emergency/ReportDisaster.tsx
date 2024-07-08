import React, { useState,useContext } from 'react';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonButton,
  IonTextarea,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import '../Page.css'
import './emergency.css'
import { chevronBack, chevronForward } from "ionicons/icons";
import BackBtn from "../../../components/HeaderBack";
import { storage } from '../../../config/firebase';
import { userContext } from '../../../context/UserContext';
import { addDoc, collection, getDocs, deleteDoc, updateDoc ,DocumentData, DocumentReference, serverTimestamp} from "firebase/firestore";
import { db } from '../../../config/firebase';


const ReportDisasterPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const { user, setUser } = useContext(userContext);

  const [telephone, setTelephone] = useState('');
  const [location, setLocation] = useState('');
  const [disasterType, setDisasterType] = useState('');
  const [description, setDescription] = useState('');
  const [evidenceFile, setEvidenceFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [urlToUpload, setUrlToUpload] = useState('')

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setEvidenceFile(file);
    if (file) {
      setImageUrl(URL.createObjectURL(file));

      const imageRef = ref(storage, `reports-images/${new Date().toISOString()}`);
      const data = await uploadBytes(imageRef, evidenceFile!);
      const downloadUrl = await getDownloadURL(data.ref);
      console.log(downloadUrl);
      setUrlToUpload(downloadUrl);
    } else {
      setImageUrl(null);
    }
  };

  const reportDisaster = async (collectionName: string, reportInfo:object): Promise<DocumentReference>  => {
    try {
      const result = await addDoc(collection(db, collectionName), {
        ...reportInfo,
        timestamp:serverTimestamp()
      })
        return result
    } catch (error) {
        console.error(error)
        throw error
    }
  }
  

 const submitReport = async () => {
  const report = {
    telephone,
    location,
    disasterType,
    description,
    image: urlToUpload,
    userId: user.email,
  };

  try {
    const result = await reportDisaster('reported-disasters', report);
    // console.log('Success reporting disaster', result);

    setTelephone('');
    setLocation('');
    setDisasterType('');
    setDescription('');
    setEvidenceFile(null);
    setImageUrl(null);
    setUrlToUpload('');

    setStep(0);
  } catch (error) {
    console.log('Error reporting disaster:', error);
  }
};


  return (
    <IonPage className="report-main-container">
      <IonHeader class="ion-no-border">
        <BackBtn title='Report Disaster' />
      </IonHeader>

      <IonContent fullscreen>
        <div className="progress-tracker-container">
          <ul className={
            (step === 2 ? "fill-100" : step === 1 ? "fill-50" : "") +
            " progress-tracker"
          }>
            <li className="active-tracker">Location</li>
            <li className={step >= 1 ? "active-tracker" : ""}>Disaster</li>
            <li className={step >= 2 ? "active-tracker" : ""}>Evidence</li>
          </ul>
        </div>
        <div className="main-swiper-container-report">
          <div className={
            "main-swiper-container-report-wrapper " +
            (step === 1 ? "move-to-second" : step === 2 ? "move-to-third" : "")
          }>
            <div className="location-form-container">
              <IonInput
                mode="md"
                label="Telephone number"
                type="text"
                placeholder="+237 680959453"
                labelPlacement="floating"
                fill="outline"
                value={telephone}
                onIonInput={e => setTelephone(e.detail.value as string)}
              ></IonInput>
              <IonButton className="gps-location-button" mode="ios">
                Use current location
              </IonButton>
              <div className="login-divider">
                <span>OR</span>
              </div>
              <IonInput
                mode="md"
                class="ion-margin-top"
                label="Location"
                labelPlacement="floating"
                fill="outline"
                placeholder="UB south, Molyko, Buea"
                type="text"
                className="location-manual"
                value={location}
                onIonInput={e => setLocation(e.detail.value as string)}
              ></IonInput>
              <IonButton
                mode="ios"
                className="proceed-button-onboard"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                <IonLabel>Proceed</IonLabel>
                <IonIcon src={chevronForward}></IonIcon>
              </IonButton>
            </div>
            <div className="disaster-form-container">
              <IonSelect
                label="Disaster type"
                labelPlacement="floating"
                fill="outline"
                value={disasterType}
                onIonChange={e => setDisasterType(e.detail.value as string)}
              >
                <IonSelectOption value="Earthquake">Earthquake</IonSelectOption>
                <IonSelectOption value="Fire">Fire</IonSelectOption>
                <IonSelectOption value="Flood">Flood</IonSelectOption>
                <IonSelectOption value="Landslide">Landslide</IonSelectOption>
                <IonSelectOption value="Hurricane">Hurricane</IonSelectOption>
                <IonSelectOption value="Volcano">Volcano</IonSelectOption>
              </IonSelect>
              <IonTextarea
                label="Description"
                labelPlacement="floating"
                fill="outline"
                placeholder="Type description here"
                class="ion-margin-top"
                autoGrow={true}
                autoCapitalize="sentence"
                rows={10}
                value={description}
                onIonInput={e => setDescription(e.detail.value as string)}
              ></IonTextarea>
              <div className="button-container">
                <IonButton
                  mode="ios"
                  slot="start"
                  className="primary-button previous-button"
                  onClick={() => {
                    setStep(step - 1);
                  }}
                >
                  <IonIcon src={chevronBack}></IonIcon>
                  <IonLabel>Previous</IonLabel>
                </IonButton>
                <IonButton
                  mode="ios"
                  slot="end"
                  className="primary-button"
                  onClick={() => {
                    setStep(step + 1);
                  }}
                >
                  <IonLabel>Proceed</IonLabel>
                  <IonIcon src={chevronForward}></IonIcon>
                </IonButton>
              </div>
            </div>
            <div className="evidence-form-container">
              <div className="warning-text-container">
                <p className="warning-text">
                  Ensure evidence is clear and of good quality. Also check that
                  it was not tampered with
                </p>
              </div>
              {imageUrl && <img src={imageUrl} alt="Evidence preview" />}
              <input
                type="file"
                onChange={handleFileChange}
              />           
              <div className="button-container">
                <IonButton
                  mode="ios"
                  slot="start"
                  className="primary-button previous-button"
                  onClick={() => {
                    setStep(step - 1);
                  }}
                >
                  <IonIcon src={chevronBack}></IonIcon>
                  <IonLabel>Previous</IonLabel>
                </IonButton>
                <IonButton
                  mode="ios"
                  slot="end"
                  className="primary-button"
                  onClick={submitReport}
                >
                  <IonLabel >Submit Report</IonLabel>
                </IonButton>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ReportDisasterPage;
