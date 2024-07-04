import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import avatar from '../../../assets/images/avatar.jpeg';
import './Profile.css';
import { cameraOutline } from 'ionicons/icons';
import BackBtn from '../../../components/HeaderBack';

const EditProfile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <BackBtn title='Edit Profile' />
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="img-avatar-container ion-text-center">
          <img src={avatar} alt="" className="img-avatar img-avatar-edit" />
          <IonIcon className='floating-camera' icon={cameraOutline} size='large' />
        </div>

        <form action="" className='form'>
        <IonInput
          mode="md"
          fill="outline"
          label="Full Name"
          placeholder="e.g. Jim Walcon"
          labelPlacement="floating"
          value='Malcolm Shabazz'
        />
        <IonInput
        type='email'
          mode="md"
          fill="solid"
          color='light'
          label="Email"
          placeholder="e.g. jim@walcon.com"
          labelPlacement="floating"
          value='malcolmx@gmail.com'
        />
        <IonInput type='password' mode="md"
          fill="outline"
          label="Password"
          placeholder="12345@Yvs#"
          labelPlacement="floating"
          value="12345@Yvs#">
            <IonInputPasswordToggle color='dark' slot='end' />
        </IonInput>
        <IonInput type='number' label='Phone Number' placeholder='123456789' value='098987565' labelPlacement="floating" fill='outline' mode='md' />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
