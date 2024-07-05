import {
    IonBackButton,
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
  import fire from '../../../assets/images/fire.png';
  import eruption from '../../../assets/images/volcano.png';
  import landslide from '../../../assets/images/landslide.png';
  import tornado from '../../../assets/images/tornado.webp';
  import earthquake from '../../../assets/images/earthquake.png';
  import flood from '../../../assets/images/flood.png';
  import './Guides.css'
import { chevronForward } from 'ionicons/icons';
import BackBtn from '../../../components/HeaderBack';
  
  const GuideList: React.FC = () => {
    const router = useIonRouter();
    const Guides = [
      {
        image: tornado,
        name: 'Tornado',
        title: 'Tornado',
        description: 'Prepare for tornadoes with this detailed guide, which covers safety measures and recovery strategies.'
      },
      {
        image: fire,
        name: 'Fire',
        title: 'Fire',
        description: 'Stay safe and informed with this comprehensive guide on fire preparedness, response, and recovery.',
      },
      {
        image: eruption,
        name: 'Eruption',
        title: 'Eruptions',
        description: 'Be ready for volcanic eruptions with this comprehensive guide, covering essential steps for safety and recovery.',
      },
      {
        image: landslide,
        name: 'Landslide',
        title: 'Landslide',
        description: 'Learn about the actions to take before, during, and after a landslide to protect yourself and your community.'
      },
      {
        image: flood,
        name: 'Flood',
        title: 'Flood',
        description: 'This guide provides information on how to prepare for, respond to, and recover from floods.',
      },
      {
        image: earthquake,
        name: 'Earthquake',
        title: 'Earthquake',
        description: 'Discover important tips and strategies for earthquake preparedness, response, and recovery.'
      },
    ];
    
  
    return (
      <IonPage>
        <IonHeader class="ion-no-border">
          <BackBtn title='Guides' />
        </IonHeader>
  
        <IonContent className="ion-padding">

<p style={{textAlign: 'center'}}>Know exactly how to prepare, respond, and recover from disasters using the guides below.</p>

          <div className="guide-list-containers">
            {Guides.map((guide, index) => (
              <div key={index}>              
              <div className="guide-list-containers">
                <div className="guide-list-card">
                  <img src={guide.image} alt="" />
                  <div className="guide-content">
                    <h4>{guide.title}</h4>
                    {/* <p>{guide.description}</p> */}
                   <div className="btn-chevron-container">
                   <button onClick={() => {
                  router.push(`/menu/guides/${guide.name.toLowerCase()}`);
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
  