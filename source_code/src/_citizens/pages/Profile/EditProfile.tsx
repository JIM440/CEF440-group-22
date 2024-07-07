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
import React, { useContext} from 'react';
import avatar from '../../../assets/images/avatar.jpeg';
import './Profile.css';
import { cameraOutline } from 'ionicons/icons';
import BackBtn from '../../../components/HeaderBack';
import { userContext } from '../../../context/UserContext';

const EditProfile: React.FC = () => {
  const {user,setUser} = useContext(userContext)
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
          value={user.name}
        />
        <IonInput
        type='email'
          mode="md"
          fill="solid"
          color='light'
          label="Email"
          placeholder="e.g. jim@walcon.com"
          labelPlacement="floating"
          value={user.email}
        />
        <IonInput type='password' mode="md"
          fill="outline"
          label="Password"
          placeholder="12345@Yvs#"
          labelPlacement="floating"
          value={user.password}
          >
            <IonInputPasswordToggle color='dark' slot='end' />
        </IonInput>
        <IonInput type='number' label='Phone Number' placeholder={user.telephone} value={user.telephone} labelPlacement="floating" fill='outline' mode='md' />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
