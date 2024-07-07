import {
  IonBackButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import React from 'react';
import floodOccur from '../../../assets/images/flood-occurred2.jpg';
import BackBtn from '../../../components/HeaderBack';

const ResponderValidateDisaster: React.FC = () => {
  const router = useIonRouter();
  return (
    <IonPage>
      <IonHeader class='ion-no-border'>
        <BackBtn title='Fire Incident' />
      </IonHeader>
      <IonContent>
        <div className="intro-image-report">
        <img style={{
            objectFit: 'cover'
        }} height='280px' src={floodOccur} />
        </div>
        <div className="ion-padding-horizontal header-pending-content">
          <div className="row-1">
            <h4>Fire</h4>
            <span>Buea, Cameroon</span>
          </div>
          <div className="row-2">
            <button className="btn-link">
              <span>View on Map</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1e7fdb"
                  d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zM18 14a2.75 2.75 0 0 0-2.75 2.75c0 1.252.735 2.454 1.615 3.422c.407.448.817.814 1.135 1.075c.318-.26.728-.627 1.135-1.075c.88-.968 1.615-2.17 1.615-3.422A2.75 2.75 0 0 0 18 14m0 9.701l-.555-.369l-.002-.001l-.004-.003l-.012-.008l-.04-.028a11.335 11.335 0 0 1-.603-.456a12.83 12.83 0 0 1-1.399-1.318c-.995-1.094-2.135-2.767-2.135-4.768a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a12.832 12.832 0 0 1-2.002 1.774l-.04.028l-.012.008l-.004.003h-.002zM16.75 16h2.5v2h-2.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="content ion-padding-horizontal">
          <p>
            Breaking News: Fire Erupts in Buea, Cameroon Buea, Cameroon -
            [Current Date] - A fire broke out earlier today in Buea, Cameroon.
            Details are still emerging, but initial reports indicate the blaze
            began in [Location of fire, e.g., a residential building, a market,
            etc.] located in the [Area of Buea, e.g., central district,
            commercial area] district. Emergency responders are currently on the
            scene battling the flames and evacuating residents from the
            surrounding area. The cause of the fire is unknown at this time, and
            there are no confirmed reports of injuries or casualties.
            <br />
            <br />
            Here's what we know so far:
            <br />
            <br />
            The fire began at approximately [Time of fire] in [Location of
            fire]. The extent of the damage is still being assessed.
            Firefighters are working to contain the blaze and prevent it from
            spreading. Local authorities are urging residents to avoid the area
            and follow the instructions of emergency personnel.
            <br />
            <br />
            We will continue to update this story as more information becomes
            available. Here are some additional details we are following:
            <br />
            <br />
            Whether the fire has been contained. The cause of the fire, if it
            has been determined. Any injuries or casualties resulting from the
            fire. The extent of the damage to property.
            <br />
            <br />
            If you have any information about this fire, please contact local
            authorities.
            <br />
            <br />
            <br />
            Stay safe, Buea!
          </p>
        </div>
      
        <div className="confirm-disaster">
          <h5>Confirm  Disaster Occurrence:</h5>
          <div className="btn-right-aligned">
            <button className="cancel" style={{width: '100%'}}>Reject</button>
            <button style={{width: '100%'}}
              onClick={() => {
                router.push('/responder/alerts/');
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ResponderValidateDisaster;
