import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonText,
} from '@ionic/react';
import React, { useState } from 'react';
import BackBtn from '../../../components/HeaderBack';
import { useParams } from 'react-router';

// assets for disasters
// fire
import fire_before from '../../../assets/images/guides/fire/before.png';
import fire_during from '../../../assets/images/guides/fire/during.jpg';
import fire_after from '../../../assets/images/guides/fire/after.avif';
// flood
import flood_before from '../../../assets/images/guides/flood/before.png';
import flood_during from '../../../assets/images/guides/flood/during.jpg';
import flood_after from '../../../assets/images/guides/flood/after.png';
// tornado
import tornado_before from '../../../assets/images/guides/tornado/b efore.jpg';
import tornado_during from '../../../assets/images/guides/tornado/during.webp';
import tornado_after from '../../../assets/images/guides/tornado/after.jpg';
// landslide
import landslide_before from '../../../assets/images/guides/landlslide/before.jpg';
import landslide_during from '../../../assets/images/guides/landlslide/during.webp';
import landslide_after from '../../../assets/images/guides/landlslide/after.webp';
// earthquake
import earthquake_before from '../../../assets/images/guides/earthquake/before.webp';
import earthquake_during from '../../../assets/images/guides/earthquake/during.jpg';
import earthquake_after from '../../../assets/images/guides/earthquake/after.jpg';
// eruption
import eruption_before from '../../../assets/images/guides/eruption/before.jpg';
import eruption_during from '../../../assets/images/guides/eruption/during.webp';
import eruption_after from '../../../assets/images/guides/eruption/after.jpg';

interface DisasterContentSection {
  image: string;
  intro: string;
  content: string;
}

