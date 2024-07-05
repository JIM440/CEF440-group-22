import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import React from 'react';

import logo from '../../../assets/images/logo-white.svg'

const LoginType: React.FC = () => {
    const router = useIonRouter()

    return (
        <IonPage>
            <IonContent>
                <div className="login-type-container">
                    
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h2>Relief Radar</h2>
                    </div>
                    <div className='role-container'>
                    <h3>Please Select your role:</h3>
                    <p>"Citizen" if seeking assistance during a disaster or "Responder" if providing emergency response support and access relevant resources.</p>
                    </div>
            <div className='btn-logintype-container'>
            <IonButton
            mode="ios" className='welcome-signup primary-button'
            onClick={()=>{
                router.push('/index/responder/login')}}>
                <span>Continue as Responder</span>
                <IonIcon icon={chevronForward} />
            </IonButton>
            
            <IonButton
            mode="ios" className='welcome-signup ' onClick={()=>{
                router.push('/index/login')
            }}>
                <span>Continue as Citizen</span>
                <IonIcon icon={chevronForward} />
            </IonButton>
            </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LoginType;