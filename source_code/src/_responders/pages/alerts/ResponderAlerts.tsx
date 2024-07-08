import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import '../../../_citizens/pages/Alerts/Alerts.css';
import './Alerts.css';
import BackBtn from '../../../components/HeaderBack';
import plus from '../../../assets/icons/plus.svg';
import fire from '../../../assets/icons/fire.svg'
import tornado from '../../../assets/icons/tornado.svg'
import { collection, onSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const ResponderAlerts: React.FC = () => {
  const router = useIonRouter();
  const [segment, setCurrentSegment] = useState('pending');

  const [reportedDisasters, setReportedDisasters] = useState([]);


  useEffect(() => {
    const disastersCollection = collection(db, "reported-disasters");

    const unsubscribe = onSnapshot(
      disastersCollection,
      (snapshot) => {
        const disastersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) ;
        setReportedDisasters(disastersData);
        console.log(disastersData);
      },
      (error) => {
        console.error("Error fetching reported disasters:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const [detected, setDetected] = useState(null);

  useEffect(() => {
    async function FetchDetected() {
      try {
        const url = 'https://eonet.gsfc.nasa.gov/api/v3/events/geojson?limit=5';
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setDetected(data.features);

        return;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    FetchDetected();
  }, []);

  function handleSegment(event: CustomEvent) {
    setCurrentSegment(event.detail.value);
  }
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <BackBtn title="Alerts" />
        <IonToolbar>
          <IonSegment mode="md" value="pending" onIonChange={handleSegment}>
            <IonSegmentButton value="pending">
              <IonLabel>Pending</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="reported">
              <IonLabel>Reported</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="detected">
              <IonLabel>Detected</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div
          className="add-alert"
          onClick={() => {
            router.push('/responder/alerts/new');
          }}
        >
          <IonIcon icon={plus} />
        </div>

        {segment === 'pending' ? (
          <div className="pending-container alerts-container">
            <div className="alert-box">
              <div className="status-time">
                <span className="status pending">Pending</span>{' '}
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
                Pending Fire reported in the vicinity of Mile 17. Evacuation
                underway for areas within the red zone on the map. Firefighters
                are on the scene.
              </p>
              <div className="alerts-btn-container">
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
                <button
                  onClick={() => {
                    router.push('/responder/alerts/validate');
                  }}
                  className="btn-link"
                >
                  <span>See More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1e7fdb"
                      d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert-box">
              <div className="status-time">
                <span className="status pending">Pending</span>{' '}
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
                Pending Fire reported in the vicinity of Mile 17. Evacuation
                underway for areas within the red zone on the map. Firefighters
                are on the scene.
              </p>
              <div className="alerts-btn-container">
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
                <button
                  onClick={() => {
                    router.push('/responder/alerts/validate');
                  }}
                  className="btn-link"
                >
                  <span>See More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1e7fdb"
                      d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : segment === 'reported' ? (
          <div className="reported-container alerts-container">
            <div className="alert-box">
              <div className="status-time">
                <span className="status ongoing">Ongoing</span>{' '}
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
                Reported Fire reported in the vicinity of Mile 17. Evacuation
                underway for areas within the red zone on the map. Firefighters
                are on the scene.
              </p>
              <div className="alerts-btn-container">
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
                <button
                  onClick={() => {
                    router.push('/responder/alerts/update');
                  }}
                  className="btn-link"
                >
                  <span>See More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1e7fdb"
                      d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert-box">
              <div className="status-time">
                <span className="status ongoing">Ongoing</span>{' '}
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
                Reported Fire reported in the vicinity of Mile 17. Evacuation
                underway for areas within the red zone on the map. Firefighters
                are on the scene.
              </p>
              <div className="alerts-btn-container">
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
                <button
                  onClick={() => {
                    router.push('/responder/alerts/update');
                  }}
                  className="btn-link"
                >
                  <span>See More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1e7fdb"
                      d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : segment === 'detected' ? (
          detected && (
            <div className="detected-container alerts-container">
              {
                detected.map((disaster, index) => {
                  return (
                    <div className="alert-box">
                <div className="status-time">
                  <span className="status occurred">Occured</span>{' '}
                  <p className="time">5 mins ago</p>
                </div>
                <div className="disaster-img-type">
                  <div className="icon">
                   <img src={disaster.properties.categories[0].title == 'Wildfires' ? fire : tornado} />
                  </div>
                  <div>
                    <h3>{disaster.properties.categories[0].title}</h3>
                    <p>Douala, Cameroon</p>
                  </div>
                </div>
                <p className="description">
                  {disaster.properties.description || disaster.properties.title}
                </p>
                <div className="alerts-btn-container">
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
              </div>
                  )
                })
              }
            </div>
          )
        ) : (
          <p>No Disaster Found</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ResponderAlerts;
