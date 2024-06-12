import React from 'react'
import './CreateChatSession.css'
import {
  IonHeader,
  IonToolbar,
  IonInput,
  IonPage,
  IonContent,
  IonFooter,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
} from "@ionic/react";

function CreateForum() {
  return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <p>create forum page</p>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  )
}

export default CreateForum
