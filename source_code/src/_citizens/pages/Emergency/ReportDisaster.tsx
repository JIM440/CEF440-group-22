import React from 'react';

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonBackButton,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonItemDivider,
  IonInput,
  IonLabel,
  IonButton,
  IonToggle,
  IonModal,
  IonRadio,
  IonTextarea,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import "./emergency.css";

import backIcon from '../../../assets/icons/back.svg'
import "../Page.css";

import { FormattedMessage } from "react-intl";

import { useEffect, useState, useRef } from "react";
import { chevronBack, chevronForward } from "ionicons/icons";

import EarthqaukeImage from "../../../assets/images/earthaquake.jpg";
import BackBtn from "../../../components/HeaderBack";

const ReportDisaster: React.FC = () => {
  const [step, setStep] = useState(0);
  const [previewImage, setPreviewImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
    };

    if (file && file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <IonPage className="report-main-container">
      <IonHeader class="ion-no-border">
        <BackBtn title='Report Disaster' />
      </IonHeader>

      <IonContent fullscreen>
        <div className="progress-tracker-container">
          <ul
            className={
              (step == 2 ? "fill-100" : step == 1 ? "fill-50" : "") +
              " progress-tracker"
            }
          >
            <li className="active-tracker">Location</li>
            <li className={step >= 1 ? "active-tracker" : ""}>Disaster</li>
            <li className={step >= 2 ? "active-tracker" : ""}>Evidence</li>
          </ul>
        </div>
        <div className="main-swiper-container-report">
          <div
            className={
              "main-swiper-container-report-wrapper " +
              (step == 1 ? "move-to-second" : step == 2 ? "move-to-third" : "")
            }
          >
            <div className="location-form-container">
              <IonInput
                mode="md"
                label="Telephone number"
                type="text"
                placeholder="+237 680959453"
                labelPlacement="floating"
                fill="outline"
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
                  it was not tempered with
                </p>
              </div>
              <div className='image-select-report'>
              <div className='selected-image'>
              {previewImage && (
                      <img src={previewImage} alt="author" />
                    )}
              </div>
              <input type="file" name="" id="" accept="image/*" onChange={handleImageChange} />
              </div>
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
                  <IonLabel>Submit Report</IonLabel>
                </IonButton>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ReportDisaster;
