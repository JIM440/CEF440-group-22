import { IonIcon } from '@ionic/react';
import React, { FC, useState } from 'react';


import fire from '../assets/icons/fire.svg';
import earthquake from '../assets/icons/earthquake.svg';
import landslide from '../assets/icons/landslide.svg';
import flood from '../assets/icons/flood.svg';
import tornado from '../assets/icons/tornado.svg';
import eruption from '../assets/icons/eruption.svg';

interface alert{disasterType: string;
  location: string;
  description: string;
  disasterStatus: string;
  id: number;
  time: string;}

  interface myCompProp{
    Alert: alert
  }

const AlertCard: FC<myCompProp> = ({Alert}) => {

    
  const GetIcon = (disasterName: string): string => {
    switch (disasterName) {
      case 'fire':
        return fire;
      case 'earthquake':
        return earthquake;
      case 'landslide':
        return landslide;
      case 'flood':
        return flood;
      case 'eruption':
        return eruption;
      case 'tornado':
        return tornado;
      default:
        return 'alert';
    }
  };

    return (
        <div className="alert-box" key={Alert.id}>
                  <div className="status-time">
                    <span
                      className={`status ${Alert.disasterStatus.toLowerCase()}`}
                    >
                      {Alert.disasterStatus}
                    </span>
                    <p className="time">{Alert.time}</p>
                  </div>
                  <div className="disaster-img-type">
                    <div className="icon">
                      <IonIcon
                        src={GetIcon(Alert.disasterType.toLowerCase())}
                        size="large"
                        color="primary"
                      />
                    </div>
                    <div>
                      <h3>{Alert.disasterType}</h3>
                      <p>{Alert.location}</p>
                    </div>
                  </div>
                  <p className="description">{Alert.description}</p>
                  <div className="map-view">
                    <span>View In Map</span>
                    <div className="alerts-icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 18.5L9 17l-6 3V7l6-3l6 3l6-3v7.5M9 4v13m6-10v5.5m6.121 7.621a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
    );
};

export default AlertCard;