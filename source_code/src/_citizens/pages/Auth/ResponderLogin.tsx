import React, { FormEvent, useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { signInWithGoogle } from '../../../services/AuthService/auth';

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
  useIonRouter,
  IonToast,
} from '@ionic/react';

import { checkmarkCircle, closeCircle } from 'ionicons/icons';

import loginIllustration from './../../../assets/images/Login-illustration.png';
import Loader from '../../../components/Loader';
import BackBtn from '../../../components/HeaderBack';

function ResponderLogin() {
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useIonRouter();

  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setDisplayLoader('flex');

      console.log(email, '---', password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user.uid);

      setDisplayLoader('none');
      router.push('/responder/tabs/home');
      showToast('Login successful!', 'primary', checkmarkCircle);
    } catch (error) {
      console.error('Error during sign-in:', error);
      setDisplayLoader('none');
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
          onDidDismiss={hideToast}
        />

        <Loader display={displayLoader} />

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
              onIonInput={(e) => setEmail(e.detail.value as string)}
            ></IonInput>
            <IonInput
              mode="md"
              label="Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              className="password-field"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value as string)}
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
                onClick={() => router.push('/index/responder/apply')}
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
