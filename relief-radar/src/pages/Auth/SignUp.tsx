import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import BackBtn from "../ResponderPanel/HeaderBack";

function SignUpPage() {
  return (
    <>
      <IonHeader>
        <BackBtn title='Sign Up' />
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page Three</h1>
      </IonContent>
    </>
  );
}

export default SignUpPage;
