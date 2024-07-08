import { IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface loader {
    display: string; // Required title for the back button
  }

const Loader: React.FC<loader> = ({display}) => {

    return (
        <div className={`overlay-loader ${display}`}>
        <IonSpinner name="crescent" color={'primary'} style={{width: '120px', height: '120px'}}></IonSpinner> 
        </div>
    );
};

export default Loader;