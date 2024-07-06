import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonButtons,
    IonIcon,
    IonTitle,
    IonButton,
    IonBadge,
    IonLabel,
    IonNavLink,
    useIonRouter,
  } from '@ionic/react';
  import React from 'react';

  import './ResponderEmergency.css'
  
  import { chevronForward } from 'ionicons/icons';
  
  import { FormattedMessage } from 'react-intl';
  import AlertIcon from '../components/Alerts';
  
  const ResponderEmergency = () => {
    const router = useIonRouter();
    return (
      <IonPage>
        <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonTitle>
              <FormattedMessage id="Help Requests" />
            </IonTitle>
            <AlertIcon />
          </IonToolbar>
        </IonHeader>
  
        <IonContent className='ion-padding'>
          <div className='help-requests-container'>

            <div className='help-requests-card'>
                <div className='user-details'>
                <img src='https://media.rnztools.nz/rnz/image/upload/s--1LyXokVX--/t_tohu-badge-twitter/v1717720104/4KOYK0Q_000_34UA4EC_jpg' />
              <div>
                <div><h4>James Aluba</h4>
                <span>5mins ago</span></div>
                <div className='btn-link'>
                <IonButton mode='ios' fill='clear' slot='start' >
              <IonLabel>View More</IonLabel>
              <IonIcon src={chevronForward}></IonIcon>
              </IonButton>
              </div>

              </div>
                </div>
              <p>I am trapped on the mountain in Buea beside the seconde hut, I need help getting down.</p>
              
            </div>

            <div className='help-requests-card'>
                <div className='user-details'>
                <img src='https://www.shutterstock.com/image-photo/jakarta-feb-20-2021-public-260nw-1978011872.jpg' />
              <div>
                <div><h4>James Aluba</h4>
                <span>5mins ago</span></div>
                <div className='btn-link'>
                <IonButton mode='ios' fill='clear' slot='start' >
              <IonLabel>View More</IonLabel>
              <IonIcon src={chevronForward}></IonIcon>
              </IonButton>
              </div>

              </div>
                </div>
              <p>I am trapped on the mountain in Buea Cameroon I need help getting down.</p>
              
            </div>

            <div className='help-requests-card'>
                <div className='user-details'>
                <img src='https://www.redcross.org/content/dam/redcross/about-us/news/2023/international-red-cross-volunteer-helps-those-affected-by-earthquake-in-turkey_03.jpg.img.jpeg' />
              <div>
                <div><h4>James Aluba</h4>
                <span>5mins ago</span></div>
                <div className='btn-link'>
                <IonButton mode='ios' fill='clear' slot='start' >
              <IonLabel>View More</IonLabel>
              <IonIcon src={chevronForward}></IonIcon>
              </IonButton>
              </div>

              </div>
                </div>
              <p>I am trapped on the mountain in Buea Cameroon I need help getting down.</p>
              
            </div>
            
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ResponderEmergency;
  