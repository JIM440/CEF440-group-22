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
  IonToast,
  useIonRouter
        } from "@ionic/react";
import { useHistory } from "react-router-dom";

import { checkmarkCircle, closeCircle } from "ionicons/icons";
import appleIcon from "../../../assets/icons/appleIcon.svg";
import googleIcon from "../../../assets/icons/googleIcon.svg";
import loginIllustration from "./../../../assets/images/Login-illustration.png";

import SignUpPage from "./SignUp";
import { signInWithGoogle } from "../../../services/AuthService/auth";
import { userContext } from "../../../context/UserContext";
import { getUser } from "../../../services/controllers/users";
import Loader from "../../../components/Loader";
import BackBtn from "../../../components/HeaderBack";

function LoginPage() {

  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastColor, setToastColor] = useState('primary');
  const [toastIcon, setToastIcon] = useState(checkmarkCircle);

  const showToast = (message, color, icon) => {
    setToastMessage(message);
    setToastColor(color);
    setToastIcon(icon);
    setIsOpen(true);
  };

  const hideToast = () => {
    setIsOpen(false);
  };
  
  const [displayLoader, setDisplayLoader] = useState('none');
  const [errorText, setErrorText] = useState(false)

  const router = useIonRouter()
  const DoLogin = (event: any) => {
    event.preventDefault();
    console.log("Logged In🙂");
  }
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(userContext);

  const navigate = useHistory();

  
  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(email, "---", password);
      setDisplayLoader('flex')
      
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user.uid);
      
      
      const userFetched = await getUser(userCredential.user.uid);
      console.log(userFetched)
      setUser(userFetched);
      setDisplayLoader('none')
      showToast('Login successful!', 'primary', checkmarkCircle);
      navigate.push("/tabs/home");

    } catch (error) {
      console.error("Error during sign-in:", error);
      setDisplayLoader('none')
      setErrorText(true)
      showToast('Login failed. Please try again.', 'danger', closeCircle);
    }
  };

  async function googleAuth() {
    await signInWithGoogle();
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <BackBtn title='Login' />
      </IonHeader>

      <IonContent>

      <IonToast
      icon={toastIcon}
        isOpen={isOpen}
        message={toastMessage}
        color={toastColor}
        duration={4000}
        buttons={[
          {
            text: 'Close',
            role: 'cancel',
            handler: hideToast,
          },
        ]}
        onDidDismiss={hideToast} />

  <Loader display={displayLoader} />


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
            {errorText && <p style={{color: '#ce3737', fontSize: '14px', marginTop: '0px'}}>Incorrect UserName or Password</p>}
            <IonButton
              className="ion-margin-top primary-button proceed-language"
              type="submit"
              expand="block"
              mode="ios"
              disabled={email === '' || password == ''}
            >
              Login
            </IonButton>
            <p className="signup-link-container">
              Don't have an account?

                <button type="button" className="sign-up-link"               
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
