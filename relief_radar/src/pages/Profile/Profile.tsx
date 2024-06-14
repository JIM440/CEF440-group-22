import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  handLeft,
  helpCircleOutline,
  logOutOutline,
  openOutline,
  trashBinOutline,
} from 'ionicons/icons';
import React, { useState } from 'react';
import { History } from 'history';
import avatar from '../../assets/images/avatar.jpeg';
import './Profile.css';
import BackBtn from '../ResponderPanel/HeaderBack';

interface ContainerProps {
  history: History;
  darkMode: boolean;
  setDarkTheme: Function;
  locale: string;
  setLocale: Function;
}

const Profile: React.FC<ContainerProps> = () => {
  const [displayPreferred, setDisplayPreferred] = useState(false)
  const [displayAddLocation, setDisplayAddLocation] = useState(false)
  const CloseAll = ()=>{
    setDisplayAddLocation(false)
    setDisplayPreferred(false)
  }
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <BackBtn title='Profile' />
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="ion-text-center">
          <img src={avatar} alt="" className="img-avatar" />
        </div>
        <IonText class="ion-text-center">
          <h2
            style={{
              color: '#1e7fdb',
              fontWeight: 700,
            }}
          >
            Malcolm X Shabazz
          </h2>
          <p>malcolmx@gmail.com</p>
        </IonText>

        {/* preferred locations */}
        <div onClick={
          ()=>{
            setDisplayPreferred(true)
          }
        } className="preferred-locations-btn">
          <div className="icon icon-outlined">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1e7fdb"
                d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
              />
            </svg>
          </div>
          <div className="location-text">
            <span>Preferred Locations</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#333333"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9l6 6l6-6"
              />
            </svg>
          </div>
        </div>

        <div className={displayPreferred?'preferred-location-popup' : 'display-none preferred-location-popup'}>
          <div>
          <h4 className='muted'>Preferred Locations</h4>
          <hr />
          <button onClick={CloseAll} className="close"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#333333" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg></button>
          <div className="preferred-locations-list">
            <div className="location-list-item">
              <span>Buea, Cameroon</span>
              <div className="remove-preferred-loaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#dc2626"
                    d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0"
                  />
                </svg>
              </div>
            </div>
            <div className="location-list-item">
              <span>Douala, Cameroon</span>
              <div className="remove-preferred-loaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#dc2626"
                    d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0"
                  />
                </svg>
              </div>
            </div>
            <div className="location-list-item">
              <span>Buea, Cameroon</span>
              <div className="remove-preferred-loaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#dc2626"
                    d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0"
                  />
                </svg>
              </div>
            </div>
          </div>

          <button  onClick={
          ()=>{
            setDisplayPreferred(false)
            setDisplayAddLocation(true)
          }} className="add-prefered-location-btn">
            Add Location +
          </button>
          </div>
        </div>

        <div className={displayAddLocation?'preferred-location-popup' : 'display-none preferred-location-popup'}>
          <div>
          <h4 className='muted'>Add Location</h4>
          <button onClick={CloseAll} className='close'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#333333" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
          </button>
          <hr />
          <div style={{textAlign: 'center'}}><IonCheckbox labelPlacement='start'> Use Current Location</IonCheckbox></div>
          <span style={{display: 'block', textAlign: 'center', marginBlock: '1.2rem'}}>OR</span>
          <form action="">
          <span className='muted'>Provide Location</span>
          <IonInput className='ion-margin-top'
          mode='md' placeholder='Enter Country' fill='outline' label='Country' labelPlacement='floating' value='Cameroon' />
          <IonInput className='ion-margin-top'
          mode='md' placeholder='Enter Address' fill='outline' label='Address' labelPlacement='floating' value='101 Main Street' />

          <div className='three-input-column'>

          <IonInput className='ion-margin-top'
          mode='md' placeholder='Enter City' fill='outline' label='City' labelPlacement='floating' value='Roseville' />
          <IonInput className='ion-margin-top'
          mode='md' placeholder='Enter State' fill='outline' label='State' labelPlacement='floating' value='CA' />
          <IonInput className='ion-margin-top'
          mode='md' placeholder='Enter Zip' fill='outline' label='Zip' labelPlacement='floating' value='09876' />
          
          </div>
          <div className="btn-add-location-container">
            <button type='button' onClick={()=>{
              setDisplayAddLocation(false)
              setDisplayPreferred(true)
            }} className='cancel'>Cancel</button>
            <button type='submit' onClick={()=>{
              setDisplayAddLocation(false)
            }} className='save'>Save</button>
          </div>
          </form>
          </div>
        </div>
        {/* end of preferred locations */}
        <IonButton
          mode="ios"
          type="button"
          fill="outline"
          routerLink="/menu/profile/edit"
          expand="block"
          color="dark"
        >
          Edit Profile <IonIcon icon={openOutline} slot="end" />
        </IonButton>

        <IonButton
          mode="ios"
          className="ion-margin-top"
          expand="block"
          color="primary"
        >
          Volunteer
          <IonIcon icon={handLeft} slot="end" />
        </IonButton>
        
        <div className="profile-footer btn-bottom-container">
<IonButton fill="clear" color="dark">
          <IonIcon slot="start" icon={helpCircleOutline} /> Help & Support
        </IonButton>
        <IonButton fill="clear" color="dark">
          <IonIcon slot="start" icon={logOutOutline} /> Log Out
        </IonButton>
        <IonButton fill="clear" color="danger">
          <IonIcon slot="start" icon={trashBinOutline} /> Delete Account
        </IonButton>
</div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