interface DisasterGuide {
  name: string;
  id: number;
  before: DisasterContentSection;
  during: DisasterContentSection;
  after: DisasterContentSection;
}
  const DisasterGuides: DisasterGuide[] = [

    {
      name: 'fire',
      id: 1,
      before: {
        intro:
          'Preparation is crucial in mitigating the impact of a fire. Taking proactive steps to prevent fires and prepare for emergencies can significantly enhance your safety and readiness.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Ffire%2Fbefore.png?alt=media&token=c178f837-8a1a-40e8-a4bb-4edf5cde6e23",
        content:
          ' / Develop a comprehensive fire escape plan that includes multiple exits and a designated meeting point outside. / Install smoke detectors on every level of your home or workplace and test them monthly to ensure they are in working order. / Keep flammable materials, such as paper and cloth, away from heat sources and electrical appliances. / Regularly inspect and maintain heating systems, electrical wiring, and appliances to reduce the risk of fire.',
      },
      during: {
        intro:
          'During a fire, quick and informed action is crucial to safeguard lives and property. Understanding and following proper procedures can make a significant difference in the outcome.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Ffire%2Fduring.jpg?alt=media&token=28a33863-2b4d-4978-b287-076ff5d4e7cb",
        content:
          ' / If you discover a fire, alert others nearby and activate the nearest fire alarm if available. / Leave the building immediately through the nearest safe exit, closing doors behind you to slow the spread of smoke and fire. / If smoke is present, stay low to the ground where the air is cleaner and cover your nose and mouth with a cloth to avoid inhaling smoke. / Use fire extinguishers only if you are trained to do so and if the fire is small and contained. Otherwise, prioritize evacuation and alerting emergency services.',
      },
      after: {
        intro:
          'Recovering from a fire involves assessing the extent of damage, addressing immediate needs, and beginning the process of rebuilding. This phase requires careful planning and support.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Ffire%2Fafter.avif?alt=media&token=cb96726b-86a0-4692-809a-69cc47538db5",
        content:
          ' / Assess the structural and property damage caused by the fire, documenting the extent of losses for insurance purposes. / Contact your insurance provider promptly to initiate the claims process and obtain guidance on necessary repairs or rebuilding efforts. / Arrange for professional cleanup and restoration services to mitigate further damage from smoke, water used in firefighting efforts, and structural instability. / Seek emotional support for yourself and others affected by the fire, recognizing the trauma and stress it may have caused.',
      },
    },
    {
      name: 'tornado',
      id: 2,
      before: {
        intro:
          'Preparation is essential in minimizing the impact of a tornado. By taking proactive steps and planning ahead, you can enhance your safety and readiness.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Ftornado%2Fb%20efore.jpg?alt=media&token=656616a4-d261-4831-aa4a-c0cd8fc89f18",
        content:
          ' / Develop a tornado emergency plan that includes identifying a safe room or shelter in your home or workplace. / Conduct tornado drills regularly so that everyone knows what to do and where to go during a tornado warning. /	Secure outdoor objects that could become projectiles, such as patio furniture, grills, and garden tools. / Install a NOAA Weather Radio or monitor weather alerts on your smartphone to stay informed about tornado watches and warnings.',
      },
      during: {
        intro:
          'During a tornado, swift and informed action can save lives. Understanding proper procedures and staying alert are critical.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Ftornado%2Fduring.webp?alt=media&token=80cd806a-0f2a-43aa-9096-099379c5f7da",
        content:
          ' / Immediately seek shelter in a basement or an interior room on the lowest level of a sturdy building. / If you are outdoors and unable to reach shelter, lie flat in a low-lying area and cover your head to protect against flying debris. / Avoid windows, and protect yourself from flying debris by covering up with blankets, pillows, or a mattress. / Listen to local authorities and weather reports for updates and instructions.',
      },
      after: {
        intro:
          'Recovering from a tornado involves assessing damage, addressing immediate needs, and beginning the process of rebuilding. This phase requires careful planning and support.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Ftornado%2Fafter.jpg?alt=media&token=35b050e1-a78a-4931-9d11-5e8e8c727705",
        content:
          " / Check yourself and others for injuries and administer first aid as needed. Seek medical attention for serious injuries. / Assess your home or property for damage, taking photos or videos for insurance claims. / Contact your insurance provider to file a claim and get guidance on necessary repairs or temporary housing options. / Follow local authorities' instructions and avoid damaged areas until they have been deemed safe.",
      },
    },
    {
      name: 'eruption',
      id: 3,
      before: {
        intro:
          'Preparing for a volcanic eruption involves understanding the risks and taking proactive measures to protect lives and property.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Feruption%2Fbefore.jpg?alt=media&token=c9b692aa-eaac-496e-a28b-a1c5e40c68fe",
        content:
          " / Stay informed about the volcano's activity through official sources such as geological surveys and local authorities. / Develop and practice an evacuation plan that includes multiple evacuation routes and designated meeting points. / Prepare an emergency kit with essentials like non-perishable food, water, medications, flashlights, and batteries. / Identify shelters or safe locations where you can seek refuge in case of evacuation.",
      },
      during: {
        intro:
          'During a volcanic eruption, swift action and adherence to safety protocols are crucial for minimizing harm.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Feruption%2Fduring.webp?alt=media&token=d68a376f-3a42-4ae9-bf91-c17853a17c87",
        content:
          ' / Follow evacuation orders issued by local authorities promptly and calmly. / Protect yourself from volcanic ashfall by staying indoors, if possible, or wearing masks and goggles when outdoors. / Avoid low-lying areas prone to lahars (mudflows) and rivers that may be affected by volcanic debris. / Listen to emergency alerts and updates for instructions from authorities.',
      },
      after: {
        intro:
          'Recovering from a volcanic eruption involves assessing damage, supporting affected communities, and planning for long-term recovery.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Feruption%2Fafter.jpg?alt=media&token=3f9a8c7a-4742-48df-af2d-a4fa7876cfd4",
        content:
          ' / Assess damage to infrastructure, homes, and agriculture, and document losses for insurance claims. / Assist displaced persons by providing shelter, food, medical care, and psychosocial support as needed. / Collaborate with local authorities and relief agencies to coordinate cleanup efforts and restore essential services. / Plan for long-term recovery and mitigation measures to enhance community resilience against future eruptions.',
      },
    },
    {
      name: 'landslide',
      id: 4,
      before: {
        intro:
          'Preparing for a landslide involves recognizing potential hazards and taking proactive measures to mitigate risks and protect lives.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Flandslide%2Fbefore.jpg?alt=media&token=7ac8b8e7-186f-4489-81e6-23e0cd45ebd6",
        content:
          ' / Identify landslide-prone areas near your home, workplace, or community using geological maps or local knowledge. / Consult with local authorities or geological experts to understand landslide risks and evacuation routes. / Implement erosion control measures such as planting vegetation, building retaining walls, or diverting water away from slopes. /	Create an emergency plan that includes evacuation procedures, communication strategies, and emergency contacts.',
      },
      during: {
        intro:
          'During a landslide, swift action and adherence to safety protocols are essential for minimizing harm and ensuring survival.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Flandslide%2Fduring.webp?alt=media&token=82de484f-1487-437c-9d91-2e3a3aa11ef0",
        content:
          ' / Evacuate immediately if you notice signs of an impending landslide, such as unusual sounds, movement of soil, or cracks in the ground. / Move to higher ground or a sturdy shelter away from the landslide path, if possible. / Avoid river valleys and low-lying areas that may be prone to flash floods triggered by landslides. / Stay informed through local media and emergency alerts for updates and instructions from authorities.',
      },
      after: {
        intro: 'Recovering from an earthquake involves assessing damage, providing assistance to those in need, and planning for long-term recovery and resilience.',
        image:"https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Flandslide%2Fafter.webp?alt=media&token=6d0e1f56-a5ac-4868-b9c7-bb98b6db79e3",
        content:
          ' / Assess the extent of damage to homes, infrastructure, and utilities, and document losses for insurance claims. / Clear debris from roads and access routes to facilitate emergency response and recovery efforts. / Provide humanitarian assistance to displaced persons, including shelter, food, water, and medical care. / Implement landslide mitigation measures such as slope stabilization, drainage improvements, and land use planning to reduce future risks.',
      },
    },
    {
      name: 'flood',
      id: 5,
      before: {
        intro:
          'Preparing for a flood involves understanding flood risks and taking proactive measures to protect lives, property, and communities.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Fflood%2Fbefore.png?alt=media&token=740cf12e-701d-4ec6-9af3-5ed19ae04f80",
        content:
          ' / Identify flood-prone areas near your home or workplace using flood maps or local knowledge. / Develop a family emergency plan that includes evacuation routes, communication methods, and meeting points. / Create an emergency kit with essentials such as non-perishable food, water, medications, flashlights, and batteries. / Elevate electrical appliances and utilities (such as furnaces, water heaters, and electrical panels) above potential flood levels.',
      },
      during: {
        intro:
          'During a flood, quick action and adherence to safety guidelines are essential for protecting yourself and your family.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Fflood%2Fduring.jpg?alt=media&token=c14e7b9a-2e8d-4f31-8540-b80fe162dcd0",
        content:
          ' / Evacuate immediately if advised by local authorities or if you feel unsafe. Follow designated evacuation routes and avoid flooded roads. / Avoid walking or driving through floodwaters, as just six inches of moving water can knock you down, and one foot can sweep your vehicle away. / Stay informed through local media, emergency alerts, and weather reports for updates and instructions from authorities. / If trapped by flooding, go to the highest level of a building and call 911 for help. Signal for assistance with a flashlight or by waving an object from a window.',
      },
      after: {
        intro:
          'Recovering from a flood involves assessing damage, supporting affected communities, and planning for long-term recovery and resilience.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Fflood%2Fafter.png?alt=media&token=63d1c8d4-6299-4e12-8ad5-1b9b5c2c2331",
        content:
          ' /	Assess damage to your home, property, and vehicles. Take photos or videos to document losses for insurance claims. / Avoid contact with floodwaters, which may be contaminated with sewage, chemicals, or debris. / Dispose of damaged items responsibly and begin cleanup and disinfection procedures to prevent mold and other health hazards. / Work with local authorities, relief agencies, and insurers to access assistance programs and resources for recovery efforts.',
      },
    },
    {
      name: 'earthquake',
      id: 6,
      before: {
        intro:
          'Preparing for an earthquake involves understanding seismic risks and taking proactive measures to protect lives, reduce damage, and ensure resilience.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Fearth_quake%2Fbefore.webp?alt=media&token=deb3fa30-e78c-4102-abd6-9b343affca39",
        content:
          ' / Identify safe spots in each room of your home or workplace, such as under sturdy furniture or against interior walls away from windows. / Secure heavy furniture and appliances to walls or floors using flexible straps or brackets to prevent them from toppling during shaking. / Create a family emergency plan that includes communication methods, meeting points, and emergency contacts. / Prepare an emergency kit with essentials such as non-perishable food, water, medications, flashlight, batteries, and first aid supplies.',
      },
      during: {
        intro:
          'During an earthquake, quick and decisive actions to protect yourself and others can save lives and minimize injuries.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Fearth_quake%2Fduring.jpg?alt=media&token=71f24f13-ea9e-475c-a125-86b2baa121ad",
        content:
          ' / Drop to the ground, take cover under a sturdy piece of furniture (like a table or desk), and hold on until the shaking stops. / Stay indoors until the shaking subsides and it is safe to exit. Most injuries during earthquakes occur when people try to move during shaking. / If outdoors, move to an open area away from buildings, trees, streetlights, and utility wires. / If driving, pull over to a safe area away from overpasses, bridges, and buildings. Stay inside your vehicle until the shaking stops.',
      },
      after: {
        intro:
          'Recovering from an earthquake involves assessing damage, providing assistance to those in need, and planning for long-term recovery and resilience.',
        image: "https://firebasestorage.googleapis.com/v0/b/relief-radar.appspot.com/o/Guides%2Fearth_quake%2Fafter.jpg?alt=media&token=e71336a0-4f63-401d-8239-62fe4555a3c3",
        content:
          " / Check yourself and others for injuries. Administer first aid and seek medical attention for serious injuries. / Assess your home or workplace for structural damage and potential hazards such as gas leaks or electrical issues. If you smell gas or suspect a leak, evacuate immediately and notify authorities. / Follow local authorities' instructions and evacuation orders. Be prepared for aftershocks, which can cause additional damage or collapse weakened structures. / Assist neighbors and community members who may need help. Participate in cleanup and recovery efforts to restore normalcy and support resilience.",
      },
    },
  ];

