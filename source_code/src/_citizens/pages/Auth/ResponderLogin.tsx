import React, { FormEvent, useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { signInWithGoogle } from "../../../services/AuthService/auth";


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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useIonRouter();

    const signIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(email, "---", password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user.uid);

    
      router.push("/responder/tabs/home");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  async function googleAuth() {
    await signInWithGoogle();
  }

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
          <form>
            <IonInput
              mode="md"
              label="Email"
              type="email"
              labelPlacement="floating"
              fill="outline"
              value={email}
              onIonInput={e => setEmail(e.detail.value as string)}
            ></IonInput>
            <IonInput
              mode="md"
              label="Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              className="password-field"
              value={password}
              onIonInput={e => setPassword(e.detail.value as string)}
            ></IonInput>
            <IonButton
              className="ion-margin-top primary-button proceed-language"
              type="button"
              expand="block"
              mode="ios"
              onClick={signIn}
            >
              Login
            </IonButton>
            <p className="signup-link-container"> 
              Don't have an account?
              <button 
                type="button" 
                onClick={() => router.push("/index/responder/apply")} 
                className="sign-up-link"
              >
                Apply for one
              </button>
            </p>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default ResponderLogin;
