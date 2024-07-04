import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
  IonInput,
  IonIcon,
  IonLabel,
  IonPage
} from "@ionic/react";

import backIcon from "../../assets/icons/back.svg";
import { logInOutline } from "ionicons/icons";
import appleIcon from "../../assets/icons/appleIcon.svg";
import googleIcon from "../../assets/icons/googleIcon.svg";
import loginIllustration from "./../../assets/images/Login-illustration.png";

import SignUpPage from "./SignUp";
import BackBtn from "../../../components/HeaderBack";

function LoginPage() {
  const DoLogin = (event: any) => {
    event.preventDefault();
    console.log("Logged In🙂");
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="main-login-container">
          <img src={loginIllustration} alt="Login" />
          <form action="" onSubmit={DoLogin}>
            <IonInput
              mode="md"
              label="Username"
              type="text"
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
              type="submit"
              expand="block"
              mode="ios"
              routerLink="/tabs/home"
            >
              Login
            </IonButton>
            <p className="signup-link-container">
              Don't have an account?
              <IonNavLink
                routerDirection="forward"
                component={() => <SignUpPage />}
              >
                <button className="sign-up-link">Sign up</button>
              </IonNavLink>
            </p>
            <div className="login-divider">
              <span>OR</span>
            </div>
            <IonNavLink
              routerDirection="forward"
              component={() => <SignUpPage />}
            >
              <IonButton
                className="primary-button proceed-language alternate-login-button"
                type="submit"
                expand="block"
                mode="ios"
              >
                <IonIcon src={googleIcon}></IonIcon>
                <IonLabel>Continue with google</IonLabel>
              </IonButton>
            </IonNavLink>
            <IonNavLink
              routerDirection="forward"
              component={() => <SignUpPage />}
            >
              <IonButton
                className="primary-button proceed-language alternate-login-button"
                type="submit"
                expand="block"
                mode="ios"
              >
                <IonIcon src={appleIcon}></IonIcon>
                <IonLabel>Continue with apple</IonLabel>
              </IonButton>
            </IonNavLink>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default LoginPage;
