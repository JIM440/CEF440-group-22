import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonLabel, IonTitle, IonToolbar, IonText } from '@ionic/react';
import React from 'react';
import fireGuide from '../assets/fire-guide.png'

const GuideContent: React.FC = () => {

    return (
        <IonPage>
            <IonHeader class='ion-no-border'>
                <IonToolbar color='clear'>
                    <IonButtons>
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Fire Safety Manual</IonTitle>
                </IonToolbar>

                <IonToolbar color='clear'>
                <IonSegment mode='md' color='light' value='before'>
                <IonSegmentButton value='before'>
                    <IonLabel>Before</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value='during'>
                    <IonLabel>During</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value='after'>
                    <IonLabel>After</IonLabel>
                </IonSegmentButton>
               </IonSegment>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

               <div className='intro-container'>
                    <img src={fireGuide} alt="" />
                    <div className="text">
                        <p>During a fire, early warning from a smoke alarm plus a fire escape plan that has been practiced regularly can help save lives.
                        </p>
                        <h3>Learn what else to do to keep your loved ones safe during a disaster</h3>
                    </div>
                </div>

                
               <IonText>
               <p> 1. Walk through your home and identify two escape routes from each room. This could involve windows, doors (depending on location),
or fire escapes.
Choose a meeting place outside your home where everyone can gather once they have evacuated.
Practice your escape plan regularly with all household members, including pets, and ensure everyone knows the escape routes and meeting place.</p>
               </IonText>
               <IonText>
                <p>2. Equip your home with smoke alarms on every level,
including outside sleeping areas.
Test your smoke alarms monthly and replace batteries annually.
Consider investing in interconnected smoke alarms, so that if one sounds, they all sound throughout the house.</p>
               </IonText>
               <IonText>
                <p>3. Assemble a fire safety kit that includes a fire extinguisher (ensure you know how to use it!
), a fire blanket, a multi-purpose fire escape ladder (for upper floors), a first-aid kit, flashlights, and a battery-powered radio.
Keep the fire safety kit readily accessible near an exit but away from potential fire hazards.</p>
               </IonText>
            </IonContent>
        </IonPage>
    );
};

export default GuideContent;