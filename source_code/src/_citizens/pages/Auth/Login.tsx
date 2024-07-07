import React, { FormEvent, useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

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
  IonPage,

  useIonRouter
        } from "@ionic/react";
import { useHistory } from "react-router-dom";

import { logInOutline } from "ionicons/icons";
import appleIcon from "../../../assets/icons/appleIcon.svg";
import googleIcon from "../../../assets/icons/googleIcon.svg";
import loginIllustration from "./../../../assets/images/Login-illustration.png";

import SignUpPage from "./SignUp";
import BackBtn from "../../../components/HeaderBack";
import { signInWithGoogle } from "../../../services/AuthService/auth";
import { userContext } from "../../../context/UserContext";
import { getUser } from "../../../services/controllers/users";

function LoginPage() {

  const router = useIonRouter()
  const DoLogin = (event: any) => {
    event.preventDefault();
    console.log("Logged In🙂");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(userContext);

  const navigate = useHistory();

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

      const userFetched = await getUser(userCredential.user.uid);
      console.log(userFetched)
      setUser(userFetched);
      navigate.push("/tabs/home");
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
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="main-login-container">
          <img src={loginIllustration} alt="Login" />
          <form action="" onSubmit={signIn}>
            <IonInput
              mode="md"
              label="Email"
              type="text"
              labelPlacement="floating"
              fill="outline"
              value={email}
              onIonInput={(e: any) => setEmail(e.detail.value!)}
            />
            <IonInput
              mode="md"
              label="Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              className="password-field"
              value={password}
              onIonInput={(e: any) => setPassword(e.detail.value!)}
            />
            <IonButton
              className="ion-margin-top primary-button proceed-language"
              type="submit"
              expand="block"
              mode="ios"
            >
              Login
            </IonButton>
            <p className="signup-link-container">
              Don't have an account?

                <button className="sign-up-link"               
               onClick={()=>{
                router.push('/index/register')
               }} >Sign up</button>
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
                onClick={googleAuth}
              >
                <IonIcon src={googleIcon}></IonIcon>
                <IonLabel>Continue with Google</IonLabel>
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
                <IonLabel>Continue with Apple</IonLabel>
              </IonButton>
            </IonNavLink>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default LoginPage;
