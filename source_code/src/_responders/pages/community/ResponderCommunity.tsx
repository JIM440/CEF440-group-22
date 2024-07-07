import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, useIonRouter } from '@ionic/react';
import React,{useContext} from 'react';

import './Community.css'

import menuIcon from "../../../assets/icons/menu.svg";
import plus from '../../../assets/icons/plus.svg'


import AlertIcon from '../components/Alerts';

const ResponderCommunity: React.FC = () => {
  const router = useIonRouter()


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
            <IonMenuButton>
              <IonIcon src={menuIcon}></IonIcon>
            </IonMenuButton>
          </IonButtons>
                    <IonTitle>Community</IonTitle>
                    <AlertIcon />
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Responder Community...
            </IonContent>

            <div className='add-alert community' onClick={()=>{
          router.push('/responder/forum/new')
        }}>
          <IonIcon icon={plus} />
        </div>
        </IonPage>
    );
}

export default ResponderCommunity;


//     setUrlToUpload('');

//     setStep(0);
//   } catch (error) {
//     console.log('Error reporting disaster:', error);
//   }
// };

