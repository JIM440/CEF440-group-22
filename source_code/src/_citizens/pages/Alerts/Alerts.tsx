import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import './Alerts.css';
import BackBtn from '../../../components/HeaderBack';

import AlertCard from '../../../components/AlertCards';

interface Alert {
  id: number;
  disasterType: string;
  location: string;
  description: string;
  disasterStatus: string;
  time: string;
}

const Alerts: React.FC = () => {
  const [disasterName, setDisasterName] = useState('all');

  const Alerts: Alert[] = [
    {
      id: 1,
      disasterType: 'Flood',
      location: 'Evergreen, Canada',
      description:
        'Heavy rainfall causing river overflow, potential for levee breaches.',
      disasterStatus: 'Potential',
      time: '12 hours',
    },
    {
      id: 2,
      disasterType: 'Earthquake',
      location: 'Tokyo, Japan',
      description: 'Moderate tremor measuring 5.2 on the Richter Scale.',
      disasterStatus: 'Ongoing',
      time: '10 minutes ago',
    },
    {
      id: 3,
      disasterType: 'Fire',
      location: 'Melbourne, Australia',
      description: 'High-rise building fire, multiple stories involved.',
      disasterStatus: 'Ongoing',
      time: '30 minutes ago',
    },
    {
      id: 4,
      disasterType: 'Landslide',
      location: 'Rio de Janeiro, Brazil',
      description:
        'Mudslide reported on Favela hillside, evacuations underway.',
      disasterStatus: 'Ongoing',
      time: '1 hour ago',
    },
    {
      id: 5,
      disasterType: 'Eruption',
      location: 'Mount Vesuvius, Italy',
      description:
        'Increased volcanic activity detected, tremors and ashfall reported.',
      disasterStatus: 'Potential',
      time: '24 hours',
    },
    {
      id: 6,
      disasterType: 'Tornado',
      location: 'Kansas, USA',
      description:
        'Tornado spotted near Wichita, residents urged to seek shelter.',
      disasterStatus: 'Ongoing',
      time: '15 minutes ago',
    },
    {
      id: 7,
      disasterType: 'Flood',
      location: 'Nile Delta, Egypt',
      description:
        'Seasonal flooding along the Nile River, potential for property damage.',
      disasterStatus: 'Potential',
      time: '3 days',
    },
    {
      id: 8,
      disasterType: 'Earthquake',
      location: 'San Francisco, USA',
      description: 'Minor tremor measuring 3.8 on the Richter Scale.',
      disasterStatus: 'Occurred',
      time: '2 hours ago',
    },
    {
      id: 9,
      disasterType: 'Fire',
      location: 'London, England',
      description:
        'Small kitchen fire contained by residents, firefighters on scene.',
      disasterStatus: 'Occurred',
      time: '45 minutes ago',
    },
    {
      id: 10,
      disasterType: 'Landslide',
      location: 'Himalayan Mountains, Nepal',
      description:
        'Report of rockslide blocking mountain pass, no injuries reported.',
      disasterStatus: 'Occurred',
      time: '1 day ago',
    },
  ];

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <BackBtn title="Alerts" />

        <IonToolbar color="clear" style={{ paddingLeft: '10px' }}>
          <IonSegment
            color="light"
            mode="ios"
            scrollable={true}
            value={disasterName}
            onIonChange={(event: CustomEvent) => {
              setDisasterName(event.detail.value);
            }}
          >
            <IonSegmentButton value="all">
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="flood">
              <IonLabel>Flood</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="fire">
              <IonLabel>Fire</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="earthquake">
              <IonLabel>Earthquake</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="landslide">
              <IonLabel>Landslide</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="tornado">
              <IonLabel>Tornado</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="eruption">
              <IonLabel>Eruption</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="alerts-container" style={{ marginTop: '-10px' }}>
          {Alerts.map((Alert, index) => {
            return (
              (disasterName === 'all' ||
                Alert.disasterType.toLowerCase() ===
                  disasterName.toLowerCase()) && <AlertCard Alert={Alert} />
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Alerts;
