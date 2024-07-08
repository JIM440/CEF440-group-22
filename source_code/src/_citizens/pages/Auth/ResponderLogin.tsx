import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonInput,
  IonPage,
  useIonRouter
} from "@ionic/react";

import loginIllustration from "./../../../assets/images/Login-illustration.png";


function ResponderLogin() {

  const router = useIonRouter()

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Responder Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="main-login-container responder">
          <img src={loginIllustration} alt="Login" />
          <form action="">
            <IonInput
              mode="md"
              label="Email"
              type="email"
              labelPlacement="floating"
              fill="outline"
            ></IonInput>
            <IonInput
              mode="md"
              label="Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              className="password-field"
            ></IonInput>
            <IonButton
              className="ion-margin-top primary-button proceed-language"
              type="button"
              expand="block"
              mode="ios"
              routerLink="/responder/tabs/home"
            >
              Login
            </IonButton>
            <p className="signup-link-container"> 
              Don't have an account?
                <button type="button" onClick={()=>{
                    router.push("/index/responder/apply")
                }} className="sign-up-link">Apply for one</button>
            </p>
          </form>
        </div>
      </IonContent>
      
    </IonPage>
  );
}

export default ResponderLogin;