const GuideContent: React.FC = () => {
  const { id } = useParams();

  const [segment, setSegment] = useState('before');

  const formatText = (text: string): React.ReactNode => {
    // Split text into segments based on ' / '
    const segments = text.split(' / ');
  
    // Map each segment to JSX elements with <br> tags
    const formattedText = segments.map((segment, index) => (
      <React.Fragment key={index}>
        {index > 0 && (<><br /></>)}
        {segment}
      </React.Fragment>
    ));
  
    return formattedText;
  };
  



  const guideArray = DisasterGuides.filter((guide) => guide.name === id);
  const guide = guideArray[0];

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <BackBtn title={id} />
        <IonToolbar color="clear" className="guide-segment-container">
          <IonSegment
            mode="md"
            color="light"
            value={segment}
            onIonChange={(event: CustomEvent) => {
              setSegment(event.detail.value);
            }}
          >
            <IonSegmentButton value="before">
              <IonLabel>Before</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="during">
              <IonLabel>During</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="after">
              <IonLabel>After</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        {
          <div className='guide-content-container'>
            <div className={segment === 'before' ? '' : 'display-none'}>
              <div className="intro-container">
                <img src={guide.before.image} alt="" />
                <div className="text">{guide.before.intro}</div>
              </div>
              <h3>Steps</h3>
              <p> {formatText(guide.before.content)}</p>
            </div>

            <div className={segment === 'during' ? '' : 'display-none'}>
            <div className="intro-container">
                <img src={guide.during.image} alt="" />
                <div className="text">{guide.during.intro}</div>
              </div>
              <h3>Steps</h3>
              <p> {formatText(guide.during.content)}</p>
            </div>

            <div className={segment === 'after' ? '' : 'display-none'}>
            <div className="intro-container">
                <img src={guide.after.image} alt="" />
                <div className="text">{ guide.after.intro }</div>
              </div>
              <h3>Steps</h3>
              <p> {formatText(guide.after.content)}</p>
            </div>
          </div>
        }
      </IonContent>
    </IonPage>
  );
};

export default GuideContent;
export {DisasterGuides}