import { IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Loader: React.FC = () => {

    return (
        <div className='overlay-loader'>
        <IonSpinner name="crescent" color={'primary'} style={{width: '120px', height: '120px'}}></IonSpinner> 
        </div>
    );
};

export default Loader;