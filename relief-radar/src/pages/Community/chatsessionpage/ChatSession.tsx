import React from "react";
import "./ChatSession.css";
import { useHistory } from "react-router";

import chevronLeft from "../../../assets/icons/IonChevronLeft.svg";
import {
  IonHeader,
  IonToolbar,
  IonInput,
  IonPage,
  IonContent,
  IonFooter,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
} from "@ionic/react";

import phone from "../../../assets/icons/phone.svg";
import microphone from "../../../assets/icons/microphone.svg";
import camera from "../../../assets/icons/camera.svg";

function ChatSession() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <IonPage>
      <IonHeader class="ion-no-border" className="chatbot-header-container">
        <IonToolbar>
          <div className="chatbot-header-wrapper">
            <div className="back-part" onClick={goBack}>
              <IonIcon className="chatbot-header-icon" src={chevronLeft} />
              <span>Back</span>
            </div>
            <div className="chatbot-header-text">
              <span>Fire Miltigation Session</span>
            </div>
            <div className="header-last-part"></div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="chat-session-ioncontent">
          <div className="host-container">
            <div className="nm-initials">MK</div>
            <h4>Host</h4>
          </div>

          <div className="chat-members">
            <div className="each-member">
              <div className="nm-initials one">
                JM
              </div>
            </div>
            <div className="each-member">
              <div className="nm-initials two">
                OD
              </div>
            </div>
            <div className="each-member " >
              <div className="nm-initials three">
                JC
              </div>
            </div>
            <div className="each-member ">
              <div className="nm-initials four">
              KM
              </div>
            </div>
          </div>
        </div>
      </IonContent>

      <IonFooter className="footer-chatsession">
        <IonToolbar>
          <div className="chatsession-icons">
            <div className="chat-icon">
              <div className="camera">
                <IonIcon src={camera} className="icon" />
              </div>
            </div>
            <div className="chat-icon">
              <div className="microphone">
                <IonIcon src={microphone} className="icon" />
              </div>
            </div>
            <div className="chat-icon">
              <div className="phone">
                <IonIcon src={phone} className="icon" />
              </div>
            </div>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default ChatSession;
