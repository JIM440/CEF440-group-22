import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonRouter,
  } from '@ionic/react';
  import React from 'react';
  import fire from '../assets/fire.png';
  import eruption from '../assets/volcano.png';
  import landslide from '../assets/landslide.webp';
  import tornado from '../assets/tornado.webp';
  import earthquake from '../assets/earthquake.png';
  import flood from '../assets/flood.png';
  import './Guides.css'
import { chevronForward } from 'ionicons/icons';
  
  const GuideList: React.FC = () => {
    const router = useIonRouter();
    const Guides = [
      {
        image: flood,
        name: 'Flood',
        title: 'Flood Survival Guide',
        description: 'This guide provides information on how to prepare for, respond to, and recover from floods.',
      },
      {
        image: earthquake,
        name: 'Earthquake',
        title: 'Earthquake Guide',
        description: 'Discover important tips and strategies for earthquake preparedness, response, and recovery.'
      },
      {
        image: eruption,
        name: 'Volcanic',
        title: 'Eruptions Guide',
        description: 'Be ready for volcanic eruptions with this comprehensive guide, covering essential steps for safety and recovery.',
      },
      {
        image: landslide,
        name: 'Landslide',
        title: 'Landslide Readiness',
        description: 'Learn about the actions to take before, during, and after a landslide to protect yourself and your community.'
      },
      {
        image: tornado,
        name: 'Tornado',
        title: 'Tornado Survival',
        description: 'Prepare for tornadoes with this detailed guide, which covers safety measures and recovery strategies.'
      },
      {
        image: fire,
        name: 'Fire',
        title: 'Fire Safety Manual',
        description: 'Stay safe and informed with this comprehensive guide on fire preparedness, response, and recovery.',
      },
    ];
    
  
    return (
      <IonPage>
        <IonHeader class="ion-no-border">
          <IonToolbar color="clear">
            <IonButtons>
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>Guides</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <div className="guide-list-containers">
            {Guides.map((guide, index) => (
              <div key={index}>
                {/* <button
                key={index}
                className="guide-box"
                onClick={() => {
                  router.push('/guides/content');
                }}
              >
                <img src={guide.image} alt="" />
                <h3>{guide.name}</h3>
              </button> */}
              
              <div className="guide-list-containers">
                <div className="guide-list-card">
                  <img src={guide.image} alt="" />
                  <div className="guide-content">
                    <h4>{guide.title}</h4>
                    <p>{guide.description}</p>
                   <div className="btn-chevron-container">
                   <button onClick={() => {
                  router.push('/guides/content');
                }}>Learn More </button><IonIcon color='primary' icon={chevronForward} />
                   </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default GuideList;
  