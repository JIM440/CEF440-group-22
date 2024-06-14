import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import './Alerts.css';
import BackBtn from '../ResponderPanel/HeaderBack';

const Alerts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <BackBtn title='Alerts' />

        <IonToolbar color="clear">
          <IonSegment mode="ios" color="light" scrollable={true} value="all">
            <IonSegmentButton value="all">
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="floods">
              <IonLabel>Floods</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="fire">
              <IonLabel>Fire</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="earthquake">
              <IonLabel>Earthquake</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="landslides">
              <IonLabel>Landslides</IonLabel>
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
        
        <div className="alerts-container">
          <div className="alert-box">
            <div className="status-time">
              <span className="status ongoing">Ongoing</span>
              <p className="time">5 mins ago</p>
            </div>
            <div className="disaster-img-type">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#1e7fdb"
                    fill-rule="evenodd"
                    d="m6.452 6.864l1.13-2.173a32 32 0 0 1 1.872-3.095c.964 1.045 1.906 2.3 2.612 3.622c.748 1.402 1.184 2.789 1.184 4.032c0 1.427-.904 2.83-2.153 3.613q.088-.398.09-.863c0-1.255-.674-2.336-1.143-2.963a9 9 0 0 0-1.01-1.125l-.024-.02l-.008-.008L9 7.88l-.001-.001C8.996 7.88 8.996 7.878 8 9a7 7 0 0 0 .984 1.133c.37.534.704 1.2.704 1.867c0 .77-.313 1.276-.618 1.587c-.159.162-.279.38-.314.6a.8.8 0 0 0 0 .264a.7.7 0 0 0 .06.182c.113.225.343.37.594.35c2.836-.235 5.34-2.87 5.34-5.733c0-3.149-2.177-6.538-4.357-8.845A1.3 1.3 0 0 0 9.435 0A1.32 1.32 0 0 0 8.35.556A34 34 0 0 0 6.25 4l-.955-1.337a.986.986 0 0 0-1.589-.018C2.62 4.123 1.25 6.249 1.25 9.25c0 2.863 2.504 5.498 5.34 5.733c.25.02.481-.125.593-.35a.7.7 0 0 0 .06-.182a.8.8 0 0 0 .001-.263a1.15 1.15 0 0 0-.314-.601c-.305-.31-.617-.817-.617-1.587c0-.666.333-1.333.703-1.867l.09-.128C7.544 9.405 8 9 8 9l-.997-1.12H7l-.003.003l-.008.007l-.024.021l-.073.07a9 9 0 0 0-.937 1.056c-.47.626-1.143 1.707-1.143 2.962c0 .31.033.598.09.863C3.654 12.08 2.75 10.677 2.75 9.25c0-2.171.847-3.812 1.745-5.126l.534.748zM8 9l.997-1.121L8 6.993l-.997.886z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3>Fire</h3>
                <p>Douala, Cameroon</p>
              </div>
            </div>
            <p className="description">
              Fire reported in the vicinity of Mile 17. Evacuation underway for
              areas within the red zone on the map. Firefighters are on the
              scene.
            </p>
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

          <div className="alert-box">
            <div className="status-time">
              <span className="status occured">Occured</span>
              <p className="time">3 days ago</p>
            </div>
            <div className="disaster-img-type">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1e7fdb"
                    d="M9.025 22q-.35 0-.612-.187T8.05 21.3L5.5 13H2v-2h4.25q.325 0 .588.188t.362.512l1.65 5.375L12.025 2.8q.075-.35.35-.575T13 2t.625.213t.35.562l2.175 9.4l1.4-4.475q.1-.325.362-.512T18.5 7t.575.175t.375.475L20.7 11H22v2h-2q-.325 0-.575-.175t-.375-.475l-.475-1.275L16.95 16.3q-.1.325-.375.525T15.95 17t-.6-.238t-.325-.537L13 7.525l-3.025 13.7q-.075.35-.337.55T9.025 22"
                  />
                </svg>
              </div>
              <div>
                <h3>Earthquake</h3>
                <p>Buea, Cameroon</p>
              </div>
            </div>
            <p className="description">
              An earthquake of 7.0 magnitude struck Buea. There are no reports
              yet of widespread damage or casualties. However, emergency
              services are assessing the situation.
            </p>
            <div className="map-view">
              <span>View In Map</span>
              <div className="alerts-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Alerts;
